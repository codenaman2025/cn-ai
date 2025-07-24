import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-transparent dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
          🚀 How Code Naman Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-indigo-50 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 text-indigo-600">1️⃣</div>
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Join the Network</h3>
            <p className="text-gray-600 dark:text-gray-300">Create your profile, connect with tech professionals, and showcase your skills.</p>
          </div>
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-indigo-50 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 text-indigo-600">2️⃣</div>
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Explore Opportunities</h3>
            <p className="text-gray-600 dark:text-gray-300">Find relevant jobs, freelance projects, and learning sessions tailored for you.</p>
          </div>
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-indigo-50 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4 text-indigo-600">3️⃣</div>
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Grow & Succeed</h3>
            <p className="text-gray-600 dark:text-gray-300">Leverage AI tools for hiring/interview prep and collaborate with the community.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;