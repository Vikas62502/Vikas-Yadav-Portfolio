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
  associatedWith?: string;
  TechStack?: string;
}

export const ProjectsData: ProjectType[] = [
  {
    id: 1,
    title: "Chairbord Agent Panel (Mobile App)",
    description: "It is a mobile application which is used for FASTag Issuance and Management App is designed to simplify the process of issuing, replacing, and tracking FASTags for Indian vehicles. Built for agents and authorized personnel, the app streamlines the entire workflow from FASTag issuance to managing customer details, ensuring a seamless and efficient experience.",
    tags: ["ReactNative", "PostgreSQL", "NodeJs", "ExpressJs", "AWS", "MongoDb", "Docker"],
    TechStack: "ReactNative, PostgreSQL, NodeJs, ExpressJs, AWS, S3, Docker, CI/CD, Postman, ",
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
    tags: ["Nextjs", "NodeJs", "MongoDB", "Redux-Toolkit", "ExpressJs", "ThirdWeb", "AWS"],
    TechStack: "Nextjs, NodeJs, MongoDB, Redux-Toolkit, ExpressJs, ThirdWeb, Solidity, Web3.js, Ether.js, AWS, CI/CD, QrCode, Swagger",
    associatedWith: "Cadillacs",
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
    tags: ["React", "NodeJs", "MongoDB", "Redux-Toolkit", "ExpressJs", "Thirdbweb", "Microservice", "AWS", "Docker"],
    TechStack: "React, NodeJs, MongoDB, Redux-Toolkit, ExpressJs, Thirdbweb, Microservice, AWS, CI/CD, Docker",
    associatedWith: "Cadillacs",
    images: [
      {
        id: 1,
        url: images.climateMitigate.src,
      },
    ],
    liveLink: "https://cm-v2.onrender.com/carbon-credit-marketplace",
    gitHubLink: "",
  },
  {
    id: 3,
    title: "Onion Layer",
    description: "Onion Layer is a decentralized application that allows users to buy presale tokens.",
    tags: ["Nextjs", "Etherjs", "Thirdweb", "Vercel", "Hardhat"],
    TechStack: "Nextjs, Etherjs, Thirdweb, Redux-Toolkit, Vercel, Hardhat",
    associatedWith: "Cadillacs",
    images: [
      {
        id: 1,
        url: images.onionLayer.src,
      },
    ],
    liveLink: "https://onion-layer.vercel.app/",
    gitHubLink: "",
  },
  {
    id: 4,
    title: "Matar Token",
    description: "MATAR, where cutting-edge AI meets the robust security of blockchain solutions. Explore the forefront of innovation as we seamlessly integrate artificial intelligence with blockchain technology, revolutionising the way businesses operate and ensuring a secure, transparent, and efficient future. Join us on a journey of limitless possibilities at the intersection of AI and blockchain with MATAR.",
    tags: ["Nextjs", "Etherjs", "Thirdweb", "Redux-Toolkit", "Vercel", "Hardhat"],
    TechStack: "Nextjs, Etherjs, Thirdweb, Redux-Toolkit, Vercel, Hardhat",
    associatedWith: "Cadillacs",
    images: [
      {
        id: 1,
        url: images.matarAi.src,
      },
    ],
    liveLink: "https://matar-ai.vercel.app/",
    gitHubLink: "",
  },
  {
    id: 5,
    title: "Matar NFT",
    description: "Unlock more than just art – with our NFT, you gain a stake in a real-world project, ensuring that your ownership brings tangible profits. Invest in the future and watch your NFT not only captivate visually but also yield returns from a thriving on-ground venture.",
    tags: ["Nextjs", "Etherjs", "Thirdweb", "Redux-Toolkit", "Vercel", "Hardhat"],
    TechStack: "Nextjs, Etherjs, Thirdweb, Redux-Toolkit, Vercel, Hardhat",
    associatedWith: "Cadillacs",
    images: [
      {
        id: 1,
        url: images.matarNFT.src,
      },
    ],
    liveLink: "https://matar-nft.vercel.app/",
    gitHubLink: "",
  },
  {
    id: 6,
    title: "Xertf",
    description: "Xertf is a decentralized application that allows users to buy presale tokens.",
    tags: ["Nextjs", "Etherjs", "Thirdweb", "Redux-Toolkit", "Vercel", "Hardhat"],
    TechStack: "Nextjs, Etherjs, Thirdweb, Redux-Toolkit, Vercel, Hardhat",
    associatedWith: "Cadillacs",
    images: [
      {
        id: 1,
        url: images.xertf.src,
      },
    ],
    liveLink: "https://xertf.vercel.app/",
    gitHubLink: "",
  },
  {
    id: 7,
    title: "Xo Visuals",
    description: "XO VISUALS IS A TEAM OF CONTENT CREATORS FOR ARTISTS, FESTIVALS, BRANDS AND MUCH MORE",
    tags: ["Nextjs", "Redux-Toolkit", "Vercel",],
    TechStack: "Nextjs, Tailwind, YT Embed, Redux-Toolkit, Vercel",
    associatedWith: "Cadillacs",
    images: [
      {
        id: 1,
        url: images.xoVisuals.src,
      },
    ],
    liveLink: "https://xo-visuals.vercel.app/",
    gitHubLink: "",
  },
  {
    id: 8,
    title: "Poki Token",
    description: "JOIN THE POKI TOKEN PRESALE As the first and largest web gaming site in the world, Poki offers custom game portfolios and simplified presale purchase flow with its hugely exciting Upcoming Tokens portal.",
    TechStack: "Nextjs, Etherjs, Thirdweb, Redux-Toolkit, Vercel, , PolygonAmoy",
    tags: ["Nextjs", "Etherjs", "Thirdweb", "Redux-Toolkit", "Vercel", "Hardhat"],
    associatedWith: "Cadillacs",
    images: [
      {
        id: 1,
        url: images.pokiToken.src,
      },
    ],
    liveLink: "https://poki-token.vercel.app/",
    gitHubLink: "",
  }
];