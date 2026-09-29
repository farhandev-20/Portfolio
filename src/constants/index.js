import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  mysql,
  satyra,
  bit,
  ai_interview,
  ecommerce,
  smart_parking,
  ibm,
  mern,
  uiux_cert,
} from "../assets";

export const personalInfo = {
  name: "Farhan Attar",
  title: "Computer Engineering Student | Software & Web Developer",
  email: "attarfarhan02@gmail.com",
  phone: "+91 9325147865",
  location: "Barshi, Maharashtra, India",
  college: "Bhagwant Institute of Technology, Barshi",
  degree: "Bachelor of Technology in Computer Engineering (2023–2027)",
  cgpa: "7.33 / 10",
  github: "https://github.com/farhandev-20",
  linkedin: "https://linkedin.com/in/farhan-attar",
  summary:
    "Computer Engineering student graduating in 2027 with hands-on experience in software and web application development, database management, and UI/UX design. Proficient in Python, JavaScript, SQL, HTML5, CSS3, MySQL, MongoDB, Git, and GitHub. Developed interactive web applications and a database-driven parking allocation system, and completed a UI/UX internship. Seeking a Graduate Trainee opportunity to apply programming, problem-solving, and software development skills while contributing to engineering projects.",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Application Developer",
    icon: web,
    description: "Building responsive, modern, and interactive front-end & web applications with HTML5, CSS3, and JavaScript.",
  },
  {
    title: "Software & Python Developer",
    icon: backend,
    description: "Developing robust backends, algorithmic logic, and automated workflows using Python and software engineering principles.",
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
    description: "Designing wireframes, intuitive user flows, and interactive Figma prototypes focused on usability and aesthetics.",
  },
  {
    title: "Database Management (DBMS)",
    icon: creator,
    description: "Designing normalized database schemas, relational workflows, and scalable queries using MySQL and MongoDB.",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const technicalSkills = {
  programming: ["Python", "JavaScript", "SQL"],
  webDevelopment: ["HTML5", "CSS3", "React JS", "Responsive Web Design"],
  databases: ["MySQL", "MongoDB", "DBMS Architecture"],
  tools: ["Git", "GitHub", "VS Code", "Figma"],
  coreAreas: [
    "Software Development",
    "Web Application Development",
    "Database Management",
    "Problem Solving",
    "UI/UX Design",
  ],
};

const experiences = [
  {
    title: "UI/UX Design Intern",
    company_name: "Satyra IT LLP",
    icon: satyra,
    iconBg: "#1f1a3a",
    date: "May 2026 – Aug 2026",
    category: "Internship",
    points: [
      "Designed responsive web interfaces and user-focused layouts, applying usability and visual consistency principles to project requirements.",
      "Created wireframes and interactive prototypes in Figma to define page structure, interface elements, and user flows before implementation.",
      "Collaborated with mentors to identify usability issues and refine interface layouts for clearer navigation and interaction.",
      "Applied responsive design principles to adapt web interfaces seamlessly across desktop and mobile screen sizes.",
    ],
  },
  {
    title: "B.Tech in Computer Engineering",
    company_name: "Bhagwant Institute of Technology, Barshi",
    icon: bit,
    iconBg: "#0f2b48",
    date: "2023 – 2027 (Expected)",
    category: "Education",
    points: [
      "Pursuing Bachelor of Technology in Computer Engineering with strong academic foundation (CGPA: 7.33/10).",
      "Specializing in Software Development, Database Management Systems (DBMS), Data Structures, and Web Technologies.",
      "Developed comprehensive practical projects including AI Interview Coach, E-Commerce platform, and Smart Parking Slot Allocation System.",
      "Seeking a Graduate Trainee opportunity to apply technical and problem-solving skills to real-world engineering solutions.",
    ],
  },
];

const certifications = [
  {
    title: "IBM AI Fundamentals",
    issuer: "IBM",
    category: "Artificial Intelligence",
    date: "Certified",
    image: ibm,
    description:
      "Core foundation in AI concepts, machine learning workflows, natural language processing, computer vision, and ethical AI deployment.",
  },
  {
    title: "MERN Stack Web Development",
    issuer: "Full Stack Certification",
    category: "Web Development",
    date: "Certified",
    image: mern,
    description:
      "Mastery of MongoDB, Express.js, React.js, and Node.js for creating robust, scalable, and responsive full-stack applications.",
  },
  {
    title: "UI/UX Internship Certificate",
    issuer: "Satyra IT LLP",
    category: "UI/UX & Product Design",
    date: "Aug 2026",
    image: uiux_cert,
    description:
      "Professional internship certification in user experience design, wireframing, high-fidelity Figma prototyping, and usability testing.",
  },
];

const projects = [
  {
    name: "AI Interview Coach",
    description:
      "An AI-powered interview preparation platform using Python, HTML5, CSS3, and JavaScript for structured interview practice. Implemented an interactive interview workflow with audio interactions and responsive design across all devices.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html5_css3",
        color: "pink-text-gradient",
      },
      {
        name: "ai_interview",
        color: "blue-text-gradient",
      },
    ],
    image: ai_interview,
    source_code_link: "https://github.com/farhandev-20/InterviewAI",
    live_demo_link: "https://interviewai-ulkr.onrender.com",
  },
  {
    name: "E-Commerce Website",
    description:
      "A responsive e-commerce web application built with HTML5, CSS3, and JavaScript. Features dynamic product listings, category-based filtering, shopping cart workflows, and modular front-end components optimized for desktop and mobile.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html5_css3",
        color: "green-text-gradient",
      },
      {
        name: "e_commerce",
        color: "pink-text-gradient",
      },
      {
        name: "responsive_ui",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/farhandev-20",
    live_demo_link: null,
  },
  {
    name: "Smart Parking Slot Allocation System",
    description:
      "A MySQL and DBMS-based parking management system handling vehicle registration, dynamic slot allocation, and real-time availability tracking with normalized database tables and automated record handling.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "dbms",
        color: "green-text-gradient",
      },
      {
        name: "database_design",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
    ],
    image: smart_parking,
    source_code_link: "https://github.com/farhandev-20",
    live_demo_link: null,
  },
];

export { services, technologies, technicalSkills, experiences, certifications, projects };
