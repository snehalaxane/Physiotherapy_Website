import React from 'react';
import doctorImg1 from "../assets/doctor1.jpg";
import doctorImg2 from "../assets/doctor2.jpg";
import doctorImg3 from "../assets/doctor3.jpg";
import doctorImg4 from "../assets/doctor4.jpg";

const TeamSection = () => {
  const teamMembers = [
    { name: "Dr. Madhavi", role: "Specialist In Manual Therapy", image: doctorImg2, delay: '0s' },
    { name: "Dr. N. Kishore Kumar", role: "Orthopedic Trauma & Joint Replacement Surgeon", image: doctorImg3, delay: '1s' },
    { name: "Dr. Priyanka.B", role: "Female specialist", image: doctorImg1, delay: '2s' },
    {name: "Dr. Srinivasalu Bodla", role: "Consultant Orthopedic Surgeon", image:doctorImg4 , delay: '3s'}
  ];

  return (
    <section className="relative bg-[#F5F3F0] py-24 font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 text-[#A1C948] rounded-full text-xs font-bold uppercase tracking-widest">
            Our Specialist Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#095884]">
            Our <span className="text-[#A1C948]">Dedicated</span> & Experienced Therapist Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center animate-float"
              style={{ animationDelay: member.delay }} // This makes them move out of sync
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] mb-4 overflow-hidden rounded-[2.5rem] shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Text Content */}
              <div className="text-center transition-transform duration-300 group-hover:scale-110">
                <h3 className="text-xl font-bold text-blue-950">
                  {member.name}
                </h3>
                <p className="text-sm text-[#A1C948] font-bold mt-1 uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;