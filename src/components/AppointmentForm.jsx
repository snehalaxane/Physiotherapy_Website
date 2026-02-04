import React, { useState } from 'react';
import { User, Phone, Mail, Calendar as CalendarIcon, MessageSquare, CheckCircle } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    clinic: '',
    concern: '',
    appointmentDate: new Date(), // THIS WAS MISSING
    additionalInfo: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 3. Special handler for the DatePicker
  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, appointmentDate: date }));
  };

  return (
  <div className="min-h-screen bg-[#0f172a] flex items-center justify-center py-24 px-4">
      {/* 1. Global CSS for the DatePicker styling */}
      <style>{`
        .react-datepicker-wrapper { width: 100%; }
        .react-datepicker__input-container input {
          width: 100%;
          background-color: rgba(30, 41, 59, 0.5);
          border: 1px solid #334155;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          color: white;
          outline: none;
          transition: all 0.2s;
        }
        .react-datepicker__input-container input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }
        /* Style for the popup calendar itself */
        .react-datepicker {
          background-color: #1e293b;
          border: 1px solid #334155;
          color: white;
        }
        .react-datepicker__header { background-color: #0f172a; border-bottom: 1px solid #334155; }
        .react-datepicker__current-month, .react-datepicker__day-name, .react-datepicker__day { color: white; }
        .react-datepicker__day:hover { background-color: #6366f1; }
        .react-datepicker__day--selected { background-color: #6366f1 !important; }
      `}</style>


      {/* Main Card Container */}
      <div className="w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Left Sidebar - Visual Interest */}
        <div className="md:w-1/3 bg-[#095884] p-10 flex flex-col justify-between text-white">
          <div>
            <h2 className="text-4xl font-bold mb-4">Book Your Session</h2>
            <p className="text-indigo-100 leading-relaxed">
              Complete the form and our team will reach out within 24 hours to confirm your slot.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-lg"><CheckCircle className="w-6 h-6" /></div>
              <span className="font-medium text-lg text-white">Top Rated Clinics</span>
            </div>
          </div>
        </div>

        {/* Right Side - The Form */}
        <form className="md:w-2/3 p-8 md:p-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* First Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#095884]">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="text" 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="John"
                />
              </div>
            </div>

            {/* Appointment Date (The New Calendar Field) */}
           {/* Date Picker (The Calendar) */}
           <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#095884]">Appointment Date</label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 z-20 pointer-events-none" />
                <DatePicker
                  selected={formData.appointmentDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  className="datepicker-input"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#095884]">Last Name</label>
              <input 
                type="text" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="Doe"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#095884]">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="tel" 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="111-222-3333"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#095884]">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="email" 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Clinic Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#095884]">Preferred Clinic</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white appearance-none focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer">
                  <option className="bg-slate-900">Select Clinic</option>
                  <option className="bg-slate-900">City General</option>
                  <option className="bg-slate-900">Westside Wellness</option>
                </select>
              </div>
            </div>

            {/* Area of Concern */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#095884]">Area of Concern</label>
              <div className="relative">
                <ClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white appearance-none focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer">
                  <option className="bg-slate-900">How can we help?</option>
                  <option className="bg-slate-900">Dermatology</option>
                  <option className="bg-slate-900">Consultation</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#095884]">Additional Information</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-slate-500" />
              <textarea 
                rows="3"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="Share any specific details..."
              ></textarea>
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex flex-col space-y-6 pt-4">
            <label className="flex items-center gap-3 group cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded-md border-slate-700 bg-slate-800 text-indigo-600 focus:ring-offset-slate-900" />
              <span className="text-sm text-slate-400 group-hover:text-white transition-colors">I agree to the Terms & Conditions</span>
            </label>

            <button 
              type="submit"
              className="w-full md:w-auto self-end bg-white text-indigo-900 hover:bg-indigo-50 px-12 py-4 rounded-xl font-bold shadow-xl shadow-indigo-500/10 transition-all active:scale-95"
            >
              Confirm Appointment
            </button>
          </div>
        </form>


      </div>
     {/* 4. Small CSS tweak for the DatePicker width */}
      <style>{`
        .react-datepicker-wrapper { width: 100%; }
        .react-datepicker { font-family: inherit; border-radius: 1rem; border: none; shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); }
      `}</style>
    </div>
  );
};

export default AppointmentForm;