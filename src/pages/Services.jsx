import { Link } from 'react-router-dom';
import { allServices } from '../pages/ServiceData';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const Services = () => {
  return (
    <div className="bg-[#FDFCFB] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        
       
      {/* Header Section */}
<div className="grid place-items-center w-full mb-20">
  <div className="max-w-4xl w-full text-center">
    <span className="text-[#A1C948] font-bold uppercase tracking-[0.3em] text-xs mb-4 block text-center">
      Our Expertise
    </span>
    
    <h2 className="text-4xl md:text-5xl font-bold text-[#095884] text-center w-full block">
      Our <span className="text-[#A1C948]">Specialized</span> Services
    </h2>
    
    {/* Centered Decorative Line */}
    <div className="flex justify-center w-full mt-6">
       <div className="w-20 h-1.5 bg-[#A1C948] rounded-full"></div>
    </div>
  </div>
</div>

        {/* 4-COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allServices.map((service, index) => (
            <Link 
              to={`/offerings/services/${service.id}`} 
              key={service.id} 
              className="animate-fade-up group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Area */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt={service.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#095884]/20 to-transparent"></div>
                
                {/* Centered Icon Badge */}
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${service.color || 'bg-[#095884]'} text-white p-3.5 rounded-2xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500`}>
                  {React.cloneElement(service.icon, { size: 22 })}
                </div>
              </div>

              {/* Centered Content Area */}
              <div className="p-8 pt-10 flex-grow flex flex-col text-center items-center">
                <h4 className="text-xl font-bold text-[#095884] mb-3 group-hover:text-[#A1C948] transition-colors leading-tight">
                  {service.title}
                </h4>
                
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="mt-auto flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-[#095884] font-bold text-[11px] uppercase tracking-wider group-hover:gap-4 transition-all">
                    View Service <ArrowRight size={14} className="text-[#A1C948]" />
                  </div>
                  <span className="text-[9px] font-black text-slate-200 uppercase tracking-widest mt-2">
                    Ref. 0{index + 1}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;  