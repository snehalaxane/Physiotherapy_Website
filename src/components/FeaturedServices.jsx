// import React from 'react';
// import { ArrowRight, Activity } from 'lucide-react';
// // Assuming you have a separate file for your service data
// import { Services } from '../pages/Services'; 

// const FeaturedServices = () => {
//   // We only take the first 4 services for the home page
//   const featured = Services.slice(0, 4);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-end mb-12">
//           <div>
//             <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Specialized Care</h2>
//             <p className="text-slate-500">Expert physiotherapy services tailored to your recovery.</p>
//           </div>
          
//           {/* Desktop "See More" Link */}
//           <a href="/services" className="hidden md:flex items-center gap-2 text-[#0D9488] font-bold hover:underline">
//             View All Services <ArrowRight size={18} />
//           </a>
//         </div>

//         {/* Grid showing only 4 items */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {featured.map((service, index) => (
//             <div key={index} className="group p-8 rounded-3xl bg-[#F0F9F8] hover:bg-[#0D9488] transition-all duration-300 border border-teal-100/50">
//               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#0D9488] group-hover:scale-110 transition-transform">
//                 <Activity size={24} />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-white transition-colors">
//                 {service.title}
//               </h3>
//               <p className="text-slate-600 group-hover:text-teal-50 text-sm leading-relaxed mb-6">
//                 {service.description}
//               </p>
//               <button className="text-[#0D9488] group-hover:text-white font-semibold flex items-center gap-2 text-sm">
//                 Learn More <ArrowRight size={16} />
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Mobile "See More" Button */}
//         <div className="mt-10 md:hidden text-center">
//           <a href="/services" className="inline-block bg-[#0D9488] text-white px-8 py-4 rounded-full font-bold shadow-lg">
//             See More Services
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedServices;