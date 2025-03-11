import PortfolioCard from "@/components/PortfolioCard";
import { portfolios } from "@/data";

export default function Portfolio() {
  return (
    <div className="px-5 py-2 bg-gray-400 overflow-y-scroll" style={{ height: "70vh" }}>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {portfolios.map((portfolio, index) => (
          <div
          key={portfolio.name}
          className="col-span-12 bg-white rounded-lg sm:col-span-6 lg:col-span-4 shadow-lg opacity-0 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
        >
          <PortfolioCard portfolio={portfolio} />
        </div>        
        ))}
      </div>
    </div>
  );
}