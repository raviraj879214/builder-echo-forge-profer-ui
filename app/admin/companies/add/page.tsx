"use client";

import { ArrowLeft, ChevronDown, Save, Plus, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function AddCompanyPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    description: "",
    website: "",
    industry: "",
    foundedYear: "",
    employeeCount: "",
    businessType: "",
    contactFirstName: "",
    contactLastName: "",
    contactEmail: "",
    contactPhone: "",
    contactTitle: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    licenseNumber: "",
    insuranceProvider: "",
    insuranceAmount: "",
    bondedAmount: "",
    services: [""],
    certifications: [""],
    status: "Pending",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (
    index: number,
    value: string,
    field: "services" | "certifications",
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field: "services" | "certifications") => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayItem = (
    index: number,
    field: "services" | "certifications",
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating company:", formData);
    // Handle form submission here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/companies"
            className="flex items-center text-profer-gray-600 hover:text-profer-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Companies
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-profer-gray-900">
          Add New Company
        </h1>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg border border-profer-gray-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Information */}
          <div>
            <h2 className="text-lg font-semibold text-profer-gray-900 mb-6">
              Company Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                  placeholder="Enter company name"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent resize-none"
                  placeholder="Brief description of the company's services and expertise..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                  placeholder="https://www.company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                  Industry *
                </label>
                <div className="relative">
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full appearance-none bg-white border border-profer-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                  >
                    <option value="">Select Industry</option>
                    <option value="Roofing">Roofing</option>
                    <option value="Construction">Construction</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="HVAC">HVAC</option>
                    <option value="Landscaping">Landscaping</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Primary Contact */}
          <div>
            <h2 className="text-lg font-semibold text-profer-gray-900 mb-6">
              Primary Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="contactFirstName"
                  value={formData.contactFirstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                  placeholder="John"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="contactLastName"
                  value={formData.contactLastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                  placeholder="Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-profer-gray-200">
            <Link
              href="/admin/companies"
              className="px-6 py-2 border border-profer-gray-300 text-profer-gray-700 rounded-lg hover:bg-profer-gray-50 font-medium"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="flex items-center space-x-2 bg-profer-blue hover:bg-profer-blue/90 text-white px-6 py-2 rounded-lg font-medium"
            >
              <Save className="w-4 h-4" />
              <span>Create Company</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
