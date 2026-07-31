import { getMe } from "@/service/getMe"; // আপনার getMe অ্যাকশন ফাইলের পাথ দিন

import { Suspense } from "react";
import ProfileSkeleton from "./_components/profileSkeleton";
import ProfileUI from "./_components/profileUi";

export default async function ProfilePage() {
  const profileData = await getMe();

  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileUI profileData={profileData} />
    </Suspense>
  );
}
