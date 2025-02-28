"use client";

import { Strength } from "@/type";


const IconList: React.FC<{ strengths: Strength[] }> = ({ strengths }) => {
  return (
    <>
      {strengths.map((strength, index) => (
        <div key={index} className="flex items-center p-2 space-x-4 bg-gray-200 rounded-lg">
          <span className="text-3xl">{strength.icon}</span>
          <div>
            <h6 className="font-bold">{strength.title}</h6>
            <p>{strength.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default IconList;


