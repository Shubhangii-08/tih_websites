"use client";

import React, { useState } from 'react';

interface ProposalFormData {
  title: string;
  organization: string;
  email: string;
  budget: string;
  timeline: string;
  description: string;
}

export default function CallForProposal() {
  const [formData, setFormData] = useState<ProposalFormData>({
    title: '',
    organization: '',
    email: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Proposal submitted:', formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Call for Proposal</h1>
          <p className="text-xl text-gray-300">
            Have an innovative project in mind? Submit your proposal and let's create something amazing together.
          </p>
        </div>

        {/* Guidelines Section */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Submission Guidelines</h2>
          <div className="space-y-4 text-gray-300">
            <p>Before submitting your proposal, please ensure:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Your project aligns with our technical capabilities and vision</li>
              <li>You have a clear project scope and timeline</li>
              <li>Budget expectations are well-defined</li>
              <li>Technical requirements are documented</li>
              <li>You have considered potential challenges and solutions</li>
            </ul>
          </div>
        </div>

        {/* Proposal Form */}
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">Submit Your Proposal</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-white mb-2">Project Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
                placeholder="Enter project title"
                required
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-white mb-2">Organization Name</label>
              <input
                type="text"
                name="organization"
                id="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
                placeholder="Enter your organization name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">Contact Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-white mb-2">Estimated Budget</label>
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
                  placeholder="Enter estimated budget"
                  required
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-white mb-2">Project Timeline</label>
                <input
                  type="text"
                  name="timeline"
                  id="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
                  placeholder="e.g., 3 months, 6 months"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-white mb-2">Project Description</label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-white/50 focus:outline-none"
                placeholder="Describe your project, including technical requirements and expected outcomes"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Submit Proposal
              </button>
            </div>

            <p className="text-white/70 text-sm text-center mt-4">
              (Your proposal will be reviewed within 5 business days)
            </p>
          </form>
        </div>
      </div>
    </div>
  );
} 