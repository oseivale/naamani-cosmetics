// components/MonerisCheckoutWidget.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

type Props = {
  orderId: string;
  amount: number; // dollars
};

export default function MonerisCheckoutWidget({ orderId, amount }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  const [ticket, setTicket] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [checkoutStarted, setCheckoutStarted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const env = process.env.NEXT_PUBLIC_MONERIS_ENV === "prod" ? "prod" : "qa";

  const scriptSrc =
    env === "prod"
      ? "https://gateway.moneris.com/chkt/js/chkt_v1.00.js"
      : "https://gatewayt.moneris.com/chkt/js/chkt_v1.00.js";

  // 1) Get a ticket from our Next.js API
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setErrorMsg(null);

        const res = await fetch("/api/payments/moneris/preload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId, amount, customer: {} }),
        });

        const data = await res.json();
        if (!res.ok || !data.ticket) {
          throw new Error(data?.detail || "Unable to start checkout.");
        }

        if (!cancelled) {
          setTicket(data.ticket);
        }
      } catch (err: any) {
        if (!cancelled) {
          setErrorMsg(err?.message || "Something went wrong preparing checkout.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [orderId, amount]);

  // 2) Start Moneris checkout once script + ticket are ready
  useEffect(() => {
    if (!ticket || !scriptLoaded || checkoutStarted || !divRef.current) return;

    if (typeof window.monerisCheckout !== "function") {
      setErrorMsg("Moneris checkout failed to initialize.");
      return;
    }

    const myCheckout = new window.monerisCheckout();
    myCheckout.setMode(env); // "qa" or "prod"
    myCheckout.setCheckoutDiv("monerisCheckout");
    myCheckout.startCheckout(ticket);

    // When Moneris returns a receipt, verify it on the server
    myCheckout.setCallback("payment_receipt", async function (data: any) {
      try {
        await fetch("/api/payments/moneris/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ticket, receipt: data }),
        });
      } catch (err) {
        console.error("Moneris verification failed", err);
      }
    });

    // When checkout is complete, send user to thank-you page
    myCheckout.setCallback("payment_complete", function () {
      window.location.href = `/order/${orderId}/thank-you`;
    });

    setCheckoutStarted(true);
  }, [ticket, scriptLoaded, checkoutStarted, env, orderId]);

  if (loading) {
    return (
      <div className="w-full text-sm text-gray-600">
        Preparing secure checkout…
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="w-full text-sm text-red-600">
        {errorMsg}
      </div>
    );
  }

  return (
    <>
      {/* Moneris script injection */}
      <Script
        src={scriptSrc}
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
        onError={() => setErrorMsg("Failed to load Moneris script.")}
      />

      {/* Moneris will inject its hosted checkout UI into this div */}
      <div id="monerisCheckout" ref={divRef} className="w-full" />
    </>
  );
}
