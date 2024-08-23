"use client";

import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { useGetResetPasswordCaptcha } from "@/hooks/useResetPassword";

const ResetPasswordCaptcha = () => {
  const { data, isLoading, refetch } = useGetResetPasswordCaptcha();

  const [refreshing, setRefreshing] = useState(false);

  const handleRefreshClick = async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      console.error("Error refreshing captcha:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const { data: captchaData } = data || {};
  
  return (
    <div className="flex gap-2">
      {isLoading ? (
        <Skeleton className="h-[50px] w-[120px] rounded-lg" />
      ) : (
        <Image
          className="h-[50px] w-[120px] rounded-lg border border-gray-100 object-fill dark:border-gray-800"
          src={`data:image/svg+xml;base64,${btoa(captchaData)}`}
          width="120"
          height="50"
          alt="تصویر اعتبارسنجی"
          title="تصویر اعتبارسنجی"
        />
      )}

      <Button
        type="button"
        aria-label="resend"
        variant="ghost"
        size="sm"
        className="m-0 flex self-end p-0 hover:bg-transparent"
        onClick={handleRefreshClick}
        disabled={isLoading || refreshing}
      >
        <RefreshCcw className="text-gray-700 dark:text-gray-300" size={14} />
      </Button>
    </div>
  );
};

export default ResetPasswordCaptcha;
