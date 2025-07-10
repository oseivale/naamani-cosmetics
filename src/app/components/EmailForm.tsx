"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { EmailFormData, emailFormSchema } from "../lib/schema";
import styles from './styles.module.css'
import { Loading } from "../icons/loading";

export default function EmailForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailFormSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    setStatus("loading");
    console.log("📩 Form Data Submitted:", data);

    // send(data)
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error)
      setStatus("error");
    }
  };

  return (
    <div className={styles.container}>
       <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.title}>Send us a message</h2>

      {/* Name Input */}
      <div className={styles.formGroup}>
        <label className="block text-sm font-medium">Name</label>
        <input {...register("name")} className="border rounded p-2 w-full" placeholder="Enter your name" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email Input */}
      <div className={styles.formGroup}>
        <label className="block text-sm font-medium">Email</label>
        <input {...register("email")} className="border rounded p-2 w-full" placeholder="Enter your email" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Message Input */}
      <div className={styles.formGroup}>
        <label className="block text-sm font-medium">Message</label>
        <textarea {...register("message")} className="border rounded p-2 w-full" placeholder="Your message" rows={4} />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
      {/* <span className={styles.loading}><Loading /> </span> */}
        {isSubmitting ? <span className={styles.loading}><Loading /> </span>: "Send Message"}
      </button>

      {/* Status Messages */}
      {status === "success" && <p className={styles.success}>Message sent successfully!</p>}
      {status === "error" && <p className={styles.error}>Failed to send message. Try again.</p>}
    </form>
    </div>
   
  );
}