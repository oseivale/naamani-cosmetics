// app/checkout/page.tsx

import MonerisCheckoutWidget from "../components/moneris-checkout-widget";

export default function CheckoutPage() {
  // In reality you'd fetch order data from DB/session here
  const orderId = "ORDER-12345";
  const amount = 42.99;

  return (
    <main className="mx-auto max-w-2xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <p className="text-sm text-gray-600">
        Order {orderId} — ${amount.toFixed(2)}
      </p>

      <div className="mt-4 rounded-lg border p-4">
        <MonerisCheckoutWidget orderId={orderId} amount={amount} />
      </div>
    </main>
  );
}
