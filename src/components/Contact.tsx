import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form className="max-w-xl mx-auto grid gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-lg w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-lg w-full"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="p-3 border rounded-lg w-full"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
