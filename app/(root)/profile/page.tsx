import {Button} from "@/components/ui/button";
import Collection from "@/components/ui/shared/Collection";
import {getEventsByUser} from "@/lib/actions/event.actions";
import {getOrdersByUser} from "@/lib/actions/order.actions";
import {IOrder} from "@/lib/database/models/order.model";
import {SearchParams} from "@/types";
import {auth} from "@clerk/nextjs/server";
import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Profile - EventVerse",
  description:
    "Manage your event tickets and organized events on EventVerse. View your upcoming events and create new experiences.",
  icons: {
    icon: "/assets/images/logo.svg",
    shortcut: "/assets/images/logo.svg",
  },
  openGraph: {
    title: "My Profile - EventVerse",
    description:
      "Explore and manage your tickets and organized events. EventVerse offers a personalized space to track your events and create new ones.",
    url: "https://eventversely.vercel.app/profile",
    images: [
      {
        url: "/assets/images/og-image.webp",
        width: 800,
        height: 600,
        alt: "Create Event on EventVerse",
      },
    ],
    siteName: "EventVerse",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Profile - EventVerse",
    description:
      "Manage your event tickets and organized events in one place. Easily access your past and upcoming events with EventVerse.",
    images: ["/assets/images/og-image.webp"],
  },
};

export default async function ProfilePage(props: {searchParams: SearchParams}) {
  const {sessionClaims} = await auth();
  const userId = sessionClaims?.userId as string;
  const searchParams = await props.searchParams;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventssPage) || 1;

  const organizedEvents = await getEventsByUser({userId, page: 1});
  const orders = await getOrdersByUser({userId, page: 1});
  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];

  return (
    <>
      <section className="bg-primary-50 dark:bg-black/15 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="flex wrapper items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button size="lg" asChild className="button hidden sm:flex">
            <Link href="/#events">Explore More</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={orderedEvents}
          emptyTitle="No Event tickets purchased yet"
          emptyStateSubtext="No worries - Discover & purchase events from plenty of options"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      <section className="bg-primary-50 dark:bg-black/15 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="flex wrapper items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button size="lg" asChild className="button hidden sm:flex">
            <Link href="/events/create">Create Event</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No Event have been organized yet"
          emptyStateSubtext="You can create one anytime you want"
          collectionType="Events_Organized"
          limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
      </section>
    </>
  );
}
