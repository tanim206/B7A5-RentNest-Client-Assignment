"use server";

import { cookies } from "next/headers";

export const createRentalRequest = async (propertyId: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      propertieId: propertyId,
    }),
  });

  return res.json();
};
