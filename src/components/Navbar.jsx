import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X ,Home, Sparkles ,Info,Stethoscope, LayoutGrid ,Activity, HeartPulse, Pill, Thermometer, Share2, Facebook, Instagram,} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);

  // Reusable Underline Logic
  const underlineStyle = `absolute bottom-0 left-0 w-full h-0.5 bg-[#A1C948] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`;
  const activeUnderlineStyle = `absolute bottom-0 left-0 w-full h-0.5 bg-[#095884] transform scale-x-100`;

  const navLinkStyle = ({ isActive }) =>
  `group relative flex items-center px-2 py-2 transition-all duration-300 font-medium ${
    isActive ? "text-[#095884]" : "text-gray-600 hover:text-[#095884]"
  }`;

  const GradientUnderline = ({ isActive }) => (
  <span 
    className={`absolute bottom-0 left-0 h-[3px] w-full rounded-full transition-all duration-500 ease-out
    bg-gradient-to-r from-[#095884] via-[#559166] to-[#A1C948]
    ${isActive 
      ? "opacity-100 scale-x-100" 
      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
    }`}
  />
);

    const NavItem = ({ label, Icon, isActive }) => (
    <div className="flex items-center gap-3">
      {/* Icon with a unique "pop" animation */}
      <Icon 
        size={18} 
        className={`transition-all duration-500 transform ${
          isActive 
            ? "text-[#A1C948] scale-110" 
            : "text-gray-400 group-hover:text-[#A1C948] group-hover:scale-110 group-hover:rotate-[10deg]"
        }`} 
      />
      <span className={`transition-transform duration-300 ${isActive ? 'translate-x-0' : 'group-hover:translate-x-1'}`}>
        {label}
      </span>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-poppins">
      <div className="w-full px-6 md:px-10 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="MyClinic Logo"
            className="h-20 w-auto cursor-pointer"
          />
        </NavLink>

        {/* Desktop Menu */}
      <ul className="hidden xl:flex items-center gap-6 text-gray-700">
         <li>
            <NavLink to="/" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  <NavItem label="Home" Icon={Home} isActive={isActive} />
                  <GradientUnderline isActive={isActive} />
                </>
              )}
            </NavLink>
          </li>

        

          {/* Offerings Dropdown */}
        

         <li>
  <NavLink to="/offerings/services" className={navLinkStyle}>
    {({ isActive }) => (
      <>
        {/* We add a little padding-bottom (pb-2) to give the underline some breathing room */}
        <div className="pb-2">
          <NavItem label="Services" Icon={Stethoscope} isActive={isActive} />
        </div>
        <GradientUnderline isActive={isActive} />
      </>
    )}
  </NavLink>
</li>

        <li>
      <NavLink to="/symptoms" className={navLinkStyle}>
    {({ isActive }) => (
      <>
        <div className="flex items-center gap-2 pb-1"> {/* Added pb-1 for spacing */}
          <Activity size={18} className={isActive ? "text-[#095884]" : "group-hover:text-[#A1C948] transition-colors"} />
          <span>Symptoms</span>
        </div>
        <GradientUnderline isActive={isActive} />
      </>
    )}
  </NavLink>
