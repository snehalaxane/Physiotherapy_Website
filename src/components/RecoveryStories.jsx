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
      story: "So good and he will understand the prblm clearly nd having more patience, friendly in nature nd gives mental awareness to the pt nd coming to treatment wise he gives 100% best. He won't charge much when we compare with others. 👍👏 …",
      image: Patient2,
      rating: 5
    },
     {
      name: "MD. Naushad Ali",
      condition: "Foot Fracture",
      story: "Here, we visited for my friend treatment of foot fracture. He has in-depth knowledge and made us understand things in a very clear and crisp manner. The way he interacts with his patients is something that separates him from Others. I completely recommend this doctor. Thanks..",
      image: Patient1,
      rating: 5
    },
    {
      name: "Ramesh Dharani Gifts",
      condition: "ACL",
      story: "Best physiotherapy clinic in uppal area Dr Madhu sir is very experienced doctor i was gone for ACL tear post surgery with in the week I got reilif from back pain they are using advanced technology machines feel very comfortable i fully recommend...",
     image: Patient3,
      rating: 5
    },
  ];

  return (
    <section className="py-24  bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h3 className="text-[#A1C948]  font-bold uppercase tracking-widest text-xs mb-4">Patient Success</h3>

              <h2 className="text-4xl md:text-5xl font-bold text-[#A1C948]">
             <span className="text-[#095884]">Our Stories of </span> Remarkable Recovery
          </h2>
            {/* <h2 className="text-5xl text-[#A1C948] leading-tight">Stories of <br/> Remarkable Recovery</h2> */}
          </div>
          <p className="text-gray-900 font-poppins max-w-sm">
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

              <p className="text-blue-950 font-poppins text-lg leading-relaxed mb-8 relative z-10">
                "{item.story}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-50 pt-8 mt-auto">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-50" 
                />
                <div>
                  <h4 className="font-bold text-blue-950 font-poppins">{item.name}</h4>
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-tighter bg-teal-50 px-2 py-0.5 rounded">
                    {item.condition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Stories */}
        {/* <div className="mt-16 text-center">
          <button className="text-blue-900 font-bold border-b-2 border-blue-900 pb-1 hover:text-teal-600 hover:border-teal-600 transition-all font-poppins uppercase text-sm tracking-widest">
            Read More Success Stories
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default RecoveryStories;