import mongodb from "./assets/img/skills/mongodb.svg";
import postgres from "./assets/img/skills/postgres.svg";
import postman from "./assets/img/skills/postman.svg";
import vsc from "./assets/img/skills/vsc.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faFigma,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faNodeJs,
  faPython,
  faReact,
  faSass,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import chatify from "./assets/img/projects/chatify.png";
import bitsOfCode from "./assets/img/projects/bits-of-code.png";
import project1 from "./assets/img/projects/chatify.png";

export default {
  social: {
    github: "https://github.com/mahmoud-oraby",
    twitter: "https://google.com",
    linkedIn: "https://google.com",
    instagram: "https://google.com",
  },
  copyrightMessages: [
    "Developed by Zeyad Farhat",
    "Copyright © 2023 Zeyad Farhat",
  ],
  repoUrl: "https://google.com",
};

export const skills = [
  {
    icon: <FontAwesomeIcon icon={faHtml5} />,
    title: "html5",
  },
  {
    icon: <FontAwesomeIcon icon={faCss3} />,
    title: "css3",
  },
  {
    icon: <FontAwesomeIcon icon={faSass} />,
    title: "sass",
  },
  {
    icon: <FontAwesomeIcon icon={faJsSquare} />,
    title: "javascript",
  },
  {
    icon: <FontAwesomeIcon icon={faReact} />,
    title: "react",
  },
  {
    icon: <FontAwesomeIcon icon={faNode} />,
    title: "nodejs",
  },
  {
    icon: mongodb,
    title: "mongodb",
    type: "img",
    style: { height: "70px" },
  },
  {
    icon: <FontAwesomeIcon icon={faGitAlt} />,
    title: "git",
  },
];

export const tools = [
  {
    icon: <FontAwesomeIcon icon={faWindows} />,
    title: "windows",
  },
  {
    icon: vsc,
    title: "visual studio code",
    type: "img",
    style: { height: "65px" },
  },
  {
    icon: postman,
    title: "postman",
    type: "img",
    style: { height: "65px" },
  },
  {
    icon: <FontAwesomeIcon icon={faFigma} />,
    title: "figma",
  },
];

export const projects = [
  {
    image: chatify,
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
    demo: "https://chatify-49.web.app/",
    github: "https://github.com/soumyajit4419/Chatify",
  },
  {
    image: bitsOfCode,
    title: "Bits-0f-C0de",
    description:
      "My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
    demo: "https://blogs.soumya-jit.tech/",
    github: "https://github.com/soumyajit4419/Bits-0f-C0de",
  },
  {
    image: chatify,
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
    demo: "https://chatify-49.web.app/",
    github: "https://github.com/soumyajit4419/Chatify",
  },
  {
    image: bitsOfCode,
    title: "Bits-0f-C0de",
    description:
      "My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
    demo: "https://blogs.soumya-jit.tech/",
    github: "https://github.com/soumyajit4419/Bits-0f-C0de",
  },
  {
    image: chatify,
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
    demo: "https://chatify-49.web.app/",
    github: "https://github.com/soumyajit4419/Chatify",
  },
  {
    image: bitsOfCode,
    title: "Bits-0f-C0de",
    description:
      "My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
    demo: "https://blogs.soumya-jit.tech/",
    github: "https://github.com/soumyajit4419/Bits-0f-C0de",
  },
];
