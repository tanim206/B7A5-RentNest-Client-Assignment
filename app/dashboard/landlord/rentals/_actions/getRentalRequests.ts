// "use server";

// import { cookies } from "next/headers";

// export const getRentalRequests = async () => {
//   const cookieStore = await cookies();

//   const token = cookieStore.get("accessToken")?.value;

//   const res = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     cache: "no-store",
//   });

//   return res.json();
// };
