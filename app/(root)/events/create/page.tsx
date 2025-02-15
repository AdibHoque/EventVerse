import EventForm from "@/components/ui/shared/EventForm";
import {auth} from "@clerk/nextjs/server";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Create Event - EventVerse",
  description:
    "Organize and manage your events with ease on EventVerse. Create a new event and share unforgettable experiences with others.",
  icons: {
    icon: "/assets/images/logo.svg",
    shortcut: "/assets/images/logo.svg",
  },
  openGraph: {
    title: "Create Event - EventVerse",
    description:
      "Easily create, organize, and manage events. EventVerse simplifies event hosting with powerful tools.",
    url: "https://eventversely.vercel.app/events/create",
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
    title: "Create Event - EventVerse",
    description:
      "EventVerse lets you create, manage, and promote events seamlessly. Join now to make your event unforgettable!",
    images: ["/assets/images/og-image.webp"],
  },
};

export default async function CreateEvent() {
  const {sessionClaims} = await auth();
  const userId = sessionClaims?.userId as string;
  return (
    <>
      <section className="bg-primary-50 dark:bg-black/15 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create"></EventForm>
      </div>
    </>
  );
}
