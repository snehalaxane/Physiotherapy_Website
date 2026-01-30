import { Link } from 'react-router-dom';
import { allServices } from '../pages/ServiceData';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const Services = () => {
  return (
    <div className="bg-[#FDFCFB] py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* ... Header Section remains the same ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allServices.map((service) => (
            <Link to={`/offerings/services/${service.id}`} key={service.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src={service.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={service.title} />
                <div className={`absolute bottom-4 right-4 ${service.color} p-3 rounded-2xl`}>
                  {React.cloneElement(service.icon, { size: 24 })}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h4 className="text-2xl text-[#095884] font-serif mb-4 group-hover:text-[#A1C948]">{service.title}</h4>
                <p className="text-gray-500 text-sm mb-8">{service.desc}</p>
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase">
                  Learn More <ArrowRight size={16} />
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