"use server";

export const getMyProperties = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties`, {
    cache: "no-store",
  });

  return await res.json();
};
