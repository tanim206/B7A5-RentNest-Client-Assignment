"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const updateUserStatus = async (
  id: string,
  status: "BANNED" | "UNBANNED"
) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/users/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activeStatus: status,
      }),
    }
  );

  revalidatePath("/dashboard/admin/users");

  return res.json();
};