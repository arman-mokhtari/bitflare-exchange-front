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

import { ProfileUpdateSchema } from "@/lib/validations";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import UserCaptchaService from "@/components/captcha/UserCaptchaService";
import { useUpdateProfile } from "@/hooks/useAuth";
import { useEffect, useState } from "react";

const UserInfoSettings = ({ user }: any) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useUpdateProfile();

  const form = useForm<z.infer<typeof ProfileUpdateSchema>>({
    resolver: zodResolver(ProfileUpdateSchema),
    mode: "onChange",
    defaultValues: {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      biography: user.biography,
      enteredCaptcha: "",
    },
  });

  const { isSubmitSuccessful } = form.formState;
  
  useEffect(() => {
    if (isSubmit || isSubmitSuccessful) {
      form.reset({
        enteredCaptcha: "",
      });
    }
  }, [form, isSubmit, isSubmitSuccessful]);

  async function onSubmit(data: z.infer<typeof ProfileUpdateSchema>) {
    try {
      const { message } = await mutateAsync(data);
      toast({
        title: message,
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
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
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>نام و نام خانوادگی</FormLabel>
                <FormControl>
                  <Input id="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>ایمیل</FormLabel>
                <FormControl>
                  <Input id="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel className="text-muted-foreground/50">
                  شماره موبایل
                </FormLabel>
                <FormControl>
                  <Input disabled id="phoneNumber" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="biography"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>
                  شغل{" "}
                  <span className="text-xs text-muted-foreground">
                    (اختیاری)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input id="biography" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
          {isPending ? "در حال بروز رسانی" : "بروز رسانی"}
        </Button>

        <p className="text-sm text-muted-foreground">
          شماره موبایل غیر قابل تغییر می‌باشد! در صورت نیاز به تغییر با پشتیبانی
          تماس حاصل نمایید.
        </p>
      </form>
    </Form>
  );
};

export default UserInfoSettings;
