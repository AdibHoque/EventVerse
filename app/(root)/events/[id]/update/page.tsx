import EventForm from "@/components/ui/shared/EventForm";
import {getEventById} from "@/lib/actions/event.actions";
import {auth} from "@clerk/nextjs/server";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

export default async function UpdateEvent({params: {id}}: UpdateEventProps) {
  const event = await getEventById(id);
  const {sessionClaims} = auth();
  const userId = sessionClaims?.userId as string;
  return (
    <>
      <section className="bg-primary-50 dark:bg-black/15 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm
          userId={userId}
          event={event}
          eventId={event._id}
          type="Update"
        ></EventForm>
      </div>
    </>
  );
}
