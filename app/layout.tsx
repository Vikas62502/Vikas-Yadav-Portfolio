import "./globals.css";
import Header from "@/app/components/Header";
import { Metadata } from "next";
import { Inter, JetBrains_Mono, League_Spartan } from "next/font/google";
import CursorPointerAnimated from "./components/CursorPointerAnimated";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const leageSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Vikas Yadav | Full Stack Engineer",
  description: "Full Stack Engineer with 2+ years of experience, 200+ APIs shipped and 10K+ users served — building production-grade platforms with React, Next.js, TypeScript, Node.js, PostgreSQL, Docker and AWS.",
  keywords: ["Vikas Yadav", "Full Stack Engineer", "Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Portfolio"],
  openGraph: {
    title: "Vikas Yadav | Full Stack Engineer",
    description: "Full Stack Engineer | React | Next.js | React Native | Node.js | PostgreSQL | MongoDB | AWS | Docker",
    url: "http://vikasyadav.online/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dglhi9kl4/image/upload/v1736340616/uionmie1wx77ywm9ssg4.jpg",
        width: 1200,
        height: 630,
        alt: "Vikas Yadav's Profile Image",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Vikas Yadav | Full Stack Engineer" />
        <meta
          property="og:description"
          content="Full Stack Engineer building end-to-end products with React, Next.js, Node.js, PostgreSQL and AWS."
        />
        <meta property="og:url" content="http://vikasyadav.online/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dglhi9kl4/image/upload/v1736340616/uionmie1wx77ywm9ssg4.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vikas Yadav's Profile Image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vikas Yadav | Full Stack Engineer" />
        <meta
          name="twitter:description"
          content="Full Stack Engineer building end-to-end products with React, Next.js, Node.js, PostgreSQL and AWS."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dglhi9kl4/image/upload/v1736339796/hpqzjoyrjhfqkpenvquf.jpg"
        />
      </head>
      <body className={`${leageSpartan.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
        <div className="sm:block hidden">
          <CursorPointerAnimated />
        </div>

        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
