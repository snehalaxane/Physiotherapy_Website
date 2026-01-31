import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Reusable Underline Logic
  const underlineStyle = `absolute bottom-0 left-0 w-full h-0.5 bg-[#A1C948] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`;
  const activeUnderlineStyle = `absolute bottom-0 left-0 w-full h-0.5 bg-[#095884] transform scale-x-100`;

  const navLinkStyle = ({ isActive }) =>
    `relative py-2 transition-colors duration-300 group font-medium ${
      isActive ? "text-[#095884]" : "text-gray-700 hover:text-[#095884]"
    }`;

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
        <ul className="hidden xl:flex items-center gap-14 text-gray-700">
          <li>
            <NavLink to="/" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  Home
                  <span className={isActive ? activeUnderlineStyle : underlineStyle}></span>
                </>
              )}
            </NavLink>
          </li>

        

          {/* Offerings Dropdown */}
        

           <li>
            <NavLink to="/offerings/services" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  Services
                  <span className={isActive ? activeUnderlineStyle : underlineStyle}></span>
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink to="/symptoms" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  Symptoms
                  <span className={isActive ? activeUnderlineStyle : underlineStyle}></span>
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
            <button className="flex items-center gap-1 py-2 font-medium cursor-pointer group-hover:text-[#095884] transition-colors">
              Our Offerings 
              <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              <span className={dropdownOpen ? activeUnderlineStyle : underlineStyle}></span>
            </button>

            {/* Dropdown Menu */}
            <ul className={`absolute left-0 mt-1 w-56 bg-white shadow-xl rounded-xl border border-gray-100 p-2 transition-all duration-300 
              ${dropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
              {['Treatments', 'Therapies'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/offerings/${item.toLowerCase()}`}
                    className="block px-4 py-2.5 text-sm hover:bg-[#F5F3F0] hover:text-[#095884] rounded-lg transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item} Offered
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

            <li>
            <NavLink to="/about" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  About Us
                  <span className={isActive ? activeUnderlineStyle : underlineStyle}></span>
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/contact-us" 
              className="px-6 py-2.5 rounded-full text-white font-bold transition-all hover:shadow-lg active:scale-95 bg-gradient-to-r from-[#095884] to-[#A1C948]"
            >
              Book Now
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