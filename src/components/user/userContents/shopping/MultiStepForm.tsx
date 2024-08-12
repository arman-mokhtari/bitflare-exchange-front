"use client";

import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { AddToCartSchema } from "@/lib/validations";
import { useAddToCart } from "@/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { AddToCartStep } from "./AddToCartStep";
import { PaymentStep } from "./PaymentStep";
import { useStepContext } from "@/providers/StepContext";
import CompletedPaymentStep from "./CompletedPaymentStep";

export function MultiStepForm({ products, cart }: any) {
  const { step, setStep } = useStepContext();
  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useAddToCart();

  async function onSubmit(data: z.infer<typeof AddToCartSchema>) {
    try {
      const { message } = await mutateAsync({
        productId: data.productId,
        quantity: data.quantity,
      });
      toast({
        title: message,
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      setStep(2);
    } catch (error: any) {
      toast({
        title: error?.response?.data?.message,
        variant: "destructive",
      });
    }
  }

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <AddToCartStep
            products={products}
            onSubmit={onSubmit}
            isPending={isPending}
          />
        );
      case 2:
        return <PaymentStep cart={cart} />;
      case 3:
        return <CompletedPaymentStep setStep={setStep} />;
      default:
        return null;
    }
  };

  return renderSteps();
}
