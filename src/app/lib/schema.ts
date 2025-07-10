import * as z from "zod";

export const emailFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type EmailFormData = z.infer<typeof emailFormSchema>;