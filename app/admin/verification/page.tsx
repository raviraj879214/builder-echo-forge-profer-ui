"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface VerificationItem {
  id: number;
  companyName: string;
  contactPerson: string;
  location: string;
  submissionDate: string;
  status: "Pending" | "Approved" | "Rejected";
}

const verificationData: VerificationItem[] = [
  {
    id: 1,
    companyName: "Apex Roofing Solutions",
    contactPerson: "Michael Chen",
    location: "Austin, TX",
    submissionDate: "Mar 18, 2025",
    status: "Pending",
  },
  {
    id: 2,
    companyName: "Skyligh Contractors",
    contactPerson: "Sarah Johnson",
    location: "Denver, CO",
    submissionDate: "Mar 17, 2025",
    status: "Pending",
  },
  {
    id: 3,
    companyName: "Elite Roofing LLC",
    contactPerson: "David Chen",
    location: "Portland, OR",
    submissionDate: "Mar 16, 2025",
    status: "Approved",
  },
  {
    id: 4,
    companyName: "Premier Roof Systems",
    contactPerson: "Carlos Martinez",
    location: "Miami, FL",
    submissionDate: "Mar 15, 2025",
    status: "Rejected",
  },
  {
    id: 5,
    companyName: "TopTier Roofing Inc",
    contactPerson: "Lisa Kim",
    location: "Seattle, WA",
    submissionDate: "Mar 15, 2025",
    status: "Pending",
  },
  {
    id: 6,
    companyName: "Sunshine Roofing Co",
    contactPerson: "Robert Garcia",
    location: "Phoenix, AZ",
    submissionDate: "Mar 14, 2025",
    status: "Approved",
  },
];

const tabs = [
  { id: "queue", name: "Verification Queue", active: true },
  { id: "activity", name: "Recent Activity", active: false },
  { id: "analytics", name: "Platform Analytics", active: false },
];

function StatusBadge({ status }: { status: string }) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-profer-orange/10 text-profer-orange";
      case "Approved":
        return "bg-profer-green/10 text-profer-green";
      case "Rejected":
        return "bg-profer-red/10 text-profer-red";
      default:
        return "bg-profer-gray-100 text-profer-gray-600";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex px-2 py-1 text-xs font-medium rounded-full",
        getStatusStyles(status),
      )}
    >
      {status}
    </span>
  );
}

function ActionButton({ status }: { status: string }) {
  if (status === "Pending") {
    return (
      <button className="bg-profer-blue hover:bg-profer-blue/90 text-white px-3 py-1 rounded text-sm font-medium">
        Review
      </button>
    );
  }

  return (
    <button className="text-profer-gray-500 hover:text-profer-gray-700 text-sm font-medium">
      View
    </button>
  );
}

export default function VerificationPage() {
  const [activeTab, setActiveTab] = useState("queue");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = verificationData.filter((item) =>
    item.companyName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-profer-gray-900">
          Verification Queue
        </h1>
      </div>

      {/* Tabs and Search */}
      <div className="bg-white rounded-lg border border-profer-gray-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-profer-gray-200">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "pb-2 text-sm font-medium border-b-2 transition-colors",
                  activeTab === tab.id
                    ? "border-profer-blue text-profer-blue"
                    : "border-transparent text-profer-gray-500 hover:text-profer-gray-700",
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-profer-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                  Company Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                  Submission Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-profer-gray-200">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-profer-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-profer-gray-900">
                        {item.companyName}
                      </div>
                      <div className="text-sm text-profer-gray-500">
                        {item.contactPerson}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-profer-gray-500">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-profer-gray-500">
                    {item.submissionDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ActionButton status={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
