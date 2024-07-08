"use client";

import ResetPasswordCaptcha from "@/components/captcha/ResetPasswordCaptcha";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import CardLayout from "@/components/ui/CardLayout";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useSendPasswordRequest } from "@/hooks/useResetPassword";
import { RequestResetPasswordSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RequestResetPasswordForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useForm<z.infer<typeof RequestResetPasswordSchema>>({
    resolver: zodResolver(RequestResetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      enteredCaptcha: "",
    },
  });
  const { reset, handleSubmit, formState, control } = form;
  const { isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful && isSubmit) {
      reset({
        email: "",
        enteredCaptcha: "",
      });
    }
  }, [isSubmit, isSubmitSuccessful, reset]);

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useSendPasswordRequest();

  const submitHandler = async ({
    email,
    enteredCaptcha,
  }: z.infer<typeof RequestResetPasswordSchema>) => {
    try {
      const { message } = await mutateAsync({
        email,
        enteredCaptcha,
      });
      queryClient.invalidateQueries({
        queryKey: ["get-reset-password-captcha"],
      });
      toast({
        title: message,
        variant: "success",
        duration: 3000,
      });

      setIsSubmit(true);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        error?.response?.data?.message ||
        "خطایی رخ داده است.";
      queryClient.invalidateQueries({
        queryKey: ["get-reset-password-captcha"],
      });
      toast({
        title: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <CardLayout title=" فراموشی کلمه عبور">
      <CardContent>
        <Form {...form}>
          <form
            autoComplete="off"
            onSubmit={handleSubmit(submitHandler)}
            className="space-y-4"
          >
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>
                  <FormControl>
                    <Input autoFocus type="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <ResetPasswordCaptcha />
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-blue-700 text-white dark:bg-blue-500"
              type="submit"
              aria-label="submit"
              disabled={isPending}
            >
              {isPending ? "درحال ثبت" : "ثبت"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Link
          href="/signin"
          className="whitespace-nowrap text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          کلمه عبور را به خاطر آوردم! ورود
        </Link>
      </CardFooter>
    </CardLayout>
  );
};

export default RequestResetPasswordForm;
