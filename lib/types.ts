import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type LoginState = {
  success: true;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
  };
};
export type RegisterState = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    result: User;
  };
};

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
  role: "TENANT" | "LANDLORD" | "ADMIN";
  activeStatus: "UNBANNED" | "BANNED";
}

export type IProfile = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    result: {
      id: string;
      name: string;
      email: string;
      phone: string | null;
      profileImage: string | null;
      role: "TENANT" | "LANDLORD" | "ADMIN";
      activeStatus: "UNBANNED" | "BANNED";
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type ISidebarItem = {
  label: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export type NavbarProps = {
  user: IProfile;
};

export interface IProperty {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  propertyType: string;
  availabilityStatus: "AVAILABLE" | "BOOKED";
  amenities: string[];
  image?: string[];
  landlordId: string;
  categoryId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ActionState {
  success: boolean;
  message: string;
  data?: any;
}
