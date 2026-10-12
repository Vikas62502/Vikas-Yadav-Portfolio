export const Skills = [
  "TypeScript",
  "JavaScript",
  "React.js",
  "Next.js",
  "React Native",
  "Redux",
  "Node.js",
  "Express.js",
  "REST APIs",
  "Socket.IO",
  "Microservices",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "AWS",
  "Docker",
  "CI/CD",
  "Nginx",
  "Jest",
  "System Design",
  "Java",
  "C++",
]

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const TechStack: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Responsive, fast and accessible interfaces",
    skills: ["React.js", "Next.js", "Redux", "React Native", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Scalable APIs and real-time services",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "Webhooks", "Microservices"],
  },
  {
    title: "Databases",
    description: "Schema design and query optimization",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    description: "Containerized, reliable deployments",
    skills: ["AWS ECS", "ECR", "Lambda", "S3", "RDS", "Docker", "CI/CD", "Nginx", "Git", "GitHub"],
  },
  {
    title: "Testing & Security",
    description: "Shipping with confidence",
    skills: ["Jest", "Swagger", "Postman", "JWT", "RBAC", "VAPT"],
  },
  {
    title: "Languages & Concepts",
    description: "Foundations behind the code",
    skills: ["JavaScript", "TypeScript", "Java", "C++", "System Design", "HLD/LLD", "Event-Driven Architecture", "Agile"],
  },
]
