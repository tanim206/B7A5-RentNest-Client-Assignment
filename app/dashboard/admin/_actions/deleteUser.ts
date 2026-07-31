"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const deleteUser = async (id: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/users/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  revalidatePath("/dashboard/admin/users");

  return res.json();
};