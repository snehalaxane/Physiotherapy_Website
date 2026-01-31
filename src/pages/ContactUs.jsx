import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle, ChevronDown, CheckCircle, ShieldCheck, Send } from 'lucide-react';
import emailjs from "@emailjs/browser";

const ContactPhysioPage = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', clinic: 'Neck Pain', concern: '', message: ''
  });

  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    if (!formData.email || !formData.email.includes('@')) {
      alert("Please enter a valid email address");
      return;
    }
    setLoading(true);
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedOtp);

    try {
      await emailjs.send("service_396iasn", "template_h73cheb", {
        to_email: formData.email,
        otp: generatedOtp,
      }, "y2hSY0vYSA1ngrCLQ");
      setOtpSent(true);
    } catch (error) {
      alert("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = () => {
    if (enteredOtp === otp) {
      setEmailVerified(true);
    } else {
      alert("Invalid OTP code.");
    }
  };

  const sendHospitalEmail = async () => {
    setLoading(true);
    try {
      await emailjs.send("service_396iasn", "template_jpca4e8", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        issue: formData.clinic,
        concern: formData.concern,
        message: formData.message,
      }, "y2hSY0vYSA1ngrCLQ");
      alert("Appointment request sent successfully!");
    } catch (error) {
      alert("Error sending request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] font-poppins text-slate-900">
      
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-[#095884] to-[#063e5d] pt-24 pb-40 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <span className="bg-[#A1C948] text-blue-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            Priority Booking
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Your Path to Recovery <br/> Starts Here</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-light">
            Book a consultation with our licensed specialists. Your personalized recovery plan is just a few clicks away.
          </p>
        </motion.div>
      </section>

      {/* 2. Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 -mt-24 pb-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100">
              <h3 className="text-xl font-bold mb-8 text-[#095884]">Direct Contact</h3>
              
              <div className="space-y-8">
                {[
                  { icon: <Phone size={20}/>, label: "Call Support", val: "+91 9700354747", bg: "bg-blue-50", color: "text-blue-600" },
                  { icon: <Mail size={20}/>, label: "Email Us", val: "care@srisaipriya.com", bg: "bg-lime-50", color: "text-lime-600" },
                  { icon: <Clock size={20}/>, label: "Clinic Hours", val: "Mon-Sat: 8AM - 7PM", bg: "bg-orange-50", color: "text-orange-600" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className={`p-4 ${item.bg} ${item.color} rounded-2xl transition-transform group-hover:scale-110`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">{item.label}</p>
                      <p className="text-base font-semibold text-slate-700">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#095884] rounded-[2rem] p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="text-[#A1C948]" size={28} />
                </div>
                <h4 className="text-xl font-bold mb-2">Priority Assessment</h4>
                <p className="text-blue-100/70 text-sm mb-6 leading-relaxed">
                  Experiencing acute pain? We reserve emergency slots for sports injuries and post-op care.
                </p>
                <button className="w-full bg-[#A1C948] hover:bg-white hover:text-[#095884] py-4 rounded-xl font-bold transition-all duration-300 text-blue-950">
                  Call Emergency Line
                </button>
              </div>
            </div>
          </motion.div>

          {/* Appointment Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100"
          >
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-3xl font-bold text-[#095884] mb-2">Request Appointment</h2>
                <p className="text-slate-500 font-light">Confirm your slot in less than 2 minutes.</p>
              </div>
              <div className="hidden md:flex gap-2">
                <div className={`w-3 h-3 rounded-full ${emailVerified ? 'bg-green-500' : 'bg-slate-200 animate-pulse'}`}></div>
                <div className={`w-3 h-3 rounded-full ${emailVerified ? 'bg-green-500' : 'bg-slate-200'}`}></div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-[#095884] outline-none transition-all" placeholder="Enter First Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-[#095884] outline-none transition-all" placeholder="Enter Last Name" />
                </div>
              </div>

              {/* Verified Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative group">
                  <input
                    type="email"
                    disabled={emailVerified}
                    className={`w-full pr-32 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white outline-none transition-all ${emailVerified ? 'border-green-200 bg-green-50 text-green-700' : 'focus:ring-2 focus:ring-[#095884]'}`}
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  
                  {!emailVerified && (
                    <button
                      type="button"
                      onClick={sendOtp}
                      className="absolute right-2 top-2 bottom-2 px-6 bg-[#095884] text-white rounded-xl font-bold text-xs hover:bg-[#A1C948] transition-colors disabled:opacity-50"
                      disabled={loading}
                    >
                      {loading ? "..." : "Verify"}
                    </button>
                  )}
                  {emailVerified && <CheckCircle className="absolute right-5 top-1/2 -translate-y-1/2 text-green-500" size={20} />}
                </div>

                <AnimatePresence>
                  {otpSent && !emailVerified && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex gap-3 mt-4"
                    >
                      <input
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        className="flex-1 bg-white border-2 border-blue-100 rounded-2xl px-5 py-4 outline-none focus:border-[#095884]"
                        onChange={(e) => setEnteredOtp(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={verifyOtp}
                        className="px-8 bg-[#A1C948] text-blue-900 rounded-2xl font-bold shadow-lg shadow-lime-200 transition-transform active:scale-95"
                      >
                        Confirm
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-[#095884] outline-none transition-all"
                    placeholder="10-digit number"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Health Concern</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white outline-none appearance-none cursor-pointer">
                      <option>Post-Op Rehab</option>
                      <option>Sports Injury</option>
                      <option>Chronic Back Pain</option>
                      <option>Neurological Physio</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Describe Symptoms</label>
                <textarea rows="3" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-[#095884] outline-none transition-all resize-none" placeholder="Briefly describe what you're experiencing..."></textarea>
              </div>

              <button
                type="button"
                disabled={!emailVerified || loading}
                onClick={sendHospitalEmail}
                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl
                  ${emailVerified 
                    ? "bg-[#095884] text-white hover:bg-[#A1C948] hover:shadow-lime-200" 
                    : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"}`}
              >
                {loading ? "Processing..." : "Schedule Consultation"}
                {!loading && <Send size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      {/* 3. Map Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2214486770786!2d78.5645542!3d17.401157099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9932d7430631%3A0x8b35224615c568ac!2sSri%20Sai%20Priya%20Ortho%20%26Physiotherapy%20clinic.Dr.Madhu%20Physiotherpist%20uppal!5e0!3m2!1sen!2sin!4v1769850998618!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPhysioPage;