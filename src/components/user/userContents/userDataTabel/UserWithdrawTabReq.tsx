import { Modal } from "@/components/common/Modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { MyCurrency } from "@/types";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { useState } from "react";

const UserWithdrawTabReq = ({ rowData }: { rowData: MyCurrency }) => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };

  const maxSliderValue = rowData.quantity;
  const sliderPercentage = (sliderValue / maxSliderValue) * 100;

  const withdrawHandler = async () => {
    console.log("withdrawHandler");
  };

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="space-y-2 p-2">
        <CardTitle className="text-lg font-medium">فرم برداشت</CardTitle>
      </CardHeader>
      <Separator className="mb-2" />
      <CardContent className="space-y-2 p-2">
        <p className=" font-medium">
          تعداد موجودی: {toPersianNumbers(rowData.quantity)}
        </p>
        <Slider
          onValueChange={handleSliderChange}
          className="h-2"
          defaultValue={[0]}
          max={maxSliderValue}
          step={maxSliderValue / 4}
        />
        <p className="text-sm text-foreground">
          میزان برداشت: {toPersianNumbers(sliderPercentage)} درصد
        </p>
        <p className="text-sm text-foreground">
          تعداد برداشت: {toPersianNumbers(sliderValue)} عدد
        </p>
      </CardContent>
      <CardFooter className="flex justify-between p-2">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Modal
          actionButtonOtherClasses="hover:bg-blue-600 dark:hover:bg-blue-500"
            actionHandler={withdrawHandler}
            actionButtonText="تایید"
            cancelButtonText="انصراف"
            modalTitle="آیا از برداشت اطمینان دارید؟"
            trigerButtonText={
              <div className="flex flex-row items-center gap-1">

                  <Button>برداشت</Button>

              </div>
            }
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserWithdrawTabReq;
