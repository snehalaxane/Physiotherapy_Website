import React from 'react';
import { Target, Heart, Award, CheckCircle2 } from 'lucide-react';
import TeamSection from '../components/TeamSection';


const AboutUs = () => {
  const values = [
    { icon: <Target className="text-blue-600" />, title: "Personalized Goals", desc: "We don't believe in one-size-fits-all. Every plan is built for your specific body." },
    { icon: <Heart className="text-blue-600" />, title: "Compassionate Care", desc: "Recovery is hard. We're with you every step of the way with empathy." },
    { icon: <Award className="text-blue-600" />, title: "Expert Therapists", desc: "Our team stays updated with the latest in biomechanical research." }
  ];

  return (
    <div className="bg-white font-poppins ">
      {/* SECTION 1: MISSION & IMAGE */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Decorative Background Element */}
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-50 rounded-full -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
            alt="Clinic Interior" 
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-10 -right-10 bg-blue-900 text-white p-8 rounded-lg hidden md:block max-w-xs">
            <p className="text-2xl font-bold mb-2">15+ Years</p>
            <p className="text-sm opacity-80 font-poppins">Of combined experience in sports rehab and geriatric care.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-[#A1C948] font-poppins font-bold tracking-widest uppercase text-sm">Our Story</h3>
         <h2 className="text-4xl md:text-5xl font-bold text-[#A1C948]">
             <span className="text-[#095884]"> We Are The Best For </span>Physiotherapy
          </h2>
          <p className="text-gray-600 font-poppins  leading-relaxed text-lg">
           Sri Sai Priya Physiotherapy is India's fastest growing Delivery Network for Physiotherapy & Chiropractors services. At  Sri Sai Priya Physiotherapy, we are committed to increase access to quality physio care through ultra-modern clinics and high-skilled practitioners. Our integrated / multi-therapy approach helps keep a strong focus on patient needs and deliver the highest level of patient centric care with better outcomes

We serve a wide range of patients offering treatment at clinic as well as at the comfort of their homes. We make sure that our clinics are not only equipped with the latest equipment's but also provide clean, energetic and uplifting atmospheres for better healing. For Home Care, our well-established processes ensure delivery of high-quality treatment with superior patient service.

Rather than transactional engagement with patients, we are committed to partner with our patients in their journey of healing

We work with you through your healing from start to finish providing a robust program involving combination of multiple therapies / modalities. Also, after treatment is over, we provide support / guidance to prevent injury from repeating / pain from returning. The happiness on our patient's faces is what keeps us going.
          </p>
          {/* <ul className="space-y-4 pt-4">
            {['Advanced Electrotherapy', 'Manual Therapy Techniques', 'Post-Surgical Rehabilitation'].map((item) => (
              <li key={item} className="flex items-center gap-3 font-sans text-gray-700">
                <CheckCircle2 className="text-blue-500" size={20} />
                {item}
              </li>
            ))}
          </ul> */}
        </div>
      </section>

      {/* SECTION 2: CORE VALUES */}
      {/* <section className="bg-[#F5F3F0] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#A1C948] mb-4">The Sri Sai Priya Way</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 inline-block p-3 bg-blue-50 rounded-lg">
                  {v.icon}
                </div>
                <h4 className="text-xl text-blue-950 mb-3 font-bold">{v.title}</h4>
                <p className="text-gray-600 font-poppins  text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section>
        <div>
            <TeamSection />
          
        </div>
      </section>

      {/* SECTION 3: CTA */}
      {/* <section className="py-20 text-center">
        <h2 className="text-3xl text-blue-950 mb-8 font-bold">Ready to start your journey?</h2>
        <button className="bg-blue-900 text-white px-10 py-4 rounded-full font-poppins  font-bold hover:bg-blue-800 transition-colors uppercase tracking-wider text-sm">
          Schedule Your Consultation
        </button>
      </section> */}
    </div>
  );
};

export default AboutUs;