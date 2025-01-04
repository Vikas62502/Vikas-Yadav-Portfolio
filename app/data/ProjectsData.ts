import { images } from "../assets/images";

export interface Image {
  id: number;
  url: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: Image[];
  liveLink: string;
  gitHubLink: string;
}

export const ProjectsData: ProjectType[] = [
  {
    id: 1,
    title: "Chairbord Agent Panel (Mobile App)",
    description: "It is a mobile application which is used for FASTag Issuance and Management App is designed to simplify the process of issuing, replacing, and tracking FASTags for Indian vehicles. Built for agents and authorized personnel, the app streamlines the entire workflow from FASTag issuance to managing customer details, ensuring a seamless and efficient experience.",
    tags: ["ReactNative", "PostgreSQL", "NodeJs", "ExpressJs", "AWS", "S3", "Docker", "CI/CD"],
    images: [
      {
        id: 1,
        url: images.chairbordAgentApp.src,
      },
    ],
    liveLink: "https://play.google.com/store/apps/details?id=com.chairbord&hl=en",
    gitHubLink: "https://github.com/Vikas62502/Chairbord",
  },
  {
    id: 2,
    title: "Green Origin (Crop traceability using Blockchain)",
    description: `From Farm to Fork - Traceability Made Easy
Discover a new level of transparency and efficiency for agriculture in Mauritius. Our platform leverages blockchain technology to provide real-time traceability from farm to fork, ensuring the authenticity and quality of your produce. Whether you're a farmer, distributor, or retailer, our tool connects all players in the supply chain, enhancing trust and simplifying compliance. Join us in making our local agricultural supply chain more transparent and accessible to everyone.`,
    tags: ["Nextjs", "NodeJs", "MongoDB", "Redux-Toolkit", "ExpressJs", "ThirdWeb", "Solidity", "Web3.js", "Ether.js", "AWS", "CI/CD"],
    images: [
      {
        id: 1,
        url: images.greenOrigin.src,
      },
    ],
    liveLink: "https://www.greenorigin.org/dashboard?active=dashboard",
    gitHubLink: "",
  },
  {
    id: 2,
    title: "Climate Mitigate",
    description: "Climate Mitigate is a web application that helps users to calculate their carbon footprint and provides them with a platform to offset their carbon emissions by investing in carbon offset projects. The application also provides users with a detailed report of their carbon footprint and the impact of their investments on the environment.",
    tags: ["React", "NodeJs", "MongoDB", "Redux-Toolkit", "ExpressJs", "Thirdbweb", "Microservice", "AWS", "CI/CD", "Docker"],
    images: [
      {
        id: 1,
        url: images.climateMitigate.src,
      },
    ],
    liveLink: "https://cuvette-assignment-iota.vercel.app/",
    gitHubLink: "https://github.com/SujeetYT/Cuvette-Assignment",
  },
];