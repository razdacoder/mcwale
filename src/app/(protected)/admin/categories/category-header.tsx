import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CategoryForm from "./create-edit-form";

export default function CategoryHeader() {
  return (
    <section className="flex justify-between">
      <Heading className="normal-case">Category</Heading>
      <CategoryForm>
        <Button className="flex gap-x-3 items-center">
          <Plus className="w-4 h-4" />
          Add Category
        </Button>
      </CategoryForm>
    </section>
  );
}
