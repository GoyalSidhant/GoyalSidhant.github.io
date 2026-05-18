export const site = {
  name: "Sidhant Goyal",
  title: "Engineer Turned CEO Building AI-Driven Growth Systems",
  shortTitle: "Sidhant Goyal | CEO & Engineer",
  description:
    "CEO and Co-Founder at GrowthOS. Founding/Tech Lead engineer at Artisan, ex-American Express and Junio. I build AI-native products, distributed systems, and growth software that scales.",
  email: "sidhant702@gmail.com",
  phone: "+91-9810910960",
  location: "San Francisco Bay Area",
  linkedIn: "https://www.linkedin.com/in/sidhantgoyal501",
  github: "https://github.com/GoyalSidhant",
  website: "https://goyalsidhant.github.io",
  topmate: "https://topmate.io/sidhant_goyal/",
  avatar: "/sidhant.jpeg"
};

export const quickIntro =
  "I build products at the intersection of software engineering, AI, and business growth. Today I lead GrowthOS as CEO and Co-Founder while staying hands-on with architecture and product execution.";

export interface Venture {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights?: string[];
  logo: string;
  logoFit?: "contain" | "cover";
}

export const ventures: Venture[] = [
  {
    company: "GrowthOS",
    role: "CEO & Co-Founder",
    period: "2025 — Present",
    location: "San Francisco Bay Area",
    summary:
      "Building an AI visibility optimization platform that helps brands stay discoverable across ChatGPT, Claude, Gemini, and Perplexity — an autonomous growth engine across the full funnel.",
    highlights: [
      "20+ paying enterprise clients including Shaadi.com and Dainik Jagran",
      "AI Agent Experience (AXP) tracking across the customer journey",
      "Strong month-over-month revenue growth"
    ],
    logo: "/logos/growthos.png",
    logoFit: "cover"
  },
  {
    company: "Artisan",
    role: "Tech Lead & Founding Engineer",
    period: "Mar 2024 — Present",
    location: "San Francisco, CA",
    summary:
      "Founding engineer scaling Artisan from 0 to $8M ARR — building Ava, an AI-powered SDR that autonomously runs outbound prospecting and lead generation at scale.",
    highlights: [
      "Distributed task system handling 700K+ daily jobs (migrated Celery → Inngest)",
      "Cut PostgreSQL CPU from 95%+ to under 25% via query and indexing redesign",
      "Owned IaC on AWS + DigitalOcean (Pulumi), zero-downtime blue-green deploys",
      "Built MCP infrastructure for multi-step reasoning, agent memory, and tool-calling",
      "Led SOC 2 Type II workstreams and key technical pitches for Series A"
    ],
    logo: "/logos/artisan.png",
    logoFit: "cover"
  },
  {
    company: "American Express",
    role: "Software Engineer II",
    period: "Aug 2022 — Feb 2024",
    location: "Bengaluru, India",
    summary:
      "Engineered highly available, low-latency distributed systems processing 100M+ transactions per day across Amex's global payments network at 99.99% uptime.",
    highlights: [
      "Led a team of 6 engineers across SE Alias, NMS4J, and Auth Reports",
      "Spark 2 → Gluten + Velox migration: 60% lower server load, 40% faster jobs",
      "Automated EOD reconciliation framework cut manual validation by 75%",
      "Recognized with 8+ team excellence awards"
    ],
    logo: "/logos/amex.jpeg",
    logoFit: "cover"
  },
  {
    company: "American Express",
    role: "Software Engineer I",
    period: "Nov 2021 — Aug 2022",
    location: "Bengaluru, India",
    summary:
      "Worked across Authorization, Clearing, Settlement, and NTR subsystems supporting the India Data Localization initiative and global payment migrations.",
    highlights: [
      "Improved file-processing SLA by 40% via Kafka partition + consumer rebalance redesign",
      "Resolved critical Couchbase indexing bottlenecks during Global Payment Network migration",
      "Winner — Amex Global Hackathon; Global Rank #4 in Secure Coding Challenge"
    ],
    logo: "/logos/amex.jpeg",
    logoFit: "cover"
  },
  {
    company: "Junio",
    role: "Founding Engineer",
    period: "Nov 2021 — Aug 2022",
    location: "Delhi, India",
    summary:
      "Architected and scaled backend infrastructure from zero to 1M+ active users in 6 months, establishing the foundation for 400% quarter-over-quarter growth.",
    highlights: [
      "Built and led a 6-engineer team with hiring, review, and delivery standards",
      "Re-platformed legacy .NET monolith into Python microservices — 10x deploy velocity",
      "Shipped ML-powered fraud interceptor that reduced fraudulent transactions by 45%"
    ],
    logo: "/logos/junio.jpeg",
    logoFit: "cover"
  }
];

export interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
  details?: string[];
  logo: string;
  logoFit?: "contain" | "cover";
}

