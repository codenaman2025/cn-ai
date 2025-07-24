import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-transparent dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
          🔍 Key Features We're Offering
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Feature 1: AI-Based Resume Analysis & Matching */}
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 text-indigo-500">🤖</div>
            <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">AI-Based Resume Analysis & Matching</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Upload your resume once, and our LLM-powered Resume RAG engine will automatically score, match, and recommend you to relevant job roles. Recruiters can upload 500+ resumes and instantly get the top 10 candidates ranked based on job description fit.
            </p>
          </div>

          {/* Feature 2: Smart Freelancing With Escrow & Milestone Contracts */}
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 text-green-500">💰</div>
            <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Smart Freelancing With Escrow & Milestone Contracts</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Freelancers and clients can create milestone-based contracts, and funds are securely locked using wallet-based escrow, reducing disputes and payment issues. We offer transparency, lower fees, and real protection for both sides.
            </p>
          </div>

          {/* Feature 3: Tech-Only Social Feed */}
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 text-blue-500">💬</div>
            <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Tech-Only Social Feed</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Like LinkedIn, but only for tech – users can post updates, code snippets, projects, AI experiments, or share insights. This removes clutter and makes Code Naman the go-to platform for serious tech minds.
            </p>
          </div>

          {/* New Feature: Background Verification & Verified Badge */}
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 text-teal-500">✅</div>
            <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Background Verification & Verified Badge</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Users can opt for a background verification process to earn a "Verified" badge on their profile, increasing their credibility. This badge signifies a pre-verified status, **potentially eliminating the need for further background checks** by joining companies. Get verified in just 7 days!
            </p>
          </div>

          {/* Feature 5: AI Interview Preparation */}
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 text-red-500">🎤</div>
            <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">AI Interview Preparation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Smart interview question generator using LLMs. Mock interviews, real-time cheating detection, and evaluation — helping users crack top tech roles.
            </p>
          </div>

          {/* Feature 6: Live Knowledge-Sharing Sessions */}
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 text-yellow-500">💡</div>
            <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Live Knowledge-Sharing Sessions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Weekly webinars, problem-solving sessions, and AMA events with experts. Soon will include earning opportunities for tech educators and mentors.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;