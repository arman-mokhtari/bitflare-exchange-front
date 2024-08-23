import { Button } from "@/components/ui/button";
import React from "react";

const CompletedPaymentStep = ({ setStep }: any) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4">
      <p className="w-4/5 text-center font-medium">
        فاکتور شما ثبت شد جهت پیگیری پرداخت می‌توانید به قسمت فاکتورها مراجعه
        کنید.
      </p>
      <Button
        className="w-full"
        variant="outline"
        size="sm"
        onClick={() => setStep(1)}
      >
        خرید مجدد
      </Button>
    </div>
  );
};

export default CompletedPaymentStep;
