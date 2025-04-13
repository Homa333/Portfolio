export const about = {
  name: "Kshitiz Bhurtel",
  title: "Software Engineer II",
  location: "Bangalore, India",
  summary:
    "Experienced Software Engineer with over 3 years in full-stack development. Skilled in React, Spring Boot, and Django, with a strong focus on system performance optimization, data security, and scalable architecture. Proven track record in leading teams and delivering results through practical, data-driven solutions."
};

export const experiences = [
  {
    company: "Deloitte",
    title: "Software Engineer II",
    duration: "Mar 2022 – Present",
    roles: [
      {
        title: "Backend Lead – Cybersecurity Benchmarking",
        achievements: [
          "Built a benchmarking tool used by 40+ orgs to assess cybersecurity maturity.",
          "Implemented secure RBAC logic in Django, improving reporting accuracy by 35%.",
          "Led a team of 3, conducted weekly reviews to maintain code quality.",
          "Deployed on AWS + PostgreSQL, reducing response time by 15%."
        ]
      },
      {
        title: "Software Engineer – Elevance Health",
        achievements: [
          "Refactored monolithic Spring Boot system, reducing response time from 9s to 4s.",
          "Migrated Quick Links to a new microservice architecture.",
          "Implemented tokenization/encryption on 2,000+ columns across 3 databases.",
          "Ensured 100% PII/PHI compliance and reduced data exposure risk."
        ]
      },
      {
        title: "Synthetic Data Generation & Crash Simulation",
        achievements: [
          "Simulated crash scenarios using Carla + Autoware AD Stack.",
          "Generated 100K+ labeled images; reduced data collection cost by 80%.",
          "Optimized bounding box mapping using OpenCV (20s → 1s).",
          "Cut dataset upload time from 20hrs to 2hrs to S3.",
          "Achieved 5% higher accuracy training on synthetic data.",
          "Automated generation pipeline using Jenkins + AWS (75% less manual work)."
        ]
      }
    ]
  }
];

export const projects = [
  {
    title: "BitPostage",
    role: "Full Stack Developer (Contract)",
    duration: "Oct 2023 – Present",
    description:
      "A crypto-powered platform to purchase postage labels from USPS, UPS, and FedEx.",
    tech: ["React", "FastAPI", "AWS"],
    highlights: [
      "Built a scalable, crypto-first postage platform with 99.9% uptime.",
      "Replaced third-party verification with a custom BTC, ETH, XMR, XRP system.",
      "Reduced transaction verification time by 60%, eliminated third-party cost."
    ]
  }
];

export const skills = [{
    languages: ["Java", "Python", "JavaScript"],
    frontend: ["React", "HTML", "CSS"],
    backend: ["Spring Boot", "Django", "FastAPI", "REST APIs", "WebSockets"],
    databases: ["PostgreSQL", "MongoDB", "DB2"],
    cloudDevOps: ["AWS (S3, EC2, Lambda, RDS, EKS)", "Jenkins"],
    tools: ["Git", "Agile", "Microservices", "CI/CD", "Performance Tuning", "Code Reviews"],
    aiCV: ["OpenCV", "Carla Simulation", "Autoware"],
    crypto: ["Payment Verification System", "BTC", "ETH", "XMR", "XRP"],
    softSkills: ["Technical Leadership", "Team Management", "Problem Solving", "System Design"]
  }];

export const education = {
  degree: "BE in Computer Science",
  institution: "New Horizon College of Engineering",
  location: "Bangalore, India",
  duration: "Aug 2018 – Aug 2022"
};

export const interests = [
  "Reading",
  "Doodling",
  "Exploring new tech trends"
];

export const socials = {
  email: "kshitizbhurtel@gmail.com",
  github: "https://github.com/Homa333",
  linkedin: "https://www.linkedin.com/in/kshitiz-bhurtel-1a37051ab/",
};
