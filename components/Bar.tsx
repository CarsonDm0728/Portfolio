"use client";

import { BarProps } from "@/type";

const Bar: React.FC<BarProps> = ({ title, level }) => {

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full ">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-purple-400"
        style={{
          width: `${level}%`, // Convert number to percentage string
        }}
      >
        <div className="mr-3" /> {title}
      </div>
    </div>
  );
};

export default Bar
