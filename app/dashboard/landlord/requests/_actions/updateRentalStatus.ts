"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const updateRentalStatus = async (
  id: string,
  status: "APPROVED" | "REJECTED",
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/requests/${id}`,
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

  revalidatePath("/dashboard/landlord/requests");

  return res.json();
};
