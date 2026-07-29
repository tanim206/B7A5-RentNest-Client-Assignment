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
