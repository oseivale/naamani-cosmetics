"use client";

import { useEffect, useRef, useState } from "react";

// Optional: if you're using TypeScript, add this somewhere global instead:
// declare global {
//   interface Window {
//     monerisCheckout?: new () => {
//       setMode: (mode: "qa" | "prod") => void;
//       setCheckoutDiv: (id: string) => void;
//       startCheckout: (ticket: string) => void;
//       setCallback: (
//         name: "payment_receipt" | "payment_complete" | string,
//         cb: (data?: any) => void
//       ) => void;
//     };
//   }
// }

export default function MonerisCheckoutWidget({
  orderId,
  amount,
}: {
  orderId: string;
  amount: number;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [ticket, setTicket] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const env = process.env.NEXT_PUBLIC_MONERIS_ENV === "prod" ? "prod" : "qa";
  const scriptSrc =
    env === "prod"
      ? "https://gateway.moneris.com/chkt/js/chkt_v1.00.js"
      : "https://gatewayt.moneris.com/chkt/js/chkt_v1.00.js";

  // 1) Get a ticket from our server
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
          throw new Error(data?.detail || "Unable to start checkout");
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

  // 2) Load Moneris script and start checkout once we have a ticket
  useEffect(() => {
    if (!ticket || !divRef.current) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      if (typeof window.monerisCheckout !== "function") {
        setErrorMsg("Moneris checkout failed to initialize.");
        return;
      }

      // @ts-ignore
      const myCheckout = new window.monerisCheckout();
      myCheckout.setMode(env); // "qa" or "prod"
      myCheckout.setCheckoutDiv("monerisCheckout");
      myCheckout.startCheckout(ticket);

      // Receipt callback – verify on server
      myCheckout.setCallback("payment_receipt", async function (_data: any) {
        try {
          const res = await fetch("/api/payments/moneris/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ticket }),
          });

          const verified = await res.json();
          // Optional: inspect `verified` for approval/amount/currency here
          // console.log("Verified receipt:", verified);
        } catch (err) {
          console.error("Moneris verification failed", err);
        }
      });

      // Complete callback – go to Thank You page
      myCheckout.setCallback("payment_complete", function () {
        window.location.href = `/order/${orderId}/thank-you`;
      });
    };

    script.onerror = () => {
      setErrorMsg("Failed to load Moneris payment script.");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [ticket, orderId, scriptSrc, env]);

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

  // Moneris will inject the full hosted checkout UI into this div
  return <div id="monerisCheckout" ref={divRef} className="w-full" />;
}
