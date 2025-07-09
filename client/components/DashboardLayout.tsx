import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FileText,
  Building2,
  BarChart3,
  Users,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Verification", href: "/verification", icon: FileText },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Projects", href: "/projects", icon: BarChart3 },
  { name: "Trading Activity", href: "/activity", icon: BarChart3 },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Users", href: "/users", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-profer-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-profer-navy text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-profer-navy-light">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-profer-blue rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-semibold">Profer</span>
          </div>
        </div>

        {/* Admin Dashboard Badge */}
        <div className="px-6 py-4">
          <div className="flex items-center space-x-3 bg-profer-blue rounded-lg p-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-profer-blue font-bold text-sm">A</span>
            </div>
            <span className="font-medium">Admin Dashboard</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-profer-blue text-white"
                    : "text-gray-300 hover:bg-profer-navy-light hover:text-white",
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-profer-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <nav className="flex space-x-6 text-sm">
                <Link
                  to="#"
                  className="text-profer-gray-600 hover:text-profer-gray-900"
                >
                  Search for Pros
                </Link>
                <Link
                  to="#"
                  className="text-profer-gray-600 hover:text-profer-gray-900"
                >
                  Project Auction
                </Link>
                <Link
                  to="#"
                  className="text-profer-gray-600 hover:text-profer-gray-900"
                >
                  Why Profer
                </Link>
                <Link
                  to="#"
                  className="text-profer-gray-600 hover:text-profer-gray-900"
                >
                  How It Works
                </Link>
                <Link
                  to="#"
                  className="text-profer-gray-600 hover:text-profer-gray-900"
                >
                  Profer Network
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-profer-gray-600 hover:text-profer-gray-900">
                Sign In
              </button>
              <button className="bg-profer-red hover:bg-profer-red-hover text-white px-4 py-2 rounded text-sm font-medium">
                Join Profer
              </button>
              <div className="flex items-center space-x-2 ml-4">
                <div className="w-8 h-8 bg-profer-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-profer-gray-900">
                    Admin User
                  </div>
                  <div className="text-profer-gray-500">admin@profer.com</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
