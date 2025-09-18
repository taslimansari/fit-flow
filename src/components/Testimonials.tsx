import React from "react";
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Manager",
      feedback: "FitFlow transformed my fitness routine completely! The trainers are incredibly supportive and the programs are perfectly structured. I've never felt stronger!",
      rating: 5,
      image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "James Rodriguez",
      role: "Software Engineer",
      feedback: "The HIIT programs are intense but so effective! Lost 20 pounds in 3 months and gained so much energy. The community support is amazing too.",
      rating: 5,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Emily Chen",
      role: "Teacher",
      feedback: "As a busy teacher, I needed flexible workout options. FitFlow's variety of programs and scheduling made it perfect for my lifestyle. Highly recommend!",
      rating: 5,
      image: "https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Members Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied members who have transformed their lives with FitFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.feedback}"
              </p>

              {/* User Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Happy Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Expert Trainers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};