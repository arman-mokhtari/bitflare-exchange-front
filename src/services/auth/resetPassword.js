import http from "../httpService";

export async function sendRequest(data) {
  return http.post("/auth/request-reset", data).then(({ data }) => data.data);
}

export async function resetPassword({ token, data }) {
  return http
    .post(`/auth/reset-password/${token}`, data)
    .then(({ data }) => data.data);
}

export async function getIsValidate(token) {
  return http.get(`/auth/validation/${token}`).then(({ data }) => data.data);
}

export async function getResetPasswordCaptcha() {
  return http.get("/auth/forget-password/captcha");
}
