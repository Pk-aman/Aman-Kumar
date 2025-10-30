"use client";
import { experienceData } from "@/app/data/data";
import React, { useState } from "react";

function Experience() {
  const [showAll, setShowAll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleShowMore = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowAll(true);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      <div className="text-4xl font-bold py-5">Experience</div>
      <div className="pl-5">
        {experienceData.map((experience, index) => {
          const isHidden = !showAll && index >= 2;
          return (
            <div
              key={experience.company}
              className={`transition-all duration-500 ease-in-out ${
                isHidden
                  ? "max-h-0 opacity-0 overflow-hidden"
                  : "max-h-[500px] opacity-100"
              }`}
            >
              <div className="border-l-4 border-gray-500 pl-5">
                <div>
                  {/* Company Name */}
                  <div className={`relative ${index > 0 ? "pt-5" : ""}`}>
                    <div
                      className={`bg-gray-900 w-3 h-4 rounded-full absolute -left-7 top-1/2 transform -translate-y-1/2 ${
                        index > 0 ? " mt-3" : ""
                      }`}
                    ></div>
                    <div className="flex items-center flex-row justify-between">
                      <h1 className="text-2xl font-bold">
                        {experience.company}
                      </h1>
                      <p className="text-medium font-bold text-gray-500">
                        {experience.startDate} - {experience.endDate}
                      </p>
                    </div>
                  </div>
                  {/* Client Name */}
                  {experience.client && (
                    <div className="flex items-center flex-row justify-between">
                      <h1 className="text-medium font-bold text-gray-500">
                        Client:{" "}
                        <span className="font-normal text-black">
                          {experience.client}
                        </span>
                      </h1>
                      <p className="text-medium font-bold text-gray-500">
                        {experience.location}
                      </p>
                    </div>
                  )}
                  {/* Position */}
                  <div className="flex items-center flex-row justify-between">
                    <h1 className="text-medium font-bold text-gray-500">
                      Position:{" "}
                      <span className="font-normal text-black">
                        {experience.position}
                      </span>
                    </h1>
                    {!experience.client && (
                      <p className="text-medium font-bold text-gray-500">
                        {experience.location}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <ul className="list-disc list-outside pl-5">
                    {experience.descriptions.map((description: string) => (
                      <li key={description}>{description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`flex justify-center items-center mt-5 transition-all duration-300 ease-in-out ${
          isAnimating || showAll
            ? "opacity-0 translate-y-4"
            : "opacity-100 translate-y-0"
        }`}
      >
        {!showAll && (
          <button
            className="border-2 border-gray-500 rounded-full px-2 border-dashed hover:bg-gray-900 hover:text-white transition-all duration-300"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </div>
    </>
  );
}

export default Experience;
