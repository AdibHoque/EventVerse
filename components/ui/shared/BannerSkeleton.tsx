import {Skeleton} from "../skeleton";

export default function BannerSkeleton() {
  return (
    <div className="h-[80vh] lg:pl-28 justify-end w-full grid grid-cols-2 grid-rows-4 gap-6">
      <Skeleton className="w-full h-full row-span-2 bg-gray-300 dark:bg-gray-600" />
      <Skeleton className="w-full h-full row-span-3 bg-gray-300 dark:bg-gray-600" />
      <Skeleton className="w-full h-full bg-gray-300 dark:bg-gray-600" />
      <Skeleton className="w-full h-full col-span-2 bg-gray-300 dark:bg-gray-600" />
    </div>
  );
}
