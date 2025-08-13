export const profile = {
  name: "Kshitiz Bhurtel",
  tagline: "Software Engineer • Backend • Computer Vision • Full-Stack Development",
  summary:
    "Experienced Software Engineer with over 3+ years of expertise in full-stack development. Skilled in React, Django, and Spring Boot, with a focus on optimizing system performance and enhancing data security. Proven ability to lead teams, develop scalable applications, and implement practical solutions to improve efficiency and reduce operational costs. Experienced with AWS, Jenkins, and OpenCV for real-time data processing. Focused on delivering impactful results through data-driven development and practical technology solutions.",
  location: "Nepal",
  links: {
    email: "kshitizbhurtel@gmail.com",
    github: "https://github.com/Homa333",
    linkedin: "https://www.linkedin.com/in/kshitiz-bhurtel-1a37051ab/",
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
      title: "Full-Stack Developer (Contract)",
      company: "BitPostage",
      timeframe: "Oct 2023 – Present",
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