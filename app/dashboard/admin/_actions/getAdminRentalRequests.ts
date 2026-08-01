"use server";

import { cookies } from "next/headers";

export const getAdminRentalRequests = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
      data: [],
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/admin/rentals`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      },
    );

    return res.json();
  } catch {
    return {
      success: false,
      message: "Failed to fetch rental requests",
      data: [],
    };
  }
};
