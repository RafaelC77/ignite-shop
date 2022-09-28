import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { items } = req.body;
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = process.env.NEXT_URL;

  if (req.method !== "POST") {
    return res.status(405);
  }

  if (!items) {
    return res.status(400).json({ error: "Price not found" });
  }

  console.log(items);

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: items,
    success_url: successUrl,
    cancel_url: cancelUrl,
    currency: "BRL",
  });

  return res.status(201).json({
    sessionId: checkoutSession.id,
  });
}
