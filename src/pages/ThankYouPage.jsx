import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-lg animate-fadeIn">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-[#650E45] text-6xl animate-bounce" />
        </div>

        <h1 className="text-3xl font-bold text-[#650E45] mb-4">
          Thank You! 🎉
        </h1>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          We’ve received your request successfully.  
          Our dental experts will get back to you shortly.
        </p>

        <Link
          to="/"
          className="inline-block px-8 py-3 bg-[#650E45] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
