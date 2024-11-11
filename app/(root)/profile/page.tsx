import {Button} from "@/components/ui/button";
import Collection from "@/components/ui/shared/Collection";
import {getEventsByUser} from "@/lib/actions/event.actions";
import {getOrdersByUser} from "@/lib/actions/order.actions";
import {IOrder} from "@/lib/database/models/order.model";
import {SearchParamProps} from "@/types";
import {auth} from "@clerk/nextjs/server";
import Link from "next/link";

export default async function ProfilePage({searchParams}: SearchParamProps) {
  const {sessionClaims} = auth();
  const userId = sessionClaims?.userId as string;

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
