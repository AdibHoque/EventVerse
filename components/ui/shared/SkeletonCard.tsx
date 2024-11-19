import {Skeleton} from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white dark:bg-black shadow-md">
      <Skeleton className="h-[230px] w-full bg-gray-300 dark:bg-gray-600" />
      <div className="flex flex-col min-h-[230px] p-5 gap-3">
        <div className="flex gap-2">
          <Skeleton className="h-6 w-[80px] rounded-md" />
          <Skeleton className="h-6 w-[60px] rounded-md" />
        </div>
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-6 w-[250px]" />
        <div className="flex justify-between">
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  );
}
