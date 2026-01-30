// import { useParams, Link } from 'react-router-dom';
// import { allServices } from '../pages/ServiceData';
// import { ArrowLeft } from 'lucide-react';

// const ServiceDetails = () => {
//   const { id } = useParams();
//   const service = allServices.find(s => s.id === id);

//   if (!service) return <div className="py-20 text-center">Service not found.</div>;

//   return (
//     <div className="bg-white min-h-screen py-20">
//       <div className="max-w-4xl mx-auto px-8">
//         <Link to="/offerings/services" className="flex items-center gap-2 text-gray-500 mb-8 hover:text-teal-600 transition-colors">
//           <ArrowLeft size={20} /> Back to All Services
//         </Link>
        
//         <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-3xl mb-10 shadow-lg" />
        
//         <div className="flex items-center gap-4 mb-6">
//            <div className={`${service.color} p-4 rounded-2xl`}>{service.icon}</div>
//            <h1 className="text-4xl font-serif text-[#095884]">{service.title}</h1>
//         </div>
        
//         <div className="prose prose-lg max-w-none text-gray-600">
//           <p className="text-xl font-medium mb-4">{service.desc}</p>
//           <p>This is where you would put the long-form content about {service.title}. You can explain the techniques used, what to expect during a session, and the benefits of this specific treatment.</p>
//         </div>

//         <button className="mt-12 bg-[#A1C948] text-white px-8 py-4 rounded-full font-bold hover:bg-[#095884] transition-colors">
//           Book Appointment for {service.title}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetails;


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allServices } from './ServiceData';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = allServices.find(s => s.id === id);

  if (!service) return <div className="py-20 text-center">Service not found.</div>;

  const content = service.fullContent;

  return (
    <div className="bg-[#FDFCFB] min-h-screen pb-20">
      {/* Hero Section */}
      <div className="h-[450px] relative overflow-hidden">
        <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#095884] via-[#095884]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/offerings/services" className="text-white/80 hover:text-white flex items-center gap-2 mb-6">
              <ArrowLeft size={20} /> Back to Services
            </Link>
            <h1 className="text-6xl text-white font-serif mb-4">{service.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT COLUMN: ALL DATA */}
        <div className="lg:col-span-2 space-y-12 text-gray-700 leading-relaxed text-lg">
          
          <section>
            <h2 className="text-3xl text-[#095884] font-serif mb-6 border-b pb-2">What is {service.title}?</h2>
            <p>{content.introduction}</p>
          </section>

          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl text-[#095884] font-serif mb-6">Types of Post-Surgery Rehabilitation</h2>
            <p className="mb-6">{content.types}</p>
            <p>{content.physioGoal}</p>
          </section>

          <section>
            <h2 className="text-3xl text-[#095884] font-serif mb-6">When to See A Physiotherapist</h2>
            <p>{content.whenToSee}</p>
          </section>

          {/* Risks Section */}
          <section className="bg-red-50 p-10 rounded-[40px] border border-red-100">
            <h2 className="text-3xl text-red-800 font-serif mb-8 flex items-center gap-3">
              <AlertCircle className="text-red-600" size={32} />
              Risks in Post-Surgery Recovery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.risks.map((risk, index) => (
                <div key={index} className="flex gap-3 bg-white/50 p-4 rounded-xl text-sm text-red-900 border border-red-100">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  {risk}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl text-[#095884] font-serif mb-6">How to Prevent Issues</h2>
            <p>{content.prevention}</p>
          </section>

          <section className="bg-[#095884] text-white p-10 rounded-[40px]">
            <h2 className="text-3xl font-serif mb-6">Rehabilitation Treatments</h2>
            <p className="text-blue-50">{content.treatments}</p>
          </section>
        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="sticky top-10 bg-white p-10 rounded-[40px] shadow-2xl shadow-gray-200 border border-gray-100">
            <h3 className="text-2xl text-[#095884] font-serif mb-6">Ready to Recover?</h3>
            <p className="text-gray-500 mb-8">Schedule your assessment in Bangalore or Hyderabad today.</p>
            
            <div className="space-y-4 mb-10">
              {["Expert Physiotherapists", "Personalized Care", "Home Visits", "State-of-the-art Equipment"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-[#A1C948]" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#A1C948] hover:bg-[#095884] text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-lime-100">
              Book Appointment Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;