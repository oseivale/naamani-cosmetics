// lib/email/customerOrderEmail.ts

type CartItem = {
    name: string;
    scent?: string | null;
    size?: string | null;
    quantity: number;
    price: number | string;
};

type Totals = {
    subtotal: number;
    tax: number;
    shipping: number;
    grandTotal: number;
};

type Customer = {
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
};

type Address = {
    line1?: string | null;
    line2?: string | null;
    city?: string | null;
    province?: string | null;
    postalCode?: string | null;
    country?: string | null;
};

interface BuildCustomerOrderEmailParams {
    cart: CartItem[];
    totals: Totals;
    customer: Customer;
    shippingAddress: Address;
    billingAddress?: Address & { sameAsShipping?: boolean };
    etransferEmail: string;
    orderNumber: string;
}

export function buildCustomerOrderEmail({
    cart,
    totals,
    customer,
    shippingAddress,
    billingAddress,
    etransferEmail,
    orderNumber,
}: BuildCustomerOrderEmailParams) {
    const itemsText = cart
        .map(
            (item) =>
                `- ${item.name}${item.scent ? ` (${item.scent}` : ""
                }${item.size ? `${item.scent ? ", " : " ("}${item.size})` : ""} x ${item.quantity
                } = $${(Number(item.price) * item.quantity).toFixed(2)}`
        )
        .join("\n");

    const shippingText = `${shippingAddress.line1 || ""}
  ${shippingAddress.line2 || ""}
  ${shippingAddress.city || ""}, ${shippingAddress.province || ""} ${shippingAddress.postalCode || ""
        }
  ${shippingAddress.country || ""}`;

    const billingIsSame = billingAddress?.sameAsShipping;
    const billingText = billingIsSame
        ? "Same as shipping"
        : `${billingAddress?.line1 || ""}
  ${billingAddress?.line2 || ""}
  ${billingAddress?.city || ""}, ${billingAddress?.province || ""} ${billingAddress?.postalCode || ""
        }
  ${billingAddress?.country || ""}`;

    const customerPlainText = `
  Hi ${customer.firstName || ""},
  
  Thank you for your order with Naamani Cosmetics!
  
  Your order number is: ${orderNumber}
  
  Order Summary:
  ${itemsText}
  
  Subtotal: $${totals.subtotal.toFixed(2)}
  Tax: $${totals.tax.toFixed(2)}
  Shipping: $${totals.shipping.toFixed(2)}
  Total: $${totals.grandTotal.toFixed(2)}
  
  Shipping Address:
  ${shippingText}
  
  Billing Address:
  ${billingText}
  
  IMPORTANT:
  Your order is currently PENDING.
  
  To complete your order, please send an Interac e-Transfer for $${totals.grandTotal.toFixed(
        2
    )} to ${etransferEmail} and include your order number (${orderNumber}) in the message.
  
  Once your payment is received and confirmed, your order will be processed.
  
  Thank you for supporting Naamani Cosmetics!
  `.trim();

    const customerHtmlTemplate = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Your Naamani Cosmetics Order</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f5f5f5;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5; padding:24px 0;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden; font-family:Arial, sans-serif; color:#111827;">
              <!-- Header -->
              <tr>
                <td style="padding:20px 24px; background-color:#684d9a; color:#ffffff; text-align:center;">
                  <h1 style="margin:0; font-size:20px; letter-spacing:1px; text-transform:uppercase;">
                    Naamani Cosmetics
                  </h1>
                    <img 
                        src="https://develop--naamani-cosmetics.netlify.app/images/NAAMANI-THIRD-LOGO.svg"
                        alt="Naamani Cosmetics"
                        width="140"
                        style="display:block; margin:0 auto 8px;"
                    />
                  <p style="margin:4px 0 0; font-size:12px; opacity:0.9;">
                    Naturally crafted skincare
                  </p>
                </td>
              </tr>
  
              <!-- Intro -->
              <tr>
                <td style="padding:24px 24px 8px;">
                  <p style="margin:0 0 8px; font-size:14px;">Hi ${customer.firstName || ""
        },</p>
                  <p style="margin:0 0 12px; font-size:14px; line-height:1.5;">
                    Thank you for your order with <strong>Naamani Cosmetics</strong>! We’ve received your order and it is currently
                    <strong>pending payment via Interac e-Transfer</strong>.
                  </p>
                </td>
              </tr>
  
              <!-- Order info -->
              <tr>
                <td style="padding:8px 24px 16px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px; border-collapse:collapse;">
                    <tr>
                      <td style="padding:6px 0; color:#6b7280;">Order #</td>
                      <td style="padding:6px 0; text-align:right; font-weight:600;">${orderNumber}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0; color:#6b7280;">Total</td>
                      <td style="padding:6px 0; text-align:right; font-weight:600;">
                        $${totals.grandTotal.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0; color:#6b7280;">Status</td>
                      <td style="padding:6px 0; text-align:right;">
                        <span style="display:inline-block; padding:2px 8px; border-radius:999px; background-color:#fef3c7; color:#92400e; font-size:11px; font-weight:600;">
                          Pending Payment
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
  
              <!-- Items -->
              <tr>
                <td style="padding:8px 24px 16px;">
                  <h2 style="margin:0 0 8px; font-size:14px;">Order Summary</h2>
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px; border-collapse:collapse;">
                    ${cart
            .map(
                (item) => `
                      <tr>
                        <td style="padding:6px 0; border-bottom:1px solid #e5e7eb;">
                          <div style="font-weight:600;">${item.name}</div>
                          ${item.scent || item.size
                        ? `<div style="color:#6b7280; font-size:12px;">
                                   ${item.scent ? item.scent : ""}${item.size ? ` (${item.size})` : ""
                        }
                                 </div>`
                        : ""
                    }
                          <div style="color:#9ca3af; font-size:12px;">Qty: ${item.quantity
                    }</div>
                        </td>
                        <td style="padding:6px 0; border-bottom:1px solid #e5e7eb; text-align:right; white-space:nowrap;">
                          $${(Number(item.price) * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    `
            )
            .join("")}
                  </table>
                </td>
              </tr>
  
              <!-- Totals -->
              <tr>
                <td style="padding:8px 24px 20px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px; border-collapse:collapse;">
                    <tr>
                      <td style="padding:4px 0; color:#6b7280;">Subtotal</td>
                      <td style="padding:4px 0; text-align:right;">$${totals.subtotal.toFixed(
                2
            )}</td>
                    </tr>
                    <tr>
                      <td style="padding:4px 0; color:#6b7280;">Tax</td>
                      <td style="padding:4px 0; text-align:right;">$${totals.tax.toFixed(
                2
            )}</td>
                    </tr>
                    <tr>
                      <td style="padding:4px 0; color:#6b7280;">Shipping</td>
                      <td style="padding:4px 0; text-align:right;">$${totals.shipping.toFixed(
                2
            )}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0; border-top:1px solid #d1d5db; font-weight:600;">Total</td>
                      <td style="padding:6px 0; border-top:1px solid #d1d5db; text-align:right; font-weight:700;">$${totals.grandTotal.toFixed(
                2
            )}</td>
                    </tr>
                  </table>
                </td>
              </tr>
  
              <!-- Payment instructions -->
              <tr>
                <td style="padding:8px 24px 20px;">
                  <h2 style="margin:0 0 8px; font-size:14px;">How to complete your order</h2>
                  <p style="margin:0 0 6px; font-size:13px; line-height:1.6;">
                    Please send an Interac e-Transfer for
                    <strong> $${totals.grandTotal.toFixed(
                2
            )} </strong> to <strong>${etransferEmail}</strong>.
                  </p>
                  <p style="margin:0 0 6px; font-size:13px; line-height:1.6;">
                    In the message or notes section of your e-transfer, please include your order number:
                    <strong>${orderNumber}</strong>.
                  </p>
                  <p style="margin:0; font-size:12px; color:#6b7280;">
                    Once your payment is received and confirmed, your order will be processed and you&apos;ll receive a follow-up email.
                  </p>
                </td>
              </tr>
  
              <!-- Footer -->
              <tr>
                <td style="padding:16px 24px 20px; text-align:center; font-size:11px; color:#9ca3af;">
                  Thank you for supporting Naamani Cosmetics.<br />
                  This email was sent automatically — you don&apos;t need to reply.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

    return {
        text: customerPlainText,
        html: customerHtmlTemplate,
    };
}
