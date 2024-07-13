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

export function UserDropdownMenu({dropdownMenuLabel}: {dropdownMenuLabel: string}) {
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
        <DropdownMenuLabel className="text-right">{dropdownMenuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center justify-end gap-2">
            <span>پروفایل</span>
            <User className="size-4" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-end gap-2">
            <span>فاکتورها</span>
            <CreditCard className="size-4" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
         className="flex items-center justify-end gap-2">
            
          <LogoutToggle  text />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
