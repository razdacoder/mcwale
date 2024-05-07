import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { CheckCircle2 } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function SuccessAlert({ open, setOpen }: Props) {
  return (
    <AlertDialog open={true} onOpenChange={setOpen}>
      <AlertDialogContent className="h-[380px] w-[300px]">
        <div className="flex justify-center items-center">
          <CheckCircle2 className="text-green-500 size-40" />
        </div>
        <AlertDialogFooter className="justify-center">
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
