"use client";

export default function BusinessDetails() {
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
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Business Details
          </h1>
        </div>

        <form className="space-y-6">
          {/* Company Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Company Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Company Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Owner Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Owner Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Owner First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Owner Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Company Street Address
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* City, State, Zip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">City</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">State</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Zip Code
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Business Details Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">EIN#</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Services Offered
              </label>
              <input
                type="text"
                placeholder="Example: roofs, siding"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Qualification Level
              </label>
              <input
                type="text"
                placeholder="Example: roofs, siding"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Service Area and Established */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Service Area (miles)
              </label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Year Established
              </label>
              <input
                type="number"
                placeholder="2017"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">DOT #</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Business IDs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Company Logo
              </label>
              <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
                <button className="text-gray-400 hover:text-gray-600">
                  <span className="text-2xl">+</span>
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">SAM #</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">UEI #</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* License Question */}
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Does your state require a certificate or license?{" "}
              <span className="text-red-500">yes/no</span>
            </p>
            <p className="text-sm text-gray-600 font-medium">Links to your:</p>

            {/* Social Links */}
            <div className="space-y-3">
              <input
                type="url"
                placeholder="Facebook"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="Google Business Listing"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="Bing Business Listing"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="Instagram"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="Youtube"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="Instagram"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="url"
                placeholder="LinkedIn"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button className="text-blue-500 hover:text-blue-600 text-sm">
              + add more
            </button>
          </div>

          {/* Driver's License Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Owner's Driver's License
              </label>
              <div className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
                <button className="text-gray-400 hover:text-gray-600">
                  <span className="text-2xl">+</span>
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Link to your Website
              </label>
              <input
                type="url"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Agreement */}
          <div className="flex items-start space-x-2 py-6">
            <input
              type="checkbox"
              id="agreement"
              className="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="agreement" className="text-sm text-gray-600">
              I agree with the terms and conditions of the Pro agreement
            </label>
          </div>
        </form>
      </div>

      {/* Bottom Navigation */}
      <div className="px-6 py-8">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button className="text-blue-500 hover:text-blue-600 flex items-center space-x-1">
            <span>←</span>
            <span>Back</span>
          </button>

          {/* Progress dots */}
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
              Save
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded">
              Next
            </button>
          </div>
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
