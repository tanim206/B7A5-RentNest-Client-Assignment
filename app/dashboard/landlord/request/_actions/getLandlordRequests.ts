"use server";

import { cookies } from "next/headers";

export const getLandlordRequests = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/requests`,
    {
      headers: {
        Cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    },
  );

  return res.json();
};
