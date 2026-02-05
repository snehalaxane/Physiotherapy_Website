import React from 'react';
import { Target, Heart, Award, CheckCircle2, ArrowRight, Plus  } from 'lucide-react';
import TeamSection from '../components/TeamSection';
import WhatWeDo from "../components/WhatWeDo";
import { NavLink } from "react-router-dom";
import madhudoc from "../assets/madhudoc.jpg"

const AboutUs = () => {
  return (
    <div className="bg-[#FDFCFB] font-poppins overflow-hidden">
      {/* SECTION 1: MISSION & IMAGE */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Visuals */}
        <div className="relative animate-reveal-left">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#A1C948]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 right-20 w-64 h-64 bg-[#095884]/5 rounded-full blur-3xl -z-10" />
          
          <div className="relative group">
            <img 
              src={madhudoc}
              alt="Clinic Interior" 
              className="rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] relative z-10"
            />
            {/* Experience Badge with Glassmorphism */}
            <div className="absolute -bottom-20 -right-4 md:-right-12 bg-[#095884] text-white p-6 md:p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(9,88,132,0.3)] z-30 max-w-[280px] md:max-w-xs border-b-4 border-[#A1C948] animate-float-hero">
  
  {/* Header Section */}
  <div className="flex justify-between items-start mb-4">
    <div>
      <h3 className="text-2xl md:text-3xl font-bold leading-none">Dr. Madhu</h3>
        <p className="text-[10px] md:text-xs opacity-100">MPT, MIAP, MTC, CDNT, CWCT, FOMT</p>
         <p className="font-bold text-xs md:text-sm">Chief Physiotherapist</p>
      <span className="inline-block mt-2 px-2 py-0.5 bg-[#A1C948]/20 text-[#A1C948] text-[12px] font-bold rounded-full uppercase tracking-wider">
        Since 2011
      </span>
    </div>
    <div className="bg-[#A1C948] p-1.5 rounded-full shadow-lg shadow-[#A1C948]/20">
      <Plus size={16} className="text-[#095884]" strokeWidth={3} />
    </div>
  </div>

  {/* Degree & Specialization */}
  <div className="space-y-3">
    <div className="border-l-2 border-[#A1C948] pl-3">
        {/* <p className="text-[10px] md:text-xs opacity-100">Certified Osteopath-Chiropractor LOCM (UK)</p> */}
         <p className="text-[10px] md:text-xs opacity-100">Certified Osteopath & Chiropractor LOCM (UK)</p>
      <p className="text-[10px] md:text-xs opacity-100">Certified Manual, Dryneedling & Cupping Therapy</p>
      {/* <p className="text-[11px] text-[#A1C948] font-bold">LOCM (UK)</p> */}
    </div>

    <div className="pt-2 border-t border-white/10">
      <p className="text-[14px] text-white">
        <strong className="text-white text-sm">15+ Years</strong> of clinical excellence in Orthopedic, Neuro, and Geriatric rehabilitation.
      </p>
    </div>
  </div>
</div>
          </div>
        </div>

        {/* Right Side: Content */}
      <div className="space-y-8 animate-reveal-right">
  <div>
    <span className="inline-block px-4 py-1 bg-[#A1C948]/10 text-[#A1C948] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
      Our Legacy of Care
    </span>
    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      <span className="text-[#095884]">Expert Precision In</span> <br/>
      <span className="text-[#A1C948]">Advanced Recovery</span>
    </h2>
  </div>

  <p className="text-gray-600 leading-relaxed text-lg border-l-4 border-[#A1C948] pl-6">
    "Led by UK-certified clinical excellence, Sri Sai Priya Physiotherapy bridges the gap between traditional rehabilitation and advanced osteopathic manual therapy."
  </p>

  <div className="space-y-4 text-gray-700">
    <p className="leading-relaxed">
    <strong>Sri Sai Priya Physiotherapy, was Established in 2011,</strong> with a clear vision: to provide high-quality, result-oriented rehabilitation care using both traditional and advanced therapy techniques. Since then, we have been consistently delivering trusted physiotherapy and manual therapy services to patients across all age groups.
    </p>
    <p>
      Our clinic is led by UK-certified clinicians and follows international standards of assessment and treatment. We specialize in an integrated recovery approach, combining Physiotherapy, Osteopathy, and Chiropractic care to ensure complete and long-help recovery rather than temporary relief.
    </p>
    <p>
      At Sri Sai Priya Physiotherapy, we believe that every pain has a root cause. Instead of only managing symptoms, we perform detailed clinical evaluations to identify the underlying problem—whether it is related to muscles, joints, nerves, posture, or movement patterns. Based on this assessment, we design personalized treatment plans that address the exact needs of each patient.
    </p>
    
    <p className="leading-relaxed">
      Whether you are recovering from complex neuro-surgery or managing chronic orthopedic pain, our multi-modal approach ensures faster recovery times and long-term functional mobility.
    </p>
    
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
      {[
        'UK-Certified Manual Therapy', 
        'Clinical Excellence Since 2011', 
        'Neuro & Ortho Specialization', 
        'Osteopathic & Chiro Expertise',
        'Dry Needling & Cupping Therapy',
      ].map((item, i) => (
        <li key={i} className="flex items-center gap-2 font-bold text-[#095884]">
          <CheckCircle2 size={18} className="text-[#A1C948]" />
          {item}
        </li>
      ))}
    </ul>
  </div>

  <div className="pt-6">
    <NavLink to="/contact-us">
      <button className="flex items-center gap-3 bg-[#095884] hover:bg-[#A1C948] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-xl group">
        Schedule Your Appointment
        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
      </button>
    </NavLink>
  </div>
</div>
      </section>

      {/* OTHER SECTIONS */}
      <div className="animate-reveal delay-500">
        <TeamSection />
      </div>

      <div className="bg-white">
        <WhatWeDo />
      </div>
    </div>
  );
};

export default AboutUs;