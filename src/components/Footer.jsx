import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { allServices } from '../pages/ServiceData';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, 
  Instagram, Youtube, Linkedin, ArrowRight ,Globe
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1128] text-white pt-12 pb-6 px-8">
      {/* Increased width to 100% or very wide container */}
      <div className="max-w-[1400px] mx-auto"> 
        
        {/* Tier 1: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10 border-b border-white/10">
          <div>
            <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto mb-6" />
            <p className="text-gray-400 max-w-md leading-relaxed">
              Empowering your recovery through ultra-modern clinics and high-skilled practitioners. 
              Your journey to pain-free living starts here.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start lg:items-center justify-end">
            <div className="w-full max-w-sm">
              <p className="text-sm font-bold uppercase py-3 px-6 tracking-widest text-[#A1C948] mb-1">Newsletter</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-[#A1C948] transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#A1C948] p-2 rounded-full hover:bg-white hover:text-[#095884] transition-colors text-white">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Navigation Grid - NOW FILLING ALL 5 COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 py-16">
          
          {/* Col 1: Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-bold text-[#A1C948] uppercase tracking-wider text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3"><MapPin size={18} className="text-[#A1C948]" /> Hyderabad, India</li>
              <li className="flex gap-3"><Phone size={18} className="text-[#A1C948]" /> +91 9700354747 / 9963573822</li>
            <li className="flex gap-3 items-center">
  <Globe size={18} className="text-[#A1C948] shrink-0" /> 
  <a 
    href="https://srisaipriyaphysiotherapy.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-[#A1C948] transition-colors"
  >
    srisaipriyaphysiotherapy.com
  </a>
</li>
            </ul>
          </div>

          {/* Col 2: Services */}
        <div className="col-span-4 lg:col-span-3"> {/* Increased col-span to give more room */}
  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Services</h4>
  
  <ul className="grid grid-cols-3 gap-x-10 gap-y-3 text-gray-400 text-sm">
  <li><Link to="/offerings/services/post-surgery-rehab" className="hover:text-[#A1C948] transition-colors">Post Surgery Rehab</Link></li>
  <li><Link to="/offerings/services/musculoskeletal-physiotherapy" className="hover:text-[#A1C948] transition-colors">Musculoskeletal</Link></li>
  <li><Link to="/offerings/services/cognitive-rehabilitation" className="hover:text-[#A1C948] transition-colors">Cognitive Rehab</Link></li>
  <li><Link to="/offerings/services/pediatric-physiotherapy" className="hover:text-[#A1C948] transition-colors">Paediatric Rehab</Link></li>
  <li><Link to="/offerings/services/womens-health" className="hover:text-[#A1C948] transition-colors">Women's health Rehab</Link></li>
  <li><Link to="/offerings/services/neuro-physiotherapy-rehab" className="hover:text-[#A1C948] transition-colors">Neuro Physiotherapy</Link></li>
  <li><Link to="/offerings/services/physiotherapy-at-home" className="hover:text-[#A1C948] transition-colors">Home Physiotherapy</Link></li>
  <li><Link to="/offerings/services/sports-physiotherapy" className="hover:text-[#A1C948] transition-colors">Sports Physiotherapy</Link></li>
  <li><Link to="/offerings/services/geriatric-physiotherapy" className="hover:text-[#A1C948] transition-colors">Geriatric Care</Link></li>
</ul>
</div>

          {/* Col 3: Quick Links (Added this to fill space) */}

          {/* <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-[#A1C948]">About Us</Link></li>
              <li><Link to="/symptoms" className="hover:text-[#A1C948]">Symptoms</Link></li>
              <li><Link to="/work-with-us" className="hover:text-[#A1C948]">Careers</Link></li>
              <li><Link to="/contact-us" className="hover:text-[#A1C948]">Contact</Link></li>
            </ul>
          </div> */}

          {/* Col 4: Top Symptoms (Added this to fill space) */}
          {/* <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Treatments</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-[#A1C948]">Back Pain</Link></li>
              <li><Link to="/" className="hover:text-[#A1C948]">Knee Pain</Link></li>
              <li><Link to="/" className="hover:text-[#A1C948]">Frozen Shoulder</Link></li>
              <li><Link to="/" className="hover:text-[#A1C948]">Sports Injury</Link></li>
            </ul>
          </div> */}

          {/* Col 5: Social Media Col */}
          
        </div>

        {/* Tier 3: Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Sri Sai Priya Physiotherapy . All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="" className="hover:text-white">Privacy Policy</Link>
            <Link to="" className="hover:text-white">Terms of Service</Link>
          </div>
          <div>
            {/* <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Follow Us</h4> */}
            <div className="flex flex-wrap gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-gray-50 p-3 rounded-xl hover:bg-[#A1C948] transition-all hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;