import React, { useState } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { allServices } from './ServiceData';
import { ArrowLeft, CheckCircle, AlertCircle, ChevronRight, Target } from 'lucide-react';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = allServices.find(s => s.id === id);
  const [activeTab, setActiveTab] = useState('Overview');

  if (!service) return <div className="py-20 text-center font-poppins">Service not found.</div>;

  const content = service.fullContent;

  // LOGIC: Function to convert strings with \n into styled bullet points
  const renderFormattedList = (text, theme = "light") => {
    if (!text) return null;
    
    // Split by new line
    const lines = text.split('\n');
    
    return lines.map((line, index) => {
      // Check if line is a bullet point or starts with a bold title (contains ':')
      const isBullet = line.trim().startsWith('•');
      const parts = line.split(':');
      
      return (
        <div key={index} className={`mb-4 flex gap-3 ${isBullet ? 'pl-2' : ''}`}>
          {isBullet && (
            <Target size={16} className={`mt-1.5 shrink-0 ${theme === 'dark' ? 'text-[#A1C948]' : 'text-[#095884]'}`} />
          )}
          <p className={`${theme === 'dark' ? 'text-blue-50' : 'text-gray-700'} text-lg leading-relaxed`}>
            {parts.length > 1 ? (
              <>
                <strong className={theme === 'dark' ? 'text-[#A1C948]' : 'text-[#095884]'}>
                  {parts[0].replace('•', '').trim()}:
                </strong>
                {parts.slice(1).join(':')}
              </>
            ) : (
              line.replace('•', '').trim()
            )}
          </p>
        </div>
      );
    });
  };

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
      {/* Hero Section */}
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
          
          {/* NAVIGATION */}
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
            </div>
          </div>

          {/* DYNAMIC CONTENT */}
          <div className="lg:col-span-6 min-h-[600px]">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-50 transition-all duration-500">
              
              {activeTab === 'Overview' && (
                <section className="animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-3xl text-[#095884] font-bold mb-6">Overview</h2>
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {content.introduction}
                  </p>
                </section>
              )}

              {activeTab === 'Types' && (
                <section className="animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-3xl text-[#095884] font-bold mb-6">Varieties</h2>
                  <div className="bg-[#F9FBF4] p-8 rounded-3xl border border-[#A1C948]/20">
                    {renderFormattedList(content.types)}
                  </div>
                </section>
              )}

              {activeTab === 'When' && (
  <section className="animate-in fade-in slide-in-from-bottom-4">
    <h2 className="text-3xl text-[#095884] font-bold mb-6">When to See a Specialist</h2>
    
    {/* Professional Container to match Varieties style */}
    <div className="bg-white p-2 rounded-3xl">
      {/* <p className="text-[#095884] font-bold mb-6 text-lg border-b border-gray-100 pb-4">
        Early intervention is key to long-term success. Parents should consult a specialist if they observe:
      </p> */}
      
      <div className="space-y-2">
        {/* We call our helper here to turn the string into beautiful points */}
        {renderFormattedList(content.whenToSee)}
      </div>
    </div>
  </section>
)}

              {activeTab === 'Risks' && (
                <section className="animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-3xl text-red-700 font-bold mb-8 flex items-center gap-3">
                    <AlertCircle size={28} /> Risks to Consider
                  </h2>
                  <div className="space-y-4">
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
                <section className="animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-3xl text-[#095884] font-bold mb-6">Prevention Strategies</h2>
                  <div className="space-y-2">
                    {renderFormattedList(content.prevention)}
                  </div>
                </section>
              )}

              {activeTab === 'Treatments' && (
                <section className="bg-[#095884] text-white p-10 rounded-[40px] animate-in zoom-in-95 duration-300">
                  <h2 className="text-3xl font-bold mb-6 text-[#A1C948]">Our Clinical Approach</h2>
                  <div>
                    {renderFormattedList(content.treatments, "dark")}
                  </div>
                </section>
              )}

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 sticky top-10">
              <h3 className="text-xl text-[#095884] font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-5 mb-8">
                {["Clinical Excellence", "Personalized Protocol", "Modern Equipment", "Home Care Support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="text-[#A1C948]" size={18} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <NavLink to="/contact-us">
                <button className="w-full bg-[#A1C948] hover:bg-[#095884] text-white py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-[#A1C948]/40">
                  Book Appointment
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