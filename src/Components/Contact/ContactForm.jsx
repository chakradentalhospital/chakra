import React, { useState } from "react";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateName = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    if (!name.trim()) return "Name is required";
    if (!regex.test(name)) return "Name should contain only letters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    if (!validator.isEmail(email)) return "Please enter a valid email";
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    if (message.length < 10) return "Message should be at least 10 characters";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const filteredValue = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filteredValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send(
        "service_x8rzipp", 
        "template_k8sdydb", 
        {
          from_name: formData.name,
          phone: formData.phoneNo,
          reply_to: formData.email,
          message: formData.message,
        },
        "KFW_3eSWlz-QbSGBq" 
      )
      .then(() => {
        toast.success("Message sent successfully 🎉");
        setFormData({ name: "", email: "", phoneNo: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message.");
      });
  };


  return (
    <section className="py-20 px-5 md:px-10 lg:px-[64px] bg-[#f9f9f9]">
      <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10">
        {/* Address Left */}
        {/* Address Left */}
        <div className="flex-1 text-[#650E45] space-y-6">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>

          <div>
            <h3 className="font-semibold text-lg mb-1">First Office</h3>
            <p className="text-sm text-gray-600">
              Ground Floor, 1, Srinivasa Ragavan St,
              <br />
              R.S. Puram, Coimbatore,
              <br />
              Tamil Nadu 641002
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Second Office</h3>
            <p className="text-sm text-gray-600">
              Trichy Rd,
              <br />
              Coimbatore,
              <br />
              Tamil Nadu 641016
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Email</h3>
            <p className="text-sm text-gray-600">
              <a
                href="mailto:shantoshyuva@gmail.com"
                className="hover:underline"
              >
                shantoshyuva@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Phone</h3>
            <p className="text-sm text-gray-600">
              <a href="tel:+919944555597" className="hover:underline">
                +91 9944555597
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
            <p className="text-sm text-gray-600">
              <a
                href="https://wa.me/918489555597"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                8489555597
              </a>
            </p>
          </div>
        </div>

        {/* Form Right */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#650E45]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`mt-1 p-3 w-full rounded-md border text-sm bg-gray-50 text-gray-800 focus:outline-none ${
                  errors.name
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-[#650E45]/40 focus:border-[#650E45]"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phoneNo"
                className="block text-sm font-medium text-[#650E45]"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="mt-1 p-3 w-full rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-800 focus:outline-none focus:ring-[#650E45]/40 focus:border-[#650E45]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#650E45]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`mt-1 p-3 w-full rounded-md border text-sm bg-gray-50 text-gray-800 focus:outline-none ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-[#650E45]/40 focus:border-[#650E45]"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#650E45]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your message"
              className={`mt-1 p-3 w-full rounded-md border text-sm bg-gray-50 text-gray-800 focus:outline-none ${
                errors.message
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-[#650E45]/40 focus:border-[#650E45]"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#650E45] text-white px-6 py-3 rounded-full font-semibold border-2 border-[#650E45] hover:bg-transparent hover:text-[#650E45] transition-all duration-300 w-fit"
          >
            SEND A REQUEST
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
