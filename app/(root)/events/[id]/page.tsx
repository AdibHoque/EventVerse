import CheckoutButton from "@/components/ui/shared/CheckoutButton";
import Collection from "@/components/ui/shared/Collection";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import {formatDateTime} from "@/lib/utils";
import Image from "next/image";
import React, {Suspense} from "react";

import type {Metadata, ResolvingMetadata} from "next";
import Link from "next/link";
import {IdParams, SearchParams} from "@/types";
import {Skeleton} from "@/components/ui/skeleton";
import {Button} from "@/components/ui/button";

type Props = {
  params: Promise<{id: string}>;
  searchParams: Promise<{[key: string]: string | string[] | undefined}>;
};

export async function generateMetadata(
  {params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;

  const event = await getEventById(id);
  return {
    title: `Event Details - ${event.title} - EventVerse`,
    description: `${event.description}\nJoin the ${event.title} event, organized by @${event.organizer?.username}.`,
    icons: {
      icon: "/assets/images/logo.svg",
      shortcut: "/assets/images/logo.svg",
    },
    openGraph: {
      title: `Event Details - ${event.title} - EventVerse`,
      description:
        event.description ||
        `Don't miss out on ${event.title} hosted by @${event.organizer?.username}.`,
      url: `https://www.eventverse.com/event/${id}`,
      images: [
        {
          url: event.imageUrl,
          width: 800,
          height: 600,
          alt: `Event: ${event.title}`,
        },
      ],
      siteName: "EventVerse",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `Event Details - ${event.title} - EventVerse`,
      description:
        event.description ||
        `Join us for ${event.title}, hosted by ${event.organizer?.username}.`,
      images: [event.imageUrl],
    },
  };
}

function EventDetailsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 2xl:max-w-6xl">
      <Skeleton className="h-[80vh] w-full rounded-lg bg-gray-300" />
      <div className="flex flex-col gap-6 p-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    </div>
  );
}

export default async function EventDetails(props: {
  params: IdParams;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const {id} = params;

  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  return (
    <>
      <Suspense fallback={<EventDetailsSkeleton />}>
        <section className="flex justify-center bg-primary-50 dark:bg-black/15 bg-dotted-pattern bg-contain">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-6xl ">
            <Image
              src={event.imageUrl}
              alt="Event Image"
              width={1000}
              height={1000}
              className="h-full min-h-[300px] object-cover object-center"
            />
            <div className="flex flex-col w-full gap-8 p-5 md:p-10">
              <div className="flex flex-col gap-6">
                <h2 className="h2-bold">{event.title}</h2>

                <div className="flex flex-col gap-3 sm:flex-row md:items-center">
                  <div className="flex gap-3">
                    <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                      {event.isFree ? "FREE" : `$${event.price}`}
                    </p>
                    <Link href={`/?category=${event.category.name}#events`}>
                      <p className="hover:text-primary p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                        #{event.category.name}
                      </p>
                    </Link>
                  </div>
                  <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                    By{" "}
                    <Link
                      href={`/profile/${event.organizer?.username}`}
                      className="text-primary-500 "
                    >
                      @{event.organizer?.username}
                    </Link>
                  </p>
                </div>
              </div>

              <Suspense
                fallback={
                  <Button size="lg" className="button sm:w-fit">
                    Checking Info
                  </Button>
                }
              >
                <CheckoutButton event={event} />
              </Suspense>

              <div className="flex flex-col gap-5">
                <div className="flex gap-2 md:gap-3">
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="Calender icon"
                    width={32}
                    height={32}
                  />
                  <div className="p-medium-16 lg:p-regular-20 flex flex-col items-center">
                    <p>
                      {formatDateTime(event.startDateTime).dateOnly} -{" "}
                      {formatDateTime(event.startDateTime).timeOnly}
                    </p>

                    <p>
                      {formatDateTime(event.endDateTime).dateOnly} -{" "}
                      {formatDateTime(event.endDateTime).timeOnly}
                    </p>
                  </div>
                </div>
                <div className="p-regular-20 flex items-center gap-3">
                  <Image
                    src="/assets/icons/location.svg"
                    alt="location icon"
                    width={32}
                    height={32}
                  />
                  <p className="p-medium-16 lg:p-regular-20">
                    {event.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="p-bold-20 text-grey-600">Event Description</p>
                <p className="p-medium-16 lg:p-regular-18">
                  {event.description}
                </p>
                <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
                  {event.url}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Suspense>

      <section className="wrapper flex flex-col gap-8 my-8 md:my-12">
        <h2 className="h2-bold">Related Events</h2>
        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Related Event Found"
          emptyStateSubtext="Hopefully there will be some in the future"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
}
