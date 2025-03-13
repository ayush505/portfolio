import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const FONT_SIZES = {
  SMALL: 'text-sm',
  MEDIUM: 'text-base',
  LARGE: 'text-lg',
  EXTRA_LARGE: 'text-xl',
};

export const LANGUAGES = {
  ENGLISH: 'en',
  HINDI: 'hi',
  // Add more languages as needed
};

export const DEFAULT_FONT_SIZE = FONT_SIZES.MEDIUM;
export const DEFAULT_LANGUAGE = LANGUAGES.ENGLISH;
export const DEFAULT_THEME = 'dark';

export const HERO_CONTENT: string = `I am a passionate Software Engineer with over 6 years of expertise in crafting advanced user interfaces. Proficient in responsive UI design, I have a strong foundation in frontend frameworks and technologies. My goal is to leverage my skills in creating seamless user experiences and drive innovation in web development.`;

export const ABOUT_TEXT: string = `I am a dedicated Software Engineer with a focus on frontend development. With over 6 years of professional experience, I have honed my skills in creating advanced, responsive user interfaces. My expertise spans across various frontend frameworks and technologies, allowing me to craft seamless user experiences. I am particularly skilled in microfront-end architecture, performance optimization, and full-stack development. My journey in software engineering is driven by a passion for innovation and a commitment to delivering high-quality solutions that enhance user interaction and drive business growth.`;

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    year: "June 2023 - Present",
    role: "Software Engineer I",
    company: "BIZONGO, Bangalore",
    description: `Led implementation of microfront-end architecture, improved app performance, and spearheaded Flutter-based mobile app development. Implemented Google OAuth, reCaptcha and user login experience`,
    technologies: ["Javascript", "React", "Redux", "HTML", "CSS", "Antd", "Webpack5", "Microfrontend", "AWS", "Flutter"],
  },
  {
    year: "June 2022 - June 2023",
    role: "SDE Intern",
    company: "BIZONGO, Bangalore",
    description: `Worked on catalog project to develop multiple features in the frontend application. Also developed library for generic react component using bit.cloud and fixed VAPT and compliances issues in Frontend and backend services.`,
    technologies: ["Javascript", "React", "Redux", "Antd", "Bit", "Java", "SpringBoot"],
  },
  {
    year: "January 2022 - February 2022",
    role: "Technical Intern",
    company: "Niti Aayog",
    description: `Worked on the frontend components to improve their interactivity and responsiveness on various screens.CRUD operations were carried out on databases to display the list of amendments.`,
    technologies: ["Javascript", "Bootstrap","HTML","CSS","MYSQL"],
  },
 
];

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "AD GENERATIVE TOOL",
    image: project1,
    description:
      "Developed an AI-powered tool for generating ad campaigns and logo designs, reducing ad creation time by 70% and increasing campaign effectiveness by 40%.",
    technologies: ["Canvas", "React", "OpenAI", "DALL·E"],
  },
  {
    title: "NEXT BIZONGO PLATFORM",
    image: project2,
    description:
      "Architected and implemented the core structure for a new e-commerce platform, utilizing microfront-end architecture to improve scalability and reduce time-to-market by 50%.",
    technologies: ["React", "Webpack5", "Microfrontend", "AWS"],
  },
  {
    title: "SYMPHONY RETAIL AI SOLUTIONS",
    image: project3,
    description:
      "Designed and developed end-to-end solutions using Vue.js and Spring, improving system efficiency by 35%.",
    technologies: ["Vue.js", "Spring", "Oracle", "Azure"],
  },
  {
    title: "iPromoteU Web Applications",
    image: project4,
    description:
      "Designed responsive web applications using React and SASS, improving cross-platform compatibility by 60%.",
    technologies: ["React", "Redux", "SASS", "RESTful APIs"],
  },
];

interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

export const CONTACT: Contact = {
  address: "Bangalore, India",
  phoneNo: "+91-7080742796",
  email: "ayush.katiyar0109@gmail.com",
};

// export const ashis =  "jena";