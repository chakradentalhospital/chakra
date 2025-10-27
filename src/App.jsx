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
import { Navigate } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Blog from "./Components/Blogs/Blog";

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
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/blog-1" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/kids-dentistry" element={<KidsDentistry />} />
        <Route path="/dental-consultations" element={<DentalConsultations />} />
        <Route path="/pain-free-treatment" element={<PainFreeTreatment />} />
        <Route path="/aligners" element={<Aligners />} />
        <Route path="/invisalign" element={<Invisalign />} />
        <Route path="/wisdom-tooth-removal" element={<WisdomToothRemoval />} />
        <Route path="/scaling" element={<Scaling />} />
        <Route path="/tooth-whitening" element={<ToothWhitening />} />
        <Route path="/dental-implants" element={<DentalImplants />} />
        <Route path="/root-canal-treatment" element={<RootCanalTreatment />} />
        <Route path="/full-mouth-rehabilitation" element={<FullMouthRehabilitation />} />
        <Route path="/dental-crowns" element={<DentalCrowns />} />
        <Route path="/zirconia-crowns" element={<ZirconiaCrowns />} />
         <Route path="*" element={<Navigate to="/" replace />} />
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
