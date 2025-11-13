'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'TechBusiness transformed our entire digital infrastructure. Their expertise and dedication are unmatched. We saw a 300% increase in efficiency within the first quarter.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote: 'The team\'s technical prowess and innovative solutions exceeded all expectations. They delivered a complex cloud migration project ahead of schedule and under budget.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'StartupHub',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'Working with TechBusiness was a game-changer for our startup. Their mobile app development brought our vision to life and our users love it. Highly recommended!',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Director of IT',
      company: 'GlobalTech Industries',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'Outstanding cybersecurity solutions that gave us peace of mind. Their proactive approach to security has protected our business from multiple threats.',
      rating: 5,
    },
    {
      name: 'Jennifer White',
      role: 'VP of Operations',
      company: 'Retail Solutions Inc',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      quote: 'The IoT integration they implemented revolutionized our supply chain. Real-time tracking and analytics have dramatically improved our operations.',
      rating: 5,
    },
    {
      name: 'Robert Taylor',
      role: 'Managing Director',
      company: 'FinanceFirst',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      quote: 'Professional, reliable, and incredibly skilled. TechBusiness delivered a custom financial platform that transformed how we serve our clients.',
      rating: 5,
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="text-blue-200 absolute top-6 right-6" size={48} />
              
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}