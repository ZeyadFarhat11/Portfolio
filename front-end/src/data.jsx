import django from "./assets/img/skills/django.svg";
import postgres from "./assets/img/skills/postgres.svg";
import postman from "./assets/img/skills/postman.svg";
import vsc from "./assets/img/skills/vsc.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faPython,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import chatify from "./assets/img/projects/chatify.png";
import bitsOfCode from "./assets/img/projects/bits-of-code.png";

export default {
  social: {
    github: "https://google.com",
    twitter: "https://google.com",
    linkedIn: "https://google.com",
    instagram: "https://google.com",
  },
  copyrightMessages: ["Developed by Zeyad Farhat", "Copyright © 2023 MO"],
  repoUrl: "https://google.com",
};

export const skills = [
  {
    icon: <FontAwesomeIcon icon={faPython} />,
    title: "python",
  },
  {
    icon: django,
    title: "django",
    type: "img",
    style: { height: "50px" },
  },
  {
    icon: postgres,
    title: "postgres",
    type: "img",
    style: { height: "70px" },
  },
  {
    icon: <FontAwesomeIcon icon={faGitAlt} />,
    title: "git",
  },
  {
    icon: <FontAwesomeIcon icon={faHtml5} />,
    title: "html5",
  },
  {
    icon: <FontAwesomeIcon icon={faCss3} />,
    title: "css3",
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
