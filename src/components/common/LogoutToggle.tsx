import React from "react";
import { Modal } from "./Modal";
import { LogOut } from "lucide-react";
import { logout } from "@/services/auth/authServices";

const LogoutToggle = ({ text }: { text?: boolean }) => {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/signin";
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Modal
        actionHandler={logoutHandler}
        actionButtonText="تایید"
        cancelButtonText="انصراف"
        modalTitle="آیا از خروج اطمینان دارید؟"
        trigerButtonText={
          <div className="flex flex-row items-center gap-1">
            {text && <p>خروج</p>}
            <LogOut className="size-4" />
          </div>
        }
      />
    </div>
  );
};

export default LogoutToggle;
