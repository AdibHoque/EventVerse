import stripe from "stripe";
import {NextResponse} from "next/server";
import {createOrder} from "@/lib/actions/order.actions";

export async function POST(request: Request) {
  const body = await request.text();

  const sig = (await request.headers.get("stripe-signature")) as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({message: "Webhook error", error: err});
  }

  // Get the ID and type
  const eventType = event.type;

  // CREATE
  if (eventType === "checkout.session.completed") {
    const {id, amount_total, metadata, success_url} = event.data.object;

    if (
      !success_url &&
      !(success_url == "https://eventversely.vercel.app/profile")
    )
      return NextResponse.json({message: "Payment for a different service."});

    const order = {
      stripeId: id,
      eventId: metadata?.eventId || "",
      buyerId: metadata?.buyerId || "",
      totalAmount: amount_total ? (amount_total / 100).toString() : "0",
      createdAt: new Date(),
    };

    const newOrder = await createOrder(order);
    return NextResponse.json({message: "OK", order: newOrder});
  }

  return new Response("", {status: 200});
}
