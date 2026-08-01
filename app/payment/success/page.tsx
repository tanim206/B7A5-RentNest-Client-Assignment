import React from "react";

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="max-w-2xl w-full rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-emerald-700">
          Payment Successful
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Your payment has been completed successfully. Thank you for booking
          with RentNest.
        </p>
        <div className="mt-8 rounded-2xl bg-emerald-50 p-6 text-emerald-800">
          <p className="font-semibold">What happens next?</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Your rental request will now move to the completed state.</li>
            <li>You can check your payment history in the tenant dashboard.</li>
            <li>If you need help, contact support from the dashboard.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
