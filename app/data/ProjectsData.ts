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
  highlights?: string[];
  preview?: "jobs";
  slug?: string;
  seoSummary?: string;
}

export const ProjectsData: ProjectType[] = [
  {
    id: 1,
    title: "Chairbord FASTag Platform",
    slug: "chairbord-fastag-platform",
    seoSummary: "Full stack FASTag platform by Vikas Yadav — React Native agent app, Next.js admin panel, Node.js APIs, PostgreSQL and AWS ECS.",
    description: "A production FASTag issuance and management platform for Indian vehicles — a React Native agent app, a Next.js admin panel and a Node.js microservices backend. Agents can issue, replace and track FASTags, complete KYC and manage wallets, while admins monitor everything in real time. The same agent codebase ships as white-label Play Store apps for partners (SnapWheel, EGS).",
    highlights: [
      "Event-driven Socket.IO system delivering sub-second updates between dashboards and 2000+ mobile users",
      "Cashfree webhook handlers for reliable transaction confirmation and wallet reconciliation",
      "SBI, Bajaj and Airtel bank integrations with KYC and full transaction lifecycle",
      "White-label agent apps: SnapWheel and EGS FASTag on Google Play",
      "Live observability with Winston → Loki + Prometheus → Grafana for production backend logs and metrics",
    ],
    tags: ["ReactNative", "Nextjs", "NodeJs", "ExpressJs", "PostgreSQL", "Socket.IO", "AWS", "Docker"],
    TechStack: "React Native, Next.js, Node.js, Express, PostgreSQL, Socket.IO, Cashfree, Winston, Loki, Prometheus, Grafana, AWS (ECS, ECR, S3, RDS), Docker, Nginx, CI/CD",
    associatedWith: "Chairbord",
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
    id: 13,
    title: "Chairbord Admin Panel",
    slug: "chairbord-admin-panel",
    seoSummary: "Chairbord admin panel by Vikas Yadav — Next.js dashboard for FASTag activations, agents, inventory, banks and transaction search.",
    description: "Production operations dashboard for the FASTag platform: activation KPIs, agent health, warehouse tag inventory, SBI/Bajaj share charts, and a unified search for vehicle numbers, tag IDs, UTRs and pasted bank messages. Built so ops can troubleshoot issuances and payments without digging through logs.",
    highlights: [
      "Live business overview: successful activations, active agents, pending requests and warehouse stock",
      "Daily activation charts and bank-wise share for SBI and Bajaj",
      "Search across RC numbers, tag IDs, UTRs and screenshot-assisted lookup",
    ],
    tags: ["Nextjs", "TypeScript", "NodeJs", "PostgreSQL", "Socket.IO", "AWS"],
    TechStack: "Next.js, TypeScript, Node.js, PostgreSQL, Socket.IO, charting, AWS",
    associatedWith: "Chairbord",
    images: [
      {
        id: 1,
        url: images.chairbordAdmin.src,
      },
    ],
    liveLink: "https://adminv2.chairbord.in/",
    gitHubLink: "",
  },
  {
    id: 16,
    title: "Chairbord Live Logs & Observability",
    slug: "chairbord-live-logs-observability",
    seoSummary: "Production observability by Vikas Yadav — Winston logging with Grafana Loki, Prometheus metrics and Grafana dashboards for Chairbord's live Node.js backend.",
    description: "Built the live logging and monitoring stack for Chairbord's production backend (cbpl-backend-live). Structured logs from Winston ship to Grafana Loki; Prometheus scrapes service metrics; Grafana Explore drills into API traffic, Socket.IO events, bank crons and FASTag registration flows in near real time.",
    highlights: [
      "Winston structured logging piped into Grafana Loki for service-scoped log drilldown",
      "Prometheus metrics + Grafana dashboards for live backend health",
      "Trace bank crons, Socket disconnects, SBI/Bajaj APIs and agent dashboard traffic from one Explore view",
    ],
    tags: ["Winston", "Loki", "Prometheus", "Grafana", "NodeJs", "Observability"],
    TechStack: "Winston, Grafana Loki, Prometheus, Grafana, Node.js, Docker",
    associatedWith: "Chairbord",
    images: [
      {
        id: 1,
        url: images.chairbordLogsGrafana.src,
      },
    ],
    liveLink: "https://hostlogscap.chairbord.in/",
    gitHubLink: "",
  },
  {
    id: 14,
    title: "SnapWheel FASTag",
    slug: "snapwheel-fastag",
    seoSummary: "SnapWheel FASTag app by Vikas Yadav — white-label React Native agent app of the Chairbord FASTag platform on Google Play.",
    description: "A white-label build of the Chairbord agent panel for SnapWheel. Same FASTag issuance, KYC, wallet and recharge flows, branded and published as a partner app on the Google Play Store.",
    highlights: [
      "White-label of the Chairbord React Native agent app",
      "Live on Google Play as SnapWheel : FASTag App",
    ],
    tags: ["ReactNative", "NodeJs", "FASTag", "PlayStore"],
    TechStack: "React Native, Node.js APIs, white-label branding, Google Play",
    associatedWith: "Chairbord",
    images: [
      {
        id: 1,
        url: images.snapwheelFastag.src,
      },
    ],
    liveLink: "https://play.google.com/store/apps/details?id=com.snapwheel&hl=en_IN",
    gitHubLink: "",
  },
  {
    id: 15,
    title: "EGS FASTag",
    slug: "egs-fastag",
    seoSummary: "EGS FASTag app by Vikas Yadav — white-label React Native agent app of the Chairbord FASTag platform on Google Play.",
    description: "A white-label build of the Chairbord agent panel for EGS. Partner-branded FASTag agent experience — issue tags, manage vehicles and run day-to-day agent workflows — published on Google Play.",
    highlights: [
      "White-label of the Chairbord React Native agent app",
      "Live on Google Play as EGS FASTag",
    ],
    tags: ["ReactNative", "NodeJs", "FASTag", "PlayStore"],
    TechStack: "React Native, Node.js APIs, white-label branding, Google Play",
    associatedWith: "Chairbord",
    images: [
      {
        id: 1,
        url: images.egsFastag.src,
      },
    ],
    liveLink: "https://play.google.com/store/apps/details?id=com.egs&hl=en_IN",
    gitHubLink: "",
  },
  {
    id: 12,
    title: "Job Search Accelerator",
    slug: "job-search-accelerator",
    seoSummary: "Job Search Accelerator by Vikas Yadav — a Next.js full stack job-search workspace for matching roles and tracking applications.",
    description: "A live job-search workspace that helps you find matching roles, track applications and move from search to interviews faster — built as a full-stack product and shipped on Vercel.",
    highlights: [
      "End-to-end product: search, match and track applications in one place",
      "Shipped as a production web app at vikas-yadav-job-hunt.vercel.app",
    ],
    tags: ["Nextjs", "TypeScript", "Vercel"],
    TechStack: "Next.js, TypeScript, React, Vercel",
    images: [],
    preview: "jobs",
    liveLink: "https://vikas-yadav-job-hunt.vercel.app/",
    gitHubLink: "",
  },
  {
    id: 2,
    title: "RC Download Portal",
    slug: "rc-download-portal",
    seoSummary: "Vehicle RC download portal by Vikas Yadav — Next.js, TypeScript and Node.js APIs for registration certificate lookup.",
    description: "A web portal for fetching and downloading vehicle RC (registration certificate) details, built as part of the Chairbord platform with reusable UI components shared with the admin panel.",
    tags: ["Nextjs", "TypeScript", "NodeJs"],
    TechStack: "Next.js, TypeScript, Node.js, REST APIs, Vercel",
    associatedWith: "Chairbord",
    images: [],
    liveLink: "https://get-rc.vercel.app",
    gitHubLink: "https://github.com/Vikas62502/Get-rc",
  },
  {
    id: 3,
    title: "Spyne Backend",
    slug: "spyne-backend",
    seoSummary: "Secure Node.js backend by Vikas Yadav with JWT auth, RBAC, Jest tests and Docker deployment.",
    description: "A secure, containerized backend service with JWT-based authentication, role-based access control and RESTful APIs, documented with LLD, database schema and API workflows.",
    highlights: [
      "JWT auth + RBAC securing 1000+ API interactions per day",
      "Unit tests with Jest for core modules",
      "Containerized deployment with documented system design",
    ],
    tags: ["NodeJs", "ExpressJs", "MongoDB", "Docker", "Jest"],
    TechStack: "Node.js, Express, MongoDB, JWT, RBAC, Jest, Docker, Swagger",
    images: [],
    liveLink: "",
    gitHubLink: "https://github.com/Vikas62502/spyne-backend",
  },
  {
    id: 7,
    title: "Matar Token",
    description: "MATAR, where cutting-edge AI meets the robust security of blockchain solutions. Explore the forefront of innovation as we seamlessly integrate artificial intelligence with blockchain technology, revolutionising the way businesses operate and ensuring a secure, transparent, and efficient future. Join us on a journey of limitless possibilities at the intersection of AI and blockchain with MATAR.",
    tags: ["Nextjs", "Etherjs", "ThirdWeb", "Redux-Toolkit", "Vercel", "Hardhat"],
    TechStack: "Nextjs, Etherjs, Thirdweb, Redux-Toolkit, Vercel, Hardhat",
    associatedWith: "Cadillacs",
    images: [
      {
        id: 1,
        url: images.matarAi.src,
      },
    ],
    liveLink: "https://matar.ai/",
    gitHubLink: "",
  },
  {
    id: 8,
    title: "Matar NFT",
    description: "Unlock more than just art – with our NFT, you gain a stake in a real-world project, ensuring that your ownership brings tangible profits. Invest in the future and watch your NFT not only captivate visually but also yield returns from a thriving on-ground venture.",
    tags: ["Nextjs", "Etherjs", "ThirdWeb", "Redux-Toolkit", "Vercel", "Hardhat"],
    TechStack: "Nextjs, Etherjs, Thirdweb, Redux-Toolkit, Vercel, Hardhat",
    associatedWith: "Cadillacs",
    images: [
      {
        id: 1,
        url: images.matarNFT.src,
      },
    ],
    liveLink: "https://nft.matar.ai/",
    gitHubLink: "",
  },
  {
    id: 10,
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
    liveLink: "https://xovisuals.in/",
    gitHubLink: "",
  },
  {
    id: 11,
    title: "Poki Token",
    description: "JOIN THE POKI TOKEN PRESALE As the first and largest web gaming site in the world, Poki offers custom game portfolios and simplified presale purchase flow with its hugely exciting Upcoming Tokens portal.",
    TechStack: "Nextjs, Etherjs, Thirdweb, Redux-Toolkit, Vercel, , PolygonAmoy",
    tags: ["Nextjs", "Etherjs", "ThirdWeb", "Redux-Toolkit", "Vercel", "Hardhat"],
    associatedWith: "Cadillacs",
    images: [
      {
        id: 1,
        url: images.pokiToken.src,
      },
    ],
    liveLink: "https://www.pokitoken.com/",
    gitHubLink: "",
  }
];

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getProjectSlug = (project: ProjectType) =>
  project.slug ?? slugify(project.title);

export const getProjectBySlug = (slug: string) =>
  ProjectsData.find((project) => getProjectSlug(project) === slug);

export const getAllProjectSlugs = () =>
  ProjectsData.map((project) => getProjectSlug(project));