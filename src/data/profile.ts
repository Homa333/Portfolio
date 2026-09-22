export const profile = {
  name: "Kshitiz Bhurtel",
  tagline: "Software Engineer • Backend • Computer Vision • Full-Stack Development",
  summary:
    "Experienced Software Engineer with more than 4 years in Full-stack development, specializing in Backend development. Skilled in Spring Boot, Django and React, with a strong focus on system performance optimization, data security, and scalable architecture. Proven track record in leading teams and delivering results through practical, data-driven solutions.",
  location: "Kathmandu, Nepal",
  links: {
    email: "kshitizbhurtel@gmail.com",
    github: "https://github.com/Homa333",
    linkedin: "https://www.linkedin.com/in/kshitiz-bhurtel-383667417/",
    resumeUrl: "/resume.pdf",
    website: "https://kbhurtel.com"
  },
  highlights: [
    "Developed a cybersecurity benchmarking application used by 40+ organizations to assess maturity levels, identify threats, analyze gaps, and recommend mitigation measures, improving security posture by 27%",
    "Led a team of 3 backend developers, improving code quality via weekly reviews",
    "Optimized backend scalability on AWS with PostgreSQL, reducing response times by 15%",
    "Generated 100K+ synthetic AD images with LiDAR/RADAR data, reducing data costs by ~80%",
    "Built a custom crypto payment validator (BTC, ETH, XMR, XRP), cutting verification time by 60%"
  ],
  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript"],
    frameworks: ["React", "Spring Boot", "Django", "FastAPI"],
    infra: ["AWS (S3, EC2, Lambda, RDS, EKS)", "Docker", "PostgreSQL", "MongoDB", "DB2"],
    tools: ["Jenkins", "OpenCV", "WebSockets", "Carla Simulation", "Autoware", "Git", "Microservices"]
  },
  experience: [
        {
      title: "Backend Developer (Consultant)",
      company: "Youth Innovation Lab",
      timeframe: "Aug 2026 – Present",
      bullets: [
          "Developed RiskAI, an LLM-powered risk assessment application for analyzing and evaluating disaster-related risks.",
          "Integrated Model Context Protocol (MCP) tools with LLM-based agents, enabling specialized agents such as HeatAI and FloodAI to analyze historical and upcoming disaster events.",
          "Designed agent-based workflows to combine LLM reasoning with external tools and data sources, improving the application's ability to generate context-aware risk insights.",
          "Implemented role-based access control (RBAC) in the Shikshya application, introducing role-specific permissions to control access to platform features and resources.",
        ]
    },
    {
      title: "Full-Stack Developer (Contract)",
      company: "BitPostage",
      timeframe: "Oct 2023 – Aug 2026",
      bullets: [
        "Developed a crypto-powered postage purchasing platform for USPS, UPS, and FedEx",
        "React frontend + FastAPI backend on AWS with 99.9% uptime",
        "Replaced third-party payment verification with custom BTC, ETH, XMR, XRP validator, reducing verification time by 60% and removing third-party costs"
      ]
    },
    {
      title: "Software Engineer II",
      company: "Deloitte USI",
      timeframe: "Mar 2022 – May 2025",
      bullets: [
        "Backend Lead, Cybersecurity Benchmarking: Developed an app for 40+ organizations to assess cybersecurity maturity, improving security posture by 27%",
        "Designed and implemented RBAC and benchmarking logic in Django/Python, improving reporting accuracy by 35%",
        "Led a backend team of 3, conducting weekly code reviews",
        "Developed a resume parsing engine using Azure OpenAI LLM to extract structured candidate data",
        "Integrated the parser into a recruitment workflow for automated candidate profiling",
        "Optimized scalability with AWS + PostgreSQL, reducing response times by 15%",
        "Synthetic Data Generation for Autonomous Driving: Imported custom vehicles in CARLA and simulated crash scenarios to improve AD stack validation by 5%",
        "Generated 100K+ labeled AD dataset with LiDAR/RADAR, reducing data collection costs by ~80%",
        "Improved bounding box generation speed from 20s to 1s with accurate detection",
        "Added diverse image noise to boost model robustness, raising accuracy by 5%",
        "Automated dataset pipeline with Jenkins and AWS, cutting manual work by 75%",
      ]
    }
  ],
  education: [
    {
      degree: "BE in Computer Science",
      detail: "Visvesvaraya Technological University | Bangalore, India | Aug 2018 – Aug 2022"
    }
  ],
  interests: ["Reading", "Doodling", "Exploring new tech trends"]
} as const;