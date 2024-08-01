import cr from "../assets/projects/cr.png";
import jp from "../assets/projects/jp.png";
import mng from "../assets/projects/mng.png";
import ww from "../assets/projects/ww.png";
import lb from "../assets/projects/lb.png"
import modelling from "../assets/hobbies/modelling.jpg";
import travelling from '../assets/hobbies/travelling.jpg';
import podcasts from '../assets/hobbies/podcasts.jpg';
import partying from '../assets/hobbies/partying.jpg';
import coding from '../assets/hobbies/coding.jpg';
import blogging from '../assets/hobbies/blogging.jpg';
import serving from '../assets/hobbies/serving.jpg';
import festing from '../assets/hobbies/festing.jpg';

export const HERO_CONTENT = `As a passionate Web Developer with a strong foundation in React.js, Node.js, and various other technologies, my objective is to leverage my skills and experience to build innovative and user-friendly web applications. With a proven track record in developing dynamic platforms, such as an anonymous confession platform and a Minesweeper-inspired game, I aim to contribute to impactful projects that push the boundaries of technology and enhance user experiences. I am eager to apply my knowledge in UI/UX design, game development, and backend integration to drive success in challenging development roles.`;
export const ABOUT_TEXT = `I am a dedicated Web Developer with a robust background in both frontend and backend technologies. Holding a Bachelor of Technology in Computer Science and Engineering, I have cultivated a deep understanding of web development principles and practices. My expertise spans across various technologies including React.js, Node.js, and MongoDB, which I have applied in building dynamic and responsive web applications. I am passionate about leveraging my skills in UI/UX design, game development, and backend integration to develop innovative solutions and drive the success of web development projects. My commitment to continuous learning and adaptability ensures that I stay current with industry trends and best practices.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - July 2023",
    role: "Trainee Front End Developer",
    company: "360Vity INFOSOURCE",
    description: `Gained hands-on experience under expert guidance, learning advanced technologies and best practices. Contributed to a project improving backend systems and user interfaces, integrating advanced technologies to enhance performance.`,
    technologies: ["Javascript", "React.js"],
  },
  {
    year: "May 2024 - July 2024",
    role: "Full Stack Trainee",
    company: "University Summer Training",
    description: `Received comprehensive training in the full MERN stack during summer breaks in college. The instruction was provided by experts from Newton School and Geekster, covering in-depth development of full-stack web applications using MongoDB, Express.js, React, and Node.js. This hands-on experience facilitated a strong understanding of modern web technologies and development practices.`,
    technologies: ["Javascript", "React.js + Vite", "Node.js", "Express", "MongoDB"],
  }
];

export const EDUCATION = [
  {
    year: "2021 - 2025",
    type: "B.Tech - CSE",
    institution: "Lovely Professional University | Phagwara, Punjab",
    description: "8.14", 
  },
  {
    year: "2020 - 2021",
    type: "Higher Secondary Education",
    institution: "St. Francis's Senior Secondary School | Hathras, Uttar Pradesh",
    description: "88.06", 
  },
  {
    year: "2018 - 2019",
    type: "Secondary Education",
    institution: "St. Francis's Senior Secondary School | Hathras, Uttar Pradesh",
    description: "96", 
  },
];

export const PROJECTS = [
  {
    title: "The Confession Room",
    image: cr,
    liveUrl: "https://confession-room-prabhu-ji.onrender.com/",
    description: "An intriguing platform where users can post anonymously. This unique project allows for personal expression without revealing identities, creating a space for unfiltered thoughts and experiences.",
    scope: "Future enhancements could include features like comments, likes, and sharing to foster community support and interaction, helping individuals find solace and connection.",
    technologies: ["HTML", "CSS", "EJS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Internship Job Portal",
    image: jp,
    liveUrl: "https://loquacious-narwhal-4c8ac7.netlify.app",
    description: "A dynamic job portal where the latest internships are posted from an admin database. Users can log in and apply for jobs, with JWT authentication and hashed passwords ensuring security.",
    scope: "This project could evolve into a full-fledged job portal with real-time job updates, integrating with company websites for seamless application processes.",
    technologies: ["React", "MUI", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Mines & Gems",
    image: mng,
    liveUrl: "https://mines-gems-prabhu-ji.onrender.com",
    description: "A thrilling game where users place bets and play for gems. If a mine appears, the game ends, and all bets are lost. It's a high-stakes, risk-and-reward experience.",
    scope: "Future development could include integrating a real payment gateway for multiplayer betting, turning it into a revenue-generating venture with enhanced gameplay features.",
    technologies: ["React", "Tailwind", 'Game development', 'UI/UX design'],
  },
  {
    title: "Weather Wave",
    image: ww,
    liveUrl: "https://weather-pro-one.vercel.app/",
    description: "An intuitive weather app that fetches real-time weather data using Axios and a weather API, featuring a dynamic map for visualizing conditions across different locations.",
    scope: "Potential upgrades include extending the app to provide weather forecasts for multiple days and sending alerts or suggestions to registered users, enhancing their weather awareness and preparedness.",
    technologies: ['JS', 'Weather API', 'UI/UX design'],
  },
  {
    title: "Mini Library",
    image: lb,
    liveUrl: "https://mini-library-practical-project-prabhu-ji.onrender.com/",
    description: "A simple yet functional mini library application where users can add, delete, or issue books. It performs essential CRUD operations using React and local storage.",
    scope: "The app could be expanded into a comprehensive library management system with separate admin and user panels, offering a more robust and feature-rich experience.",
    technologies: ['React.js', 'CRUD operations', 'UI/UX design'],
  },
];


export const HOBBIES = [
  { image: modelling, title: 'Modelling' },
  { image: travelling, title: 'Travelling' },
  { image: podcasts, title: 'Podcasts' },
  { image: partying, title: 'Partying' },
  { image: coding, title: 'Coding' },
  { image: blogging, title: 'Blogging' },
  { image: serving, title: 'Serving' },
  { image: festing, title: 'Festing' },
];

export const CONTACT = {
  address: "Mathura, Uttar Pradesh, IN ",
  phoneNo: "+91 6395902032 ",
  email: "prabhuji2910@gmail.com",
};
