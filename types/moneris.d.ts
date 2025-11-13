// types/moneris.d.ts
declare global {
    interface Window {
      monerisCheckout?: new () => {
        setMode: (mode: "qa" | "prod") => void;
        setCheckoutDiv: (id: string) => void;
        startCheckout: (ticket: string) => void;
        setCallback: (
          name: "payment_receipt" | "payment_complete" | string,
          cb: (data?: any) => void
        ) => void;
      };
    }
  }
  
  export {};
  