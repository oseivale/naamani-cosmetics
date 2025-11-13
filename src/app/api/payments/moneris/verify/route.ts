// app/api/payments/moneris/verify/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { ticket } = await req.json();

  const endpoint = process.env.MONERIS_ENV !== "prod"
    ? "https://gatewayt.moneris.com/chkt/request/receipt"
    : "https://gateway.moneris.com/chkt/request/receipt";

  const payload = {
    store_id: process.env.MONERIS_STORE_ID,
    api_token: process.env.MONERIS_API_TOKEN,
    ticket,
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const data = await res.json();
  // Check approved status and amounts; store in DB; fulfill order
  // data holds definitive result from Moneris
  return NextResponse.json({ ok: true, data });
}
