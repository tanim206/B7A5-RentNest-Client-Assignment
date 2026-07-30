"use server";

import { ActionState } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createPropertyAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const payload = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    location: formData.get("location"),
    propertyType: formData.get("propertyType"),
    amenities:
      formData
        .get("amenities")
        ?.toString()
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean) || [],
  };

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/landlord/properties`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: `accessToken=${accessToken}`,
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Failed to create property",
      };
    }

    revalidatePath("/dashboard/landlord/properties");
    revalidatePath("/properties");

    return {
      success: true,
      message: "Property created successfully",
      data: result.data,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
