import { desc } from "framer-motion/client";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

export const HERO_CONTENT = `I am a passionate and motivated junior full stack developer and has solid foundation in both front-end and back-end technologies. I have experience building projects using HTML, PHP, Tailwind CSS, Bootstrap, Laravel, React, Next.js, Node.js, MySQL, Java, Javascript, Lua and I’m continuously expanding my knowledge to become a better developer. My goal is to contribute to real-world projects, collaborate with other developers, and create solutions that provide real value to users.`;


export const ABOUT_TEXT = `I am a dedicated and curious junior full stack developer with a strong passion for building clean, user-friendly, and efficient web applications also game development. I have experience working with HTML, PHP, Tailwind CSS, Bootstrap, Laravel, React, Next.js, Node.js, MySQL, MongoDB, Java, JavaScript, and Lua, and I am continuously expanding my knowledge to become a better developer. My goal is to contribute to real-world projects, collaborate with other developers, and create innovative solutions that deliver real value to users.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Full Stack Developer",
    company: "Colegio de San Juan de Letran Calamba | Facilities Management and General Services Division",
    description: `As part of my on-the-job training, I contributed to the development of the EHS Self-Paced Learning System, an internal platform designed to support environmental health and safety education. My role involved assisting with system interface design, organizing digital content, and collaborating with the team to improve user experience for both administrators and clients.`,
    technologies: ["HTML", "MySQL", "PHP", "Tailwindcss", "JavaScript"],
  },
  {
    year: "2025",
    role: "Full Stack Developer",
    company: "Colegio de San Juan de Letran Calamba | Calamba Water District",
    description: "Designed and developed CWD AquaSense, an AI chatbot-integrated complaint and feedback management system with data analytics and sentiment analysis. The system streamlines customer service processes by automating inquiry handling, improving response time, and providing actionable insights through data-driven reporting, enabling Calamba Water District to enhance efficiency and customer satisfaction.",
    technologies: ["HTML", "MySQL", "PHP", "Tailwindcss", "JavaScript", "OpenAI", "Cloudflare"]
  },
];

export const GALLERY_CATEGORIES = ["All", "OJT", "Capstone"];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "System Presentation & Walkthrough",
    company: "Colegio de San Juan de Letran Calamba | Facilities Management and General Services Division",
    category: "OJT",
    description: "A collaborative session involving the presentation and walkthrough of the developed system with the supervisor to ensure it meets technical requirements and project goals.",
    src: "/ojt-1.jpg",                    
    year: "2025"
  },
  {
    id: 2,
    title: "User Acceptance Testing & Client Feedback",
    company: "Calamba Water District",
    category: "Capstone",
    description: "Facilitating a User Acceptance Testing (UAT) session with the client to validate system workflows and ensure all functional requirements are met before final deployment.",
    src: "capstone-1.jpg", 
    year: "2025 to 2026"
  },
  {
    id: 3,
    title: "Local Environment Setup & Repository Cloning",
    company: "Colegio de San Juan de Letran Calamba | Facilities Management and General Services Division",
    category: "OJT",
    description: "Facilitating the transfer of the project's source code from GitHub to the office's local desktop to establish a stable development environment for testing and deployment.",
    src: "ojt-2.jpg",
    year: "2025"
  },
  {
    id: 4,
    title: "Feature Validation & PDF Output Testing",
    company: "Calamba Water District",
    category: "Capstone",
    description: "Conducting quality assurance tests on the complaint management module to ensure that data filtering by year and month correctly exports into a formatted PDF document.",
    src: "capstone-2.jpg",
    year: "2025 to 2026"
  },
  {
    id: 5,
    title: "Successful Internship Completion",
    company: "Colegio de San Juan de Letran Calamba | Facilities Management and General Services Division",
    description: "Marking the successful conclusion of our internship program. Grateful for the invaluable professional guidance and technical mentorship provided by our supervisor throughout our stay.",
    category: "OJT",
    src: "ojt-3.jpg",
    year: "2025"
  },
  {
    id: 6,
    title: "System Deployment & Client Handover",
    company: "Calamba Water District",
    category: "Capstone",
    description: "Successfully deploying the developed system to the client's production environment and providing comprehensive documentation and training to ensure smooth handover and client autonomy in system management.",
    src: "capstone-3.jpg",
    year: "2025 to 2026"
  }
];

export const PROJECTS = [
  {
    title: "AquaSense",
    image: project1,
    description:
      "An AI-powered complaint and feedback management system for Calamba Water District that integrates a web-based platform, chatbot, sentiment analysis, and analytics dashboard to streamline customer service and enhance transparency.",
    technologies: ["HTML", "MySQL", "PHP", "Tailwindcss", "JavaScript", "OpenAI", "Cloudflare", "Hostinger"],
    demoLink: "https://cwdaquasense.com/",
  },
  {
    title: "Prestige Game Developer Portfolio",
    image: project2,
    description:
      "A professionally designed and developed portfolio website for an independent Game Developer client. I led the full design and development process, focusing on modern UI, performance optimization, and clear project presentation to effectively showcase the developer’s expertise and game projects.",
    technologies: ["TypeScript", "Tailwindcss", "JavaScript", "Next.js", "Vercel"],
    demoLink: "https://prestige-portfolio.vercel.app/",
  },
  {
    title: "Calamba Water District",
    image: project3,
    description:
      "A responsive rework of the Calamba Water District website and introduces a structured, searchable Directory listing departments, extension numbers, and personnel for faster public access and transparency.",
    technologies: ["HTML", "MySQL", "PHP", "Tailwindcss", "JavaScript"],
  },
  {
    title: "EHS Self-Paced Learning System",
    image: project4,
    description:
      "The EHS Self-Paced Learning System is a desktop-based application designed to support the Environmental Health and Safety (EHS) program by providing a structured platform for client training and assessment. The system allows administrators to create and manage learning materials, monitor participant progress, and gather feedback through interactive surveys.",
    technologies: ["HTML", "MySQL", "PHP", "Tailwindcss", "JavaScript"],
  },
  {
    title: "りんな API PROJECT 2.0",
    image: project5,
    description:
      "This project utilizes an internal Rinna API provided by our school, designed to offer AI-powered text processing capabilities such as automatic tagging, summarization, and contextual analysis. Our goal was to create a simple and functional web-based tool that allows users to input raw text and receive intelligent feedback using the API.",
    technologies: ["HTML", "CSS", "Python", "Rinna API"],
  },
  {
    title: "Protocol Omega Discord Bot",
    image: project6,
    description:
      "A custom Discord bot developed for the Protocol Omega server that monitors active members in real time, displaying the number of users who are currently online and active within the community.",
    technologies: ["JavaScript", "NodeJS", "Npm"],
  },
  {
    title: "Cyber Beast PH - Malware Scanner",
    image: project7,
    description:
      "A high-performance, dark-themed web interface designed for rapid file security analysis. This project focuses on a streamlined user experience, allowing users to cross-reference suspicious files against multiple antivirus engines and SHA256 threat databases with a single drag-and-drop action.",
    technologies: ["Next.js", "Tailwindcss", "Npm", "NodeJS"],  
  },
];


export const CONTACT = {
  address: "Calamba City, Laguna, PH 4027",
  phoneNo: "+63 995 635 5795",
  email: "opulenciaandrei23@gmail.com",
};
