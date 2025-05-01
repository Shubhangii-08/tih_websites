import React from "react";

const Introduction = () => (
  <section className="bg-white py-12">
    <div className="container mx-auto max-w-4xl px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Welcome to The TIH-iHub Drishti</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        iHub Drishti, IIT Jodhpur is a Technology Innovation Hub focussed around "Computer Vision, Augmented Reality and Virtual Reality". It is a Section-8, Not-for-profit Organisation, promoted by and at the Indian Institute of Technology Jodhpur 
        under a National Mission on Interdisciplinary Cyber Physical Systems (NM-ICPS) of the Government of India. The hub, steered by the Hub Governing Board and the Director of the TIH, 
        will host teams of faculty members, research scholars, developers and scientists who will work towards developing the technologies.  
      </p>
      <a href="/introduction" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-900 transition">Read More</a>
    </div>
  </section>
);

export default Introduction;
