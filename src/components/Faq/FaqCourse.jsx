import React, { useState } from 'react';
import { coursePage } from '../../helpers/Constant';

const FaqCourse = (props) => {
  const [expandedItems, setExpandedItems] = useState({});
  const { courseName } = props
  console.log(courseName)
  const handleToggle = (courseId, index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [`${courseId}-${index}`]: !prev[`${courseId}-${index}`],
    }));
  };

  return (
    <section className="bg-slate-300">
      <div className="container px-6 py-10 mx-auto">
        <span className="text-2xl font-semibold text-gray-800 lg:text-3xl">FAQ's</span>
        <hr className="my-6 border-gray-200" />

        {coursePage?.filter((item) => item?.heading?.toLowerCase() == courseName?.replace(/-/g, " ")).map((course) => (
          <div key={course.id} className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 lg:text-2xl mb-4">
              {course.heading} FAQs
            </h2>

            {course.faq && course.faq.map((item, index) => (
              <div key={index} className="mb-6">
                <button
                  className="flex items-center w-full text-left focus:outline-none"
                  onClick={() => handleToggle(course.id, index)}
                >
                  {expandedItems[`${course.id}-${index}`] ? (
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

                  <span className="mx-4 text-xl text-gray-700">{item.question}</span>
                </button>

                {expandedItems[`${course.id}-${index}`] && (
                  <div className="mt-4">
                    <p className="text-gray-500">{item.answer}</p>
                  </div>
                )}

                {index < course.faq.length - 1 && <hr className="my-4 border-gray-200" />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqCourse;
