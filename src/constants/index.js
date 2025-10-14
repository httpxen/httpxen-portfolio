import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate and motivated junior full stack developer and has solid foundation in both front-end and back-end technologies. I have experience building projects using HTML, PHP, Tailwind CSS, Bootstrap, Laravel, React, Next.js, Node.js, MySQL, Java, Javascript, Lua and I’m continuously expanding my knowledge to become a better developer. My goal is to contribute to real-world projects, collaborate with other developers, and create solutions that provide real value to users.`;


export const ABOUT_TEXT = `I am a dedicated and curious junior full stack developer with a strong passion for building clean, user-friendly, and efficient web applications also game development. I have experience working with HTML, PHP, Tailwind CSS, Bootstrap, Laravel, React, Next.js, Node.js, MySQL, MongoDB, Java, JavaScript, and Lua, and I am continuously expanding my knowledge to become a better developer. My goal is to contribute to real-world projects, collaborate with other developers, and create innovative solutions that deliver real value to users.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Full Stack Developer",
    company: "Colegio de San Juan de Letran Calamba | Facilities Management and General Services Division",
    description: `As part of my on-the-job training, I contributed to the development of the EHS Self-Paced Learning System, an internal platform designed to support environmental health and safety education. My role involved assisting with system interface design, organizing digital content, and collaborating with the team to improve user experience for both administrators and clients.`,
    technologies: ["HTML", "PHP", "Tailwindcss", "MySQL","JavaScript"],
  },
  {
    year: "2025",
    role: "Full Stack Developer",
    company: "Colegio de San Juan de Letran Calamba | Calamba Water District",
    description: "Designed and developed CWD AquaSense, an AI chatbot-integrated complaint and feedback management system with data analytics and sentiment analysis. The system streamlines customer service processes by automating inquiry handling, improving response time, and providing actionable insights through data-driven reporting, enabling Calamba Water District to enhance efficiency and customer satisfaction.",
    technologies: ["HTML", "PHP", "Bootstrap","Tailwindcss", "JavaScript"]
  },
];

export const PROJECTS = [
  {
    title: "Calamba Water District",
    image: project1,
    description:
      "A responsive rework of the Calamba Water District website and introduces a structured, searchable Directory listing departments, extension numbers, and personnel for faster public access and transparency.",
    technologies: ["HTML", "MySQL", "PHP", "Tailwindcss", "JavaScript"],
  },
  {
    title: "AquaSense",
    image: project2,
    description:
      "An AI-powered complaint and feedback management system for Calamba Water District that integrates a web-based platform, chatbot, sentiment analysis, and analytics dashboard to streamline customer service and enhance transparency.",
    technologies: ["HTML", "MySQL", "PHP", "Tailwindcss", "JavaScript", "OpenAI"],
  },
  {
    title: "EHS Self-Paced Learning System",
    image: project3,
    description:
      "The EHS Self-Paced Learning System is a desktop-based application designed to support the Environmental Health and Safety (EHS) program by providing a structured platform for client training and assessment. The system allows administrators to create and manage learning materials, monitor participant progress, and gather feedback through interactive surveys.",
    technologies: ["HTML", "MySQL", "PHP", "Tailwindcss", "JavaScript"],
  },
  {
    title: "りんな API PROJECT 2.0",
    image: project4,
    description:
      "This project utilizes an internal Rinna API provided by our school, designed to offer AI-powered text processing capabilities such as automatic tagging, summarization, and contextual analysis. Our goal was to create a simple and functional web-based tool that allows users to input raw text and receive intelligent feedback using the API.",
    technologies: ["HTML", "CSS", "Python", "Rinna API"],
  },
  {
    title: "Protocol Omega Discord Bot",
    image: project5,
    description:
      "A custom Discord bot developed for the Protocol Omega server that monitors active members in real time, displaying the number of users who are currently online and active within the community.",
    technologies: ["JavaScript", "Node.js", "Npm"],
  },
];


export const CONTACT = {
  address: "Calamba City, Laguna, PH 4027",
  phoneNo: "+63 995 635 5795",
  email: "opulenciaandrei23@gmail.com",
};
