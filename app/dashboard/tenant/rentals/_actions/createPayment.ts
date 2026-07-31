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

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/create`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rentalRequestId,
      }),
      cache: "no-store",
    }
  );

  const result = await res.json();

  console.log("Payment Response:", result);

  return result;
};