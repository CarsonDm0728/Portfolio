"use client";
import Image from "next/image";
import { PortfolioCardProps } from "@/type";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const PortfolioCard: React.FC<{ portfolio: PortfolioCardProps }> = ({
  portfolio,
}) => {
  const { name, description, image_path, deployed_url, github_url, key_techs } =
    portfolio;

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      {/* Project Image */}
      <div className="relative w-full h-40 mb-3">
        <Image
          src={image_path}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Project Name */}
      <h3 className="text-lg font-semibold">{name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1 mt-2">
        {key_techs.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs bg-gray-300 rounded-md">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-3">
        {github_url !== null && github_url !== "" && (
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl text-green-400 hover:text-purple-400" />
          </a>
        )}
        {deployed_url !== null && deployed_url !== "" && (
          <a href={deployed_url} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="text-xl text-green-400 hover:text-purple-400" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
