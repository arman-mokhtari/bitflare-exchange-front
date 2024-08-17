import {
  TooltipProvider
} from "@/components/ui/tooltip";

import { TabsList } from "@/components/ui/tabs";
import MainLogo from "@/components/common/MainLogo";
import { userTabItems } from "@/data/tabsData";
import PanelTabItem from "@/components/ui/PanelTabItem";

const UserAside = ({ otherClasses }: { otherClasses?: string }) => {
  return (
    <aside className={`flex flex-row ${otherClasses}`}>
      <nav className="sticky top-0 flex flex-row items-center gap-4 px-3 sm:flex-col sm:py-5">
        <div className="hidden sm:block">
          <MainLogo />
        </div>

        <TooltipProvider>
          <TabsList>
            {userTabItems.map((item) => (
              <PanelTabItem key={item.value} item={item} />
            ))}
          </TabsList>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default UserAside;
