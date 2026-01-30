import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import emailjs from "@emailjs/browser";




const ContactPhysioPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    clinic: '',
    concern: '',
    message: ''
  });

  const [otp, setOtp] = useState("");
const [enteredOtp, setEnteredOtp] = useState("");
const [otpSent, setOtpSent] = useState(false);
const [emailVerified, setEmailVerified] = useState(false);

  const sendOtp = async () => {
  if (!formData.email) {
    alert("Please enter email first");
    return;
  }

  const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
  setOtp(generatedOtp);

  try {
    await emailjs.send(
      "service_396iasn",
      "template_h73cheb",
      {
        to_email: formData.email,
        otp: generatedOtp,
      },
      "y2hSY0vYSA1ngrCLQ"
    );

    setOtpSent(true);
    alert("OTP sent to your email");
  } catch (error) {
    console.error(error);
    alert("Failed to send OTP");
  }
};

const verifyOtp = () => {
  if (enteredOtp === otp) {
    setEmailVerified(true);
    alert("Email verified successfully");
  } else {
    alert("Invalid OTP");
  }
};

const sendHospitalEmail = async () => {
  try {
    await emailjs.send(
      "service_396iasn",
      "template_jpca4e8",
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        issue: formData.clinic,
        concern: formData.concern,
        message: formData.message,
      },
      "y2hSY0vYSA1ngrCLQ"
    );

    alert("Appointment request sent to hospital");
  } catch (error) {
    console.error(error);
    alert("Failed to send appointment to hospital");
  }
};




  return (
    <div className="min-h-screen bg-[#FDFDFD] font-poppins text-slate-900">
      
      {/* 1. Hero Section */}
      <section className="bg-[#A1C948] pt-20 pb-32 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Get Back to Your Best</h1>
        <p className="text-teal-50 max-w-2xl mx-auto text-lg md:text-xl font-light">
          Book a consultation with our licensed physiotherapists today. 
          Expert care designed for your specific recovery needs.
        </p>
      </section>

      {/* 2. Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 -mt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-xl font-bold mb-8 text-slate-800">Contact Details</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-2xl text-teal-600">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Call Us</p>
                    <p className="text-lg font-semibold text-slate-700">+91 9700354747</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-2xl text-teal-600">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Email</p>
                    <p className="text-lg font-semibold text-slate-700">srisaipriyaphysiotherapy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-2xl text-teal-600">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Clinic Hours</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Mon - Fri: 8:00 AM - 7:00 PM <br />
                      Sat: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Support Card */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <MessageCircle className="text-teal-400 mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Need Urgent Help?</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  For acute sports injuries or post-op concerns, we offer priority same-day assessments.
                </p>
                <button className="w-full bg-teal-600 hover:bg-teal-500 py-3 rounded-xl font-bold transition-all">
                  Contact Emergency Line
                </button>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Request Appointment</h2>
            <p className="text-slate-500 mb-10 text-lg font-light">Complete the form and we'll confirm your slot within 2 hours.</p>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-400 uppercase tracking-wider ml-1">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-teal-500 transition-all outline-none" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-400 uppercase tracking-wider ml-1">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-teal-500 transition-all outline-none" placeholder="Enter last name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2">
  <label className="text-[13px] font-bold text-slate-400 uppercase tracking-wider ml-1">
    Email Address
  </label>

  <div className="flex gap-3">
    <input
      type="email"
      className="flex-1 bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-teal-500 outline-none"
      placeholder="email@example.com"
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
      disabled={emailVerified}
    />

    {!emailVerified && (
      <button
        type="button"
        onClick={sendOtp}
        className="px-5 py-4 bg-teal-600 text-white rounded-2xl font-bold hover:bg-teal-500"
      >
        Verify
      </button>
    )}
  </div>

  {otpSent && !emailVerified && (
    <div className="flex gap-3 mt-3">
      <input
        type="text"
        placeholder="Enter OTP"
        className="flex-1 bg-slate-50 rounded-2xl px-5 py-4 outline-none"
        onChange={(e) => setEnteredOtp(e.target.value)}
      />
      <button
        type="button"
        onClick={verifyOtp}
        className="px-5 py-4 bg-[#095884] text-white rounded-2xl font-bold"
      >
        Confirm
      </button>
    </div>
  )}

  {emailVerified && (
    <p className="text-green-600 text-sm mt-2">✅ Email verified</p>
  )}
</div>

               <div className="space-y-2">
  <label className="text-[13px] font-bold text-slate-400 uppercase tracking-wider ml-1">
    Phone Number
  </label>

  <input
    type="tel"
    className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-teal-500 transition-all outline-none"
    placeholder="Enter 10-digit number"
    value={formData.phone}
    maxLength={10}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, "");
      if (value.length <= 10) {
        setFormData({ ...formData, phone: value });
      }
    }}
  />
</div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-400 uppercase tracking-wider ml-1">Health Issue</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-teal-500 appearance-none outline-none">
                      <option>Neck Pain</option>
                      <option>Fracture</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
               <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-400 uppercase tracking-wider ml-1">AREA OF CONCERN</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-teal-500 transition-all outline-none" placeholder="Enter Concern" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-slate-400 uppercase tracking-wider ml-1">Symptoms Description</label>
                <textarea rows="4" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-teal-500 outline-none transition-all resize-none" placeholder="How can we help you today?"></textarea>
              </div>

           <button
  type="button"
  disabled={!emailVerified}
  onClick={sendHospitalEmail}
  className={`w-full py-5 rounded-2xl font-bold text-lg
    ${
      emailVerified
        ? "bg-[#095884] hover:bg-[#A1C948] text-white"
        : "bg-slate-300 text-slate-500 cursor-not-allowed"
    }`}
>
  Schedule Consultation
</button>


            </form>
          </div>
        </div>
      </main>

      {/* 3. Map Section */}
     <section className="w-full px-4 pb-20">
        <div className="max-w-7xl mx-auto border-[10px] border-white shadow-2xl overflow-hidden rounded-sm">
          <div className="relative h-[400px] bg-slate-100">
            {/* Real Google Maps Iframe or placeholder image */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=..." 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              className="grayscale-[0.1]"
            ></iframe>
            
            {/* Custom Markers (Optional visualization for your clinics) */}
            <div className="absolute top-[30%] left-[55%] text-red-600 drop-shadow-md">
                <MapPin size={32} fill="currentColor" className="text-red-500" />
                <span className="absolute left-10 -top-1 bg-white px-2 py-1 text-[10px] font-bold text-slate-800 rounded shadow-sm whitespace-nowrap">
                  Cadabam's ANUNITHA
                </span>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      {/* <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">© 2026 Physiotherapy Recovery Center. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};

export default ContactPhysioPage;