import React from 'react';

const Market = () => {
  return (
    <section id="market" className="py-16 md:py-24 bg-transparent dark:bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
          📊 Market Opportunity in India
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          India boasts one of the world's largest and fastest-growing tech talent pools. With millions of developers, IT professionals, and aspiring tech learners, the demand for specialized platforms that cater to their unique needs is immense.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          The freelancing market is booming, and companies are increasingly looking for skilled tech talent on a project basis. However, existing solutions often fall short in providing intelligent matching, fair compensation structures, and a dedicated community for tech professionals.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">
          Code Naman is uniquely positioned to capture this significant market by offering an integrated, AI-driven platform that addresses the specific challenges and opportunities within India's dynamic tech landscape. We aim to be the go-to hub for tech talent and hiring in the country.
        </p>
      </div>
    </section>
  );
};

export default Market;