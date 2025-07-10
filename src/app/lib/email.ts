"use server";

import { z } from "zod";
import { emailFormSchema } from "./schema";
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

// const resend = new Resend(process.env.RESEND_API_KEY);
// export const send  = async (emailFormData: z.infer<typeof emailFormSchema>) => {

//     const { data, error } = await resend.emails.send({
//         from: 'Acme <onboarding@resend.dev>',
//         to: 'valerie.osei@gmail.com',
//         subject: 'Hello world Welcome :)',
//         react: EmailTemplate({ firstName: emailFormData.name }),
//       });

//       if (error) {
//         // return res.status(400).json(error);
//         throw error
//       }
// }

console.log("🚀 Resend API Key Loaded:", process.env.RESEND_API_KEY?.slice(0, 5) + "********"); // Partial logging for security

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "valerie.osei@gmail.com",
    subject: "Hello world",
    html: `<p>Test</p>`,
  });

  if (error) {
    // return res.status(400).json(error);
    throw error;
  }

  res.status(200).json(data);
};
