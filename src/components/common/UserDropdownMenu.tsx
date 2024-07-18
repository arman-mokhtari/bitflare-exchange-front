import { CreditCard, User, User2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutToggle from "./LogoutToggle";
import Link from "next/link";

export function UserDropdownMenu({
  dropdownMenuLabel,
}: {
  dropdownMenuLabel: string;
}) {
  const userMenuItems = [
    {
      title: "پروفایل کاربری",
      path: "/user",
      icon: <User className="size-4" />,
      ariaLabel: "user panel",
    },
    {
      title: "فاکتورها",
      path: "/user/payments",
      icon: <CreditCard className="size-4" />,
      ariaLabel: "payments",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="size-full hover:bg-transparent">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <User2 />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-right">
          {dropdownMenuLabel}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {userMenuItems.map((item, idx) => (
            <DropdownMenuItem
              key={idx}
              className="flex items-center justify-end gap-2"
            >
              <Link href={item?.path} role="link" aria-label={item?.ariaLabel}>
                {item?.title}
              </Link>
              {item?.icon}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center justify-end gap-2">
          <LogoutToggle text />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
