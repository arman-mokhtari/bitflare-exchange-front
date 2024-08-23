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

const emailValidation = z
  .string({ required_error: "ایمیل را وارد کنید" })
  .email({ message: "ایمیل معتبر نیست" });

const phoneValidation = z
  .string({ required_error: "شماره موبایل را وارد کنید" })
  .regex(/^0\d{10}$/, { message: "شماره موبایل معتبر نیست" });

export const SigninSchema = z
  .object({
    loginMethod: z.enum(["phone", "email"], {
      required_error: "یکی از دو گزینه شماره موبایل یا ایمیل را انتخاب کنید.",
    }),
    loginIdentifier: z.string(),
    password: z
      .string({ required_error: "کلمه عبور را وارد کنید" })
      .min(5, {
        message: "کلمه عبور حداقل باید 5 کاراکتر باشد",
      })
      .max(50, {
        message: "کلمه عبور حداکثر باید 50 کاراکتر باشد",
      }),
    enteredCaptcha: z
      .string({ required_error: "تایید کنید ربات نیستید" })
      .length(5, {
        message: "اعتبارسنجی باید 5 کاراکتر باشد",
      }),
  })
  .superRefine((data, ctx) => {
    if (data.loginMethod === "email") {
      if (!emailValidation.safeParse(data.loginIdentifier).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["loginIdentifier"],
          message: "ایمیل معتبر نیست",
        });
      }
    } else if (data.loginMethod === "phone") {
      if (!phoneValidation.safeParse(data.loginIdentifier).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["loginIdentifier"],
          message: "شماره موبایل معتبر نیست",
        });
      }
    }
  });

export const RequestResetPasswordSchema = z.object({
  email: z
    .string({ message: "آدرس ایمیل خود را وارد کنید" })
    .min(1, { message: "آدرس ایمیل خود را وارد کنید" })
    .email("فرمت ایمیل صحیح نیست"),
  enteredCaptcha: z
    .string({ message: "تایید کنید ربات نیستید" })
    .min(5, {
      message: "اعتبارسنجی باید 5 کاراکتر باشد",
    })
    .max(5, {
      message: "اعتبارسنجی باید 5 کاراکتر باشد",
    }),
});

export const ResetPassTokenSchema = z
  .object({
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

export const AddToCartSchema = z.object({
  productId: z.string({
    required_error: "لطفا یک ارز دیجیتال را انتخاب کنید!",
  }),
  quantity: z
    .number({
      message: "تعداد صحیح را وارد کنید!",
    })
    .min(50, {
      message: "تعداد باید بیشتر از 50 باشد!",
    }),
});

export const PaymentSchema = z.object({
  wallet: z.string().regex(/^[a-zA-Z0-9]{26,42}$/, "آدرس کیف پول معتبر نیست!"),
});

export const ProfileUpdateSchema = z.object({
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
  phoneNumber: z.string().optional(),
  biography: z.string().optional(),
  enteredCaptcha: z
    .string({ message: "تایید کنید ربات نیستید" })
    .min(5, {
      message: "اعتبارسنجی باید 5 کاراکتر باشد",
    })
    .max(5, {
      message: "اعتبارسنجی باید 5 کاراکتر باشد",
    }),
});

export const UserPasswordUpdateSchema = z
  .object({
    currentPassword: z
      .string({ message: "کلمه عبور فعلی را وارد کنید" })
      .min(1, {
        message: "کلمه عبور فعلی را وارد کنید",
      }),
    newPassword: z
      .string({ message: "کلمه عبور را وارد کنید" })
      .min(5, {
        message: "کلمه عبور حداقل باید 5 کاراکتر باشد",
      })
      .max(50, {
        message: "کلمه عبور حداکثر باید 50 کاراکتر باشد",
      }),
    confirmNewPassword: z
      .string({ message: "تکرار کلمه عبور را وارد کنید" })
      .min(5, {
        message: "تکرار کلمه عبور حداقل باید 5 کاراکتر باشد",
      })
      .max(50, {
        message: "تکرار کلمه عبور حداکثر باید 50 کاراکتر باشد",
      }),
    enteredCaptcha: z
      .string({ message: "تایید کنید ربات نیستید" })
      .min(5, {
        message: "اعتبارسنجی باید 5 کاراکتر باشد",
      })
      .max(5, {
        message: "اعتبارسنجی باید 5 کاراکتر باشد",
      }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "کلمه عبور جدید و تکرار آن باید مطابقت داشته باشند",
    path: ["confirmNewPassword"],
  });
