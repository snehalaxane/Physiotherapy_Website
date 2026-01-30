import React from 'react';
import { Quote, Star } from 'lucide-react';

const RecoveryStories = () => {
  const stories = [
    {
      name: "Rajesh Kumar",
      condition: "Post-ACL Surgery",
      story: "After my knee surgery, I thought I'd never play football again. The personalized rehab plan at Sri Sai Priya was intense but exactly what I needed. I'm back on the field now!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      name: "Saritha V.",
      condition: "Chronic Back Pain",
      story: "I had lived with lower back pain for 5 years. Within 8 weeks of targeted musculoskeletal therapy, I am finally pain-free and can pick up my grandkids without fear.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      condition: "Sports Injury (Shoulder)",
      story: "The sports injury team is world-class. They didn't just treat the pain; they fixed my throwing mechanics. My shoulder feels stronger than it did before the injury.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      rating: 5
    }
  ];

  return (
    <section className="py-24  bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h3 className="text-[#095884] font-sans font-bold uppercase tracking-widest text-xs mb-4">Patient Success</h3>
            <h2 className="text-5xl text-[#A1C948] font-serif leading-tight">Stories of <br/> Remarkable Recovery</h2>
          </div>
          <p className="text-gray-600 font-sans max-w-sm">
            Nothing makes us happier than seeing our patients return to the activities they love. Here are a few of their journeys.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl relative shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              {/* Quote Icon Background */}
              <Quote className="absolute top-6 right-8 text-blue-50 opacity-10 group-hover:opacity-30 transition-opacity" size={80} />
              
              <div className="flex items-center gap-1 mb-6 text-orange-400">
                {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className="text-blue-950 font-serif text-lg leading-relaxed mb-8 relative z-10 italic">
                "{item.story}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-50 pt-8 mt-auto">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-50" 
                />
                <div>
                  <h4 className="font-bold text-blue-950 font-sans">{item.name}</h4>
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-tighter bg-teal-50 px-2 py-0.5 rounded">
                    {item.condition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Stories */}
        <div className="mt-16 text-center">
          <button className="text-blue-900 font-bold border-b-2 border-blue-900 pb-1 hover:text-teal-600 hover:border-teal-600 transition-all font-sans uppercase text-sm tracking-widest">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecoveryStories;