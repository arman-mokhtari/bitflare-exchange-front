import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import {
  CreditCardIcon,
  InfoIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from "lucide-react";
import UserDropdown from "./UserDropdown";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserAside = ({ otherClasses }: { otherClasses?: string }) => {
  return (
    <aside className={`flex flex-row ${otherClasses}`}>
      <nav className="flex flex-row items-center gap-4 px-2 sm:flex-col sm:py-5">
        <TooltipProvider>
          <div className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
            <UserDropdown />
            <span className="sr-only">اکانت کاربری</span>
          </div>
          <TabsList>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value="overview"
                  className="flex  items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                >
                  <LayoutDashboardIcon className="size-5" />
                  <span className="sr-only">Overview</span>
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">نمای کلی</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value="analytics"
                  className="flex  items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                >
                  <InfoIcon className="size-5" />
                  <span className="sr-only">Analytics</span>
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">ارزهای من</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value="settings"
                  className="flex  items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                >
                  <SettingsIcon className="size-5" />
                  <span className="sr-only">Settings</span>
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">تنظیمات</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value="billing"
                  className="flex items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                >
                  <CreditCardIcon className="size-5" />
                  <span className="sr-only">Billing</span>
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">فاکتورهای من</TooltipContent>
            </Tooltip>
          </TabsList>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default UserAside;
