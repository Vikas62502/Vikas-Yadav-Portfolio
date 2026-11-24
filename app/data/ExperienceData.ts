export interface ExperienceType {
  id: number;
  title: string;
  company: string;
  link: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string[];
}

export const experienceData: ExperienceType[] = [
  {
    id: 1,
    title: "Full Stack Engineer",
    company: "Chairbord Pvt. Ltd.",
    link: "https://chairbord.in/",
    location: "Jaipur, India (Remote)",
    startDate: "Apr 2024",
    endDate: "Present",
    description: [
      "Platform Architecture: Engineered a production-grade FASTag platform (0 to 1) using Node.js, PostgreSQL and React Native, scaling to 2000+ active users across a microservices-based architecture.",
      "Frontend Development: Built and shipped a Next.js admin panel and FASTag management UI with responsive, user-focused components and real-time data updates via Socket.IO.",
      "System Design: Architected HLD and LLD covering service structure, database schemas, API contracts and CI/CD deployment workflows on AWS ECS.",
      "Full Product Ownership: Own the FASTag stack end to end — React Native agent app, Next.js admin panel (adminv2.chairbord.in), Get RC portal and the Node.js backend — with RESTful APIs handling 5K+ daily requests, JWT auth and sub-250ms PostgreSQL queries.",
      "White-label Mobile: Shipped partner agent apps on Google Play (SnapWheel FASTag, EGS FASTag) from the same Chairbord agent codebase.",
      "Multi-Bank Integrations: Integrated SBI, Bajaj and Airtel APIs, handling onboarding flows, KYC verification (Aadhaar & PAN) and end-to-end transaction lifecycles.",
      "Payment Processing: Integrated Cashfree and SabPaisa payment gateways, processing Rs.5L+ monthly transactions with webhook-based event-driven reconciliation and automated failure handling.",
      "Cloud Infrastructure: Provisioned and managed AWS infrastructure (ECS, ECR, S3, RDS) with Docker containers and Nginx reverse proxy, maintaining 99.9% uptime.",
      "Observability: Built live production logging and monitoring with Winston, Grafana Loki, Prometheus and Grafana — structured logs and metrics for the live Node.js backend (API traffic, Socket.IO, bank crons, FASTag flows).",
      "Testing & Security: Wrote unit tests using Jest for API endpoints and business logic; conducted VAPT testing and enforced RBAC policies for sensitive financial data.",
      "Mobile: Launched the Chairbord FASTag agent app on the Google Play Store (1,000+ downloads, 4.8 rating), plus white-label partner apps SnapWheel and EGS.",
    ],
    techStack: ["Next.js", "React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "Socket.IO", "Winston", "Loki", "Prometheus", "Grafana", "AWS ECS", "Docker", "Nginx", "Jest"],
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Cadillacs",
    link: "https://cadillacs.in/",
    location: "Delhi NCR, India",
    startDate: "May 2023",
    endDate: "Apr 2024",
    description: [
      "Frontend & Web Platform: Built and deployed responsive web applications using Next.js and React.js serving 2000+ users, reducing page load time by 35% through performance optimization and code-splitting.",
      "Backend API Development: Delivered RESTful backend services with Node.js for a blockchain-based carbon offset platform processing 1000+ transactions, improving supply chain data transparency.",
      "Infrastructure & CI/CD: Configured AWS EC2 deployments with Docker containers and Nginx reverse proxy; established CI/CD pipelines for automated build and deployment workflows.",
      "Blockchain Solutions: Optimized smart contracts for carbon offset transactions, reducing processing time by 40% and cutting gas costs by 25%.",
      "Supply Chain Traceability: Built a QR-code based crop traceability platform handling 2,000+ transactions using ERC1155 NFTs and a server-side wallet, eliminating gas fees for end users.",
      "Product UI: Designed user and admin interfaces with multi-language (English & Arabic) support and automated certificate generation for carbon offset purchases.",
    ],
    techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "AWS EC2", "Docker", "Solidity", "Thirdweb"],
  },
]
