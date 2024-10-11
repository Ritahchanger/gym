import "./Footer.css";

import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import LoveIcon from "../LoveIcon/LoveIcon";

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      title: "Quick Links",
      links: [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Classes", href: "#" },
        { name: "Membership", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
    {
      id: 2,
      title: "Programs",
      links: [
        { name: "Strength Training", href: "#" },
        { name: "Cardio Workouts", href: "#" },
        { name: "Yoga & Flexibility", href: "#" },
        { name: "Personal Training", href: "#" },
        { name: "Nutrition Plans", href: "#" },
      ],
    },
    {
      id: 3,
      title: "Support",
      links: [
        { name: "FAQs", href: "#" },
        { name: "Customer Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
    {
      id: 4,
      title: "Social",
      links: [
        { name: "Facebook", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "LinkedIn", href: "#" },
      ],
    },
  ];

  return (
    <div className="footer text-black bg-white mt-[4rem] pt-[2rem]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {footerLinks.map((section) => (
            <div
              key={section.id}
              className=" flex-col items-center justify-center "
            >
              <p className="sub-title font-bold mb-2 text-center">
                {section.title}
              </p>
              <ul className=" flex-col items-center justify-center">
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-1  bg-slate-700 text-center">
                    <a
                      href={link.href}
                      className="text-white hover:text-orange-600 block h-full w-full p-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      
        <div className="flex justify-between items-center mt-[2rem]">
          <div>
            <p>All rights preserved</p>
          </div>
          <div>
            <SocialMediaIcons />
          </div>
          <div className="text-white">
            <LoveIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
