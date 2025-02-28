export interface Strength {
  icon: string;
  title: string;
  content: string;
}


export interface BarProps {
  title: string;
  level: number;
}


export interface PortfolioCardProps {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "PHP" | "express" | "django" | "mongo";