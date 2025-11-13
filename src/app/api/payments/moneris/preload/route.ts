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

    const baseUrl = isProd
      ? "https://gateway.moneris.com"
      : "https://gatewayt.moneris.com";

    // ✅ Correct endpoint for Moneris Checkout v2 preload
    const endpoint = `${baseUrl}/chktv2/request/request.php`;

    const payload = {
      store_id: process.env.MONERIS_STORE_ID,
      api_token: process.env.MONERIS_API_TOKEN,
      checkout_id: process.env.MONERIS_CHECKOUT_ID, // ✅ use Checkout ID, not store_id
      txn_total: amount.toFixed(2),
      environment: isProd ? "prod" : "qa",
      action: "preload",                             // ✅ required
      order_no: String(orderId),
      cust_id: customer?.id ?? undefined,
      // add other optional fields here (billing/shipping, dynamic_descriptor, etc.)
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    // If Moneris throws, surface a clean error
    if (!res.ok) {
      const text = await res.text();
      console.error("Moneris preload HTTP error:", res.status, text.slice(0, 300));
      return NextResponse.json(
        {
          error: "preload_failed",
          status: res.status,
          detail: "Unable to contact Moneris Checkout.",
          raw: process.env.NODE_ENV === "development" ? text : undefined,
        },
        { status: 502 }
      );
    }

    // Response format: { "response": { "success": true, "ticket": "..." } }
    const data = await res.json();

    const ticket =
      data?.ticket ??
      data?.response?.ticket ??
      null;

    if (!ticket) {
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

    return NextResponse.json({ ticket });
  } catch (err: any) {
    console.error("Moneris preload unexpected error:", err);
    return NextResponse.json(
      {
        error: "preload_exception",
        detail: err?.message || "Unexpected error preparing payment.",
      },
      { status: 500 }
    );
  }
}
