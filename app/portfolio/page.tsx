import PortfolioCard from "@/components/PortfolioCard";
import { portfolios } from "@/data";

export default function Portfolio() {
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{height:"65vh"}}>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {portfolios.map((portfolio) => (
          <div
            key={portfolio.name}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4"
          >
            <PortfolioCard portfolio={portfolio} />
          </div>
        ))}
      </div>
    </div>
  );
}
