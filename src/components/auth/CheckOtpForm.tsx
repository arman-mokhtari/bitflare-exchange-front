"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { CardContent } from "../ui/card";
import CardLayout from "../ui/CardLayout";
import { RefreshCcw } from "lucide-react";
import { CheckOtpFormSchema } from "@/lib/validations";

interface Props {
  setOtp: any;
  otp: any;
  onSubmit: (e: any) => Promise<void>;
  goBack: () => void;
  time: number;
  onResendOtp: () => void;
  otpResponse: string;
  isPending: boolean;
}

const CheckOtpForm = ({
  setOtp,
  otp,
  onSubmit,
  goBack,
  time,
  onResendOtp,
  otpResponse,
  isPending,
}: Props) => {
  const form = useForm<z.infer<typeof CheckOtpFormSchema>>({
    resolver: zodResolver(CheckOtpFormSchema),
    defaultValues: {
      pin: "",
    },
  });

  // todo fix auto submit onSubmit should change to handleSubmit
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [shouldAutoSubmit, setShouldAutoSubmit] = useState(false);

  // useEffect(() => {
  //   const handleSubmitOtp = async () => {
  //     try {
  //       setIsSubmitting(true);
  //       await onSubmit(form.getValues());
  //       setIsSubmitting(false);
  //     } catch (error) {
  //       console.error("Error submitting OTP:", error);
  //       setIsSubmitting(false);
  //     }
  //   };

  //   if (shouldAutoSubmit && otp.length === 6) {
  //     handleSubmitOtp();
  //     setShouldAutoSubmit(false); // Reset auto submit flag after submission
  //   }
  // }, [shouldAutoSubmit, otp, form, onSubmit]);

  // const handleInputChange = (value: string) => {
  //   setOtp(value);
  //   form.setValue("pin", value); // Update form value
  //   if (value.length === 6) {
  //     setShouldAutoSubmit(true); // Trigger auto submit when OTP is complete
  //   } else {
  //     setShouldAutoSubmit(false); // Cancel auto submit if OTP length changes
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   form.handleSubmit(async (formData) => {
  //     try {
  //       setIsSubmitting(true);
  //       await onSubmit(formData);
  //       setIsSubmitting(false);
  //     } catch (error) {
  //       console.error("Error submitting OTP:", error);
  //       setIsSubmitting(false);
  //     }
  //   })(e);
  // };

  return (
    <CardLayout title="ارسال کد تایید">
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            autoComplete="off"
          >
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>کد تایید را وارد کنید:</FormLabel>
                  <FormControl>
                    <div className="" dir="ltr">
                      <InputOTP
                        value={otp}
                        onChange={(value) => {
                          setOtp(value);
                          field.onChange(value);
                        }}
                        maxLength={6}
                        autoFocus
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                      <div className="mt-2 flex items-center justify-between">
                        {time > 0 ? (
                          <p className="text-xs">
                            ارسال مجدد <span>{time}</span> ثانیه
                          </p>
                        ) : (
                          <Button
                            type="button"
                            aria-label="resend"
                            variant="ghost"
                            size="sm"
                            onClick={onResendOtp}
                            className="flex gap-1 text-xs"
                          >
                            <RefreshCcw size={16} />
                            <p>ارسال مجدد</p>
                          </Button>
                        )}
                      </div>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-start gap-2">
              <Button
                className=" bg-blue-700 text-white dark:bg-blue-500"
                disabled={isPending}
                type="submit"
              >
                {isPending ? "درحال ارسال" : "تایید"}
              </Button>
              <Button
                type="button"
                aria-label="set previous step"
                onClick={goBack}
                variant="outline"
              >
                برگشت
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </CardLayout>
  );
};

export default CheckOtpForm;
