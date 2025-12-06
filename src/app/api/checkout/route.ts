/* eslint-disable @typescript-eslint/no-explicit-any */
import { buildCustomerOrderEmail } from "@/lib/email/customer-order-email";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Generate human-readable order numbers
function generateOrderNumber() {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");
    const datePart = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
    const timePart = `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
    const randomPart = Math.floor(Math.random() * 9000 + 1000);
    return `NC-${datePart}${timePart}-${randomPart}`;
}

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP_HOST,
    port: Number(process.env.EMAIL_SMTP_PORT || 587),
    secure: true, // set to true if using port 465
    auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASS,
    },
});

// export async function POST(req: NextRequest) {
//     try {
//         const body = await req.json();
//         const { cart, totals, customer, shippingAddress, billingAddress } = body;

//         if (!customer?.email) {
//             return NextResponse.json(
//                 { error: "Customer email missing" },
//                 { status: 400 }
//             );
//         }

//         if (!cart || cart.length === 0) {
//             return NextResponse.json(
//                 { error: "Cart is empty" },
//                 { status: 400 }
//             );
//         }

//         const orderNumber = generateOrderNumber();

//         const ownerEmail = process.env.SHOP_OWNER_EMAIL;
//         const fromEmail = process.env.ORDER_FROM_EMAIL;
//         const etransferEmail = process.env.ETRANSFER_EMAIL;

//         if (!ownerEmail || !fromEmail) {
//             return NextResponse.json(
//                 { error: "Missing required environment variables" },
//                 { status: 500 }
//             );
//         }

//         // Format items
//         const itemsText = cart
//             .map(
//                 (item: any) =>
//                     `- ${item.name}${item.scent ? ` (${item.scent})` : ""}${item.size ? ` ${item.size}` : ""
//                     } x ${item.quantity} = $${(Number(item.price) * item.quantity).toFixed(2)}`
//             )
//             .join("\n");

//         // Format address
//         const shipping = `${shippingAddress.line1}
// ${shippingAddress.line2 || ""}
// ${shippingAddress.city}, ${shippingAddress.province} ${shippingAddress.postalCode}
// ${shippingAddress.country}`;

//         const billing = billingAddress?.sameAsShipping
//             ? "Same as shipping"
//             : `${billingAddress.line1}
// ${billingAddress.line2 || ""}
// ${billingAddress.city}, ${billingAddress.province} ${billingAddress.postalCode}
// ${billingAddress.country}`;

//         // Email to Customer
//         const customerMail = {
//             from: fromEmail,
//             to: customer.email,
//             subject: `Your Naamani Cosmetics Order (${orderNumber}) – Payment Required`,
//             text: `
// Hi ${customer.firstName},

// Thank you for your order with Naamani Cosmetics!

// Order Number: ${orderNumber}

// Items:
// ${itemsText}

// Subtotal: $${totals.subtotal.toFixed(2)}
// Tax: $${totals.tax.toFixed(2)}
// Shipping: $${totals.shipping.toFixed(2)}
// Total: $${totals.grandTotal.toFixed(2)}

// Shipping Address:
// ${shipping}

// Billing Address:
// ${billing}

// IMPORTANT:
// Your order is PENDING until payment is received.

// To complete your order, please send an Interac e-Transfer for $${totals.grandTotal.toFixed(
//                 2
//             )} to:

// ${etransferEmail}

// Include the order number (${orderNumber}) in the message.

// Once payment is received, you will receive a confirmation email and your order will begin processing.

// Thank you for supporting Naamani Cosmetics!
//       `,
//         };

//         // Email to Store Owner
//         const ownerMail = {
//             from: fromEmail,
//             to: ownerEmail,
//             subject: `New Pending Order (${orderNumber}) – Awaiting Payment`,
//             text: `
// A new order has been placed.

// Order Number: ${orderNumber}

// Customer:
// ${customer.firstName} ${customer.lastName}
// Email: ${customer.email}
// Phone: ${customer.phone || "N/A"}

// Shipping Address:
// ${shipping}

// Billing Address:
// ${billing}

// Items:
// ${itemsText}

// Subtotal: $${totals.subtotal.toFixed(2)}
// Tax: $${totals.tax.toFixed(2)}
// Shipping: $${totals.shipping.toFixed(2)}
// Total: $${totals.grandTotal.toFixed(2)}

// Reminder: This order is NOT paid yet.
// Awaiting e-transfer to: ${etransferEmail}
//       `,
//         };

//         // Send both emails
//         await Promise.all([
//             transporter.sendMail(customerMail),
//             transporter.sendMail(ownerMail),
//         ]);

//         return NextResponse.json(
//             { success: true, orderNumber },
//             { status: 200 }
//         );
//     } catch (error: any) {
//         console.error("Checkout API error:", error);
//         return NextResponse.json(
//             { error: "Failed to process checkout", details: error?.message },
//             { status: 500 }
//         );
//     }
// }

export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      const { cart, totals, customer, shippingAddress, billingAddress } = body;
  
      if (!customer?.email) {
        return NextResponse.json(
          { error: "Customer email missing" },
          { status: 400 }
        );
      }
  
      if (!cart || cart.length === 0) {
        return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
      }
  
      const orderNumber = generateOrderNumber();
  
      const ownerEmail = process.env.SHOP_OWNER_EMAIL;
      const fromEmail = process.env.ORDER_FROM_EMAIL;
      const etransferEmail = process.env.ETRANSFER_EMAIL;
  
      if (!ownerEmail || !fromEmail || !etransferEmail) {
        return NextResponse.json(
          { error: "Missing required environment variables" },
          { status: 500 }
        );
      }
  
      // 🔹 Format items for owner email (and reuse in plain text if needed)
      const itemsText = cart
        .map(
          (item: any) =>
            `- ${item.name}${
              item.scent ? ` (${item.scent})` : ""
            }${item.size ? ` ${item.size}` : ""} x ${
              item.quantity
            } = $${(Number(item.price) * item.quantity).toFixed(2)}`
        )
        .join("\n");
  
      // 🔹 Format addresses for owner email
      const shipping = `${shippingAddress.line1}
  ${shippingAddress.line2 || ""}
  ${shippingAddress.city}, ${shippingAddress.province} ${
        shippingAddress.postalCode
      }
  ${shippingAddress.country}`;
  
      const billing = billingAddress?.sameAsShipping
        ? "Same as shipping"
        : `${billingAddress.line1}
  ${billingAddress.line2 || ""}
  ${billingAddress.city}, ${billingAddress.province} ${
            billingAddress.postalCode
          }
  ${billingAddress.country}`;
  
      // 🔹 Build styled customer email (plain text + HTML) via helper
      const { text: customerText, html: customerHtml } = buildCustomerOrderEmail({
        cart,
        totals,
        customer,
        shippingAddress,
        billingAddress,
        etransferEmail,
        orderNumber,
      });
  
      // ✉️ Email to Customer (now with HTML)
      const customerMail = {
        from: fromEmail,
        to: customer.email,
        subject: `Your Naamani Cosmetics Order (${orderNumber}) – Payment Required`,
        text: customerText, // from helper
        html: customerHtml, // from helper
      };
  
      // ✉️ Email to Store Owner (kept simple/plain text)
      const ownerMail = {
        from: fromEmail,
        to: ownerEmail,
        subject: `New Pending Order (${orderNumber}) – Awaiting Payment`,
        text: `
  A new order has been placed.
  
  Order Number: ${orderNumber}
  
  Customer:
  ${customer.firstName} ${customer.lastName}
  Email: ${customer.email}
  Phone: ${customer.phone || "N/A"}
  
  Shipping Address:
  ${shipping}
  
  Billing Address:
  ${billing}
  
  Items:
  ${itemsText}
  
  Subtotal: $${totals.subtotal.toFixed(2)}
  Tax: $${totals.tax.toFixed(2)}
  Shipping: $${totals.shipping.toFixed(2)}
  Total: $${totals.grandTotal.toFixed(2)}
  
  Reminder: This order is NOT paid yet.
  Awaiting e-transfer to: ${etransferEmail}
        `.trim(),
      };
  
      // Send both emails
      await Promise.all([
        transporter.sendMail(customerMail),
        transporter.sendMail(ownerMail),
      ]);
  
      return NextResponse.json({ success: true, orderNumber }, { status: 200 });
    } catch (error: any) {
      console.error("Checkout API error:", error);
      return NextResponse.json(
        { error: "Failed to process checkout", details: error?.message },
        { status: 500 }
      );
    }
  }
  
