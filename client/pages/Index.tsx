import { DashboardLayout } from "@/components/DashboardLayout";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  trend: "up" | "down";
}

function StatCard({ title, value, change, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg border border-profer-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-profer-gray-600">{title}</p>
          <p className="text-3xl font-bold text-profer-gray-900 mt-2">
            {value}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          {trend === "up" ? (
            <ArrowUpIcon className="w-4 h-4 text-profer-green" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 text-profer-red" />
          )}
          <span
            className={`text-sm font-medium ${
              trend === "up" ? "text-profer-green" : "text-profer-red"
            }`}
          >
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}

interface VerificationItem {
  id: number;
  companyName: string;
  location: string;
  submissionDate: string;
  status: "Pending" | "Approved" | "Rejected";
}

const verificationData: VerificationItem[] = [
  {
    id: 1,
    companyName: "Apex Roofing Solutions",
    location: "Austin, TX",
    submissionDate: "Mar 18, 2025",
    status: "Pending",
  },
  {
    id: 2,
    companyName: "Skyligh Contractors",
    location: "Denver, CO",
    submissionDate: "Mar 17, 2025",
    status: "Pending",
  },
  {
    id: 3,
    companyName: "TopTier Roofing Inc",
    location: "Seattle, WA",
    submissionDate: "Mar 15, 2025",
    status: "Pending",
  },
];

function VerificationTable() {
  return (
    <div className="bg-white rounded-lg border border-profer-gray-200">
      <div className="px-6 py-4 border-b border-profer-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-profer-gray-900">
            Verification Queue
          </h3>
          <div className="flex space-x-4 text-sm">
            <button className="text-profer-blue hover:text-profer-navy font-medium">
              Recent Activity
            </button>
            <button className="text-profer-gray-500 hover:text-profer-gray-700">
              Platform Analytics
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-profer-gray-50 border-b border-profer-gray-200">
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
            {verificationData.map((item) => (
              <tr key={item.id} className="hover:bg-profer-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-profer-gray-900">
                  {item.companyName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-profer-gray-500">
                  {item.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-profer-gray-500">
                  {item.submissionDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-profer-orange/10 text-profer-orange">
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-profer-blue hover:text-profer-navy font-medium">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-profer-gray-200">
        <button className="text-sm text-profer-blue hover:text-profer-navy font-medium">
          View all verification requests →
        </button>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Companies Pending Verification"
            value="27"
            change="+12%"
            trend="up"
          />
          <StatCard
            title="Active Projects"
            value="124"
            change="+4%"
            trend="up"
          />
          <StatCard
            title="Completed Projects"
            value="368"
            change="+16%"
            trend="up"
          />
          <StatCard
            title="Total Revenue"
            value="$42,850"
            change="+22%"
            trend="up"
          />
        </div>

        {/* Verification Table */}
        <VerificationTable />
      </div>
    </DashboardLayout>
  );
}
