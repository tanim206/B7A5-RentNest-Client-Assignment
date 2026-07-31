"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const updateRentalStatus = async (
  requestId: string,
  status: "APPROVED" | "REJECTED" | "PENDING",
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/requests/${requestId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${token}`,
      },
      body: JSON.stringify({
        rentalStatus: status,
      }),
    },
  );

  const result = await res.json();

  console.log(result);

  revalidatePath("/dashboard/landlord/requests");

  return result;
};
