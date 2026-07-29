"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { registerActions } from "../_actions/authActions";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, action, pending] = useActionState(registerActions, null);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Register Successfully");
    } else {
      toast.error(state.message || "Registration Failed, Please try again");
    }
  }, [state]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100">
          <form action={action} className="space-y-5">
            {/* Header */}
            <div className="space-y-1 text-center mb-6">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-slate-500">Enter your details below</p>
            </div>

            {/* Name Field */}
            <div className="space-y-1.5">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-slate-700"
              >
                Full Name
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  disabled={pending}
                  className="w-full bg-white border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-slate-700"
              >
                Email address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  disabled={pending}
                  className="w-full bg-white border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  disabled={pending}
                  className="pr-10 w-full bg-white border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
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

            {/* Role - Radio Input Options */}
            <div className="space-y-2 pt-1">
              <Label className="text-sm font-medium text-slate-700">
                Select Your Role
              </Label>

              <div className="grid grid-cols-2 gap-3">
                {/* User Radio Input */}
                <label className="flex items-center justify-between p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-all has-[:checked]:border-black has-[:checked]:bg-slate-50">
                  <span className="text-sm font-medium text-slate-800">
                    Tenant
                  </span>
                  <input
                    type="radio"
                    name="role"
                    value="TENANT"
                    defaultChecked
                    disabled={pending}
                    className="h-4 w-4 accent-black cursor-pointer"
                  />
                </label>

                {/* Female Chatter Radio Input */}
                <label className="flex items-center justify-between p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-all has-[:checked]:border-black has-[:checked]:bg-slate-50">
                  <span className="text-sm font-medium text-slate-800">
                    Lanlord
                  </span>
                  <input
                    type="radio"
                    name="role"
                    value="LANDLORD"
                    disabled={pending}
                    className="h-4 w-4 accent-black cursor-pointer"
                  />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={pending}
              className="w-full py-2.5 bg-black hover:bg-slate-800 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-slate-200 flex items-center justify-center gap-2 mt-4"
            >
              {pending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing up...
                </>
              ) : (
                "Sign up"
              )}
            </Button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-slate-500 pt-2">
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="text-black font-semibold hover:underline transition-colors"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
