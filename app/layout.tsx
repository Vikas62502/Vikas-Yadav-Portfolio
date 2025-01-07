import "./globals.css";
import Header from "@/app/components/Header";
import { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import AnimatedCursor from "react-animated-cursor"

const leageSpartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikas Yadav's Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${leageSpartan.className}`}>
        <div className="sm:block hidden"> <AnimatedCursor
          outerSize={45}
          innerSize={20}
          innerScale={1.1}
          innerStyle={{ background: 'white' }}
          outerStyle={{ background: '#ed143d6e' }}
          outerAlpha={0.2}
          outerScale={1.1}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            '.btn',
          ]}
        /></div>

        < Header />
        {children}
      </body>
    </html>
  );
}
