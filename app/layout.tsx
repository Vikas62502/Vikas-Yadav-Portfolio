import "./globals.css";
import Header from "@/app/components/Header";
import { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import CursorPointerAnimated from "./components/CursorPointerAnimated";

const leageSpartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikas Yadav's Portfolio",
  description: "Full Stack Developer",
  openGraph: {
    title: "Vikas Yadav's Portfolio",
    description: "Explore Vikas Yadav's Full Stack Developer portfolio and projects.",
    url: "https://www.vikasyadev.tech/", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dglhi9kl4/image/upload/v1736339796/hpqzjoyrjhfqkpenvquf.jpg",
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
        <meta property="og:title" content="Vikas Yadav's Portfolio" />
        <meta
          property="og:description"
          content="Explore Vikas Yadav's Full Stack Developer portfolio and projects."
        />
        <meta property="og:url" content="https://your-website-url.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dglhi9kl4/image/upload/v1736339796/hpqzjoyrjhfqkpenvquf.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vikas Yadav's Profile Image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vikas Yadav's Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Vikas Yadav's Full Stack Developer portfolio and projects."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dglhi9kl4/image/upload/v1736339796/hpqzjoyrjhfqkpenvquf.jpg"
        />
      </head>
      <body className={`${leageSpartan.className}`}>
        <div className="sm:block hidden">
          <CursorPointerAnimated />
        </div>

        <Header />
        {children}
      </body>
    </html>
  );
}
