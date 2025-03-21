"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div>
      <Image
        src="/assets/images/profile.png"
        alt="avatar"
        className="mx-auto border rounded-full"
        width={128}
        height={128}
        priority
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-lora">
        <span className="text-green-500 ">Carson</span> Tan
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full ">
        Front-end Developer
      </p>

      <a
        href="/assets/docs/Resume Carson 2025-V3.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer"
      >
        <GiTie className="w-6 h-6" />
        <span>My Resume</span>
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.linkedin.com/in/carson-tan-miao-qun-194904273/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/CarsonDm0728">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>
      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Johor, Malaysia </span>
        </div>
        <p className="my-2 "> miaoquntan@gmail.com </p>
        <a href="https://wa.me/60187906659"><p className="my-2"> 0187906659 </p></a>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green-400 to-purple-400 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:miaoqunta@gmail.com")}
      >
        Email me
      </button>
    </div>
  );
}
