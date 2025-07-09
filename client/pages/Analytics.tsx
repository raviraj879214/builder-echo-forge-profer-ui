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
            <div className="h-80 relative">
              {/* Chart Container */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 relative overflow-hidden">
                {/* Chart Background */}
                <div className="absolute inset-6">
                  {/* Grid Lines */}
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full border-t border-gray-200"
                        style={{ top: `${i * 25}%` }}
                      />
                    ))}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-full border-l border-gray-200"
                        style={{ left: `${i * 20}%` }}
                      />
                    ))}
                  </div>

                  {/* Chart Areas */}
                  <div className="relative h-full">
                    {/* Users Area (Blue) */}
                    <div className="absolute bottom-0 w-full">
                      <svg
                        width="100%"
                        height="200"
                        className="absolute bottom-0"
                        viewBox="0 0 500 200"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="usersGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#3B82F6"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="100%"
                              stopColor="#3B82F6"
                              stopOpacity="0.1"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,180 L100,170 L200,150 L300,130 L400,110 L500,100 L500,200 L0,200 Z"
                          fill="url(#usersGradient)"
                          stroke="#3B82F6"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* Projects Area (Green) */}
                    <div className="absolute bottom-0 w-full">
                      <svg
                        width="100%"
                        height="150"
                        className="absolute bottom-0"
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="projectsGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#10B981"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="100%"
                              stopColor="#10B981"
                              stopOpacity="0.1"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,130 L100,125 L200,115 L300,105 L400,95 L500,85 L500,150 L0,150 Z"
                          fill="url(#projectsGradient)"
                          stroke="#10B981"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* Revenue Area (Orange) */}
                    <div className="absolute bottom-0 w-full">
                      <svg
                        width="100%"
                        height="100"
                        className="absolute bottom-0"
                        viewBox="0 0 500 100"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="revenueGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#F59E0B"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="100%"
                              stopColor="#F59E0B"
                              stopOpacity="0.1"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,80 L100,78 L200,75 L300,70 L400,65 L500,60 L500,100 L0,100 Z"
                          fill="url(#revenueGradient)"
                          stroke="#F59E0B"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* X-Axis Labels */}
                  <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-500 -mb-6">
                    <span>Feb 18</span>
                    <span>Feb 25</span>
                    <span>Mar 4</span>
                    <span>Mar 11</span>
                    <span>Mar 18</span>
                  </div>

                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500 -ml-8">
                    <span>200</span>
                    <span>150</span>
                    <span>100</span>
                    <span>50</span>
                    <span>0</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Users</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
