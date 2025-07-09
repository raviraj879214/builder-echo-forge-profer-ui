"use client";

export default function OnboardingWelcome() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-100 px-4 py-2 text-xs text-gray-600 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span>WIX</span>
          <span>|</span>
          <span>This website was built on Wix. Create yours today.</span>
        </div>
        <button className="bg-white border border-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-50">
          Get Started
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-lg">Profer</span>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">
                Search for Pros
              </a>
              <a href="#" className="hover:text-gray-900">
                Project Auction
              </a>
              <a href="#" className="hover:text-gray-900">
                Why Profer
              </a>
              <a href="#" className="hover:text-gray-900">
                How it Works
              </a>
              <a href="#" className="hover:text-gray-900">
                Profer Network
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm text-gray-600 hover:text-gray-900">
              Sign In
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm">
              Join Profer
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl w-full flex items-center justify-between">
          {/* Left side - Illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Contractor illustration */}
              <div className="w-64 h-64 relative">
                {/* Person with laptop */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Person */}
                    <div className="w-20 h-20 bg-teal-400 rounded-t-full mb-2 relative">
                      {/* Head */}
                      <div className="w-12 h-12 bg-orange-300 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
                        {/* Face */}
                        <div className="w-3 h-2 bg-gray-800 rounded-full absolute top-3 left-3"></div>
                        <div className="w-3 h-2 bg-gray-800 rounded-full absolute top-3 right-3"></div>
                      </div>
                      {/* Hat */}
                      <div className="w-16 h-8 bg-red-500 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2">
                        <div className="w-20 h-4 bg-red-600 rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    </div>
                    {/* Laptop */}
                    <div className="w-24 h-16 bg-gray-300 rounded-lg relative mt-4">
                      <div className="w-20 h-12 bg-blue-400 rounded-lg absolute top-2 left-2">
                        <div className="w-16 h-8 bg-blue-300 rounded absolute top-2 left-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 pl-12">
            <div className="max-w-md">
              <h1 className="text-3xl font-semibold text-gray-900 mb-6">
                Hello, Pro.
              </h1>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Thank you for choosing a free membership. You'll be able to
                  access and catalog your credentials.{" "}
                  <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                    Upgrade your membership
                  </span>{" "}
                  to get a verified publicly listed and shareable{" "}
                  <span className="font-semibold text-gray-900">ProFile™</span>
                  , free leads, and project bidding opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button className="text-gray-500 hover:text-gray-700">Skip</button>

          {/* Progress dots */}
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>

          <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded">
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-lg">Profer</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-gray-300">
                Terms
              </a>
              <span>|</span>
              <a href="#" className="hover:text-gray-300">
                Privacy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>

          {/* Illustration in footer */}
          <div className="absolute right-0 bottom-0">
            <div className="w-32 h-32 relative">
              {/* Simple geometric illustration */}
              <div className="absolute bottom-0 right-8">
                <div className="w-16 h-24 bg-teal-400 transform rotate-12"></div>
                <div className="w-12 h-20 bg-red-500 absolute -left-6 bottom-0 transform -rotate-12"></div>
                <div className="w-8 h-8 bg-orange-400 rounded-full absolute top-0 left-4"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
