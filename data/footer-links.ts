import { title } from "process";
import { NAVIGATION } from "./navigation";

const footerLinks = [
  {
    title: "Stay updated",
    links: [
      { title: "Terms", href: "terms" },
      { title: "Privacy Policy", href: "privacy-policy" },
    ],
  },
  {
    title: "Site Map",
    links: [{title: "Home", href: "/"}, {title: "About Us", href: "/about"} ,...NAVIGATION, ],
  },
  {
    title: "Our projects",
    links: [{ title: "Tailverse", href: "https://tailverse.tech/" }],
  },
  {
    title: "Tools",
    links: [
      {
        title: "Free QR Genrator Online",
        href: "/tools/free-qr-generator-online",
      },
      {
        title: "Tailwind Gradient Generator",
        href: "/tailwind-gradient-generator",
      },
    ],
  },
  {
    title: "Emmanuel H.",
    links: [
      { title: "GitHub", href: "https://github.com/emmanuelh-dev" },
      { title: "LinkedIn", href: "https://www.linkedin.com/in/emmanuelhdev/" },
    ],
  },
  {
    title: "Juan Pablo",
    links: [
      { title: "GitHub", href: "https://github.com/juanpablohurtadonuvan" },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/juanpablohurtado/",
      },
    ],
  },
  {
    title: "Octavio Guerrero",
    links: [
      { title: "GitHub", href: "https://github.com/octav20" },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/octavio-guerrero-12ba6b205/",
      },
    ],
  },
];

export default footerLinks;
