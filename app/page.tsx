import Image from "next/image";
import IconList from "@/components/IconList";
import { strengths } from "@/data"; // Import strengths

export default function Home() {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h6 className="text-base font-medium">
        Experienced Front End Web Developer specializing in HTML/CSS,
        JavaScript, React, PHP, and WordPress development. Skilled in creating
        intuitive, user-friendly websites and applications with a strong focus
        on performance and functionality.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="text-xl font-semibold tracking-wide">My Strengths</h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          <IconList strengths={strengths} />
        </div>
      </div>
    </div>
  );
}

