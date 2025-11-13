// app/api/payments/moneris/charge/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from "next/server";

// const isProd = process.env.MONERIS_ENV === "prod";

const API_BASE = process.env.MONERIS_API_BASE || "https://api.sb.moneris.io";
const CLIENT_ID = process.env.MONERIS_CLIENT_ID!;
const CLIENT_SECRET = process.env.MONERIS_CLIENT_SECRET!;
const MERCHANT_ID = process.env.MONERIS_MERCHANT_ID!;

// Helper to get an access token from Moneris API (OAuth2 client_credentials)
async function getAccessToken() {
    const res = await fetch(`${API_BASE}/oauth2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            scope: "payment.write",
        }).toString(),
        cache: "no-store",
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("Moneris OAuth error:", res.status, text);
        throw new Error("Failed to authenticate with Moneris API");
    }

    const data = await res.json();
    return data.access_token as string;
}

export async function POST(req: Request) {
    try {
        const { orderId, amount, currency, temporaryToken } = await req.json();

        if (!orderId || typeof amount !== "number" || !temporaryToken) {
            return NextResponse.json(
                { error: "invalid_request", detail: "orderId, amount, and temporaryToken are required." },
                { status: 400 }
            );
        }

        // TODO: Recalculate amount server-side from DB/cart to avoid trusting the client

        const accessToken = await getAccessToken();

        // Create payment via Moneris API
        const res = await fetch(`${API_BASE}/payments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            cache: "no-store",
            body: JSON.stringify({
                merchantId: MERCHANT_ID,
                amount: amount.toFixed(2),
                currencyCode: currency || "CAD",
                automaticCapture: true, // like Basic Purchase :contentReference[oaicite:10]{index=10}
                orderId: String(orderId),
                paymentMethodData: {
                    paymentMethodType: "TEMPORARY_TOKEN",
                    temporaryToken,
                },
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error("Moneris payment error:", res.status, data);
            return NextResponse.json(
                { error: "payment_failed", detail: "Payment was declined or failed.", raw: data },
                { status: 502 }
            );
        }

        // Inspect data for approval, response codes etc. (see Response Handling / Basic Purchase docs)
        // e.g. data.status, data.responseCode, data.id, etc. :contentReference[oaicite:11]{index=11}

        // TODO: Store transaction in your DB, mark order as paid, etc.

        return NextResponse.json({ ok: true, payment: data });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

    } catch (err: any) {
        console.error("Charge route error:", err);
        return NextResponse.json(
            { error: "server_error", detail: err?.message || "Unexpected error processing payment." },
            { status: 500 }
        );
    }
}
