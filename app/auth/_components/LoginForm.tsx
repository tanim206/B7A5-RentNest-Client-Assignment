"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginActions } from "../_actions/authActions";
import {
  Eye,
  EyeOff,
  Loader2,
  LogIn,
  Sparkles,
  Shield,
  Mail,
  Lock,
  Home,
} from "lucide-react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, action, pending] = useActionState(loginActions, null);
  //   const router = useRouter();

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Login Successfully");
    } else if (!state.success) {
      toast.error(state.message || "Login Failed, Please try again");
    }
  }, [state]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100">
          {/* Logo / Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
          </div>

          <form action={action} className="space-y-6">
            {/* Header */}
            <div className="space-y-1 text-center">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Sign in
              </h1>
              <p className="text-sm text-slate-500">Email Address</p>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700"
              >
                Email address
              </label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  disabled={pending}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  disabled={pending}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Brand Text */}
            <div className="text-center">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-black">rentnest</span>
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Your properties in one nest.
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={pending}
              className="w-full py-2.5 bg-black hover:bg-slate-800 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
            >
              {pending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <a
                type="button"
                href="/auth/register"
                className="text-black font-medium hover:underline transition-colors"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
