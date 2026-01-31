import React from 'react';
import { Link } from 'react-router-dom';
import { allServices } from '../pages/ServiceData';
import { ArrowRight } from 'lucide-react';

const FeaturedServices = () => {
  // Show only the first 3 services on the home page
  const limitedServices = allServices.slice(0, 3);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* HEADER SECTION - Animated Reveal */}
        <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 gap-4 animate-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-[#095884] text-center md:text-left">
            Our <span className="text-[#A1C948]">Specialized</span> Services
          </h2>
          
          <Link 
            to="/offerings/services" 
            className="flex items-center gap-2 text-[#A1C948] font-bold hover:text-[#095884] transition-all group text-sm md:text-base border-b-2 border-transparent hover:border-[#095884]"
          >
            See All Services 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* GRID SECTION WITH STAGGERED SLIDE ANIMATION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {limitedServices.map((service, index) => (
            <div 
              key={service.id} 
              className="animate-service-feature group p-6 border border-gray-100 rounded-3xl bg-white transition-all duration-500 hover:shadow-[0_30px_60px_rgba(9,88,132,0.1)] hover:-translate-y-3 hover:border-[#A1C948]/30"
              style={{ animationDelay: `${index * 0.2}s` }} // Each card slides in 0.2s after the previous
            >
              {/* Image Container with smooth Zoom */}
              <div className="overflow-hidden rounded-2xl mb-6 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-56 object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                {/* Subtle Overlay on hover */}
                <div className="absolute inset-0 bg-[#095884]/0 group-hover:bg-[#095884]/10 transition-colors duration-500" />
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-[#095884] mb-3 transition-colors group-hover:text-[#A1C948]">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-2 mb-8 text-sm leading-relaxed">
                  {service.desc}
                </p>
                
                <Link 
                  to={`/offerings/services/${service.id}`} 
                  className="inline-flex items-center gap-2 text-[#A1C948] font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest"
                >
                  Learn More 
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;