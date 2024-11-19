import {IEvent} from "@/lib/database/models/event.model";
import Card from "./Card";
import Pagination from "./Pagination";
import {Suspense} from "react";
import {SkeletonCard} from "./SkeletonCard";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  collectionType: "All_Events" | "Events_Organized" | "My_Tickets";
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
};

export default function Collection({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  limit,
  page,
  totalPages,
  urlParamName,
}: CollectionProps) {
  return (
    <>
      <Suspense
        fallback={
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {Array.from({length: limit}).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        }
      >
        {data.length > 0 ? (
          <div className="flex flex-col items-center gap-10">
            <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {data.map((event) => {
                const hasOrderLink = collectionType === "Events_Organized";
                const hidePrice = collectionType === "My_Tickets";
                return (
                  <li
                    key={
                      hidePrice
                        ? event._id + Math.round(Math.random() * 9999)
                        : event._id
                    }
                    className="flex justify-center"
                  >
                    <Card
                      event={event}
                      hasOrderLink={hasOrderLink}
                      hidePrice={hidePrice}
                    />
                  </li>
                );
              })}
            </ul>
            {totalPages && totalPages > 1 && (
              <Pagination
                urlParamName={urlParamName}
                page={page}
                totalPages={totalPages}
              />
            )}
          </div>
        ) : (
          <div className="flex flex-col wrapper gap-3 min-h-[200px] w-full rounded-[14px] py-28 text-center justify-center items-center bg-grey-50 dark:bg-black">
            <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
            <p className="p-regular-14">{emptyStateSubtext}</p>
          </div>
        )}
      </Suspense>
    </>
  );
}
