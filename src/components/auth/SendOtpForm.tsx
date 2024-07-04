"use client";

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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardContent, CardFooter } from "../ui/card";
import Link from "next/link";
import CardLayout from "../ui/CardLayout";
import UserCaptchaService from "../captcha/UserCaptchaService";
import React, { useEffect } from "react";
import { SendOtpFormSchema } from "@/lib/validations";

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isPending: boolean;
  sendOtpHandler: () => void;
  onChangeCaptcha: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmit: boolean;
}

const SendOtpForm = ({
  onChange,
  isPending,
  sendOtpHandler,
  onChangeCaptcha,
  isSubmit,
}: Props) => {
  const form = useForm<z.infer<typeof SendOtpFormSchema>>({
    resolver: zodResolver(SendOtpFormSchema),
    mode: "onChange",
    defaultValues: {
      phone: "",
      enteredCaptcha: "",
    },
  });
  const { reset, handleSubmit, formState, control } = form;
  const { isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful && isSubmit) {
      reset({
        phone: "",
        enteredCaptcha: "",
      });
    }
  }, [isSubmit, isSubmitSuccessful, reset]);

  function onSubmit(formData: z.infer<typeof SendOtpFormSchema>) {
    console.log(formData);
    sendOtpHandler();
  }

  return (
    <CardLayout title="ثبت نام">
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>شماره موبایل</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="09*********"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        onChange(e);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <UserCaptchaService />
            <FormField
              control={control}
              name="enteredCaptcha"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="لطفا متن تصویر را وارد کنید"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        onChangeCaptcha(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full"
              type="submit"
              aria-label="submit"
              disabled={isPending}
            >
              {isPending ? "درحال ارسال" : "ارسال"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Link
          href="/signin"
          className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          حساب کاربری دارم! ورود
        </Link>
      </CardFooter>
    </CardLayout>
  );
};

export default SendOtpForm;
