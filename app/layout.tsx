import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "My Portfolio",
  description: "A modern portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lora.className} bg-fixed bg-gradient-to-r from-green-400 to-purple-400`}>
        <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48">
          {/* Sidebar */}
          <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light lg:col-span-9 rounded-2xl shadow-custom-light">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
