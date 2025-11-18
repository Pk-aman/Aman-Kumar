import React from "react";
import { overviewData } from "@/app/data/data";

function Overview() {
  const renderDescription = () => {
    const text = overviewData.description;
    const boldText = "Frontend Developer";
    const parts = text.split(boldText);

    return (
      <p>
        {parts[0]}
        <span className="font-bold">{boldText}</span>
        {parts[1]}
      </p>
    );
  };

  return (
    <>
      <div className="text-4xl font-bold py-5">Overview</div>
      <div className="pl-5">{renderDescription()}</div>
    </>
  );
}

export default Overview;
