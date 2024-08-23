import {
  getIsValidate,
  getResetPasswordCaptcha,
  resetPassword,
  sendRequest,
} from "@/services/auth/resetPassword";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useSendPasswordRequest = () => {
  return useMutation({ mutationFn: sendRequest });
};

export const useResetPassword = () => {
  return useMutation({ mutationFn: resetPassword });
};

export const useGetIsValidateToken = (token: string) =>
  useQuery({
    queryKey: ["validation", token],
    queryFn: () => getIsValidate(token),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetResetPasswordCaptcha = () =>
  useQuery({
    queryKey: ["get-reset-password-captcha"],
    queryFn: getResetPasswordCaptcha,
    retry: false,
    refetchOnWindowFocus: true,
  });
