import React, { useState } from 'react';
import {faqData} from '../../helpers/Constant';

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggle = (index) => {
    const updatedExpandedItems = [...expandedItems];
    updatedExpandedItems[index] = !updatedExpandedItems[index];
    setExpandedItems(updatedExpandedItems);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQ's</h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                className="flex items-center focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                {expandedItems[index] ? (
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                  </svg>
                ) : (
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                )}

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">{item.question}</h1>
              </button>

              {expandedItems[index] && (
                <div className="flex mt-8 md:mx-10">
                  <span className="border border-blue-500"></span>

                  <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              )}

              {index < faqData.length - 1 && <hr className="my-8 border-gray-200 dark:border-gray-700" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
