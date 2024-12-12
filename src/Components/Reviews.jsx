import React, { useState } from "react";
import Quotation from "../assets/svg components/Quotation";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "I've been loving the constant communication and updates from the team, their work ethic is impeccable. 10/10 recommend their UGC service.",
      author: "Lindsey Wallace",
      avatar: Quotation,
    },
    {
      id: 2,
      text: "Was a bit sceptical after having bad experiences with other agencies. Gave them a chance anyways and 3 months down the line before we even know it we are ranking like crazy and our sales were 30% up.",
      author: "Rahul Jain",
      avatar: Quotation,
    },
    
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const { text, author,avatar} = reviews[currentIndex];

  return (
    <div className="w-full max-w-lg mx-auto p-6 relative">
  {/* Quotation Mark Icon */}
  <div className="flex justify-center mb-4">
    <Quotation />
  </div>
  
  {/* User Feedback/Review Section */}
  <div className="flex items-center flex-col">
    <h3 className="text-lg font-semibold text-center">{text}</h3>
    <p className="text-gray-700 mt-4 text-center">{author}</p>
  </div>

  {/* Left Arrow */}
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full hover:bg-gray-200 hover:bg-opacity-50"
    onClick={handlePrevious}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-indigo-600"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </button>

  {/* Right Arrow */}
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full hover:bg-gray-200 hover:bg-opacity-50"
    onClick={handleNext}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-indigo-600"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>
  </div>


  );
};

export default Reviews;
