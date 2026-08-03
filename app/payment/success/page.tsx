import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50/50 p-4 sm:p-6">
      <div className="max-w-xl w-full">
        <Card className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle Top Gradient Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />

          {/* Success Icon Animation Wrapper */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-emerald-100 animate-ping opacity-75" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 shadow-sm">
                <CheckCircle2 className="h-10 w-10" />
              </div>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="mt-6 text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Payment Successful!
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Thank you for your payment. Your booking with{" "}
              <span className="font-semibold text-emerald-700">RentNest</span>{" "}
              is confirmed.
            </p>
          </div>

          {/* Next Steps Card */}
          <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-100 p-5 sm:p-6 text-left">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              What happens next?
            </div>

            <ul className="mt-3 space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>
                  Your rental request status has been updated to{" "}
                  <strong className="text-slate-800">Completed</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>
                  You can view and download your payment receipt from your
                  tenant dashboard.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>
                  Need assistance? Contact our 24/7 support team anytime.
                </span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-11 text-sm font-semibold shadow-sm transition"
            >
              <Link href="/" className="flex items-center justify-center gap-2">
                Go to Home
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
