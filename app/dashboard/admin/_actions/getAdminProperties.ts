"use server";

import { cookies } from "next/headers";

export const getAdminProperties = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
      data: { properties: [] },
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/admin/properties`,
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
      message: "Failed to fetch properties",
      data: { properties: [] },
    };
  }
};
