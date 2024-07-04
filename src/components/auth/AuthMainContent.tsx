"use client";

import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { useCheckOtp, useGetOtp, useGetResendOtp } from "@/hooks/useAuth";
import { useToast } from "../ui/use-toast";
import CheckOtpForm from "./CheckOtpForm";
import SendOtpForm from "./SendOtpForm";

const RESEND_TIME = 60;

const AuthMainContent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(RESEND_TIME);
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const {
    data: otpResponse,
    isPending,
    mutateAsync: mutateGetOtp,
  } = useGetOtp();

  const { data: otpResendResponse, mutateAsync: mutateGetResendOtp } =
    useGetResendOtp();

  const { mutateAsync: mutateCheckOtp, isPending: isPendingOtp } =
    useCheckOtp();

  const phoneNumberHandler = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const captchaHandler = (e: any) => {
    setCaptcha(e.target.value);
  };

  const sendOtpHandler = async () => {
    try {
      const data = await mutateGetOtp({ phoneNumber, enteredCaptcha: captcha });
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast({
        title: data.message,
      });

      setIsSubmit(true);
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error: any) {
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });

      toast({
        title: error?.response?.data?.message || "خطایی رخ داده",
        variant: "destructive",
      });
    }
  };

  const sendResendOtpHandler = async () => {
    try {
      const data = await mutateGetResendOtp({ phoneNumber });
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast({
        title: data.message,
      });
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error: any) {
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast({
        title: error?.response?.data?.message,
        variant: "destructive",
      });
    }
  };

  const checkOtpHandler = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    try {
      const { message, user } = await mutateCheckOtp({ phoneNumber, otp });
      toast({
        title: message,
      });
      if (user.isActive) {
        router.push("/");
      } else {
        router.push("/complete-profile");
      }
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error: any) {
      toast({
        title: error?.response?.data?.message,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            value={phoneNumber}
            onChange={phoneNumberHandler}
            isPending={isPending}
            sendOtpHandler={sendOtpHandler}
            onChangeCaptcha={captchaHandler}
            isSubmit={isSubmit}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            setOtp={setOtp}
            otp={otp}
            onSubmit={checkOtpHandler}
            goBack={() => setStep((s) => s - 1)}
            time={time}
            onResendOtp={sendResendOtpHandler}
            otpResponse={otpResponse || otpResendResponse}
            isPending={isPendingOtp}
          />
        );
      default:
        return null;
    }
  };

  return renderSteps();
};
export default AuthMainContent;
