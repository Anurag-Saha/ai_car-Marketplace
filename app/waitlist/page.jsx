"use client";

import React from "react";
import { useState } from "react";

const WaitlistPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/db/waitlist-entries", {
        method: "POST",
        body: JSON.stringify({
          query:
            "INSERT INTO `waitlist` (`email`, `signup_date`) VALUES (?, ?)",
          values: [email, new Date().toISOString()],
        }),
      });
      setSubmitted(true);
      setEmail("");
      setError("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0D111D] flex flex-col relative overflow-hidden pb-24">
      {/* Background SVG */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-50 pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed w-full z-10 bg-[#0D111D]/80 backdrop-blur-sm border-b border-[#262A36] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center h-8">
          <img
            src="https://ucarecdn.com/b1800295-7da0-412b-a5ce-479100b3e828/-/format/auto/"
            alt="Car Port Logo"
            className="h-20"
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 py-24 relative z-10">
        <div className="max-w-3xl mx-auto w-full">
          <div className="p-8 md:p-12 bg-[#171B26] rounded-2xl shadow-xl border border-[#262A36]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#EFEFED] font-bold mb-8">
              <span>The future of car buying</span>
              <br />
              <span>is here.</span>
            </h1>
            <p className="text-lg text-[#9C9FA4] mb-8 leading-relaxed">
              Join the waitlist for Car Port - your one-stop destination for
              finding, comparing, and purchasing vehicles. Experience a seamless
              car buying journey powered by cutting-edge technology.
            </p>

            {/* Divider */}
            <div className="flex items-center space-x-2 mb-8">
              <div className="h-px flex-1 bg-[#262A36]"></div>
              <p className="text-lg text-[#EFEFED] whitespace-nowrap px-4">
                Be the first to revolutionize your car buying experience 🚗
              </p>
              <div className="h-px flex-1 bg-[#262A36]"></div>
            </div>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 pr-36 rounded-lg bg-[#20242F] border border-[#262A36] text-[#EFEFED] placeholder-[#9C9FA4] focus:outline-none focus:border-[#E4E7EA] transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#171B26] text-[#EFEFED] border border-[#262A36] py-2 px-6 rounded-lg hover:bg-[#262A36] transition-colors"
                  >
                    Join Waitlist
                  </button>
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
              </form>
            ) : (
              <div className="bg-[#20242F] border border-[#262A36] p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl text-[#EFEFED]">✅</span>
                  <h3 className="text-2xl text-[#EFEFED] font-bold">
                    You're on the list!
                  </h3>
                </div>
                <p className="text-[#9C9FA4]">
                  Thanks for joining! We'll keep you updated on all the exciting
                  developments.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Section */}
          <div className="mt-12 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8 text-[#EFEFED]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="border border-[#262A36] rounded-lg p-4 bg-[#171B26] hover:border-[#E4E7EA] transition-colors">
                <button
                  onClick={() => setOpenQuestion(openQuestion === 0 ? null : 0)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  <span className="text-[#EFEFED]">What is Car Port?</span>
                  <span
                    className={`transition-transform ${
                      openQuestion === 0 ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`mt-4 transition-all duration-300 ease-in-out ${
                    openQuestion === 0
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-[#9C9FA4]">
                    Car Port is a revolutionary car marketplace that simplifies
                    the entire car buying process...
                  </p>
                </div>
              </div>
              {/* FAQ 2 */}
              <div className="border border-[#262A36] rounded-lg p-4 bg-[#171B26] hover:border-[#E4E7EA] transition-colors">
                <button
                  onClick={() => setOpenQuestion(openQuestion === 1 ? null : 1)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  <span className="text-[#EFEFED]">
                    Is Car Port free to use?
                  </span>
                  <span
                    className={`transition-transform ${
                      openQuestion === 1 ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`mt-4 transition-all duration-300 ease-in-out ${
                    openQuestion === 1
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-[#9C9FA4]">
                    Yes! Browsing, comparing, and using our car-buying tools is
                    100% free for buyers.
                  </p>
                </div>
              </div>
              {/* FAQ 3 */}
              <div className="border border-[#262A36] rounded-lg p-4 bg-[#171B26] hover:border-[#E4E7EA] transition-colors">
                <button
                  onClick={() => setOpenQuestion(openQuestion === 2 ? null : 2)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  <span className="text-[#EFEFED]">
                    Is my email and data safe?
                  </span>
                  <span
                    className={`transition-transform ${
                      openQuestion === 2 ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`mt-4 transition-all duration-300 ease-in-out ${
                    openQuestion === 2
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-[#9C9FA4]">
                    Absolutely. We value your privacy and will never sell or
                    misuse your data. Your email is used solely to keep you
                    informed about Car Port's launch.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="border border-[#262A36] rounded-lg p-4 bg-[#171B26] hover:border-[#E4E7EA] transition-colors">
                <button
                  onClick={() => setOpenQuestion(openQuestion === 3 ? null : 3)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  <span className="text-[#EFEFED]">
                    How does car buying work on Car Port?
                  </span>
                  <span
                    className={`transition-transform ${
                      openQuestion === 3 ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`mt-4 transition-all duration-300 ease-in-out ${
                    openQuestion === 3
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-[#9C9FA4]">
                    Our platform uses advanced technology to match you with the
                    perfect vehicle based on your preferences...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full py-6 px-6 md:px-20 bg-[#171B26]/80 backdrop-blur-sm border-t border-[#262A36]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-6">
            <a href="#" className="text-[#9C9FA4] hover:text-[#EFEFED]">
              Twitter
            </a>
            <a href="#" className="text-[#9C9FA4] hover:text-[#EFEFED]">
              Instagram
            </a>
            <a href="#" className="text-[#9C9FA4] hover:text-[#EFEFED]">
              LinkedIn
            </a>
          </div>
          <p className="text-[#9C9FA4] text-sm">
            © 2024 Car Port. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Glowy Blur Background */}
      <div className="absolute -z-10 top-1/4 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 bg-[#4F46E5] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-slow-pulse"></div>
        <div
          className="absolute inset-0 bg-[#9333EA] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-slow-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Pulse Animation Style */}
      <style jsx global>{`
        @keyframes slowPulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.1;
          }
        }
        .animate-slow-pulse {
          animation: slowPulse 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WaitlistPage;
