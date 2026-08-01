import React from "react";

export default function PaymentCancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="max-w-2xl w-full rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-rose-600">Payment Cancelled</h1>
        <p className="mt-4 text-lg text-slate-600">
          Your payment was not completed. You can try again from your tenant
          dashboard.
        </p>
        <div className="mt-8 rounded-2xl bg-rose-50 p-6 text-rose-800">
          <p className="font-semibold">What to do next?</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Return to the rental request page and click Pay Now again.</li>
            <li>Make sure your Stripe payment details are correct.</li>
            <li>Contact support if you need assistance with payment.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