export const education: Education[] = [
  {
    school: "Thapar Institute of Engineering & Technology",
    degree: "Bachelor of Engineering — Computer Science (with MBA track)",
    field: "GPA: 3.6 / 4.0",
    period: "Aug 2017 — May 2022",
    details: ["Specializations: Information & Cyber Security, Machine Learning, Cloud Computing"],
    logo: "/logos/thapar.jpeg",
    logoFit: "cover"
  },
  {
    school: "Thapar School of Management",
    degree: "Master of Business Administration",
    field: "Business Analytics & Finance",
    period: "2020 — 2022",
    logo: "/logos/thapar.jpeg",
    logoFit: "cover"
  },
  {
    school: "Columbia Business School",
    degree: "Venture for All",
    field: "Entrepreneurship & Entrepreneurial Studies",
    period: "2015",
    logo: "/logos/columbia.jpeg",
    logoFit: "cover"
  },
  {
    school: "Bal Bharati Public School",
    degree: "Senior Secondary",
    field: "Science",
    period: "2003 — 2017",
    logo: "/logos/bbps.svg"
  }
];

export const impactPoints = [
  "Scaled Artisan from 0 to $8M ARR as founding engineer.",
  "Built distributed systems processing 100M+ daily payment transactions at 99.99% uptime.",
  "Took Junio backend from zero to 1M+ users in 6 months.",
  "Cut PostgreSQL CPU from 95% to under 25% through query and indexing redesign.",
  "Migrated Spark 2 → Gluten + Velox for 60% lower server load and 40% faster jobs.",
  "Shipped ML fraud interceptor that reduced fraudulent transactions by 45%."
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Golang", "SQL", "Java", "C++", "Bash"]
  },
  {
    label: "Backend & APIs",
    items: ["FastAPI", "Django", "Flask", "Node.js", "Express", "REST", "GraphQL", "WebSocket"]
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Couchbase", "DynamoDB", "Pinecone", "Weaviate"]
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "DigitalOcean", "Terraform", "Pulumi", "Docker", "Kubernetes", "Nginx", "GitHub Actions"]
  },
  {
    label: "Data Engineering",
    items: ["Apache Spark", "Apache Kafka", "Apache Airflow", "Celery", "Inngest"]
  },
  {
    label: "AI / ML",
    items: [
      "OpenAI API",
      "Anthropic API",
      "LangChain",
      "Vector Embeddings",
      "RAG Systems",
      "Fine-tuning",
      "Prompt Engineering",
      "MCP"
    ]
  }
];

export const certifications = [
  { name: "Harvard Leadership Edge: Making Sound Decisions Quickly", year: "2023" },
  { name: "AWS Fundamentals: Going Cloud-Native", year: "2021" },
  { name: "Udacity Deep Learning Nano Degree", year: "2020" },
  { name: "Blockchain Specialisation", year: "2020" },
  { name: "Venture for All — Columbia Business School", year: "2015" }
];

export const awards = [
  "Winner — Amex Global Hackathon",
  "Global Rank #4 — Amex Secure Coding Challenge",
  "Winner — Coopathon 2.0",
  "Asia Rank 3 — International Physics Olympiad",
  "8+ Team Excellence Awards at American Express"
];

export interface Publication {
  title: string;
  venue: string;
  year: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    title:
      "XMSRAVNet: Accurate and Explainable White Matter Lesion Segmentation using Multiscale Residual V-Net with Attention Mechanism and Cosine Warm Restarts",
    venue: "Springer Lecture Notes in Networks and Systems (LNNS)",
    year: "Oct 2025"
  },
  {
    title: "A YOLO-based Technique for Early Forest Fire Detection",
    venue: "International Journal of Innovative Technology and Exploring Engineering (IJITEE)",
    year: "April 2020"
  }
];

export interface Project {
  name: string;
  year: string;
  summary: string;
  stack: string[];
  logo?: string;
  logoFit?: "contain" | "cover";
}

export const projects: Project[] = [
  {
    name: "GrowthOS — AI Visibility Platform",
    year: "2025 — Present",
    summary:
      "AI-powered platform that optimizes brand discoverability across ChatGPT, Claude, Gemini, and Perplexity. Live with 20+ paying enterprise clients including Shaadi.com and Dainik Jagran.",
    stack: ["Python", "TypeScript", "Next.js", "PostgreSQL", "Vector DBs", "OpenAI", "Anthropic", "AWS"],
    logo: "/logos/growthos.png",
    logoFit: "cover"
  },
  {
    name: "AI Proctoring System for Online Exams",
    year: "2020",
    summary:
      "ML-powered proctoring built during COVID-19 that scaled to 30+ universities across India, monitoring thousands of concurrent exam sessions with computer-vision-based behavior detection.",
    stack: ["Python", "TensorFlow", "OpenCV", "WebRTC", "React", "PostgreSQL", "AWS"]
  }
];
