import { BarProps, PortfolioCardProps } from "./type";

export const strengths = [
  {
    icon: "🚀",
    title: "Fast Learner",
    content: "Quickly adapts to new knowledge and environments.",
  },
  {
    icon: "🧠",
    title: "Problem-Solving",
    content: "Effectively analyzes and resolves challenges.",
  },
  {
    icon: "⚡",
    title: "Adaptability",
    content: "Easily integrates into new teams and environments.",
  },
  {
    icon: "🤝",
    title: "Team Player & Leader",
    content: "Capable of leading or following based on team needs.",
  },
  {
    icon: "🏆",
    title: "Hardworking & Responsible",
    content: "Dedicated to delivering high-quality results.",
  },
];

export const skills: BarProps[] = [
  {
    title: "HTML/CSS",
    level: 90,
  },
  {
    title: "PHP",
    level: 80,
  },
  {
    title: "Java Script",
    level: 70,
  },
  {
    title: "React",
    level: 60,
  },
  {
    title: "Database",
    level: 50,
  },
  {
    title: "Github",
    level: 33,
  },
];


export const tools: BarProps[] = [
  {
    title: "Wordpress",
    level: 90,
  },
  {
    title: "VS Code",
    level: 66,
  },
  {
    title: "Blender",
    level: 33,
  },
];



export const portfolios: PortfolioCardProps[] = [
  {
    name: "Chowdhury",
    description: "A corporate website built with WordPress and PHP, offering a seamless user experience and modern design.",
    image_path: "/assets/images/Chowdhury.png",
    deployed_url: "https://chowdhurygrp.com/",
    github_url: "https://github.com/user/project1",
    category: ["PHP"],
    key_techs: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
  },
  {
    name: "Rainbow RBMST",
    description: "A WordPress-powered platform designed for efficient content management and responsive web performance.",
    image_path: "/assets/images/rainbow-rbmst.png",
    deployed_url: "https://project2.com",
    github_url: "https://github.com/user/project2",
    category: ["PHP"],
    key_techs: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
  },
  {
    name: "YeeKee Porridge",
    description: "A restaurant website developed using WordPress, showcasing menu offerings with an intuitive user interface.",
    image_path: "/assets/images/YeeKee.png",
    deployed_url: "https://project2.com",
    github_url: "https://github.com/user/project2",
    category: ["PHP"],
    key_techs: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
  },
  {
    name: "Alpaca (Practice)",
    description: "A React-based practice project utilizing MUI for an interactive and dynamic front-end experience.",
    image_path: "/assets/images/Alpaca.png",
    deployed_url: "https://project2.com",
    github_url: "https://github.com/user/project2",
    category: ["PHP"],
    key_techs: ["React", "MUI"],
  },
  {
    name: "Elementor Add-on (Plugin)",
    description: "A custom Elementor widget designed to enhance functionality and improve user experience.",
    image_path: "/assets/images/Elementor.png",
    deployed_url: "",
    github_url: "",
    category: ["PHP"],
    key_techs: ["PHP", "CSS", "JavaScript"],
  },
  {
    name: "Happy Project (Function)",
    description: "Customized and upgraded the PDF generation function with an improved design for better readability.",
    image_path: "/assets/images/HappyProject.png",
    deployed_url: "",
    github_url: "",
    category: ["PHP"],
    key_techs: ["PHP", "CSS", "JavaScript", "SQL"],
  },
];
