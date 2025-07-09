import { PublicLayout } from "@/components/PublicLayout";
import { CheckCircle, Star, MapPin, Users, Shield, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-profer-gray-900 mb-6">
                Verify your Pro
              </h1>
              <p className="text-xl text-profer-gray-600 mb-8 max-w-lg">
                Search and find the quality of the Pro. Learn more about their
                background, experience and reviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-profer-red hover:bg-profer-red-hover text-white px-8 py-4 rounded-lg text-lg font-semibold">
                  Get Started
                </button>
                <button className="border-2 border-profer-gray-300 text-profer-gray-700 hover:border-profer-gray-400 px-8 py-4 rounded-lg text-lg font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-teal-200 to-blue-300 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🏠</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-200 rounded-full opacity-40"></div>
      </section>

      {/* ProPlus Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4 mr-2" />
              ProPlus
            </div>
            <h2 className="text-3xl font-bold text-profer-gray-900 mb-4">
              Premium verified professionals with enhanced background checks
            </h2>
            <p className="text-profer-gray-600 max-w-2xl mx-auto">
              Our ProPlus professionals have undergone additional verification
              steps including enhanced background checks and specialized
              training.
            </p>
          </div>
        </div>
      </section>

      {/* What is a Profer Pro Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-profer-gray-900 mb-6">
                What is a Profer Pro?
              </h2>
              <p className="text-lg text-profer-gray-600 mb-8">
                A Profer Pro is a verified professional who has completed our
                comprehensive background check and verification process. They're
                trusted, skilled, and ready to deliver quality work.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-profer-green mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-profer-gray-900">
                      Background Verified
                    </h3>
                    <p className="text-profer-gray-600">
                      Complete background checks and license verification
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-profer-green mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-profer-gray-900">
                      Insurance Confirmed
                    </h3>
                    <p className="text-profer-gray-600">
                      Verified insurance coverage for your protection
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-profer-green mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-profer-gray-900">
                      Quality Guaranteed
                    </h3>
                    <p className="text-profer-gray-600">
                      Proven track record of quality workmanship
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">ProVerified™</h3>
                  <div className="flex items-center text-profer-green">
                    <Shield className="w-5 h-5 mr-1" />
                    <span className="text-sm font-semibold">Verified</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Background Check</span>
                    <CheckCircle className="w-5 h-5 text-profer-green" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">License Verification</span>
                    <CheckCircle className="w-5 h-5 text-profer-green" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Insurance Coverage</span>
                    <CheckCircle className="w-5 h-5 text-profer-green" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">References Checked</span>
                    <CheckCircle className="w-5 h-5 text-profer-green" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See for Yourself Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-profer-gray-900 mb-6">
              See for Yourself
            </h2>
            <p className="text-xl text-profer-gray-600 max-w-3xl mx-auto">
              Browse our directory of verified professionals and see their
              qualifications, reviews, and work history.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-profer-blue rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-profer-gray-900">
                      Professional #{i}
                    </h3>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-profer-gray-600 mb-4">
                  Verified roofing contractor with 10+ years experience and
                  excellent customer reviews.
                </p>
                <div className="space-y-2 text-sm text-profer-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Austin, TX
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    ProVerified™
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Auctions Section */}
      <section className="py-20 bg-profer-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Project Auctions</h2>
              <p className="text-xl text-gray-300 mb-8">
                Post your project and let verified professionals bid on your
                work. Get competitive pricing and choose the best Pro for your
                needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-teal-400" />
                  <span>Get multiple bids from verified professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-teal-400" />
                  <span>Compare pricing and qualifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-teal-400" />
                  <span>Choose the best Pro for your project</span>
                </div>
              </div>
              <button className="bg-profer-red hover:bg-profer-red-hover text-white px-8 py-4 rounded-lg text-lg font-semibold mt-8">
                Start Project Auction
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-6 text-profer-gray-900">
              <h3 className="text-xl font-semibold mb-4">Project Auction</h3>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-medium">Roof Repair - Austin, TX</h4>
                  <p className="text-sm text-gray-600">Posted 2 hours ago</p>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Austin Roofing Co.", bid: "$2,500", rating: 4.9 },
                    { name: "Texas Pro Roofers", bid: "$2,750", rating: 4.8 },
                    { name: "Elite Roof Systems", bid: "$2,400", rating: 5.0 },
                  ].map((bid, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{bid.name}</p>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm ml-1">{bid.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-profer-green">{bid.bid}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Network Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-profer-gray-900 mb-6">
            Verified Network
          </h2>
          <p className="text-xl text-profer-gray-600 mb-12 max-w-3xl mx-auto">
            Our network spans across the United States with thousands of
            verified professionals ready to help with your projects.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-12 mb-12">
            <div className="text-8xl mb-6">🗺️</div>
            <h3 className="text-2xl font-bold text-profer-gray-900 mb-4">
              Nationwide Coverage
            </h3>
            <p className="text-profer-gray-600">
              From coast to coast, find verified professionals in your area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-profer-blue mb-2">
                10,000+
              </div>
              <p className="text-profer-gray-600">Verified Professionals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-profer-blue mb-2">50</div>
              <p className="text-profer-gray-600">States Covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-profer-blue mb-2">
                500+
              </div>
              <p className="text-profer-gray-600">Cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Very Profer Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-profer-gray-900 mb-6">
            Very Profer
          </h2>
          <div className="text-6xl mb-6">⭐</div>
          <p className="text-xl text-profer-gray-600 max-w-2xl mx-auto">
            Our rigorous vetting process ensures that customers love our
            professionals. Join thousands of satisfied customers who have found
            their perfect Pro through Profer.
          </p>
        </div>
      </section>

      {/* Joining is Free Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h2 className="text-4xl font-bold text-profer-gray-900 mb-6">
            Joining is free and easy
          </h2>
          <p className="text-xl text-profer-gray-600 max-w-2xl mx-auto mb-8">
            Ready to get started? Sign up and get verified as a Pro in just a
            few simple steps. Start building trust with customers today and grow
            your business through our Profer Network. No hidden fees or
            contracts.
          </p>
          <button className="bg-profer-red hover:bg-profer-red-hover text-white px-8 py-4 rounded-lg text-lg font-semibold">
            Get Verified Now
          </button>
        </div>
      </section>

      {/* Are you a Pro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">👷</div>
          <h2 className="text-4xl font-bold text-profer-gray-900 mb-6">
            Are you a Pro?
          </h2>
          <p className="text-xl text-profer-gray-600 max-w-2xl mx-auto mb-8">
            Join our network of verified professionals and start getting more
            customers. Our verification process builds trust and helps you stand
            out from the competition. Ready to get verified?
          </p>
          <button className="bg-profer-red hover:bg-profer-red-hover text-white px-8 py-4 rounded-lg text-lg font-semibold">
            Start Verification
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🤔</div>
          <h2 className="text-4xl font-bold text-profer-gray-900 mb-8">
            What are you waiting for?
          </h2>
          <button className="bg-profer-red hover:bg-profer-red-hover text-white px-8 py-4 rounded-lg text-lg font-semibold">
            Get Started Today
          </button>
        </div>
      </section>
    </PublicLayout>
  );
}
