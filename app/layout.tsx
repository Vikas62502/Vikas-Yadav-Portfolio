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

const siteUrl = "https://vikasyadav.online";
const ogImage =
  "https://res.cloudinary.com/dglhi9kl4/image/upload/v1736340616/uionmie1wx77ywm9ssg4.jpg";
const description =
  "Full Stack Engineer with 2+ years of experience, 200+ APIs shipped and 10K+ users served — building production-grade platforms with React, Next.js, TypeScript, Node.js, PostgreSQL, Docker and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vikas Yadav | Full Stack Engineer",
    template: "%s | Vikas Yadav",
  },
  description,
  keywords: [
    "Vikas Yadav",
    "Full Stack Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Portfolio",
    "New Delhi",
  ],
  authors: [{ name: "Vikas Yadav", url: siteUrl }],
  creator: "Vikas Yadav",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Vikas Yadav | Full Stack Engineer",
    description:
      "Full Stack Engineer | React · Next.js · React Native · Node.js · PostgreSQL · AWS · Docker",
    url: siteUrl,
    siteName: "Vikas Yadav Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Vikas Yadav — Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Yadav | Full Stack Engineer",
    description:
      "Full Stack Engineer building end-to-end products with React, Next.js, Node.js, PostgreSQL and AWS.",
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Vikas Yadav Portfolio",
      description,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Vikas Yadav",
      url: siteUrl,
      image: ogImage,
      jobTitle: "Full Stack Engineer",
      description,
      email: "mailto:vikasyadav62502@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/Vikas62502",
        "https://www.linkedin.com/in/vikasyadav62/",
        "https://x.com/vikasyadav_eth",
      ],
      knowsAbout: [
        "Full Stack Development",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${leageSpartan.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
