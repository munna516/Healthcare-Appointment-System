"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiMapPin, FiPhoneCall, FiMail, FiGlobe, FiSend } from "react-icons/fi";
import Image from "next/image";
import Newsletter from "@components/Newsletter/Newsletter";

export default function ContactUs() {
  const contactFormImage = "https://i.ibb.co.com/TnX2m24/contact-form.jpg";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Log form data to console
    console.log("Form submitted:", formData);

    // Show success toast
    toast.success("Message sent successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: "",
    });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or want to learn more? We&apos;re here to help. Reach
          out to us through any of these channels or fill out the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* Address Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-pink-100 p-4 rounded-full mb-4">
            <FiMapPin className="text-pink-500 text-2xl" />
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-2">Our Location</h3>
          <p className="text-gray-600">
            250 Tech Park Drive,
            <br />
            Dhaka, Bangladesh.
          </p>
        </div>

        {/* Phone Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <FiPhoneCall className="text-blue-500 text-2xl" />
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-2">Call Us</h3>
          <p className="text-gray-600">+88 01855 555555</p>
          <a
            href="tel:+88 01855 555555"
            className="text-blue-500 hover:text-blue-700 mt-2 text-sm font-medium"
          >
            Call Now
          </a>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-yellow-100 p-4 rounded-full mb-4">
            <FiMail className="text-yellow-500 text-2xl" />
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-2">Email Us</h3>
          <p className="text-gray-600">info@healthpoint-center.com</p>
          <a
            href="mailto:info@healthpoint-center.com"
            className="text-blue-500 hover:text-blue-700 mt-2 text-sm font-medium"
          >
            Send Email
          </a>
        </div>

        {/* Website Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <FiGlobe className="text-green-500 text-2xl" />
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-2">Our Website</h3>
          <p className="text-gray-600">healthpoint-center.vercel.app</p>
          <a
            href="https://healthpoint-center.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 mt-2 text-sm font-medium"
          >
            Visit Site
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        {/* Form Column */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+88 01855 555555"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="">Select a service</option>
                  <option value="consultation">Consultation</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={contactFormImage}
              alt="Contact us"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  We&apos;d love to hear from you
                </h3>
                <p className="text-gray-200">
                  Our team is ready to answer your questions and provide the
                  support you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Find us on the map
        </h2>
        <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            className="w-full h-80 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531685!3d-37.81627917975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c6e0e846b3f4f0!2sNew+York%2C+USA!5e0!3m2!1sen!2s!4v1606893633285!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            title="Our Location on Google Maps"
          ></iframe>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
