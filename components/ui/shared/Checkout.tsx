"use client";

import {IEvent} from "@/lib/database/models/event.model";
import {Button} from "../button";
import {loadStripe} from "@stripe/stripe-js";
import {useEffect} from "react";
import {checkoutOrder} from "@/lib/actions/order.actions";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default async function Checkout({
  event,
  userId,
}: {
  event: IEvent;
  userId: string;
}) {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  async function onCheckout() {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      isFree: event.isFree,
      price: event.price,
      buyerId: userId,
    };
    await checkoutOrder(order);
  }
  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Enroll for Free" : "Buy Ticket"}
      </Button>
    </form>
  );
}
