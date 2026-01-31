import React, { useState } from 'react'; // Added useState
import { useParams, Link, NavLink } from 'react-router-dom';
import { allServices } from './ServiceData';
import { ArrowLeft, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = allServices.find(s => s.id === id);
  
  // 1. State to track active section
  const [activeTab, setActiveTab] = useState('Overview');

  if (!service) return <div className="py-20 text-center">Service not found.</div>;

  const content = service.fullContent;

  // 2. Define our navigation points
  const menuItems = [
    { id: 'Overview', label: `What is ${service.title}?` },
    { id: 'Types', label: 'Types & Varieties' },
    { id: 'When', label: 'When to See Us' },
    { id: 'Risks', label: 'Risks Involved' },
    { id: 'Prevention', label: 'How to Prevent' },
    { id: 'Treatments', label: 'Our Treatments' },
  ];

  return (
    <div className="bg-[#FDFCFB] min-h-screen pb-20 font-poppins">
      {/* Hero Section - Slightly shorter for better focus */}
      <div className="h-[350px] relative overflow-hidden">
        <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#095884] via-[#095884]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/offerings/services" className="text-white/80 hover:text-white flex items-center gap-2 mb-4 transition-all">
              <ArrowLeft size={18} /> Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl text-white font-bold">{service.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: NAVIGATION (3 cols) */}
          <div className="lg:col-span-3">
            <div className="sticky top-10 space-y-2">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4 ml-2">Quick Navigation</p>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 text-left ${
                    activeTab === item.id 
                    ? 'bg-[#095884] text-white shadow-lg translate-x-2' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                  {activeTab === item.id && <ChevronRight size={18} />}
                </button>
              ))}

              {/* Quick Book Card under menu */}
              <div className="mt-8 p-6 bg-[#A1C948]/10 rounded-3xl border border-[#A1C948]/20">
                <p className="text-sm text-[#095884] font-bold mb-2">Need immediate help?</p>
                <p className="text-xs text-gray-600 mb-4">Our experts are available for consultation.</p>
                <NavLink to="/contact-us" className="text-[#095884] text-sm font-bold flex items-center gap-2 hover:underline">
                  Book Now <ChevronRight size={14} />
                </NavLink>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: DYNAMIC CONTENT (6 cols) */}
          <div className="lg:col-span-6 min-h-[500px]">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-50 transition-all animate-in fade-in slide-in-from-right-4 duration-500">
              
              {activeTab === 'Overview' && (
                <section>
                  <h2 className="text-3xl text-[#095884] font-bold mb-6  underline decoration-[#A1C948]">Overview</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{content.introduction}</p>
                </section>
              )}

              {activeTab === 'Types' && (
                <section>
                  <h2 className="text-3xl text-[#095884] font-bold mb-6">Varieties of Condition</h2>
                  <div className="bg-[#F5F3F0] p-6 rounded-2xl border-l-4 border-[#095884]">
                    <p className="text-gray-700 text-lg leading-relaxed">{content.types}</p>
                  </div>
                </section>
              )}

              {activeTab === 'When' && (
                <section>
                  <h2 className="text-3xl text-[#095884] font-bold mb-6">Symptoms & Timing</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{content.whenToSee}</p>
                </section>
              )}

              {activeTab === 'Risks' && (
                <section>
                  <h2 className="text-3xl text-red-700 font-bold mb-8 flex items-center gap-3">
                    <AlertCircle size={28} /> Risks to Consider
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {content.risks.map((risk, index) => (
                      <div key={index} className="flex gap-4 bg-red-50 p-5 rounded-2xl text-red-900 border border-red-100 items-start">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                        <span className="font-medium">{risk}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'Prevention' && (
                <section>
                  <h2 className="text-3xl text-[#095884] font-bold mb-6">Preventive Care</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{content.prevention}</p>
                </section>
              )}

              {activeTab === 'Treatments' && (
                <section className="bg-[#095884] text-white p-8 rounded-[30px]">
                  <h2 className="text-3xl font-bold mb-6 text-[#A1C948]">Our Approach</h2>
                  <p className="text-blue-50 text-lg leading-relaxed">{content.treatments}</p>
                </section>
              )}

            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100">
              <h3 className="text-xl text-[#095884] font-bold mb-4">Why Choose Sri Sai Priya?</h3>
              <div className="space-y-4 mb-8">
                {["Expert Physiotherapists", "Personalized Care", "Home Visits", "Modern Equipment"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="text-[#A1C948]" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <NavLink to="/contact-us">
                <button className="w-full bg-[#A1C948] hover:bg-[#095884] text-white py-4 rounded-2xl font-bold transition-all shadow-lg hover:scale-105 active:scale-95">
                  Book Now
                </button>
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;