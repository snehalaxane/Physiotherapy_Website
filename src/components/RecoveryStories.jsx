import React from 'react';
import { Quote, Star } from 'lucide-react';
import Patient1 from "../assets/Patient1.jpg"
import Patient2 from "../assets/Patient2.jpg";
import Patient3 from "../assets/Patient3.jpg"

const RecoveryStories = () => {
  const stories = [
    {
      name: "Devi Balla",
      condition: "Chronic Back Pain",
      story: "So good and he will understand the prblm clearly nd having more patience, friendly in nature nd gives mental awareness to the pt nd coming to treatment wise he gives 100% best.",
      image: Patient2,
      rating: 5
    },
    {
      name: "MD. Naushad Ali",
      condition: "Foot Fracture",
      story: "He has in-depth knowledge and made us understand things in a very clear and crisp manner. The way he interacts with his patients separates him from Others. I completely recommend.",
      image: Patient1,
      rating: 5
    },
    {
      name: "Ramesh Dharani Gifts",
      condition: "ACL",
      story: "Best physiotherapy clinic in uppal area Dr Madhu sir is very experienced doctor. Within the week I got relief from pain. They are using advanced technology machines.",
      image: Patient3,
      rating: 5
    },
     {
      name: "Jijo Sam",
      condition: "Physiotherapy Treatment",
      story: " I could say that my Dad is able to see lot of improvements around the knee. In terms of pain management, exercise therapy, the swelling around the area has decreased a lot and improved knee movement. it's one of the best physiotherapy centre ",
      image: Patient3,
      rating: 5
    },
  ];

  // We double the array to create a seamless infinite loop
  const infiniteStories = [...stories, ...stories, ...stories];

  return (
    <section className="py-24 bg-[#F5F3F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-[#A1C948] font-bold uppercase tracking-widest text-xs mb-4">Patient Success</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#095884]">
              Our Stories of <span className="text-[#A1C948]">Remarkable</span> Recovery
            </h2>
          </div>
          <p className="text-gray-900 font-poppins max-w-sm">
            Nothing makes us happier than seeing our patients return to the activities they love.
          </p>
        </div>
      </div>

      {/* AUTO-SCROLLING ROW */}
      <div className="relative">
        {/* Gradient Overlays for a "Fade" effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F3F0] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F3F0] to-transparent z-10" />

        <div className="animate-marquee gap-8 px-4">
          {infiniteStories.map((item, index) => (
            <div 
              key={index} 
              className="w-[400px] flex-shrink-0 bg-white p-8 rounded-2xl relative shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
            >
              <Quote className="absolute top-6 right-8 text-blue-50 opacity-10 group-hover:opacity-30 transition-opacity" size={60} />
              
              <div className="flex items-center gap-1 mb-4 text-orange-400">
                {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-blue-950 font-poppins text-md leading-relaxed mb-6 flex-grow">
                "{item.story}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-50" 
                />
                <div>
                  <h4 className="font-bold text-[#095884] font-poppins text-sm">{item.name}</h4>
                  <span className="text-[10px] font-bold text-[#A1C948] uppercase tracking-tighter bg-teal-50 px-2 py-0.5 rounded">
                    {item.condition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecoveryStories;