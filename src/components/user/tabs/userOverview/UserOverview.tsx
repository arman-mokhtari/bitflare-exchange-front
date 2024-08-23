import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toLocalDateString } from "@/utils/toLocalDate";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import { DollarSignIcon, FileTextIcon, TagIcon, Verified } from "lucide-react";

import { MyCurrency } from "@/types";
import { DigitalCurrencyDataTable } from "./OverviewDataTable";
interface User {
  name: string;
  createdAt: string;
  phoneNumber: string;
}

interface ProductDetail {
  offPrice?: number;
}

interface Cart {
  productDetail: ProductDetail[];
}

interface Payment {
  amount: number;
  cart: Cart;
}

interface UserOverviewProps {
  user: User;
  payments: Payment[];
  currencies: MyCurrency[];
}

const UserOverview = ({ user, payments, currencies }: UserOverviewProps) => {
  const splitName = user?.name?.split(" ")[0];

  const totalPurchase = payments.reduce(
    (acc, payment) => acc + payment.amount,
    0
  );
  const totalDiscount = payments.reduce((acc, payment) => {
    const productDiscount = payment.cart.productDetail.reduce(
      (productAcc, product) => productAcc + (product.offPrice || 0),
      0
    );
    return acc + productDiscount;
  }, 0);

  const numberOfPayments = payments?.length;
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-xl">
            خوش آمدید {splitName} عزیز🥳
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <p>وضعیت حساب کاربری:</p>
            <div className="flex flex-row items-center gap-0.5 text-muted-foreground">
              <Verified className="size-4 text-blue-500" />
              <p>تایید شده</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p>تاریخ پیوستن:</p>
            <p className="text-sm text-muted-foreground">
              {toLocalDateString(user.createdAt)}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p>شماره موبایل:</p>
            <p className="text-sm text-muted-foreground">
              {toPersianNumbers(user.phoneNumber)}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="text-xl">آمار فاکتورها</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <p className="font-bold">
            جزئیات کارت شما 😎 <span className="font-normal">در یک نگاه</span>
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-secondary p-3 text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <DollarSignIcon className="size-6 " />
              </div>
              <div>
                <div className="text-lg font-bold">
                  {toPersianNumbersWithComma(totalPurchase)} تومان
                </div>
                <div className="text-sm text-muted-foreground">مجموع خرید</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-secondary p-3 text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <FileTextIcon className="size-6" />
              </div>
              <div>
                <div className="text-lg font-bold">
                  {toPersianNumbersWithComma(numberOfPayments)} عدد
                </div>
                <div className="text-sm text-muted-foreground">فاکتورها</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-secondary p-3 text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <TagIcon className="size-6" />
              </div>
              <div>
                <div className="text-lg font-bold">
                  {toPersianNumbersWithComma(totalDiscount)} تومان
                </div>
                <div className="text-sm text-muted-foreground">
                  مجموع تخفیفات
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-5">
        <CardHeader>
          <CardTitle className="text-xl">ارزهای من</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <DigitalCurrencyDataTable currencies={currencies} />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserOverview;
