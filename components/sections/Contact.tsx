"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: any) => {
  e.preventDefault();

  const loadingToast = toast.loading("Sending message...");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    toast.dismiss(loadingToast);

    if (res.ok) {
      toast.success("Thank you for reaching out. Someone will connect with you soon.");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (err) {
    toast.dismiss(loadingToast);
    toast.error("Error sending message.");
  }
};

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Get Connected</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message..."
              required
            />
          </div>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>

        <p style={{ marginTop: "20px" }}>
          Or email: contact@fletchernac.com
        </p>
      </div>
    </section>
  );
}