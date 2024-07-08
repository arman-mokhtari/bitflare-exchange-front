"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
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
import CardLayout from "../ui/CardLayout";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import PasswordInput from "../ui/PasswordInput";
import { useAuthenticateUser } from "@/hooks/useAuth";
import { SigninSchema } from "@/lib/validations";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import UserCaptchaService from "../captcha/UserCaptchaService";
import Link from "next/link";

const SigninMainContent = () => {
  const router = useRouter();

  const [isSubmit, setIsSubmit] = useState(false);
  const { isPending, mutateAsync } = useAuthenticateUser();
  const queryClient = useQueryClient();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    mode: "onChange",
    defaultValues: {
      loginMethod: "phone",
      loginIdentifier: "",
      password: "",
      enteredCaptcha: "",
    },
  });

  const { reset, handleSubmit, formState, control } = form;
  const { isSubmitSuccessful } = formState;

  const loginMethod = useWatch({
    control,
    name: "loginMethod",
  });

  useEffect(() => {
    if (isSubmitSuccessful && isSubmit) {
      reset({
        loginIdentifier: "",
        password: "",
        enteredCaptcha: "",
      });
    }
  }, [isSubmit, isSubmitSuccessful, reset]);

  const submitHandler = async ({
    loginMethod,
    loginIdentifier,
    password,
    enteredCaptcha,
  }: z.infer<typeof SigninSchema>) => {
    try {
      const requestData = {
        [loginMethod === "phone" ? "phoneNumber" : "email"]: loginIdentifier,
        password,
        enteredCaptcha,
      };

      const { message } = await mutateAsync(requestData);

      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast({
        title: message,
        variant: "success",
      });
      setIsSubmit(true);
      router.push("/");
    } catch (error: any) {
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast({
        title: error?.response?.data?.message,
        variant: "destructive",
      });
    }
  };

  return (
    <CardLayout title="ورود به بیتفلر">
      <CardContent>
        <Form {...form}>
          <form
            autoComplete="off"
            onSubmit={handleSubmit(submitHandler)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="loginMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>انتخاب نحوه ورود:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row justify-end space-x-2 space-y-1"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="email" />
                        </FormControl>
                        <FormLabel className="font-normal">ایمیل</FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="phone" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          تلفن همراه
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="loginIdentifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {loginMethod === "phone" ? "شماره موبایل" : "ایمیل"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoFocus
                      type={loginMethod === "phone" ? "tel" : "email"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>کلمه عبور</FormLabel>
                  <FormControl>
                    <PasswordInput
                      onClick={() => setShowPassword(!showPassword)}
                      showPassword={showPassword}
                      field={field}
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
      <CardFooter className="flex flex-row justify-between">
        
        <Link
          href="/auth"
          className="whitespace-nowrap text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          حساب کاربری ندارم! ثبت نام
        </Link>
        <Link
          href="/forget-password"
          className="whitespace-nowrap text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          فراموشی کلمه عبور!
        </Link>
      </CardFooter>
    </CardLayout>
  );
};

export default SigninMainContent;
