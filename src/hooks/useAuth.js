import {
  changeUserPassword,
  authenticateUser,
  getAllUsers,
  getOneUserById,
  getUserById,
  getUserProfile,
  getUserCaptcha,
  getOtp,
  checkOtp,
  getResendOtp,
} from "@/services/auth/authServices";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useAuthenticateUser = () => {
  return useMutation({ mutationFn: authenticateUser });
};

export const useChangeUserPassword = () => {
  return useMutation({ mutationFn: changeUserPassword });
};

export const useGetOtp = () => {
  return useMutation({
    mutationFn: getOtp,
  });
};

export const useGetResendOtp = () => {
  return useMutation({
    mutationFn: getResendOtp,
  });
};

export const useCheckOtp = () => {
  return useMutation({
    mutationFn: checkOtp,
  });
};

export const useGetUser = () =>
  useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfile,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetUsers = () =>
  useQuery({
    queryKey: ["get-users"],
    queryFn: getAllUsers,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetUserById = (id) =>
  useQuery({
    queryKey: ["get-user-id", id],
    queryFn: () => getUserById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetOneUserById = (id) =>
  useQuery({
    queryKey: ["get-one-user-id", id],
    queryFn: () => getOneUserById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetUserCaptcha = () =>
  useQuery({
    queryKey: ["get-user-captcha"],
    queryFn: getUserCaptcha,
    retry: false,
    refetchOnWindowFocus: true,
  });
