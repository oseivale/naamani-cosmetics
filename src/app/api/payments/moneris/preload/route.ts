// app/api/payments/moneris/preload/route.ts
import { NextResponse } from "next/server";

const isProd = process.env.MONERIS_ENV === "prod";

export async function POST(req: Request) {
  try {
    const { orderId, amount, customer } = await req.json();

    if (!orderId || typeof amount !== "number") {
      return NextResponse.json(
        { error: "invalid_request", detail: "orderId and amount are required." },
        { status: 400 }
      );
    }

    const endpoint = isProd
      ? "https://gateway.moneris.com/chkt/request/preload"
      : "https://gatewayt.moneris.com/chkt/request/preload";

    const body = {
      store_id: process.env.MONERIS_STORE_ID,
      api_token: process.env.MONERIS_API_TOKEN,
      // Often you'll have a specific checkout/profile id from Moneris here:
      // checkout_id: process.env.MONERIS_CHECKOUT_ID,
      txn_total: amount.toFixed(2),
      order_no: String(orderId),
      cust_id: customer?.id ?? undefined,
      environment: isProd ? "prod" : "qa",
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    // If Moneris (or Cloudflare) returns an HTTP error, surface a clean message
    if (!res.ok) {
      const text = await res.text(); // very likely the HTML 520 page
      console.error("Moneris preload HTTP error:", res.status, text.slice(0, 300));

      return NextResponse.json(
        {
          error: "preload_failed",
          status: res.status,
          detail:
            "Unable to contact Moneris gateway. If this persists, please contact support.",
          raw: process.env.NODE_ENV === "development" ? text : undefined,
        },
        { status: 502 }
      );
    }

    // Try to parse JSON, but guard against HTML / non-JSON bodies
    let data: any;
    try {
      data = await res.json();
    } catch (e) {
      const text = await res.text();
      console.error("Moneris preload non-JSON response:", text.slice(0, 300));
      return NextResponse.json(
        {
          error: "preload_invalid_response",
          detail:
            "Moneris returned an unexpected response while starting checkout.",
          raw: process.env.NODE_ENV === "development" ? text : undefined,
        },
        { status: 502 }
      );
    }

    if (!data.ticket) {
      console.error("Moneris preload missing ticket:", data);
      return NextResponse.json(
        {
          error: "preload_no_ticket",
          detail: "Moneris did not return a checkout ticket.",
          raw: process.env.NODE_ENV === "development" ? data : undefined,
        },
        { status: 502 }
      );
    }

    // Success 🎉
    return NextResponse.json({ ticket: data.ticket });
  } catch (err: any) {
    console.error("Moneris preload unexpected error:", err);
    return NextResponse.json(
      {
        error: "preload_exception",
        detail:
          err?.message || "Unexpected error preparing payment. Please try again.",
      },
      { status: 500 }
    );
  }
}
