import Container from "./ui/Container";

import { socialLinks } from "../data/socialLinks";
import { Link } from "react-router-dom";

const linksData = [
  {
    title: "Useful Links",
    links: [
      { title: "Academic Calendar", url: "/academic-calendar" },
      { title: "Aicte india", url: "https://www.aicte-india.org",external:true },
      { title: "rtu kota (university)", url: "https://www.rtu.ac.in/index/", external:true },
      { title: "nptel local chapter", url: "https://nptel.ac.in/?collegeid=415",external:true },
      { title: "moocs", url: "/moocs" },
    ],
  },
  {
    title: "Student Area",
    links: [
      { title: "newstrack", url: "/newstrack" },
      { title: "hostel", url: "/hostel" },
      { title: "library", url: "/library" },
      { title: "ncc", url: "/ncc" },
      { title: "club", url: "/club" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black w-full text-white py-4">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-8 py-10 ">
          {linksData.map((linksData, idx) => (
            <FooterLinkGroup key={idx} linkData={linksData} />
          ))}
          <div className="space-y-7">
            <h3 className="font-bold text-xl">Quick contact</h3>
            <ul className="w-full space-y-4 text-sm">
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-location-dot text-lg text-gray-400" />
                <span>Airport Road, Dabok, Udaipur- 313022, Rajasthan</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-gray-400" />
                <span>+91-294-26578 00-04</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-gray-400" />
                <span>0294 2657805</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-envelope text-gray-400" />
                <span>info@gits.ac.in</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:flex items-center justify-between w-full">
          <p className="lg:text-sm">
            Copyright © 2024. GITS. All Rights Reserved
          </p>
          <p className="lg:text-xs">Visitors: 4013800</p>
          <div className="flex items-center gap-3 pt-4 lg:pt-0 lg:pr-5">
            {socialLinks.map((link) => (
              <SocialLinks key={link.href} {...link} />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

const FooterLinkGroup = ({ linkData }) => {
  return (
    <div className="space-y-7 uppercase">
      <h3 className="font-bold text-xl">{linkData.title}</h3>
      <ul className="w-full space-y-4 text-sm">
        {linkData.links.map((link) => (
          <li
            key={link}
            className="border-b border-gray-500 pb-1 w-full flex items-center gap-3 cursor-pointer hover:text-primary"
          >
            <i className="fa-solid fa-chevron-right text-primary text-xs" />
            {
              link.external ? <a href={link.url} target="_blank">{link.title}</a>:<Link to={link.url}>{link.title}</Link>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialLinks = ({ href, color, icon }) => {
  return (
    <li className="list-none ">
      <a
        href={href}
        target="_blank"
        className={`size-9 rounded-full bg-black ${color} group transition-all duration-300 flex items-center justify-center shadow-md shadow-white/20`}
      >
        <i
          className={`cursor-pointer fa-brands ${icon} text-white group-hover:rotate-[360deg] transition-all duration-300`}
        />
      </a>
    </li>
  );
};
