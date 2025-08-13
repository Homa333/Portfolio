export const profile = {
  name: "Kshitiz Bhurtel",
  tagline: "Software Engineer • Backend • Computer Vision • Crypto Payments",
  summary:
    "Software engineer with 3+ years of full stack experience. I build secure payment systems, logistics tools, and simulation pipelines for autonomous driving. Focus on Python, FastAPI, React, AWS, and data driven engineering.",
  location: "Pokhara, Nepal",
  links: {
    email: "kshitizbhurtel@gmail.com",
    github: "https://github.com/Homa333",
    linkedin: "https://www.linkedin.com/in/kshitiz-bhurtel-1a37051ab/",
    // website: "https://yourdomain.com",
    resumeUrl: "/resume.pdf",
  },
  highlights: [
    "Built a custom crypto payment validator for BTC, ETH, XMR, XRP and LTC; cut verification time by ~60%",
    "Shipping app where users purchase postage with crypto (React + FastAPI + PostgreSQL + AWS)",
    "Autonomous driving simulations in CARLA with Autoware; synthetic data generation and perception QA",
    "Created a generic cross platform test automation framework (Selenium, Pytest, Robot Framework)",
  ],
  skills: {
    languages: ["Python", "Java", "JavaScript/TypeScript", "SQL"],
    frameworks: ["FastAPI", "Django", "Spring", "React"],
    infra: ["AWS", "Docker", "Nginx", "PostgreSQL", "MongoDB", "Redis"],
    tools: [
      "Git",
      "Jenkins",
      "Playwright",
      "OpenCV",
      "ROS",
      "CARLA",
      "Autoware",
    ],
  },
  experience: [
    {
      title: "Software Engineer II",
      company: "Deloitte (HashedIn)",
      timeframe: "Full time 2.5 yrs • Intern 7 mo",
      bullets: [
        "Led backend features and reliability work across services",
        "Built a cross platform test automation framework (Selenium, Pytest, Robot Framework)",
        "Worked on autonomous driving simulation workloads and perception validation",
      ],
    },
    {
      title: "Freelance Engineer / Full Stack Developer",
      company: "Bitpostage",
      timeframe: "Ongoing",
      bullets: [
        "Designed and shipped a crypto based postage purchasing platform (React + FastAPI + PostgreSQL + AWS)",
        "Implemented custom blockchain verification for BTC, ETH, XMR, XRP, and LTC; confirmation policy set to 1 block",
        "Built a job portal on AWS EC2 with S3 for storage and Gatekeeper protected backend",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor's degree | New Horizon College of Engineering",
      detail: "CGPA 3.55",
    },
  ],
  interests: [
    "Real time perception",
    "Sensor fusion",
    "Autonomous systems",
    "Distributed systems",
    "AR/VR for navigation",
  ],
} as const;
