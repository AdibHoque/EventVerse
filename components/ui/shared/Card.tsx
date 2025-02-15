import {IEvent} from "@/lib/database/models/event.model";
import {formatDateTime} from "@/lib/utils";
import Link from "next/link";
import {auth} from "@clerk/nextjs/server";
import Image from "next/image";
import {DeleteConfirmation} from "./DeleteConfirmation";
import {getOrderCountByEvent} from "@/lib/actions/order.actions";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

export default async function Card({
  event,
  hasOrderLink,
  hidePrice,
}: CardProps) {
  const {sessionClaims} = await auth();
  const userId = sessionClaims?.userId as string;
  const participants = await getOrderCountByEvent(event._id);
  const isEventCreator = userId === event.organizer?._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white dark:bg-black shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{backgroundImage: `url(${event.imageUrl})`}}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-2 rounded-xl bg-white dark:bg-black/80 p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
          <span className="w-full bg-black dark:bg-white h-[1px] opacity-20"></span>
          <DeleteConfirmation eventId={event._id} />
        </div>
      )}
      <div className="flex flex-col min-h-[230px] p-5 gap-3 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-600">
              {event.isFree ? "Free" : `$${event.price}`}
            </span>
            <Link href={`/?category=${event.category.name}#events`}>
              <p className="p-semibold-14 hover:text-primary w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
                #{event.category.name}
              </p>
            </Link>
          </div>
        )}
        <p className="p-medium-16 md:p-medium-18 text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>
        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black dark:text-white">
            {event.title}
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="flex flex-col p-medium-14 md:p-medium-16 text-grey-600">
            Enrollments:
            <span className="text-primary font-bold">
              {participants.toString().padStart(5, "0")}
            </span>
          </p>
          {hasOrderLink ? (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary-500">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          ) : (
            <p className="text-end flex flex-col p-medium-14 md:p-medium-16 text-grey-600">
              Organizer:
              <Link
                href={`/profile/${event.organizer?.username}`}
                className="text-primary font-bold"
              >
                @{event.organizer?.username}
              </Link>
            </p>
          )}
        </div>
        {hidePrice && (
          <h1 className="text-primary font-bold flex justify-between items-center">
            Ticket ID:{" "}
            <span className="text-grey-500 text-xs md:text-sm">
              {event.orderId}
            </span>
          </h1>
        )}
      </div>
    </div>
  );
}
