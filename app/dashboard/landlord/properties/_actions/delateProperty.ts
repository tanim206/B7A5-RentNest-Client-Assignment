"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function deletePropertyAction(formData: FormData) {
  const id = formData.get("id") as string;

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/properties/${id}`,
    {
      method: "DELETE",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to delete property");
  }

  revalidatePath("/dashboard/landlord/properties");
  revalidatePath("/properties");
}
