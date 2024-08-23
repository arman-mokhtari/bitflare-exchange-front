import { EyeOffIcon, EyeIcon } from "lucide-react";

import React from "react";
import { Button } from "./button";
import { Input } from "./input";

interface Props {
  onClick: () => void;
  showPassword: boolean;
  field: React.ComponentProps<typeof Input>;
}
const PasswordInput = ({ field, onClick, showPassword }: Props) => {
  return (
    <div className="relative">
      <Input type={showPassword ? "text" : "password"} {...field} />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute left-1 top-1/2 -translate-y-1/2 hover:bg-transparent"
        onClick={onClick}
      >
        {showPassword ? (
          <EyeOffIcon className="size-5" />
        ) : (
          <EyeIcon className="size-5" />
        )}
      </Button>
    </div>
  );
};

export default PasswordInput;
