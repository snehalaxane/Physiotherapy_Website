import React, { useState } from 'react';
import doctorimg from "../assets/doctorimg.png";
import { ArrowUpRight, Star, Plus, MessageCircle } from 'lucide-react';
import TeamSection from '../components/TeamSection';
import AppointmentForm from '../components/AppointmentForm';
import RecoveryStories from '../components/RecoveryStories';
import FeaturedServices from '../components/FeaturedServices';
import Therapy from '../pages/Therapy';
import FaqSection from '../components/FaqSectionTemp';

const PhysioHero = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfPXpt8bBDozq-6Eo7PGW08LVgYt9oP-1ew&s",
    "https://www.anssiwellness.com/wp-content/uploads/2023/10/lower-back-pain2.jpg",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTBrpbhR_vTYiY93H0UeJ15rr4mxrTMEkOw&s",
   
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=400",
    "https://plus.unsplash.com/premium_photo-1661698068272-987480c4074d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  const scrollImages = [...images, ...images];

  return (
    <>
      <section className="relative py-12 md:py-24 bg-[#F5F3F0] font-poppins overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT COLUMN */}
          <div className="col-span-12 lg:col-span-3 z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-[#095884] mb-8 leading-tight animate-fade-up">
              Welcome To <br className="hidden md:block"/> Sri Sai Priya Physiotherapy
            </h2>
            
            <div className="flex justify-center lg:justify-start text-orange-400 mb-4 animate-fade-up delay-200 opacity-0">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 animate-fade-up delay-400 opacity-0">
              Where specialized care meets personalized recovery plans for every patient.
            </p>
            
            <div className="pt-8 text-blue-950 font-bold animate-fade-up delay-600 opacity-0">
               <div className="flex items-center justify-center lg:justify-start gap-2 text-4xl md:text-5xl">
                  <span className="bg-[#A1C948] text-white p-2 rounded-full animate-bounce"><Plus /></span>
                50K+
               </div>
               <p className="text-sm md:text-base text-gray-500 mt-2">Where Healing Begins,<br/> Transformation Follows.</p>
            </div>
          </div>

          {/* CENTER COLUMN - Floating Doctor Image */}
          <div className="col-span-12 lg:col-span-5 relative flex justify-center py-10 md:py-0">
            <div className="relative p-2 md:p-4 bg-white shadow-2xl animate-float-hero max-w-[280px] md:max-w-md">
              <img src={doctorimg} alt="Lead Doctor" className="w-full h-auto" />
              
              <div className="absolute -left-6 md:-left-14 bottom-10 md:bottom-20 bg-[#2B6191] text-white p-3 md:p-4 rounded-sm flex items-center gap-4 shadow-lg min-w-[200px] rotate-[2deg] hover:rotate-0 transition-transform duration-500 cursor-pointer">
                 <div className="w-2 h-2 rounded-full bg-[#A1C948] animate-pulse"></div>
                 <div>
                    <p className="font-bold text-xs md:text-sm">Dr. Madhu</p>
                     <p className="text-[10px] md:text-xs opacity-100">MPT, MIAP, MTC, CDNT, CWCT, FOMT</p>
                       <p className="font-bold text-xs md:text-sm">Chief Physiotherapist</p>
                    <p className="text-[10px] md:text-xs opacity-100">CERTIFIED OSTEOPATH-CHIROPRACTOR LOCM (UK)</p>
                       <p className="text-[10px] md:text-xs opacity-100">Certified Manual, Dryneedling & Cupping Therapy</p>
                 </div>
                 {/* <MessageCircle className="ml-auto opacity-80" size={18} /> */}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Slide in Header */}
          <div className="col-span-12 lg:col-span-4 z-10 overflow-hidden text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-[#A1C948] leading-[1.1] mb-8 animate-reveal-right">
              See Your Path <br className="hidden md:block"/> 
              To Recovery <br className="hidden md:block"/> 
              Begins.
              
              <button className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-blue-800 text-white rounded-full ml-4 align-middle transition-transform hover:scale-110 active:scale-95 shadow-lg">
                <ArrowUpRight size={20} />
              </button>
            </h1>

            {/* AUTO-SCROLLING AREA */}
            <div className="relative mt-8 md:mt-12 w-full overflow-hidden animate-fade-up delay-600 opacity-0">
              <div className="flex gap-4 animate-infinite-scroll w-max hover:[animation-play-state:paused] cursor-pointer">
                {scrollImages.map((src, index) => (
                  <div 
                    key={index} 
                    className="w-36 h-36 md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-xl shadow-md border-2 md:border-4 border-white transition-transform hover:scale-105"
                  >
                    <img src={src} className="w-full h-full object-cover" alt="therapy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedServices />
      <TeamSection />
      <FaqSection />
      <RecoveryStories /> 
    </>
  );
};

export default PhysioHero;