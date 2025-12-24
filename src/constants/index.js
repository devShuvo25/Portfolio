import { FaGithub, FaLinkedin, FaFacebook, FaReact, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiExpress } from 'react-icons/si';

import projectEcommerce from '../assets/project-ecommerce.png';
import projectGamespace from '../assets/project-gamespace.png';
import projectDailyzone from '../assets/project-dailyzone.png';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { href: 'https://github.com/devShuvo25', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/shuvo-mallik/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/shuvo999a', icon: FaFacebook, label: 'Facebook' },
];

export const CV_LINK = "https://drive.google.com/file/d/1X7cCtPX3eiIQrr1ADd4OWcclwiyykcN0/view?usp=sharing";

export const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Web App',
    description: 'Online Shopping Platform. Features: Browse products, view details, add to cart, and complete secure checkout through a fast, responsive interface.',
    image: projectEcommerce,
    tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: { demo: 'https://my-next-application-jet.vercel.app/', code: 'https://github.com/devShuvo25?tab=repositories' },
  },
  {
    id: 2,
    title: 'GameSpace',
    description: 'Online Game Browsing Platform. Features: Browse, explore, and discover games with a clean, responsive interface, including categories and game details.',
    image: projectGamespace,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: { demo: 'https://game-space-bd.netlify.app/', code: 'https://github.com/devShuvo25/GamuHub' },
  },
  {
    id: 3,
    title: 'DailyZone',
    description: 'News & Daily Content Platform. Features: Browse category-based news and read detailed articles with a clean, responsive interface.',
    image: projectDailyzone,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: { demo: 'https://dailyzone.netlify.app/', code: 'https://github.com/devShuvo25/DailyZen-Client-side' },
  },
];

export const SKILLS = [
  { name: 'JavaScript', level: 'Advanced', icon: FaJs },
  { name: 'React', level: 'Advanced', icon: FaReact },
  { name: 'Next.js', level: 'Intermediate', icon: SiNextdotjs },
  { name: 'Node.js', level: 'Intermediate', icon: FaNodeJs },
  { name: 'Express.js', level: 'Intermediate', icon: SiExpress },
  { name: 'MongoDB', level: 'Intermediate', icon: SiMongodb },
];

export const ABOUT_TEXT = "Aspiring Web Developer with skills in JavaScript, React, Next.js, Node.js, Express.js, and MongoDB, focused on building responsive, scalable, and user-friendly applications. Committed to continuous self-improvement, learning new technologies, and contributing to impactful digital solutions in a growth-oriented team environment.";
