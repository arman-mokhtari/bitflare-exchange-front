import http from "../httpService";

export async function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export async function getResendOtp(data) {
  return http.post("/user/get-resend-otp", data).then(({ data }) => data.data);
}

export async function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export async function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export async function authenticateUser(data) {
  return http.post("/user/authenticate", data).then(({ data }) => data.data);
}

export async function changeUserPassword({ userId, data }) {
  return http
    .patch(`/user/password-change/${userId}`, data)
    .then(({ data }) => data.data);
}

export async function getUserProfile() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export async function updateProfile(data) {
  return http.patch("/user/update", data).then(({ data }) => data.data);
}

export async function logout() {
  return http.post("/user/logout");
}

export async function getAllUsers() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export async function getUserById(id) {
  return http.get(`/admin/user/profile/${id}`).then(({ data }) => data.data);
}

export async function getOneUserById(id) {
  return http.get(`/user/profile/id/${id}`).then(({ data }) => data.data);
}

export async function getUserCaptcha() {
  return http.get("/user/register/captcha");
}
