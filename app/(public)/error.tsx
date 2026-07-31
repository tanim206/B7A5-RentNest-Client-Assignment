"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { AlertCircle, RefreshCw, Home, Bug, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-8">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100 text-center">
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                <Bug className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Error Code */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full border border-red-200 mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-medium text-red-600">Error</span>
            {error.digest && (
              <span className="text-xs text-red-400 font-mono">
                #{error.digest}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Something went wrong!
          </h2>

          {/* Error Message */}
          <p className="mt-2 text-sm text-slate-500">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => unstable_retry()}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>

            <Link href="/">
              <Button
                variant="outline"
                className="w-full border-slate-200 hover:bg-slate-50 text-slate-700 font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go to Home
              </Button>
            </Link>
          </div>

          {/* Support Text */}
          <p className="mt-6 text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <Shield className="w-3 h-3" />
            If the problem persists, please contact support
          </p>
        </div>
      </div>
    </div>
  );
}
