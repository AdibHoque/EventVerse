"use client";

import {IEvent} from "@/lib/database/models/event.model";
import {SignedIn, SignedOut, useUser} from "@clerk/nextjs";
import {Button} from "../button";
import Link from "next/link";
import Checkout from "./Checkout";

export default function CheckoutButton({event}: {event: IEvent}) {
  const {user} = useUser();
  const userId = user?.publicMetadata.userId as string;
  const isEventClosed = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {isEventClosed ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer avaiable for this event.
        </p>
      ) : (
        <>
          <SignedOut>
            <Button asChild className="rounded-full button" size="lg">
              <Link href="/sign-in">Buy Ticket</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
}
