import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-transparent dark:bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">What makes Code Naman different from LinkedIn?</h3>
            <p className="text-gray-600 dark:text-gray-300">Code Naman is exclusively for the tech community, offering an AI-first approach to hiring, freelancing, and knowledge sharing. Unlike general professional networks, our platform is tailored to the specific needs of developers, recruiters, and tech learners.</p>
          </div>
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">How secure are the freelancing payments?</h3>
            <p className="text-gray-600 dark:text-gray-300">We use a secure wallet-based escrow system for all milestone-based contracts. Funds are held securely until milestones are approved, providing robust protection for both freelancers and clients against payment disputes.</p>
          </div>
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">Is there a fee to join Code Naman?</h3>
            <p className="text-gray-600 dark:text-gray-300">Joining Code Naman and creating a profile is free. We offer transparent and lower fees for freelancing transactions compared to many other platforms. Premium features and earning opportunities for educators will have separate pricing.</p>
          </div>
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">How does Background Verification work?</h3>
            <p className="text-gray-600 dark:text-gray-300">Users can opt for a paid background verification service to receive a "Verified" badge on their profile, increasing their credibility. The verification process is typically completed within 7 business days after submission of required documents. **This pre-verification aims to eliminate the need for redundant background checks by joining companies, saving time and effort.**</p>
          </div>
          <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent hover:border-indigo-400 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">How does GitHub Integration help with verification?</h3>
            <p className="text-gray-600 dark:text-gray-300">Showcasing your open-source contributions and activity directly from GitHub provides real-world proof of your skills and work ethic. While not a full background check, this transparency significantly enhances your profile's credibility and can **streamline the initial vetting process for companies, potentially reducing some verification steps.**</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;