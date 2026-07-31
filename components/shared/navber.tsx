"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LayoutDashboard, LogOut, Settings, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout } from "@/service/logout";
import { IProfile } from "@/lib/types";
import { Button } from "../ui/button";

// Navigation items configuration
const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// User menu items configuration
const userMenuItems = [
  { label: "Dashboard", icon: LayoutDashboard, action: "dashboard" },
  { label: "Profile", icon: User, action: "profile" },
  { label: "Settings", icon: Settings, action: "settings" },
];

type NavbarProps = {
  user: IProfile;
};

export function Navbar({ user }: NavbarProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleUserMenuAction = async (action: string) => {
    switch (action) {
      case "dashboard": {
        const role = user?.data?.result?.role;
        if (role === "TENANT") {
          router.push("/dashboard/tenant");
        } else if (role === "LANDLORD") {
          router.push("/dashboard/landlord");
        } else if (role === "ADMIN") {
          router.push("/dashboard/admin");
        } else {
          router.push("/dashboard");
        }
        break;
      }
      case "profile":
        router.push("/dashboard/profile");
        break;
      case "settings":
        router.push("/settings");
        break;
      case "logout":
        await logout();
        router.push("/");
        break;
      default:
        break;
    }
  };

  return (
    <nav className="border-b bg-white text-black border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-bold text-primary">rentNest</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Action Section (User Profile or Auth Buttons) */}
          <div className="hidden md:flex md:items-center md:gap-3">
            {user?.success ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="cursor-pointer outline-none rounded-full p-1 hover:bg-slate-100 transition">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">
                        {user.data?.result?.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user.data?.result?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {userMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem
                        key={item.action}
                        onClick={() => handleUserMenuAction(item.action)}
                        className="cursor-pointer"
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        <span>{item.label}</span>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => handleUserMenuAction("logout")}
                    className="cursor-pointer text-red-600 focus:text-red-600"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/auth/login">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm">Sign up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-black text-base font-medium py-1.5 px-2 rounded-md hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            {user?.success ? (
              <div className="space-y-2">
                <div className="px-2 py-1">
                  <p className="text-sm font-semibold">
                    {user.data?.result?.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {user.data?.result?.email}
                  </p>
                </div>
                {userMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.action}
                      onClick={() => {
                        handleUserMenuAction(item.action);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2 text-sm text-slate-700 py-2 px-2 rounded-md hover:bg-slate-50"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                <button
                  onClick={() => {
                    handleUserMenuAction("logout");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 text-sm text-red-600 py-2 px-2 rounded-md hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log out</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/auth/login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
