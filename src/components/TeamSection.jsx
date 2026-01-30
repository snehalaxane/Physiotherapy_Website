import React from 'react';
import doctorImg1 from "../assets/doctor1.jpg";
import doctorImg2 from "../assets/doctor2.jpg";
import doctorImg3 from "../assets/doctor3.jpg";

const TeamSection = () => {
  const teamMembers = [
         {
   name: "Dr. Madhavi",
   role: "Specilist In Manual Therapy",
   image: doctorImg2,
},
    {
   name: "Dr. N. Kishore Kumar ",
   role: "Orthopedic Trauma & Joint Replacement Surgeon",
   image: doctorImg3,
},

   {
   name: "Dr.Priyanka.B",
   role: "Female specialist",
   image: doctorImg1,
}
  
  ];

  return (
   <section className="relative  bg-[#F5F3F0]  py-24 font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 text-[#A1C948] rounded-full text-xs font-bold uppercase tracking-widest font-poppins">
            Our Specialist Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#095884]">
            Our <span className="text-[#A1C948]">Dedicated</span> & Experienced Therapist Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group flex flex-col items-center">
              {/* Image Container with Rounded Corners */}
              <div className="w-full aspect-square mb-4 overflow-hidden rounded-[2.5rem] shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all"
                />
              </div>
              
              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-blue-950 font-poppins">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-800 font-poppins mt-1">
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