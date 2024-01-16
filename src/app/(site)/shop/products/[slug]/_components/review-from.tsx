import { Button } from "@/components/ui/button";
import { AiOutlineEdit } from "react-icons/ai";

export default function ReviewForm() {
  return (
    <Button size="lg" className="flex gap-x-3 items-center">
      <AiOutlineEdit className="w-4 h-4" />
      Add review
    </Button>
  );
}
