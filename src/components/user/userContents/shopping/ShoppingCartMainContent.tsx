"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useGetAllProducts } from "@/hooks/useProducts";
import { Product } from "@/types";
import { MultiStepForm } from "./MultiStepForm";
import StepperLayout from "./StepperLayout";
import { useStepContext } from "@/providers/StepContext";
import { Button } from "@/components/ui/button";

const ShoppingCartMainContent = ({ cart }: { cart: any }) => {
  const { step } = useStepContext();
  const { isLoading, data } = useGetAllProducts();

  const productsItem: Product[] = data || [];
  const { products } = productsItem as any;
  if (isLoading) return <div>Loading...</div>;

  const stepsDesc = () => {
    switch (step) {
      case 1:
        return "مقدار و ارز دیجیتال دلخواه خود را انتخاب کنید!";
      case 2:
        return "آدرس کیف پول را وارد کنید و فرآیند پرداخت را تکمیل نمایید.";
      default:
        return null;
    }
  };

  return (
    <div className="grid items-start gap-4 xl:grid-cols-5">
      <StepperLayout
        title="خرید ارز دیجیتال"
        desc={stepsDesc()}
      >
        <CardContent className="grid gap-6">
          <MultiStepForm cart={cart} products={products} />
        </CardContent>
      </StepperLayout>
      <Card className="grid xl:col-span-3">
        <CardContent className="p-6 text-sm">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="font-medium">جزئیات پرداخت</div>
              <ul className="grid gap-2 text-muted-foreground">
                <li>حداقل واریز: ۱۰ دلار</li>
                <li>حداکثر واریز: ۵۰,۰۰۰ دلار</li>
                <li>زمان پردازش: ۱-۲ روز کاری</li>
                <li>کارمزد: ۰.۵٪ از مبلغ تراکنش</li>
              </ul>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">نکات مهم</div>
              <ul className="grid gap-2 text-muted-foreground">
                <li>واریزها غیرقابل استرداد هستند</li>
                <li>برداشت‌ها ممکن است تا ۵ روز کاری طول بکشد</li>
                <li>حساب‌ها مشمول الزامات تأیید و تطابق هستند</li>
                <li>
                  تراکنش‌های ارز دیجیتال غیرقابل برگشت هستند، لطفاً جزئیات را
                  دوباره بررسی کنید
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end px-6 py-4">
          <Button variant="outline" size="sm">
            اطلاعات بیشتر
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShoppingCartMainContent;