</li>

          {/* <li>
            <NavLink to="/blogs" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  Blogs
                  <span className={isActive ? activeUnderlineStyle : underlineStyle}></span>
                </>
              )}
            </NavLink>
          </li> */}

          {/* <li>
            <NavLink to="/patient-education" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  Patient Education
                  <span className={isActive ? activeUnderlineStyle : underlineStyle}></span>
                </>
              )}
            </NavLink>
          </li> */}

          {/* <li>
            <NavLink to="/work-with-us" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  Work With Us
                  <span className={isActive ? activeUnderlineStyle : underlineStyle}></span>
                </>
              )}
            </NavLink>
          </li> */}


          <li 
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={`relative flex items-center gap-3 px-1 transition-all duration-300 font-medium pb-2 ${dropdownOpen ? "text-[#095884]" : "text-gray-600 hover:text-[#095884]"}`}>
              <Pill size={18} className={`transition-colors ${dropdownOpen ? 'text-[#A1C948]' : 'text-gray-400 group-hover:text-[#A1C948]'}`} />
              <span>Our Offerings</span>
              <ChevronDown size={16} className={`transition-transform duration-500 ${dropdownOpen ? 'rotate-180' : ''}`} />
              <GradientUnderline isActive={dropdownOpen} />
            </button>

            <ul className={`absolute left-0 mt-2 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 transition-all duration-300 transform origin-top
              ${dropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
              <li>
                <NavLink to="/offerings/treatments" className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-blue-50 rounded-xl transition-colors group/item" onClick={() => setDropdownOpen(false)}>
                  <Thermometer size={16} className="text-[#A1C948] group-hover/item:rotate-12 transition-transform" />
                  Treatments Offered
                </NavLink>
              </li>
              <li>
                <NavLink to="/offerings/therapies" className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-blue-50 rounded-xl transition-colors group/item" onClick={() => setDropdownOpen(false)}>
                  <HeartPulse size={16} className="text-[#A1C948] group-hover/item:rotate-12 transition-transform" />
                  Therapies Offered
                </NavLink>
              </li>
            </ul>
          </li>

          {/* <li>
            <NavLink to="/about" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  <NavItem label="About Us" Icon={HeartPulse} isActive={isActive} />
                  <GradientUnderline isActive={isActive} />
                </>
              )}
            </NavLink>
          </li> */}

       <li 
  className="relative group"
  onMouseEnter={() => setInfoDropdownOpen(true)}
  onMouseLeave={() => setInfoDropdownOpen(false)}
>
  {/* The Trigger Button */}
  <button className={`relative flex items-center gap-3 px-1 transition-all duration-300 font-medium pb-2 ${infoDropdownOpen ? "text-[#095884]" : "text-gray-600 hover:text-[#095884]"}`}>
    <Share2 size={18} className={`transition-colors ${infoDropdownOpen ? 'text-[#A1C948]' : 'text-gray-400 group-hover:text-[#A1C948]'}`} />
    <span>More Info</span>
    <ChevronDown size={16} className={`transition-transform duration-500 ${infoDropdownOpen ? 'rotate-180' : ''}`} />
    
    {/* Consistent Gradient Underline */}
    <GradientUnderline isActive={infoDropdownOpen} />
  </button>

  {/* THE DROPDOWN PANEL */}
  <ul className={`absolute right-0 mt-2 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 transition-all duration-300 transform origin-top
    ${infoDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
    
    {/* 1. About Us Link */}
    <li>
      <NavLink 
        to="/about" 
        className="flex items-center gap-4 px-4 py-3 text-sm hover:bg-blue-50 rounded-xl transition-all group/item"
        onClick={() => setInfoDropdownOpen(false)}
      >
        <div className="bg-blue-100 p-2 rounded-lg group-hover/item:bg-[#095884] transition-colors">
            <Info size={16} className="text-[#095884] group-hover/item:text-white transition-colors" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">About Us</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Our Mission</span>
        </div>
      </NavLink>
    </li>

    {/* 2. Social Feeds Link (Redirects to internal project page) */}
    <li>
      <NavLink 
        to="/social-feeds" 
        className="flex items-center gap-4 px-4 py-3 text-sm hover:bg-lime-50 rounded-xl transition-all group/item mt-1"
        onClick={() => setInfoDropdownOpen(false)}
      >
        <div className="bg-lime-100 p-2 rounded-lg group-hover/item:bg-[#A1C948] transition-colors">
            <LayoutGrid size={16} className="text-[#A1C948] group-hover/item:text-white transition-colors" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">Social Feeds</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Latest Updates</span>
        </div>
      </NavLink>
    </li>
  </ul>
</li>

          <li className="ml-4">
            <NavLink 
              to="/contact-us" 
              className="group relative px-8 py-3 rounded-full text-white font-bold transition-all duration-300 bg-[#095884] overflow-hidden flex items-center gap-2 hover:shadow-xl hover:shadow-blue-200 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#095884] to-[#1a7bb8] transition-all group-hover:opacity-0"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#095884] to-[#A1C948] opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              <Sparkles size={18} className="relative z-10 group-hover:animate-pulse" />
              <span className="relative z-10">Book Now</span>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-8 text-gray-700 focus:outline-none"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${open ? 'max-h-screen border-t' : 'max-h-0'}`}>
        <ul className="px-8 py-6 flex flex-col gap-5 text-gray-700 font-medium">
          <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
        
             <li><NavLink to="/offerings/services" onClick={() => setOpen(false)}>Services</NavLink></li>
             <li><NavLink to="/symptoms" onClick={() => setOpen(false)}>Symptoms</NavLink></li>
       
          
          {/* Mobile Accordion for Offerings */}
          <li className="flex flex-col gap-3">
             <span className="text-gray-400 text-xs uppercase tracking-widest">Our Offerings</span>
             <NavLink to="/offerings/treatments" className="pl-4" onClick={() => setOpen(false)}>Treatments</NavLink>
             {/* <NavLink to="/offerings/services" className="pl-4" onClick={() => setOpen(false)}>Services</NavLink> */}
             <NavLink to="/offerings/therapies" className="pl-4" onClick={() => setOpen(false)}>Therapies</NavLink>
          </li>
             <li><NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink></li>


           

         
        
          {/* <li><NavLink to="/patient-education" onClick={() => setOpen(false)}>Patient Education</NavLink></li>
          <li><NavLink to="/work-with-us" onClick={() => setOpen(false)}>Work With Us</NavLink></li> */}
          <li className="pt-4">
            <NavLink to="/contact-us" onClick={() => setOpen(false)} className="block text-center py-3 rounded-xl bg-[#095884] text-white">
              Book Now
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;