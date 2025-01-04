import "./globals.css";
import Header from "@/app/components/Header";
import { League_Spartan } from "next/font/google";
import CursorLight from "./components/ui/CursorLight";

const leageSpartan = League_Spartan({
  subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${leageSpartan.className}`}>
        <CursorLight />
        <Header />
        {children}
      </body>
    </html>
  );
}
