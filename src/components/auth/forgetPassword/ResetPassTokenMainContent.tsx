"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import CardLayout from "@/components/ui/CardLayout";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import PasswordInput from "@/components/ui/PasswordInput";
import { toast } from "@/components/ui/use-toast";
import { useResetPassword } from "@/hooks/useResetPassword";
import { ResetPassTokenSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ResetPassTokenMainContent = ({ token }: { token: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);

  const form = useForm<z.infer<typeof ResetPassTokenSchema>>({
    resolver: zodResolver(ResetPassTokenSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const { reset, handleSubmit, formState, control } = form;
  const { isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful && isSubmit) {
      reset({
        password: "",
        confirmPassword: "",
      });
    }
  }, [isSubmit, isSubmitSuccessful, reset]);

  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useResetPassword();
  const router = useRouter();

  const submitHandler = async ({
    password,
    confirmPassword,
  }: z.infer<typeof ResetPassTokenSchema>) => {
    try {
      const { message } = await mutateAsync({
        token,
        data: {
          password,
          confirmPassword,
        },
      });
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      setIsSubmit(true);
      toast({
        title: message,
        variant: "success",
        duration: 4000,
      });

      router.push("/");
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        error?.response?.data?.message ||
        "خطایی رخ داده است.";
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

export default ResetPassTokenMainContent;
