"use client";

import React, { FormEvent, useState, ChangeEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments: string;
}

const PartnerSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-8">
      <h2 className="text-6xl font-bold text-white mb-16 text-center">Lets Partner up.</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left side with image and text */}
        <div className="w-full md:w-1/2 p-8">
          <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-[#2B7B8C] bg-opacity-90 flex flex-col justify-center p-8"
              style={{
                backgroundImage: "url('/images/idea-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-[#2B7B8C] bg-opacity-90"></div>
              <h3 className="text-4xl font-bold text-white mb-4 relative z-10">
                Do you have an <span className="underline">idea</span>? We have the tools to make it a reality.
              </h3>
            </div>
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto" autoComplete="off">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-white mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full p-2.5 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full p-2.5 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
                  autoComplete="off"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2.5 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white mb-1">Phone No.</label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your contact no."
                className="w-full p-2.5 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="comments" className="block text-white mb-1">Comments</label>
              <textarea
                id="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={4}
                className="w-full p-2.5 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition duration-300"
            >
              Submit
            </button>

            <p className="text-white/70 text-sm text-center mt-2">
              (Your idea is 100% protected by our NDA)
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;