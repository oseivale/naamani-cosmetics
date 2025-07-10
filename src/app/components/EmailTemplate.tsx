import React from "react";

export interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, message }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "600px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ color: "#333", textAlign: "center" }}>New Contact Form Submission</h2>
      <div style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "5px", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Message:</strong> {message}</p>
      </div>
      <p style={{ fontSize: "12px", color: "#888", marginTop: "15px", textAlign: "center" }}>
        This email was sent via Naamani Cosmetics contact form.
      </p>
    </div>
  );
};