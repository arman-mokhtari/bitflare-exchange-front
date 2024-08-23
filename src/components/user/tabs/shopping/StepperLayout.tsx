import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useStepContext } from "@/providers/StepContext";
import React from "react";

const StepperLayout = ({
  children,
  title,
  desc,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  desc?: string | null;
}>) => {
  const { step } = useStepContext();

  const steps = [
    { label: "1", completed: step > 1 },
    { label: "2", completed: step > 2 },
    { label: "3", completed: step > 3 },
  ];

  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex w-full max-w-md items-center justify-between">
            {steps.map((s, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center">
                  <div
                    className={`flex size-10 items-center justify-center rounded-full ${
                      step === index + 1 ? "border-2 border-primary" : ""
                    } ${s.completed || step === 3 ? "bg-primary text-white" : "bg-muted font-medium text-muted-foreground"}`}
                  >
                    <p className="flex items-center justify-center">
                      <span className="pt-1 text-center text-lg font-medium">
                        {s.label}
                      </span>
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <Separator
                    className={`mx-4 h-1 flex-1 ${
                      s.completed ? "bg-primary" : ""
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Separator className="m-3 h-0.5 text-center text-inherit" />
        </div>

        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      {children}
    </Card>
  );
};

export default StepperLayout;
