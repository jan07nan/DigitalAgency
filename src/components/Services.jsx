import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "App Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "0",
  },
  {
    name: "Web Development",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "300",
  },
  {
    name: "Graphic Development",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "500",
  },
  {
    name: "Graphic Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <div>
      <div
        className="bg-gray-100 dark:bg-black dark:text-white 
    py-12 sm:grid sm:place-items-center"
      >
        <div className="container">
          {/* header section */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>
          {/* card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
          {/* button section */}
          <div className="text-center mt-4 sm:mt-8">
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="btn-primary "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
