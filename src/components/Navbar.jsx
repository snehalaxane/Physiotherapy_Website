import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="w-full px-10 py-3 flex items-center">
        
        {/* Logo */}
        <img
          src={logo}
          alt="MyClinic Logo"
          className="h-16 md:h-20 w-auto cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex ml-auto gap-10 text-gray-700 font-medium">
         <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>

        <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `cursor-pointer hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              About us
            </NavLink>
          </li>
              <li className="relative">
      {/* Parent menu */}
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer hover:text-blue-600 font-medium"
      >
        Our Offerings
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border">
          <li>
            <NavLink
              to="/offerings/treatments"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Treatments Offered
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/offerings/services"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Services Offered
            </NavLink>
          </li>
           <li>
            <NavLink
              to="/offerings/therapies"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Therapies Offered
            </NavLink>
          </li>
        </ul>
      )}
    </li>

    
             <li className="hover:text-blue-600 cursor-pointer">Symptoms</li>
      
          <li className="hover:text-blue-600 cursor-pointer">Patient Education</li>
          <li className="hover:text-blue-600 cursor-pointer">Work With Us</li>
           {/* Special "Book Now" Button */}
          <li>
            <NavLink 
              to="/contact-us" // Or your contact page
              className="px-6 py-2.5 rounded-full text-white font-bold transition-transform active:scale-95 shadow-md"
              style={{ background: 'linear-gradient(135deg, #095884 0%, #A1C948 100%)' }}
            >
              Book Now
            </NavLink>
          </li>
     

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About us</li>
          <li className="hover:text-blue-600 cursor-pointer">Our Offerings</li>
          <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
          <li className="hover:text-blue-600 cursor-pointer">Patient Education</li>
          <li className="hover:text-blue-600 cursor-pointer">Work With Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Book Now</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
