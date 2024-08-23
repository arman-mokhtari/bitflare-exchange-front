import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import AdminNavigationLinks from "@/components/admin/adminNav/NavigationLinks";
import MainLogo from "@/components/common/MainLogo";
import { Separator } from "@/components/ui/separator";

const AdminHeader = () => {
  return (
    <header className="bg-background px-4 py-2 shadow-sm md:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MainLogo />
          <span className="sr-only">بیتفلر</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="size-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] bg-muted p-0">
            <nav className="flex flex-col">
              <MainLogo otherClasses="m-auto mt-2" />
              <Separator className=" my-2 h-0.5" />
              <div className="flex flex-col gap-3">
                <AdminNavigationLinks />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default AdminHeader;
