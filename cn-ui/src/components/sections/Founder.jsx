import React from 'react';

const Founder = () => {
  return (
    <section id="founder" className="py-16 md:py-24 bg-transparent dark:bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
          👨‍💻 Meet the Founder
        </h2>
        <div className="p-8 rounded-lg shadow-md border border-gray-200 dark:border-transparent bg-white dark:bg-black mx-auto max-w-2xl">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Code Naman is being built by a dedicated developer who brings over a **decade of experience working in multiple MNCs**.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Having engaged in **extensive freelancing projects**, the founder possesses a deep, firsthand understanding of the real pain points faced by both freelancers and those seeking to hire tech talent.
          </p>
          <p className="text-lg text-indigo-600 dark:text-blue-400 font-semibold">
            This unique blend of corporate and freelance experience is the driving force behind creating a platform that truly solves real-world challenges for the tech community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;