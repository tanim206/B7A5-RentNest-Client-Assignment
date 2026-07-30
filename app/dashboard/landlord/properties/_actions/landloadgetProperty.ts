"use server";

import { cookies } from "next/headers";

export const getlandloardProperties = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  const role = cookieStore.get("role")?.value;

  // Only landlord can access
  if (!accessToken || role !== "LANDLORD") {
    return {
      success: false,
      message: "Unauthorized",
      data: {
        properties: [],
      },
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/landlord/properties`,
      {
        method: "GET",
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        cache: "no-store",
      },
    );

    const result = await res.json();

    return result;
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch properties",
      data: {
        properties: [],
      },
    };
  }
};
