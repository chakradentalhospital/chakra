import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import {
  FaPhoneSquareAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
];

const serviceModules = [
  "Kids Dentistry",
  "Dental Consultations",
  "Pain Free Treatment",
  "Aligners",
  "Invisalign",
  "Wisdom Tooth Removal",
  "Scaling",
  "Tooth Whitening",
  "Dental Implants",
  "Root Canal Treatment",
  "Full Mouth Rehabilitation",
  "Dental Crowns",
  "Zirconia Crowns",
];

const Footer = () => {
  return (
    <footer className="bg-[#650E45] text-white py-10 px-5 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <h2 className="text-lg md:text-xl font-semibold leading-tight">
              Chakra Dentist Hospital
            </h2>
          </div>
          <p className="text-sm mb-4">
            Caring for your smile with expertise and compassion.
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-sm mb-1">First Office</h4>
            <p className="text-sm leading-relaxed">
              Ground Floor, 1, Srinivasa Ragavan St,
              <br />
              R.S. Puram, Coimbatore,
              <br />
              Tamil Nadu 641002
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-sm mb-1">Second Office</h4>
            <p className="text-sm leading-relaxed">
              Trichy Rd,
              <br />
              Coimbatore,
              <br />
              Tamil Nadu 641016
            </p>
          </div>

          <div className="flex items-center text-sm mb-2 gap-2">
            <MdEmail />
            <a href="mailto:shantoshyuva@gmail.com" className="hover:underline">
              shantoshyuva@gmail.com
            </a>
          </div>

          <div className="flex items-center text-sm gap-2 md:whitespace-nowrap">
            <FaPhoneSquareAlt />
            <a
              href="tel:9944555597"
              className="hover:underline whitespace-nowrap"
            >
              +91 9944555597
            </a>
            <span className="mx-1">|</span>
            <a
              href="https://wa.me/918489555597"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: 8489555597
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:underline hover:text-[#FFAE00] transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            {serviceModules.map((service, idx) => (
              <li key={idx}>
                <Link
                  to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-[#FFAE00] transition-colors"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">Follow Us</h3>
          <p className="text-sm mb-4">
            Stay connected through our social handles
          </p>
          <div className="flex gap-6 text-xl">
            <div className="flex flex-col items-center gap-1">
              <a
                href="https://www.instagram.com/chakradental_ondipudur/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="hover:text-[#FFAE00] transition-all cursor-pointer" />
              </a>
            </div>
            <div className="flex flex-col items-center gap-1">
              <a
                href="https://www.facebook.com/people/Chakra-Dental-Hospital/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="hover:text-[#FFAE00] transition-all cursor-pointer" />
              </a>
            </div>

            <div className="flex flex-col items-center gap-1">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chakra+Dental+Hospital+RS+Puram"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt className="hover:text-[#FFAE00] transition-all cursor-pointer" />
              </a>
              <span className="text-xs text-white text-center leading-tight">
                RS Puram
              </span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chakra+Dental+Hospital+Ondipudur"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt className="hover:text-[#FFAE00] transition-all cursor-pointer" />
              </a>
              <span className="text-xs text-white text-center leading-tight">
                Ondipudur
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Chakra Dentist Hospital. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
