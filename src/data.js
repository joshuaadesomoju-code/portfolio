// ============================================================
//  EDIT THIS FILE to update your portfolio content.
//  Anything marked TODO needs your real link or info.
// ============================================================

export const profile = {
  name: "Joshua Adesomoju",
  role: "Frontend Web Developer",
  headline: "Websites and React apps that look right on every screen your customers use.",
  intro:
    "I help small businesses, startups and personal brands get online with fast, mobile-friendly sites. Send me a design or just an idea, and I'll turn it into clean, working code.",
  location: "Lagos, Nigeria · works remotely (GMT+1)",
  email: "joshuaadesomoju@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~0172b70fc98cf9133f",
  github: "https://github.com/joshuaadesomoju-code",
  linkedin: "https://linkedin.com/in/joshua-adesomoju-0424b43a3",
  cv: "/Joshua_Adesomoju_CV.pdf",
};

// status: "live" shows the links, "building" shows an in-progress tag.
export const projects = [
  {
    title: "GoshenFoods",
    type: "Food ordering web app",
    summary:
      "An online ordering site for a Nigerian restaurant, where customers browse the menu, fill a cart, pay and track their orders, with dashboards for staff to manage orders.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    status: "live",
    live: "https://goshen-foods.vercel.app",
  },
  {
    title: "Admin Dashboard",
    type: "React web app",
    summary:
      "A store dashboard with sales stats, interactive charts, a category filter and a searchable orders table, all pulled live from a public API.",
    stack: ["React", "Tailwind CSS", "REST API", "SVG charts"],
    status: "live",
    live: "https://joshua-admin-dashboard.vercel.app",
    code: "https://github.com/joshuaadesomoju-code/admin-dashboard",
  },
  {
    title: "Palmwine & Pepper",
    type: "Restaurant website",
    summary:
      "A landing site for a fictional Lagos grill with a tabbed menu, a photo gallery, scroll animations and a table booking form that knows the opening hours.",
    stack: ["React", "Tailwind CSS"],
    status: "live",
    live: "https://palmwine-and-pepper.vercel.app",
    code: "https://github.com/joshuaadesomoju-code/restaurant-website",
  },
  {
    title: "Campulse",
    type: "Social platform",
    summary:
      "A campus lifestyle and social platform for university students, built from reusable React components.",
    stack: ["React", "Tailwind CSS"],
    status: "building",
    live: "",
    code: "",
  },
];

export const services = [
  {
    title: "Business and portfolio websites",
    text: "A professional site that tells customers who you are, what you offer and how to reach you.",
  },
  {
    title: "Landing pages",
    text: "One focused page for a product, event or offer, designed to get people to take action.",
  },
  {
    title: "Design to code",
    text: "Your Figma or image mockup turned into a responsive, pixel-accurate website.",
  },
  {
    title: "React app frontends",
    text: "Dashboards and web app interfaces connected to your API or Supabase database.",
  },
  {
    title: "Fixes and mobile optimisation",
    text: "Broken layouts, slow pages or a site that falls apart on phones, sorted.",
  },
];

export const skills = [
  "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap",
  "REST APIs", "Supabase", "Python", "Git & GitHub", "Render",
];

// Work history, newest first. Matches the CV and Upwork profile.
export const experience = [
  {
    role: "Junior Web Developer",
    org: "TD Africa",
    kind: "Internship · On-site, Lagos",
    dates: "Mar 2026 to Sep 2026",
    points: [
      "Developed and managed efficient, visually appealing websites.",
      "Applied React and API integration to improve front-end functionality and user experience.",
    ],
  },
  {
    role: "Web Developer",
    org: "Goshen Apartments and Suites",
    kind: "Contract · Remote",
    dates: "Jul 2025 to Aug 2025",
    points: ["Developed a modern, visually appealing website for the business, strengthening its online presence. Built with HTML and React."],
  },
  {
    role: "Marketing Assistant",
    org: "MaDop Professional Services",
    kind: "Apprenticeship · Hybrid, Lagos",
    dates: "Jul 2025 to Aug 2025",
    points: ["Supported marketing work with Adobe Photoshop and CapCut."],
  },
  {
    role: "Data Analyst",
    org: "Spectrum Phones Ltd.",
    kind: "Seasonal · Hybrid, Lagos",
    dates: "Nov 2024 to Feb 2025",
    points: ["Worked with Microsoft Excel and Office, ERP systems and AI tools, alongside customer service."],
  },
];

export const certifications = [
  { name: "Prompt Engineering on Large Language Models", issuer: "OBTranslate", date: "Jul 2024" },
];
