"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginActions } from "../_actions/authActions";
import { Eye, EyeOff, Loader2, Home } from "lucide-react";
import Link from "next/link";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, action, pending] = useActionState(loginActions, null);
  
  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Login Successfully");
    } else if (!state.success) {
      toast.error(state.message || "Login Failed, Please try again");
    }
  }, [state]);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#f8fafc]">
      {/* Left Banner Section (Sky Blue Gradient) */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-sky-600 via-sky-500 to-blue-600 p-8 md:p-12 flex flex-col justify-center items-center text-white min-h-[280px] md:min-h-screen">
        <div className="flex flex-col items-center text-center space-y-3 max-w-md">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
              <Home className="w-7 h-7" />
            </div>
            <span className="text-3xl md:text-4xl font-extrabold tracking-tight">
              rent<span className="font-light">nest</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl font-normal text-sky-100">
            Your properties in one nest.
          </p>
        </div>
      </div>

      {/* Right Form Container */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 relative">
        <div className="w-full max-w-md space-y-6">
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 sm:p-10 border border-slate-100">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
              Sign in
            </h1>

            <form action={action} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-slate-500 tracking-wide"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    required
                    disabled={pending}
                    className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200/80 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold text-slate-500 tracking-wide"
                >
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    disabled={pending}
                    className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200/80 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    className="text-xs font-medium text-sky-600 hover:text-sky-700 hover:underline transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={pending}
                className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 mt-2"
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
            </form>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <a
              href="/auth/register"
              className="text-sky-600 font-semibold hover:underline transition-colors"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
