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
import { CardContent } from "../../ui/card";
import CardLayout from "../../ui/CardLayout";
import { useEffect, useState } from "react";
import { completeProfile } from "@/services/auth/authServices";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "../../ui/use-toast";
import { CompleteProfileSchema } from "@/lib/validations";
import PasswordInput from "../../ui/PasswordInput";

const CompleteProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const form = useForm<z.infer<typeof CompleteProfileSchema>>({
    resolver: zodResolver(CompleteProfileSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { reset, handleSubmit, formState, control } = form;
  const { isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful && isSubmit) {
      reset({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [isSubmit, isSubmitSuccessful, reset]);

  const submitHandler = async ({
    name,
    email,
    password,
    confirmPassword,
  }: z.infer<typeof CompleteProfileSchema>) => {
    try {
      const { message, user } = await mutateAsync({
        name,
        email,
        password,
        confirmPassword,
      });
      toast({
        title: message,
        variant: "success",
      });
      setIsSubmit(true);

      if (user.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/user");
      }
    } catch (error: any) {
      toast({
        title: error?.response?.data?.message,
        variant: "destructive",
      });
    }
  };

  return (
    <CardLayout title="تکمیل مشخصات کاربری">
      <CardContent>
        <Form {...form}>
          <form
            autoComplete="off"
            onSubmit={handleSubmit(submitHandler)}
            className="space-y-4"
          >
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام و نام خانوادگی</FormLabel>
                  <FormControl>
                    <Input autoFocus type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تکرار کلمه عبور</FormLabel>
                  <FormControl>
                    <PasswordInput
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      showPassword={showConfirmPassword}
                      field={field}
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
    </CardLayout>
  );
};

export default CompleteProfile;
