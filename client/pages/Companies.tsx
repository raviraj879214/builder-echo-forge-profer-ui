import { DashboardLayout } from "@/components/DashboardLayout";
import { Search, ChevronDown, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Company {
  id: number;
  name: string;
  description: string;
  yearsInBusiness: number;
  employees: number;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
  joinedDate: string;
  status: "Pending" | "Approved" | "Rejected";
}

const companiesData: Company[] = [
  {
    id: 1,
    name: "Apex Roofing Solutions",
    description: "Residential and commercial roofing services",
    yearsInBusiness: 5,
    employees: 15,
    contactPerson: "Michael Rodriguez",
    email: "michael@apexroofing.com",
    phone: "(512) 555-1234",
    location: "Austin, TX",
    joinedDate: "Mar 18, 2025",
    status: "Pending",
  },
  {
    id: 2,
    name: "Skyligh Contractors",
    description: "Residential roofing and siding services",
    yearsInBusiness: 8,
    employees: 23,
    contactPerson: "Sarah Johnson",
    email: "sarah@skylighcontractors.com",
    phone: "(303) 555-9876",
    location: "Denver, CO",
    joinedDate: "Mar 17, 2025",
    status: "Pending",
  },
  {
    id: 3,
    name: "Elite Roofing LLC",
    description: "Eco-friendly roofing solutions and repairs",
    yearsInBusiness: 10,
    employees: 35,
    contactPerson: "David Chen",
    email: "david@eliteroofing.com",
    phone: "(503) 555-4321",
    location: "Portland, OR",
    joinedDate: "Mar 16, 2025",
    status: "Approved",
  },
  {
    id: 4,
    name: "Premier Roof Systems",
    description: "Hurricane-resistant roofing specialists",
    yearsInBusiness: 3,
    employees: 7,
    contactPerson: "Carlos Martinez",
    email: "carlos@premierroof.com",
    phone: "(305) 555-7890",
    location: "Miami, FL",
    joinedDate: "Mar 15, 2025",
    status: "Rejected",
  },
  {
    id: 5,
    name: "TopTier Roofing Inc",
    description: "Premium roofing and gutter systems",
    yearsInBusiness: 7,
    employees: 18,
    contactPerson: "Lisa Kim",
    email: "lisa@toproofing.com",
    phone: "(206) 555-4567",
    location: "Seattle, WA",
    joinedDate: "Mar 15, 2025",
    status: "Pending",
  },
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

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredData = companiesData.filter((company) => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || company.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-profer-gray-900">
            Company Management
          </h1>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg border border-profer-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {/* Status Filter */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none bg-white border border-profer-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent"
                >
                  <option value="All">All</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent w-64"
                />
              </div>
            </div>

            {/* Add Company Button */}
            <button className="flex items-center space-x-2 bg-profer-blue hover:bg-profer-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium">
              <Plus className="w-4 h-4" />
              <span>Add Company</span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-profer-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Company Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Joined
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
                {filteredData.map((company) => (
                  <tr key={company.id} className="hover:bg-profer-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-profer-gray-900">
                          {company.name}
                        </div>
                        <div className="text-sm text-profer-gray-500">
                          {company.description}
                        </div>
                        <div className="text-xs text-profer-gray-400 mt-1">
                          {company.yearsInBusiness} years in business •{" "}
                          {company.employees} employees
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-profer-gray-900">
                          {company.contactPerson}
                        </div>
                        <div className="text-sm text-profer-gray-500">
                          {company.email}
                        </div>
                        <div className="text-sm text-profer-gray-500">
                          {company.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-profer-gray-500">
                      {company.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-profer-gray-500">
                      {company.joinedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={company.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button className="text-profer-gray-500 hover:text-profer-gray-700 text-sm font-medium">
                          View
                        </button>
                        <button className="bg-profer-blue hover:bg-profer-blue/90 text-white px-3 py-1 rounded text-sm font-medium">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
