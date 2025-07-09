import { DashboardLayout } from "@/components/DashboardLayout";
import { Search, ChevronDown, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  projectType: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  location: string;
  startDate: string;
  endDate: string;
  budget: number;
  status: "Pending" | "Active" | "Completed";
}

const projectsData: Project[] = [
  {
    id: "PRJ-2025-069",
    projectType: "Roof repair",
    customerName: "James Wilson",
    customerEmail: "james.wilson@example.com",
    customerPhone: "(512) 555-7890",
    location: "Austin, TX",
    startDate: "Apr 5, 2025",
    endDate: "Apr 15, 2025",
    budget: 12500,
    status: "Pending",
  },
  {
    id: "PRJ-2025-068",
    projectType: "Commercial roofing renovation",
    customerName: "Emily Roberts",
    customerEmail: "emily.roberts@example.com",
    customerPhone: "(303) 555-1234",
    location: "Denver, CO",
    startDate: "Mar 20, 2025",
    endDate: "Apr 5, 2025",
    budget: 58500,
    status: "Active",
  },
  {
    id: "PRJ-2025-067",
    projectType: "Residential slate roofing installation",
    customerName: "Thomas Baker",
    customerEmail: "thomas.baker@example.com",
    customerPhone: "(503) 555-9876",
    location: "Portland, OR",
    startDate: "Mar 22, 2025",
    endDate: "Apr 2, 2025",
    budget: 18000,
    status: "Active",
  },
  {
    id: "PRJ-2025-066",
    projectType: "Residential 2-story building emergency roof repair",
    customerName: "Sophia Chang",
    customerEmail: "sophia.chang@example.com",
    customerPhone: "(206) 555-4321",
    location: "Seattle, WA",
    startDate: "Mar 12, 2025",
    endDate: "Mar 18, 2025",
    budget: 3200,
    status: "Completed",
  },
];

function StatusBadge({ status }: { status: string }) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-profer-orange/10 text-profer-orange";
      case "Active":
        return "bg-profer-blue/10 text-profer-blue";
      case "Completed":
        return "bg-profer-green/10 text-profer-green";
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

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const filteredData = projectsData.filter((project) => {
    const matchesSearch =
      project.projectType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "All Statuses" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-profer-gray-900">
            Project Management
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
                  className="appearance-none bg-white border border-profer-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent min-w-[120px]"
                >
                  <option value="All Statuses">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Type Filter */}
              <div className="relative">
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="appearance-none bg-white border border-profer-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent min-w-[100px]"
                >
                  <option value="All Types">All Types</option>
                  <option value="Roof repair">Roof repair</option>
                  <option value="Commercial roofing">Commercial roofing</option>
                  <option value="Residential roofing">
                    Residential roofing
                  </option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent w-64"
                />
              </div>
            </div>

            {/* Create Project Button */}
            <button className="flex items-center space-x-2 bg-profer-blue hover:bg-profer-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium">
              <Plus className="w-4 h-4" />
              <span>Create Project</span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-profer-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Project Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Timeline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Budget
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
                {filteredData.map((project) => (
                  <tr key={project.id} className="hover:bg-profer-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-profer-gray-900">
                          {project.id}
                        </div>
                        <div className="text-sm text-profer-gray-500">
                          {project.projectType}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-profer-gray-900">
                          {project.customerName}
                        </div>
                        <div className="text-sm text-profer-gray-500">
                          {project.customerEmail}
                        </div>
                        <div className="text-sm text-profer-gray-500">
                          {project.customerPhone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-profer-gray-500">
                      {project.location}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-profer-gray-900">
                        <div>Start: {project.startDate}</div>
                        <div>End: {project.endDate}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-profer-gray-900">
                      ${project.budget.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={project.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button className="text-profer-gray-400 hover:text-profer-gray-600">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-profer-gray-400 hover:text-profer-gray-600">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-profer-gray-400 hover:text-profer-red">
                          <Trash2 className="w-4 h-4" />
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
