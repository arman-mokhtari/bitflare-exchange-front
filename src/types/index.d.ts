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
  userId: string;
  data: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
    enteredCaptcha: string;
  };
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

export interface ProductDetail {
  title: string;
  quantity: number;
}

export interface Cart {
  productDetail: ProductDetail[];
  payDetail: {
    totalPrice: number;
  };
}

export interface UserPayment {
  invoiceNumber: string;
  cart: Cart;
  status: string;
}

export interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
}

export type AddToCartProps = {
  productId: string;
  quantity: number;
};

export type PanelAsideProps = {
  value: string;
  icon: any;
  text: string;
  tooltipText: string;
};
