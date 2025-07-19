import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918489555597"
        target="_blank"
        rel="noreferrer"
        className="bg-[#ee099a] hover:bg-[#e07ec8] text-white p-4 rounded-full shadow-lg transition-all"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Call */}
      <a
        href="tel:+919944555597"
        className="bg-[#ee099a] hover:bg-[#e07ec8] text-white p-4 rounded-full shadow-lg transition-all"
        title="Call Now"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
};

export default FloatingCTA;
