"use server";

import { cookies } from "next/headers";

export const createPayment = async (rentalRequestId: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  const backendUrl = process.env.BACKEND_API_URL;

  if (!backendUrl) {
    return {
      success: false,
      message: "Backend URL is not configured.",
    };
  }

  const res = await fetch(`${backendUrl}/api/payments/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Cookie: `accessToken=${token}`,
    },
    body: JSON.stringify({ rentalRequestId }),
    cache: "no-store",
  });

  const result = await res.json();

  console.log("Payment Response:", result);

  return {
    success: result?.success ?? res.ok,
    message:
      result?.message ||
      (res.ok ? "Payment request sent." : "Failed to create payment."),
    data: result?.data ?? null,
  };
};
