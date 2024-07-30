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

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLogo from "@/components/common/MainLogo";

const UserAside = ({ otherClasses }: { otherClasses?: string }) => {
  return (
    <aside className={`flex flex-row ${otherClasses}`}>
      <nav className="sticky top-0 flex flex-row items-center gap-4 px-3 sm:flex-col sm:py-5 md:px-5">
        <div className="hidden sm:block">
          <MainLogo />
        </div>

        <TooltipProvider>
          <TabsList>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value="overview"
                  className="flex items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:gap-1"
                >
                  <LayoutDashboardIcon className="size-5" />
                  <span className="hidden md:block">نمای کلی</span>
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">نمای کلی</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value="analytics"
                  className="flex  items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:gap-1"
                >
                  <InfoIcon className="size-5" />
                  <span className="hidden md:block">ارزهای من</span>
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">ارزهای من</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value="settings"
                  className="flex  items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:gap-1"
                >
                  <SettingsIcon className="size-5" />
                  <span className="hidden md:block">تنظیمات</span>
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">تنظیمات</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value="billing"
                  className="flex items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:gap-1"
                >
                  <CreditCardIcon className="size-5" />
                  <span className="hidden md:block">فاکتورها</span>
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">فاکتورها</TooltipContent>
            </Tooltip>
          </TabsList>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default UserAside;
