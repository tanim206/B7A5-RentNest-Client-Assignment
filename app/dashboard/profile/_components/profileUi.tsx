"use client";

import {
  Mail,
  Phone,
  ShieldCheck,
  CalendarDays,
  User,
  Camera,
  Home,
  Clock,
  CheckCircle2,
  AlertOctagon,
  Building,
  Users,
  FileText,
  Edit,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IProfile } from "@/lib/types";

export default function ProfileUI({ profileData }: { profileData: IProfile }) {
  // Check if response is failed or user is not logged in
  if (!profileData?.success || !profileData?.data?.result) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">
          {profileData?.message || "Unable to fetch profile details."}
        </h2>
        <p className="text-slate-500 mt-2">
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  const user = profileData.data.result;
  const isBanned = user.activeStatus === "BANNED";

  // Format Created At Date
  const formattedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "N/A";

  // Dynamic Role Badge Styles
  const getRoleBadgeStyle = (role: string) => {
    switch (role?.toUpperCase()) {
      case "ADMIN":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "LANDLORD":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "TENANT":
      default:
        return "bg-blue-50 text-blue-700 border-blue-200";
    }
  };

  // Dynamic Stats configuration based on User Role
  const getRoleStats = (role: string) => {
    const formattedRole = role?.toUpperCase();

    if (formattedRole === "LANDLORD") {
      return [
        {
          label: "Properties Listed",
          value: "08",
          icon: Building,
          color: "text-indigo-600",
          bg: "bg-indigo-50",
        },
        {
          label: "Active Leases",
          value: "05",
          icon: CheckCircle2,
          color: "text-emerald-600",
          bg: "bg-emerald-50",
        },
        {
          label: "Pending Actions",
          value: "03",
          icon: Clock,
          color: "text-amber-500",
          bg: "bg-amber-50",
        },
      ];
    }

    if (formattedRole === "ADMIN") {
      return [
        {
          label: "Total Users",
          value: "120",
          icon: Users,
          color: "text-purple-600",
          bg: "bg-purple-50",
        },
        {
          label: "Active Listings",
          value: "45",
          icon: Home,
          color: "text-emerald-600",
          bg: "bg-emerald-50",
        },
        {
          label: "Reports Pending",
          value: "02",
          icon: FileText,
          color: "text-amber-500",
          bg: "bg-amber-50",
        },
      ];
    }

    // Default: TENANT
    return [
      {
        label: "Rental Requests",
        value: "12",
        icon: Home,
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        label: "Approved Rentals",
        value: "04",
        icon: CheckCircle2,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        label: "Pending Requests",
        value: "02",
        icon: Clock,
        color: "text-amber-500",
        bg: "bg-amber-50",
      },
    ];
  };

  const stats = getRoleStats(user.role);

  return (
    <section className="container mx-auto max-w-4xl px-4 py-8 space-y-6">
      {/* Header & Main Info Card */}
      <Card className="border border-slate-200/80 shadow-sm rounded-2xl bg-white overflow-hidden">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            {/* Left Side: Avatar + Names */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 text-center sm:text-left">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-slate-100 bg-slate-50 shadow-sm overflow-hidden shrink-0">
                {user.profileImage ? (
                  <Image
                    src={user.profileImage}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <User className="h-10 w-10 text-slate-400" />
                )}
                <button
                  aria-label="Change Avatar"
                  className="absolute bottom-0 inset-x-0 bg-slate-900/60 hover:bg-slate-900/80 text-white py-1 flex justify-center transition"
                >
                  <Camera className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {user.name}
                  </h1>
                  <Badge
                    variant="outline"
                    className={`font-semibold text-xs uppercase px-2.5 py-0.5 ${getRoleBadgeStyle(
                      user.role,
                    )}`}
                  >
                    {user.role}
                  </Badge>
                </div>

                <p className="text-sm text-slate-500 font-medium">
                  {user.email}
                </p>

                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                  {isBanned ? (
                    <Badge
                      variant="outline"
                      className="bg-red-50 text-red-700 border-red-200 text-xs font-medium"
                    >
                      Banned
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs font-medium"
                    >
                      Active Account
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side: Action Button */}
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm rounded-xl px-4 py-2 text-sm gap-2 w-full sm:w-auto">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

    
      {/* Information Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Information */}
        <Card className="border border-slate-200/80 shadow-sm rounded-2xl bg-white">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Personal Information
            </h2>

            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600">
                <User size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Full Name</p>
                <p className="text-sm font-semibold text-slate-800">
                  {user.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">
                  Email Address
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">
                  Phone Number
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  {user.phone ? user.phone : "Not Provided"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Details */}
        <Card className="border border-slate-200/80 shadow-sm rounded-2xl bg-white">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Account Details
            </h2>

            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">
                  System Role
                </p>
                <p className="text-sm font-semibold text-slate-800 capitalize">
                  {user.role?.toLowerCase()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div
                className={`p-2.5 rounded-xl ${
                  isBanned
                    ? "bg-red-50 text-red-600"
                    : "bg-emerald-50 text-emerald-600"
                }`}
              >
                {isBanned ? (
                  <AlertOctagon size={18} />
                ) : (
                  <CheckCircle2 size={18} />
                )}
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">
                  Account Status
                </p>
                <p
                  className={`text-sm font-semibold ${
                    isBanned ? "text-red-600" : "text-emerald-600"
                  }`}
                >
                  {isBanned ? "Suspended / Banned" : "Active & Clear"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600">
                <CalendarDays size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">
                  Member Since
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  {formattedDate}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
