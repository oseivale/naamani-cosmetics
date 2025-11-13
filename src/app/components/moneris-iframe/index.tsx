// components/MonerisHTFrame.tsx
"use client";

import { useEffect, useState } from "react";

type Props = {
  orderId: string;
  amount: number;      // in dollars
  currency?: string;   // e.g. "CAD"
};

export default function MonerisHTFrame({ orderId, amount, currency = "CAD" }: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "paid" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const env = process.env.NEXT_PUBLIC_MONERIS_ENV === "prod" ? "prod" : "qa";

  // Base iframe URL from env (includes profileId & base params from Moneris guide)
  const baseHtUrl = process.env.NEXT_PUBLIC_MONERIS_HT_URL!;
  // Optionally add order/amount as query params if your HT profile uses them
  const iframeSrc = `${baseHtUrl}&order_no=${encodeURIComponent(
    orderId
  )}&amount=${amount.toFixed(2)}&env=${env}`;

  // Allowed origins (update to exactly match the hosts Moneris gives you)
  const allowedOrigins = [
    "https://gatewayt.moneris.com",
    "https://gateway.moneris.com",
    "https://www3.moneris.com",
  ];

  // 1) Listen for temporaryToken via postMessage
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!allowedOrigins.includes(event.origin)) return;

      let data: any = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          // not JSON, ignore
        }
      }

      // The exact shape is in the HT docs; often contains temporary token, code, msg, etc.
      const tempToken = data?.temporaryToken || data?.temp_token || data?.token;
      const responseCode = data?.responseCode ?? data?.code;

      if (!tempToken) return;

      if (responseCode && String(responseCode) !== "0") {
        setErrorMsg("Your card was not accepted. Please check your details or try another card.");
        setStatus("error");
        return;
      }

      setToken(tempToken);
      setStatus("submitting");
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // 2) When we get a token, call our API to charge it
  useEffect(() => {
    if (!token || status !== "submitting") return;

    (async () => {
      try {
        const res = await fetch("/api/payments/moneris/charge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId,
            amount,
            currency,
            temporaryToken: token,
          }),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.detail || "Payment failed");
        }

        // You can inspect data for approval status, etc.
        setStatus("paid");
        // Redirect to confirmation page
        window.location.href = `/order/${orderId}/thank-you`;
      } catch (err: any) {
        console.error("Charge failed", err);
        setErrorMsg(err?.message || "Payment failed. Please try again.");
        setStatus("error");
      }
    })();
  }, [token, status, orderId, amount, currency]);

  return (
    <div className="space-y-4">
      {(status === "idle" || status === "error") && (
        <>
          <p className="text-sm text-gray-700">
            Enter your card details below. Your information is securely handled by Moneris.
          </p>
          <iframe
            src={iframeSrc}
            title="Card payment"
            className="w-full h-80 border rounded-md"
            allow="payment *"
          />
        </>
      )}

      {status === "submitting" && (
        <p className="text-sm text-gray-700">Processing your payment, please wait…</p>
      )}

      {status === "paid" && (
        <p className="text-sm text-green-700">Payment successful! Redirecting…</p>
      )}

      {errorMsg && (
        <p className="text-sm text-red-600">
          {errorMsg}
        </p>
      )}
    </div>
  );
}
