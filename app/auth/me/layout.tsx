import Footer from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navber";
import { getMe } from "@/service/getMe";

import React from "react";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div>
      <Navbar user={user} />
      {children}

      <Footer />
    </div>
  );
};

export default ProfileLayout;
