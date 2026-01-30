import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Set 1 to have the second item open by default

  const faqs = [
    {
      question: "How can you improve musculoskeletal disease?",
      answer: "Improving musculoskeletal health involves a combination of targeted physical therapy, strength training, flexibility exercises, and ergonomic adjustments to daily activities."
    },
    {
      question: "How do musculoskeletal disorders take place?",
      answer: "When a worker gets exposed to MSD based risk factors, fatigue takes place. When that fatigue outruns the recovery system of the body, it gives rise to musculoskeletal imbalance."
    },
    {
      question: "What does the musculoskeletal pain feel like?",
      answer: "Musculoskeletal pain can vary from a dull ache to sharp, stabbing sensations. It often involves stiffness, localized swelling, and decreased range of motion in the affected area."
    }
  ];

  return (
    <section className="bg-[#6B5E8C] pt-20 pb-10 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-white text-center font-serif mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/20 rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left text-white hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-medium">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronDown size={24} className="text-white" />
                ) : (
                  <ChevronRight size={24} className="text-white" />
                )}
              </button>

              {/* Animated Answer Section */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-white/80 leading-relaxed text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;