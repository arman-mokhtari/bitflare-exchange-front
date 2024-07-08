import { RequestData, ResetPasswordData } from "@/types";
import http from "../httpService";

export async function sendRequest(data: RequestData): Promise<any> {
  return http.post("/auth/request-reset", data).then(({ data }) => data.data);
}

export async function resetPassword({
  token,
  data,
}: {
  token: string;
  data: ResetPasswordData;
}): Promise<any> {
  return http
    .post(`/auth/reset-password/${token}`, data)
    .then(({ data }) => data.data);
}

export async function getIsValidate(token: string): Promise<any> {
  return http.get(`/auth/validation/${token}`).then(({ data }) => data.data);
}

export async function getResetPasswordCaptcha(): Promise<any> {
  return http.get("/auth/forget-password/captcha");
}
