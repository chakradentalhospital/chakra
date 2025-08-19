import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import KidsDentistry from "./pages/Services/KidsDentistry";
import DentalConsultations from "./pages/Services/DentalConsultations";
import Footer from "./Components/Footer";
import Contact from "./pages/Contact";
import PainFreeTreatment from "./pages/Services/PainFreeTreatment";
import Aligners from "./pages/Services/Aligners";
import Invisalign from "./pages/Services/Invisalign";
import WisdomToothRemoval from "./pages/Services/WisdomToothRemoval";
import Scaling from "./pages/Services/Scaling";
import ToothWhitening from "./pages/Services/ToothWhitening";
import DentalImplants from "./pages/Services/DentalImplants";
import RootCanalTreatment from "./pages/Services/RootCanalTreatment";
import FullMouthRehabilitation from "./pages/Services/FullMouthRehabilitation";
import DentalCrowns from "./pages/Services/DentalCrowns";
import ZirconiaCrowns from "./pages/Services/ZirconiaCrowns";
import FloatingCTA from "./FloatingCTA";
import { ToastContainer } from "react-toastify";
import ThankYouPage from "./pages/ThankYouPage";

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  const hideLayout = location.pathname === "/thankyou";

  return (
    <>
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/services/kids-dentistry" element={<KidsDentistry />} />
        <Route path="/services/dental-consultations" element={<DentalConsultations />} />
        <Route path="/services/pain-free-treatment" element={<PainFreeTreatment />} />
        <Route path="/services/aligners" element={<Aligners />} />
        <Route path="/services/invisalign" element={<Invisalign />} />
        <Route path="/services/wisdom-tooth-removal" element={<WisdomToothRemoval />} />
        <Route path="/services/scaling" element={<Scaling />} />
        <Route path="/services/tooth-whitening" element={<ToothWhitening />} />
        <Route path="/services/dental-implants" element={<DentalImplants />} />
        <Route path="/services/root-canal-treatment" element={<RootCanalTreatment />} />
        <Route path="/services/full-mouth-rehabilitation" element={<FullMouthRehabilitation />} />
        <Route path="/services/dental-crowns" element={<DentalCrowns />} />
        <Route path="/services/zirconia-crowns" element={<ZirconiaCrowns />} />
      </Routes>
      {!hideLayout && <Footer />}
       {!hideLayout && <FloatingCTA />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
