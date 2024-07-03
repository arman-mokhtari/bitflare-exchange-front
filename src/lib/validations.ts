import { z } from "zod";
export const SendOtpFormSchema = z.object({
    phone: z.string({ message: "شماره موبایل خود را وارد کنید" }).min(11, {
      message: "شماره موبایل خود را وارد کنید",
    }),
    enteredCaptcha: z
      .string({ message: "تایید کنید ربات نیستید" })
      .min(5, {
        message: "اعتبارسنجی باید 5 کاراکتر باشد",
      })
      .max(5, {
        message: "اعتبارسنجی باید 5 کاراکتر باشد",
      }),
  });
  
export const CheckOtpFormSchema = z.object({
    pin: z.string().min(5, {
      message: "کد تایید باید 5 کاراکتر باشد",
    }),
  });

export const CompleteProfileSchema = z
  .object({
    name: z
      .string({ message: "نام خود را وارد کنید" })
      .min(3, {
        message: "نام حداقل باید 3 کاراکتر باشد",
      })
      .max(50, {
        message: "نام حداکثر باید 50 کاراکتر باشد",
      }),
    email: z
      .string({ message: "آدرس ایمیل خود را وارد کنید" })
      .min(1, { message: "آدرس ایمیل خود را وارد کنید" })
      .email("فرمت ایمیل صحیح نیست"),
    password: z
      .string({ message: "کلمه عبور را وارد کنید" })
      .min(5, {
        message: "کلمه عبور حداقل باید 5 کاراکتر باشد",
      })
      .max(50, {
        message: "کلمه عبور حداکثر باید 50 کاراکتر باشد",
      }),
    confirmPassword: z
      .string({ message: "تکرار کلمه عبور را وارد کنید" })
      .min(5, {
        message: "تکرار کلمه عبور حداقل باید 5 کاراکتر باشد",
      })
      .max(50, {
        message: "تکرار کلمه عبور حداکثر باید 50 کاراکتر باشد",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "کلمه عبور و تکرار آن باید مطابقت داشته باشند",
    path: ["confirmPassword"],
  });