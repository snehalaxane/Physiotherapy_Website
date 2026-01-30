import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Treatment from "./pages/Treatment";
import Therapy from "./pages/Therapy";
import Services from "./pages/Services";
import TreatmentDetail from "./pages/TreatmentDetail";
import TherapyDetail from "./pages/TherapyDetail";
import Footer from "./components/Footer";
import ServiceDetails from "./pages/ServiceDetails";
import ContactPhysio from "./pages/ContactUs";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/offerings/treatments" element={<Treatment />} />
                  <Route path="/offerings/therapies" element={<Therapy />} />
                  <Route path="/offerings/treatments/:id" element={<TreatmentDetail />} />
                   <Route path="/offerings/therapies/:id" element={<TherapyDetail />} />
                  <Route path="/offerings/services" element={<Services />} />
                   <Route path="/offerings/services/:id" element={<ServiceDetails />} />
                  <Route path="/contact-us" element={<ContactPhysio />} />
        </Routes>
      </main>
      {/* <TeamSection />
       <AppointmentForm />
      <RecoveryStories /> */}
     
      <Footer />
    </>
  );
}
