import React from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      feedback: "The workout programs are amazing! I’ve gained so much energy.",
    },
    {
      name: "Priya Mehta",
      feedback: "The trainers are supportive and motivating. Highly recommend!",
    },
    {
      name: "Rahul Verma",
      feedback: "The diet chart with workouts really helped me achieve my goals.",
    },
  ];

  return (
    <section id="testimonials" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-gray-700 italic">"{t.feedback}"</p>
            <h3 className="mt-4 font-semibold text-lg">{t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
