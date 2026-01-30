import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { 
  Phone, Mail, MapPin, Facebook, Twitter, 
  Instagram, Youtube, Linkedin, ArrowRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1128] text-white pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Tier 1: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-white/10">
          <div>
            {/* Logo */}
                   <img
                     src={logo}
                     alt="MyClinic Logo"
                     className="h-16 md:h-20 w-100cursor-pointer"
                   />
            <p className="text-gray-400 max-w-md leading-relaxed">
              Empowering your recovery through ultra-modern clinics and high-skilled practitioners. 
              Your journey to pain-free living starts here.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-end lg:items-center justify-end">
            <div className="w-full max-w-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-teal-400 mb-2">Newsletter</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-teal-500 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-500 p-2 rounded-full hover:bg-teal-400 transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 py-16">
          
          {/* Contact Col */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-bold text-teal-400 uppercase tracking-tighter text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3"><MapPin size={18} className="shrink-0" />Hyderabad</li>
              <li className="flex gap-3"><Phone size={18} /> +91 111111111</li>
              <li className="flex gap-3"><Mail size={18} /> care@srisaipriya.com</li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-tighter text-sm mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/offerings/services" className="hover:text-teal-400">Post Surgery Rehab</Link></li>
              <li><Link to="/offerings/services" className="hover:text-teal-400">Neuro Physiotherapy</Link></li>
              <li><Link to="/offerings/services" className="hover:text-teal-400">Home Physiotherapy</Link></li>
                 <li><Link to="/offerings/services" className="hover:text-teal-400">Musculoskeletal physiotherapy</Link></li>

            </ul>
          </div>

          {/* Treatments Col */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-tighter text-sm mb-6">Treatments</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/conditions" className="hover:text-teal-400">Back Pain</Link></li>
              <li><Link to="/conditions" className="hover:text-teal-400">Sciatica</Link></li>
              <li><Link to="/conditions" className="hover:text-teal-400">Whiplash</Link></li>
              <li><Link to="/conditions" className="hover:text-teal-400">Inflammation</Link></li>
       
            
            </ul>
          </div>

          {/* Therapies Col */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-tighter text-sm mb-6">Therapies</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/offerings/therapies/cupping-therapy" className="hover:text-teal-400">Cupping Therapy</Link></li>
              <li><Link to="/offerings/therapies/laser-therapy" className="hover:text-teal-400">Laser Therapy</Link></li>
              <li><Link to="/offerings/therapies/ift-therapy" className="hover:text-teal-400">IFT Therapy</Link></li>
            </ul>
          </div>

          {/* Socials Col */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-tighter text-sm mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-3 rounded-xl hover:bg-teal-500 transition-all hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tier 3: Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Sri Sai Priya. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;