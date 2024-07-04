import React from "react";
import { Card, CardHeader, CardTitle } from "./card";

const CardLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex justify-center">
      <Card className="w-[350px]">
        <CardHeader className="flex items-center">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        {children}
      </Card>
    </div>
  );
};

export default CardLayout;
