import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { TabsTrigger } from "@/components/ui/tabs";
import { PanelAsideProps } from "@/types";

const PanelTabItem = ({ item }: { item: PanelAsideProps }) => {
  const Icon = item.icon;
  return (
    <Tooltip>
      <TabsTrigger
        value={item.value}
        className="flex items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:gap-1"
      >
        <TooltipTrigger asChild>
          <div className="flex items-center justify-center md:gap-1">
            <Icon className="size-5" />
            <span className="hidden md:block">{item.text}</span>
          </div>
        </TooltipTrigger>
      </TabsTrigger>
      <TooltipContent side="right">{item.tooltipText}</TooltipContent>
    </Tooltip>
  );
};

export default PanelTabItem;
