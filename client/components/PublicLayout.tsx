import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface PublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-profer-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-profer-blue rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-semibold text-profer-gray-900">
                Profer
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="#"
                className="text-profer-gray-600 hover:text-profer-gray-900 text-sm font-medium"
              >
                Search for Pros
              </Link>
              <Link
                to="#"
                className="text-profer-gray-600 hover:text-profer-gray-900 text-sm font-medium"
              >
                Project Auction
              </Link>
              <Link
                to="#"
                className="text-profer-gray-600 hover:text-profer-gray-900 text-sm font-medium"
              >
                Why Profer
              </Link>
              <Link
                to="#"
                className="text-profer-gray-600 hover:text-profer-gray-900 text-sm font-medium"
              >
                How It Works
              </Link>
              <Link
                to="#"
                className="text-profer-gray-600 hover:text-profer-gray-900 text-sm font-medium"
              >
                Profer Network
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-sm text-profer-gray-600 hover:text-profer-gray-900 font-medium">
                Sign In
              </button>
              <button className="bg-profer-red hover:bg-profer-red-hover text-white px-4 py-2 rounded text-sm font-medium">
                Join Profer
              </button>
              {/* Admin Link - temporary for development */}
              <Link
                to="/admin"
                className="text-xs text-profer-gray-400 hover:text-profer-gray-600"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-profer-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-profer-blue rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-semibold">Profer</span>
              </div>
              <p className="text-gray-300 text-sm max-w-md">
                Connecting verified professionals with customers who need
                quality work. Build trust through our comprehensive verification
                process.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="#" className="hover:text-white">
                    Find Professionals
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Get Verified
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Project Auctions
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Network Directory
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-profer-navy-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Profer. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-300 hover:text-white text-sm">
                Terms
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white text-sm">
                Privacy
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
