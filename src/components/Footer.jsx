import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About",
    link: "#/about",
  },
  {
    title: "Feature",
    link: "#/about",
  },
  {
    title: "Works",
    link: "#/about",
  },
  {
    title: "Carrer",
    link: "#/about",
  },
];

const HelpLinks = [
  {
    title: "Customer Support",
    link: "#/about",
  },
  {
    title: "Delivery Details",
    link: "#/about",
  },
  {
    title: "Terms & Conditions",
    link: "#/about",
  },
  {
    title: "Privacy Policy",
    link: "#/about",
  },
];

const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "#/ebooks",
  },
  {
    title: "How To Blog",
    link: "#/blogs",
  },
  {
    title: "Subscribe TCJ",
    link: "#/about",
  },
];

const Footer = () => {
  return (
    <>
      <div className=" bg-black text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                Digital Agency
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur adipisicing elit consectetur adipisicing elit
                ipsum dolor sit amet consectetur. adipisicing{""}
              </p>
              <br />

              <div className="flex items-center gap-4 mt-6">
                <a href="#">
                  <FaInstagram className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              {/* first col */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Company</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Second col */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Help</h1>
                  <ul className="space-y-3">
                    {HelpLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* third col */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Resources</h1>
                  <ul className="space-y-3">
                    {ResourcesLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
