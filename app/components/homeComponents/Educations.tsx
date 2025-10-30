"use client";
import React, { useState } from "react";
import { educationsData } from "@/app/data/data";

function Educations() {
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
      <div className="text-4xl font-bold py-5">Educations</div>
      <div className="pl-5">
        {educationsData.map((education, index) => {
          const isHidden = !showAll && index >= 2;
          return (
            <div
              key={`${education.university}-${index}`}
              className={`transition-all duration-500 ease-in-out ${
                isHidden
                  ? "max-h-0 opacity-0 overflow-hidden"
                  : "max-h-[500px] opacity-100"
              }`}
            >
              <div className="border-l-4 border-gray-500 pl-5">
                <div>
                  {/* University Name */}
                  <div className={`relative ${index > 0 ? "pt-5" : ""}`}>
                    <div
                      className={`bg-gray-900 w-3 h-4 rounded-full absolute -left-7 top-1/2 transform -translate-y-1/2 ${
                        index > 0 ? " mt-3" : ""
                      }`}
                    ></div>
                    <div className="flex items-center flex-row justify-between">
                      <h1 className="text-2xl font-bold">
                        {education.university}
                      </h1>
                      <p className="text-medium font-bold text-gray-500">
                        {education.startDate} - {education.endDate}
                      </p>
                    </div>
                  </div>
                  {/* Degree Name */}
                  <div className="flex items-center flex-row justify-between">
                    <h1 className="text-medium font-bold text-black">
                      {education.degree}
                    </h1>
                    <p className="text-medium font-bold text-gray-500">
                      {education.location}
                    </p>
                  </div>
                  {/* CGPA/Percentage */}
                  <div className="flex items-center flex-row justify-between">
                    <h1 className="text-medium font-bold text-gray-500">
                      CGPA/Percentage:{" "}
                      <span className="font-normal text-black">
                        {education.CGPA_Percentage}
                      </span>
                    </h1>
                  </div>
                  {/* Passing Year */}
                  <div className="flex items-center flex-row justify-between">
                    <h1 className="text-medium font-bold text-gray-500">
                      Passing Year:{" "}
                      <span className="font-normal text-black">
                        {education.passingYear}
                      </span>
                    </h1>
                  </div>
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

export default Educations;
