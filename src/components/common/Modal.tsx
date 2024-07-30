import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function Modal({
  modalTitle,
  modalDescription,
  trigerButtonText,
  cancelButtonText,
  actionButtonText,
  actionHandler,
  actionButtonOtherClasses
}: {
  modalTitle: string;
  modalDescription?: string;
  trigerButtonText: any;
  cancelButtonText: string;
  actionButtonText: string;
  actionHandler: any;
  actionButtonOtherClasses?: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-full p-0 hover:bg-transparent hover:text-red-700 dark:hover:text-red-500"
        >
          {trigerButtonText}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{modalTitle}</AlertDialogTitle>
          <AlertDialogDescription>{modalDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelButtonText}</AlertDialogCancel>
          <AlertDialogAction
            className={`hover:bg-red-700 dark:hover:bg-red-500 ${actionButtonOtherClasses}`}
            onClick={actionHandler}
          >
            {actionButtonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
