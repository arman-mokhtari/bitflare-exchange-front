import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";

const CardLayout = ({
  children,
  title,
  cardDescription,
}: {
  children: React.ReactNode;
  title: string;
  cardDescription?: string;
}) => {
  return (
    <div className="flex justify-center">
      <Card className="w-[350px]">
        <CardHeader className="flex items-center">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
        {children}
      </Card>
    </div>
  );
};

export default CardLayout;
