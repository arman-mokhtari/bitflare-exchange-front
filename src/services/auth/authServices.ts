import {
  AuthenticateUserData,
  ChangePasswordData,
  CheckOtpData,
  CompleteProfileData,
  OtpData,
  UpdateProfileData,
} from "@/types";
import http from "../httpService";

export async function getOtp(data: OtpData): Promise<any> {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export async function getResendOtp(data: OtpData): Promise<any> {
  return http.post("/user/get-resend-otp", data).then(({ data }) => data.data);
}

export async function checkOtp(data: CheckOtpData): Promise<any> {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export async function completeProfile(data: CompleteProfileData): Promise<any> {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export async function authenticateUser(
  data: AuthenticateUserData
): Promise<any> {
  return http.post("/user/authenticate", data).then(({ data }) => data.data);
}

export async function changeUserPassword({
  userId,
  data,
}: {
  userId: string;
  data: ChangePasswordData;
}): Promise<any> {
  return http
    .patch(`/user/password-change/${userId}`, data)
    .then(({ data }) => data.data);
}

export async function getUserProfile(): Promise<any> {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export async function updateProfile(data: UpdateProfileData): Promise<any> {
  return http.patch("/user/update", data).then(({ data }) => data.data);
}

export async function logout(): Promise<any> {
  return http.post("/user/logout");
}

export async function getAllUsers(): Promise<any> {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export async function getUserById(id: string): Promise<any> {
  return http.get(`/admin/user/profile/${id}`).then(({ data }) => data.data);
}

export async function getOneUserById(id: string): Promise<any> {
  return http.get(`/user/profile/id/${id}`).then(({ data }) => data.data);
}

export async function getUserCaptcha(): Promise<any> {
  return http.get("/user/register/captcha");
}
