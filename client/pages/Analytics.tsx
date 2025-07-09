import { DashboardLayout } from "@/components/DashboardLayout";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const chartData = [
  {
    date: "Feb 18",
    Users: 100,
    Projects: 80,
    Revenue: 120,
  },
  {
    date: "Feb 25",
    Users: 110,
    Projects: 90,
    Revenue: 130,
  },
  {
    date: "Mar 4",
    Users: 125,
    Projects: 105,
    Revenue: 145,
  },
  {
    date: "Mar 11",
    Users: 140,
    Projects: 125,
    Revenue: 160,
  },
  {
    date: "Mar 18",
    Users: 160,
    Projects: 145,
    Revenue: 180,
  },
];

export default function Analytics() {
  const [dateRange, setDateRange] = useState("Last 30 days");
  const [compareWith, setCompareWith] = useState("Previous period");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-profer-gray-900">
            Platform Analytics
          </h1>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg border border-profer-gray-200 p-6">
          <div className="flex items-center space-x-6 mb-8">
            {/* Date Range */}
            <div>
              <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                Date Range
              </label>
              <div className="relative">
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="appearance-none bg-white border border-profer-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent min-w-[140px]"
                >
                  <option value="Last 7 days">Last 7 days</option>
                  <option value="Last 30 days">Last 30 days</option>
                  <option value="Last 90 days">Last 90 days</option>
                  <option value="Last 6 months">Last 6 months</option>
                  <option value="Last year">Last year</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Compare With */}
            <div>
              <label className="block text-sm font-medium text-profer-gray-700 mb-2">
                Compare with
              </label>
              <div className="relative">
                <select
                  value={compareWith}
                  onChange={(e) => setCompareWith(e.target.value)}
                  className="appearance-none bg-white border border-profer-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-profer-blue focus:border-transparent min-w-[140px]"
                >
                  <option value="Previous period">Previous period</option>
                  <option value="Previous month">Previous month</option>
                  <option value="Previous quarter">Previous quarter</option>
                  <option value="Previous year">Previous year</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-profer-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div>
            <h3 className="text-lg font-semibold text-profer-gray-900 mb-4">
              Platform Growth
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#f0f0f0"
                    horizontal={true}
                    vertical={true}
                  />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    type="category"
                    allowDuplicatedCategory={false}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    type="number"
                    domain={[0, "auto"]}
                  />
                  <Legend
                    wrapperStyle={{
                      paddingTop: "20px",
                    }}
                    iconType="line"
                    align="center"
                    verticalAlign="bottom"
                  />
                  <Area
                    type="monotone"
                    dataKey="Revenue"
                    stackId="1"
                    stroke="#F59E0B"
                    fill="#F59E0B"
                    fillOpacity={0.6}
                    connectNulls={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="Projects"
                    stackId="1"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.6}
                    connectNulls={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="Users"
                    stackId="1"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.6}
                    connectNulls={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
