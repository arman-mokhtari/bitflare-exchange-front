import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { MoreHorizontal } from "lucide-react";
import { CurrencyRequestTab } from "./CurrencyRequestTab";
import { MyCurrency } from "@/types";

const UserCurrencyRequestDialog = ({ rowData }: { rowData: MyCurrency }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <MoreHorizontal className="size-4" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <CurrencyRequestTab rowData={rowData} />
      </DialogContent>
    </Dialog>
  );
};

export default UserCurrencyRequestDialog;
