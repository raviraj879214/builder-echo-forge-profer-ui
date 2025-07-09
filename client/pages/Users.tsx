import { DashboardLayout } from "@/components/DashboardLayout";
import { Search, ChevronDown, Plus, Edit, Share, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface User {
  id: number;
  name: string;
  email: string;
  initials: string;
  role:
    | "Administrator"
    | "Support Agent"
    | "Verification Reviewer"
    | "Customer";
  status: "Active" | "Inactive";
  created: string;
  lastLogin: string;
  company?: string;
}

const usersData: User[] = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@proferadmin.com",
    initials: "AU",
    role: "Administrator",
    status: "Active",
    created: "Aug 10, 2024",
    lastLogin: "4 months ago",
  },
  {
    id: 2,
    name: "Admin User2",
    email: "admin2@proferadmin.com",
    initials: "AU",
    role: "Administrator",
    status: "Active",
    created: "Sep 15, 2024",
    lastLogin: "4 months ago",
  },
  {
    id: 3,
    name: "Support Agent",
    email: "support@proferadmin.com",
    initials: "SA",
    role: "Support Agent",
    status: "Active",
    created: "Oct 5, 2024",
    lastLogin: "4 months ago",
  },
  {
    id: 4,
    name: "Verification Reviewer",
    email: "reviewer@proferadmin.com",
    initials: "VR",
    role: "Verification Reviewer",
    status: "Active",
    created: "Nov 20, 2024",
    lastLogin: "4 months ago",
  },
  {
    id: 5,
    name: "John Smith",
    email: "john.smith@acmeroofing.com",
    initials: "JS",
    role: "Customer",
    status: "Active",
    created: "Jan 15, 2025",
    lastLogin: "4 months ago",
    company: "Company ID: 4",
  },
];

function RoleBadge({ role }: { role: string }) {
  const getRoleStyles = (role: string) => {
    switch (role) {
      case "Administrator":
        return "bg-profer-blue/10 text-profer-blue";
      case "Support Agent":
        return "bg-profer-blue/10 text-profer-blue";
      case "Verification Reviewer":
        return "bg-profer-orange/10 text-profer-orange";
      case "Customer":
        return "bg-profer-green/10 text-profer-green";
      default:
        return "bg-profer-gray-100 text-profer-gray-600";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex px-2 py-1 text-xs font-medium rounded-full",
        getRoleStyles(role),
      )}
    >
      {role}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex px-2 py-1 text-xs font-medium rounded-full",
        status === "Active"
          ? "bg-profer-green/10 text-profer-green"
          : "bg-profer-gray-100 text-profer-gray-600",
      )}
    >
      {status}
    </span>
  );
}

export default function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const filteredData = usersData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "All Roles" || user.role === roleFilter;
    const matchesStatus =
      statusFilter === "All Statuses" || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-profer-gray-900">
            User Management
          </h1>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg border border-profer-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {/* Role Filter */}
              <div className="relative">
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="appearance-none bg-white border border-profer-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent min-w-[120px]"
                >
                  <option value="All Roles">All Roles</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Support Agent">Support Agent</option>
                  <option value="Verification Reviewer">
                    Verification Reviewer
                  </option>
                  <option value="Customer">Customer</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none bg-white border border-profer-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent min-w-[120px]"
                >
                  <option value="All Statuses">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-profer-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent w-64"
                />
              </div>
            </div>

            {/* Add User Button */}
            <Link
              to="/admin/users/add"
              className="flex items-center space-x-2 bg-profer-blue hover:bg-profer-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              <span>Add User</span>
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-profer-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-profer-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-profer-gray-200">
                {filteredData.map((user) => (
                  <tr key={user.id} className="hover:bg-profer-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-profer-blue rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {user.initials}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-profer-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-profer-gray-500">
                            {user.email}
                          </div>
                          {user.company && (
                            <div className="text-xs text-profer-gray-400">
                              {user.company}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <RoleBadge role={user.role} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-profer-gray-500">
                      {user.created}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-profer-gray-500">
                      {user.lastLogin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button className="text-profer-gray-400 hover:text-profer-gray-600">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-profer-gray-400 hover:text-profer-gray-600">
                          <Share className="w-4 h-4" />
                        </button>
                        <button className="bg-profer-red hover:bg-profer-red/90 text-white p-1 rounded">
                          <Trash2 className="w-3 h-3" />
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
