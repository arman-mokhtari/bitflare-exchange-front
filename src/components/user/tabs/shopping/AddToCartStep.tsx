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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { AddToCartSchema } from "@/lib/validations";
import { MinusIcon, PlusIcon } from "lucide-react";


export function AddToCartStep({ products, onSubmit, isPending }: any) {

  const form = useForm<z.infer<typeof AddToCartSchema>>({
    resolver: zodResolver(AddToCartSchema),
    mode: "onChange",
    defaultValues: {
      productId: undefined,
      quantity: 0,
    },
  });


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>مقدار</FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      form.setValue("quantity", Math.max(0, field.value - 10))
                    }
                  >
                    <MinusIcon className="size-4" />
                    <span className="sr-only">کاهش</span>
                  </Button>
                  <Input
                    id="amount"
                    type="number"
                    step="10"
                    className="w-full text-center"
                    {...field}
                    value={field.value}
                    onChange={(e) =>
                      form.setValue("quantity", Math.max(0, Number(e.target.value)))
                    }
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      form.setValue("quantity", Math.max(0, field.value + 10))
                    }
                  >
                    <PlusIcon className="size-4" />
                    <span className="sr-only">افزایش</span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productId"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>ارز دیجیتال</FormLabel>
              <Select
                dir="rtl"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="ارز مورد نظر را انتخاب کنید..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {products.map((product: any) => (
                    <SelectItem key={product._id} value={product._id}>
                      {product.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} className="w-full" type="submit">
          تکمیل سفارش
        </Button>
      </form>
    </Form>
  );
}
