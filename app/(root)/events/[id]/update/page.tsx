import EventForm from "@/components/ui/shared/EventForm";
import {getEventById} from "@/lib/actions/event.actions";
import {auth} from "@clerk/nextjs/server";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Update Event - EventVerse",
  description:
    "Organize and manage your events with ease on EventVerse. Create a new event and share unforgettable experiences with others.",
  icons: {
    icon: "/assets/images/logo.svg",
    shortcut: "/assets/images/logo.svg",
  },
  openGraph: {
    title: "Update Event - EventVerse",
    description:
      "Easily create, organize, and manage events. EventVerse simplifies event hosting with powerful tools.",
    url: "https://eventversely.vercel.app/eventId/update",
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
    title: "Update Event - EventVerse",
    description:
      "EventVerse lets you create, manage, and promote events seamlessly. Join now to make your event unforgettable!",
    images: ["/assets/images/og-image.webp"],
  },
};

type UpdateEventProps = {
  params: {
    id: string;
  };
};

export default async function UpdateEvent({params: {id}}: UpdateEventProps) {
  const event = await getEventById(id);
  const {sessionClaims} = auth();
  const userId = sessionClaims?.userId as string;

  if (event.organizer._id.toString() === userId) {
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
}
