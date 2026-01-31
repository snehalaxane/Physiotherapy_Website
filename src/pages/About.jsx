import React from 'react';
import { Target, Heart, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import TeamSection from '../components/TeamSection';
import WhatWeDo from "../components/WhatWeDo";
import { NavLink } from "react-router-dom";

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
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
              alt="Clinic Interior" 
              className="rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] relative z-10"
            />
            {/* Experience Badge with Glassmorphism */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-[#095884] text-white p-8 rounded-[2rem] shadow-2xl z-20 max-w-xs animate-bounce-slow">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-xs uppercase tracking-widest font-bold text-[#A1C948] mb-2">Years Excellence</p>
              <p className="text-sm opacity-80 leading-relaxed">Combined experience in orthopedic, sports rehab, and geriatric care.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8 animate-reveal-right">
          <div>
            <span className="inline-block px-4 py-1 bg-[#A1C948]/10 text-[#A1C948] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#095884]">We Are The Best For</span> <br/>
              <span className="text-[#A1C948]">Physiotherapy</span>
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-[#A1C948] pl-6">
            "Sri Sai Priya Physiotherapy is India's fastest growing network, committed to ultra-modern clinics and high-skilled practitioners."
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              Our integrated approach ensures a focus on patient needs, delivering the highest level of centric care with better outcomes. We work with you from start to finish, providing a robust program involving a combination of multiple therapies and modalities.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {['Ultra-Modern Clinics', 'Expert Practitioners', 'Multi-Therapy Approach', 'Post-Treatment Support'].map((item, i) => (
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
                Book Consultation
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