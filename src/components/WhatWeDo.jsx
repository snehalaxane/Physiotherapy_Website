import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Activity } from 'lucide-react';
import whatwedo from "../assets/whatwedo.jpg"

const PhysiotherapySection = () => {
  const features = [
    { 
      id: "01", 
      title: "Advanced Pain Recovery", 
      desc: "Evidence-based techniques including manual therapy to help you regain mobility and live pain-free." 
    },
    { 
      id: "02", 
      title: "Expert Clinical Team", 
      desc: "Led by specialists with 14+ years of hands-on professional experience in rehabilitation." 
    },
    { 
      id: "03", 
      title: "Advanced World-Class Technology", 
      desc: "Utilizing modern US FDA-approved equipment for faster healing and better patient outcomes." 
    }
  ];

  return (
    <section className="relative min-h-screen bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F5F3F0]/30 rounded-[100%] -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#A1C948]/10 rounded-full mb-6">
            <Activity size={16} className="text-[#A1C948]" />
            <span className="text-[#A1C948] font-bold uppercase tracking-widest text-[10px]">How We Heal</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#095884] mb-12 leading-tight">
            What We Do <span className="text-[#A1C948]">?</span>
          </h2>

          <div className="space-y-10">
            {features.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-6 group"
              >
                {/* Number with vertical line effect */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-[#095884] text-white flex items-center justify-center font-bold shadow-lg shadow-blue-900/20 group-hover:bg-[#A1C948] transition-colors duration-300">
                    {item.id}
                  </div>
                  {index !== features.length - 1 && (
                    <div className="w-[2px] h-full bg-slate-100 mt-2"></div>
                  )}
                </div>

                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-[#095884] mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative">
            {/* The Main Image Container */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={whatwedo} 
                alt="Therapy Session" 
                className="w-full aspect-[4/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#095884]/40 to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-right-12 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 flex items-center gap-4"
            >
              <div className="p-3 bg-[#A1C948] rounded-2xl text-white">
                <CheckCircle size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#095884]">15+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Years of Expertise</p>
              </div>
            </motion.div>

            {/* Background Decorative Squares */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#A1C948]/20 rounded-full blur-2xl animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PhysiotherapySection;