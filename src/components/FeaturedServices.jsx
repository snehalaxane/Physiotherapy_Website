import React from 'react';
import { Link } from 'react-router-dom';
import { allServices } from '../pages/ServiceData'; // Import your full data
import { ArrowRight } from 'lucide-react';

const FeaturedServices = () => {
  // Show only the first 3 services on the home page
  const limitedServices = allServices.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
      {/* HEADER SECTION: Heading centered, Link at the end */}
        <div className="relative flex items-center justify-center mb-16">
          {/* Centered Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#095884] text-center">
            Our <span className="text-[#A1C948]">Specialized</span> Services
          </h2>
          
          {/* Link positioned at the absolute right */}
          <div className="absolute right-0 bottom-2 md:bottom-auto">
            <Link 
              to="/offerings/services" 
              className="flex items-center gap-2 text-[#A1C948] font-bold hover:text-[#095884] transition-all group text-sm md:text-base"
            >
              See All Services 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {limitedServices.map((service) => (
           <div key={service.id} className="p-6 border rounded-3xl">
    {/* This line fetches the image from your ServiceData.js */}
    <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-2xl mb-4" />
    
    <h3 className="text-xl font-bold">{service.title}</h3>
    <p className="line-clamp-2">{service.desc}</p>
    <Link to={`/offerings/services/${service.id}`} className="text-[#A1C948] font-bold mt-4 inline-block">Learn More</Link>
  </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;