import { DashboardLayout } from "@/components/DashboardLayout";
import {
  ChevronDown,
  Settings as SettingsIcon,
  Bell,
  Shield,
  Users,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const settingSections = [
  {
    id: "general",
    name: "General Settings",
    icon: SettingsIcon,
    active: true,
  },
  {
    id: "notifications",
    name: "Notifications",
    icon: Bell,
    active: false,
  },
  {
    id: "security",
    name: "Security",
    icon: Shield,
    active: false,
  },
  {
    id: "admin",
    name: "Admin Access",
    icon: Users,
    active: false,
  },
];

export default function Settings() {
  const [activeSection, setActiveSection] = useState("general");
  const [companyName, setCompanyName] = useState("Profer Admin");
  const [timezone, setTimezone] = useState("UTC");

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log("Saving changes...");
  };

  return (
    <DashboardLayout>
      <div className="flex gap-6">
        {/* Settings Sidebar */}
        <div className="w-64 bg-white rounded-lg border border-profer-gray-200 p-4 h-fit">
          <nav className="space-y-1">
            {settingSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                    activeSection === section.id
                      ? "bg-profer-blue text-white"
                      : "text-profer-gray-600 hover:bg-profer-gray-100",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{section.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-white rounded-lg border border-profer-gray-200 p-6">
          {activeSection === "general" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-profer-gray-900">
                    General Settings
                  </h2>
                  <p className="text-sm text-profer-gray-600 mt-1">
                    Configure basic application settings and preferences
                  </p>
                </div>
                <button
                  onClick={handleSaveChanges}
                  className="bg-profer-blue hover:bg-profer-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Save Changes
                </button>
              </div>

              <div className="space-y-6">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                  />
                </div>

                {/* Timezone */}
                <div>
                  <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                    Timezone
                  </label>
                  <div className="relative">
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="w-full appearance-none bg-white border border-profer-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                    >
                      <option value="UTC">UTC</option>
                      <option value="EST">Eastern Time (EST)</option>
                      <option value="CST">Central Time (CST)</option>
                      <option value="MST">Mountain Time (MST)</option>
                      <option value="PST">Pacific Time (PST)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "notifications" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-profer-gray-900">
                    Notifications
                  </h2>
                  <p className="text-sm text-profer-gray-600 mt-1">
                    Manage your notification preferences and settings
                  </p>
                </div>
                <button
                  onClick={handleSaveChanges}
                  className="bg-profer-blue hover:bg-profer-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Save Changes
                </button>
              </div>
              <div className="text-profer-gray-600">
                Notification settings will be available here.
              </div>
            </div>
          )}

          {activeSection === "security" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-profer-gray-900">
                    Security
                  </h2>
                  <p className="text-sm text-profer-gray-600 mt-1">
                    Configure security settings and access controls
                  </p>
                </div>
                <button
                  onClick={handleSaveChanges}
                  className="bg-profer-blue hover:bg-profer-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Save Changes
                </button>
              </div>
              <div className="text-profer-gray-600">
                Security settings will be available here.
              </div>
            </div>
          )}

          {activeSection === "admin" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-profer-gray-900">
                    Admin Access
                  </h2>
                  <p className="text-sm text-profer-gray-600 mt-1">
                    Manage administrator permissions and access levels
                  </p>
                </div>
                <button
                  onClick={handleSaveChanges}
                  className="bg-profer-blue hover:bg-profer-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Save Changes
                </button>
              </div>
              <div className="text-profer-gray-600">
                Admin access settings will be available here.
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
