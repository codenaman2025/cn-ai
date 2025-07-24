import React from 'react';

const Comparison = () => {
  return (
    <section id="comparison" className="py-16 md:py-24 bg-transparent dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
          🆚 Code Naman vs. The Rest
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Traditional Platforms */}
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent bg-white dark:bg-black">
            <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Traditional Platforms</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                <div className="text-3xl text-red-500 flex-shrink-0">🚫</div>
                <div>
                  <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Generic Social Feeds</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Often cluttered with non-tech content, making it hard to find relevant discussions and connections.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                <div className="text-3xl text-red-500 flex-shrink-0">📉</div>
                <div>
                  <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">High Freelancing Commissions</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Platforms like Upwork/Fiverr can charge significant fees, reducing freelancer earnings and increasing client costs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                <div className="text-3xl text-red-500 flex-shrink-0">🔍</div>
                <div>
                  <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Basic Resume Matching</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Relies on keyword matching or less sophisticated AI, leading to irrelevant job/candidate recommendations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                <div className="text-3xl text-red-500 flex-shrink-0">🧩</div>
                <div>
                  <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Fragmented Tools</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Users often need multiple platforms for networking, job searching, freelancing, and interview prep.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Naman */}
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent bg-white dark:bg-black">
            <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Code Naman</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                <div className="text-3xl text-green-500 flex-shrink-0">✅</div>
                <div>
                  <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Tech-Only Social Feed</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">A dedicated space for tech discussions, projects, and insights, ensuring highly relevant content.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                <div className="text-3xl text-green-500 flex-shrink-0">📈</div>
                <div>
                  <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Transparent, Lower Fees & Escrow</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Fairer commission structures and secure wallet-based escrow for reliable and dispute-free transactions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                <div className="text-3xl text-green-500 flex-shrink-0">🧠</div>
                <div>
                  <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">AI-Powered RAG Engine Matching</h4>
                  <p className="text-600 dark:text-gray-300 text-sm">Advanced LLM-driven analysis for precise resume scoring and intelligent job/candidate recommendations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                <div className="text-3xl text-green-500 flex-shrink-0">🔗</div>
                <div>
                  <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Unified AI-First Ecosystem</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">All essential tools for tech professionals integrated into one smart, seamless platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;