import { Inter } from "next/font/google";
import "./globals.css";
import MainMenu from "@/Components/SharedComponents/MainMenu/MainMenu";

// const inter = Inter({ subsets: ["latin"] });
//inter.className
export const metadata = {
  title: "Dua & Ruqyah | All dua",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="container bg-[#EBEEF2] mt-6 mx-auto">
      <body className={``}>
        <div className="flex justify-between items-start gap-[2%]">
          <MainMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
