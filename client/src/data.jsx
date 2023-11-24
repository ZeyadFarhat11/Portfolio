import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNode,
  FaReact,
  FaSass,
  FaWindows,
} from "react-icons/fa";
import comfysloth from "./assets/img/projects/comfysloth.png";
import express from "./assets/img/skills/express.svg";
import mongodb from "./assets/img/skills/mongodb.svg";
import postman from "./assets/img/skills/postman.svg";
import vsc from "./assets/img/skills/vsc.svg";

export default {
  social: {
    github: "https://github.com/ZeyadFarhat11",
    facebook: "https://www.facebook.com/zeyad113",
    linkedIn: "https://google.com",
  },
  copyrightMessages: [
    "Developed by Zeyad Farhat",
    "Copyright © 2023 Zeyad Farhat",
  ],
  repoUrl: "https://github.com/ZeyadFarhat11/portfolio",
};

export const skills = [
  {
    icon: <FaHtml5 />,
    title: "html5",
  },
  {
    icon: <FaCss3 />,
    title: "css3",
  },
  {
    icon: <FaSass />,
    title: "sass",
  },
  {
    icon: <FaJsSquare />,
    title: "javascript",
  },
  {
    icon: <FaReact />,
    title: "react",
  },
  {
    icon: <FaNode />,
    title: "nodejs",
  },
  {
    icon: mongodb,
    title: "mongodb",
    type: "img",
    style: { height: "70px" },
  },
  {
    icon: express,
    title: "express",
    type: "img",
    style: { height: "50px" },
  },
  {
    icon: <FaGitAlt />,
    title: "git",
  },
];

export const tools = [
  {
    icon: <FaWindows />,
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
    icon: <FaFigma />,
    title: "figma",
  },
  {
    icon: <FaGithub />,
    title: "github",
  },
];

export const projects = [
  {
    image: comfysloth,
    title: "Comfysloth",
    description:
      "An online store that sells home furniture, through which you can buy an office, bedrooms, children’s rooms, etc. With a system to log in and save products in the cart.",
    technologies: ["react", "firebase", "sass"],
    demo: "/comfysloth-shop",
    github: "https://github.com/ZeyadFarhat11/react-ecommerce-shop",
  },
];
