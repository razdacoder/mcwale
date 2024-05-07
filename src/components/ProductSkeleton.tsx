import { Skeleton } from "./ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[420px] md:h-[380px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px] md:w-[250px]" />
        <Skeleton className="h-4 w-[150px] md:w-[200px]" />
      </div>
    </div>
  );
}
