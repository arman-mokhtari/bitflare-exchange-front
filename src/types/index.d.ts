export interface RequestData {
  email: string;
  enteredCaptcha?: string;
}

export interface ResetPasswordData {
  password: string;
  confirmPassword: string;
}

export interface OtpData {
  email?: string;
  phoneNumber?: string;
  enteredCaptcha?: string;
}

export interface CheckOtpData {
  otp: string;
  phoneNumber: string;
}

export interface CompleteProfileData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthenticateUserData {
  phoneNumber?: string;
  email?: string;
  password: string;
  enteredCaptcha?: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

export interface UpdateProfileData {
  name?: string;
  age?: number;
}

export type MyCurrency = {
  _id: string;
  quantity: number;
  productId: string;
  title: string;
  acronym: string;
  imageLink: string;
  createdAt: string;
  updatedAt: string;
  payments: any[];
};
