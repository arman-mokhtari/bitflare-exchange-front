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

import { UserPasswordUpdateSchema } from "@/lib/validations";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import UserCaptchaService from "@/components/captcha/UserCaptchaService";
import { useChangeUserPassword } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import PasswordInput from "@/components/ui/PasswordInput";

const UserPasswordSettings = ({ userId }: { userId: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useChangeUserPassword();

  const form = useForm<z.infer<typeof UserPasswordUpdateSchema>>({
    resolver: zodResolver(UserPasswordUpdateSchema),
    mode: "onChange",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      enteredCaptcha: "",
    },
  });

  const { isSubmitSuccessful } = form.formState;
  
  useEffect(() => {
    if (isSubmit || isSubmitSuccessful) {
      form.reset({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
        enteredCaptcha: "",
      });
    }
  }, [form, isSubmit, isSubmitSuccessful]);

  async function onSubmit(data: z.infer<typeof UserPasswordUpdateSchema>) {
    try {
      const { message } = await mutateAsync({ userId, data });
      toast({
        title: message,
        variant: "success",
      });
      setIsSubmit(true);
    } catch (error: any) {
      setIsSubmit(true);
      queryClient.invalidateQueries({ queryKey: ["get-user-captcha"] });
      toast({
        title: error?.response?.data?.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmit(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FormField
              control={form.control}
              name="currentPassword"
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
              control={form.control}
              name="newPassword"
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
            <FormField
              control={form.control}
              name="confirmNewPassword"
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
        <UserCaptchaService />
        <FormField
          control={form.control}
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
        <Button disabled={isPending} className="w-full" type="submit">
          {isPending ? "در حال تغییر کلمه عبور" : "تغییر کلمه عبور"}
        </Button>
      </form>
    </Form>
  );
}

export default UserPasswordSettings