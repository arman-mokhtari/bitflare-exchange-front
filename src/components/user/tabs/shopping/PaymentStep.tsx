"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { PaymentSchema } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { CircleAlertIcon, TrashIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useRemoveFromCart } from "@/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { useStepContext } from "@/providers/StepContext";
import { useCreatePayment } from "@/hooks/usePayments";
import { toast } from "@/components/ui/use-toast";

export function PaymentStep({ cart }: any) {
  const { setStep } = useStepContext();
  const { mutateAsync } = useRemoveFromCart();
  const queryClient = useQueryClient();
  const { isPending, mutateAsync: mutateAsyncPayment } = useCreatePayment();

  const form = useForm<z.infer<typeof PaymentSchema>>({
    resolver: zodResolver(PaymentSchema),
    mode: "onChange",
    defaultValues: {
      wallet: "",
    },
  });
  const removeHandler = async (id: string) => {
    try {
      const { message } = await mutateAsync(id);
      setStep(1);
      toast({
        title: message,
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error: any) {
      if (error?.response?.data) {
        toast({
          title: error?.response?.data?.message,
          variant: "destructive",
        });
      }
    }
  };

  async function onSubmit(data: z.infer<typeof PaymentSchema>) {
    try {
      const { message } = await mutateAsyncPayment({
        additionalInformation: data.wallet,
      });
      setStep(3);
      toast({
        title: message,
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error: any) {
      toast({
        title: error?.response?.data?.message,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            {cart.productDetail.map((item: any) => (
              <div
                key={item._id}
                className="flex items-center justify-between rounded-lg bg-muted-foreground/10 p-2"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-muted-foreground">
                    {toPersianNumbersWithComma(item.quantity)} عدد
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    {toPersianNumbersWithComma(item.quantity * item.price)}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeHandler(item._id)}
                    className="p-0 hover:bg-transparent"
                  >
                    <TrashIcon className="size-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-medium">مبلغ قابل پرداخت</span>
          <span className="font-medium">
            {toPersianNumbersWithComma(cart.payDetail.totalPrice)}
          </span>
        </div>
        <Separator />
        <FormField
          control={form.control}
          name="wallet"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>آدرس کیف پول</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  id="wallet"
                  placeholder="آدرس کیف پول خود را وارد کنید..."
                  {...field}
                  rows={2}
                />
              </FormControl>
              <FormMessage />
              <FormDescription className="flex gap-1">
                <CircleAlertIcon className="size-4" />
                <p>
                  آدرس کیف پول باید دقیقاً با آدرس ارز دیجیتال در کیف پول شما
                  مطابقت داشته باشد!
                </p>
              </FormDescription>
            </FormItem>
          )}
        />
        <Button disabled={isPending} className="w-full" type="submit">
          {isPending ? "انتقال به درگاه پرداخت" : "پرداخت"}
        </Button>
      </form>
    </Form>
  );
}
