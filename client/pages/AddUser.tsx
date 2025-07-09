import { DashboardLayout } from "@/components/DashboardLayout";
import { ArrowLeft, ChevronDown, Save } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "Customer",
    status: "Active",
    company: "",
    department: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating user:", formData);
    // Handle form submission here
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/admin/users"
              className="flex items-center text-profer-gray-600 hover:text-profer-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Users
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-profer-gray-900">
            Add New User
          </h1>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg border border-profer-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-lg font-semibold text-profer-gray-900 mb-6">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                    placeholder="Enter last name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                    placeholder="user@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Role & Access */}
            <div>
              <h2 className="text-lg font-semibold text-profer-gray-900 mb-6">
                Role & Access
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                    Role *
                  </label>
                  <div className="relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full appearance-none bg-white border border-profer-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                    >
                      <option value="Customer">Customer</option>
                      <option value="Administrator">Administrator</option>
                      <option value="Support Agent">Support Agent</option>
                      <option value="Verification Reviewer">
                        Verification Reviewer
                      </option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                    Status *
                  </label>
                  <div className="relative">
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      required
                      className="w-full appearance-none bg-white border border-profer-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Pending">Pending</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-lg font-semibold text-profer-gray-900 mb-6">
                Company Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                    placeholder="Enter department"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-lg font-semibold text-profer-gray-900 mb-6">
                Additional Information
              </h2>
              <div>
                <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent resize-none"
                  placeholder="Add any additional notes about this user..."
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end space-x-4 pt-6 border-t border-profer-gray-200">
              <Link
                to="/admin/users"
                className="px-6 py-2 border border-profer-gray-300 text-profer-gray-700 rounded-lg hover:bg-profer-gray-50 font-medium"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="flex items-center space-x-2 bg-profer-blue hover:bg-profer-blue/90 text-white px-6 py-2 rounded-lg font-medium"
              >
                <Save className="w-4 h-4" />
                <span>Create User</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
