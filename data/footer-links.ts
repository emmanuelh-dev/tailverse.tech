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
    links: [...NAVIGATION],
  },
  {
    title: "Our projects",
    links: [{ title: "Tailverse", href: "https://tailverse.tech/" }],
  },
  {
    title: "Tools",
    links: [
      { title: "Free QR Genrator Online", href: "/tools/free-qr-generator-online" },
      { title: "Tailwind Gradient Generator", href: "/tailwind-gradient-generator" }
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
      { title: "LinkedIn", href: "https://www.linkedin.com/in/juanpablohurtado/" },
    ],
  },
  {
    title: "Gustavo Yasser",
    links: [
      { title: "GitHub", href: "https://github.com/YasserCR" },
      { title: "LinkedIn", href: "https://www.linkedin.com/in/gustavo-yasser-camarillo-rosas-3b1a95208" },
    ],
  },
];

export default footerLinks;
