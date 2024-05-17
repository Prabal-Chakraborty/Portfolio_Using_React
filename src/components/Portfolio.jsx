import React, { useState } from "react";
import IICCCS from "../assets/portfolio/IICCCS.png"
import SmoothlyPay from "../assets/portfolio/SmoothlyPay.png"
import DisCord from "../assets/portfolio/DisCord.png"
import DevD from "../assets/portfolio/DevD.png"
import TopCoursesByPrabal from "../assets/portfolio/TopCourcesByPrabal.png"
import PlanWithPrabal from "../assets/portfolio/PlanWithPrabal.png"
import { Navigate } from "react-router-dom";

const Portfolio = () => {

  const [goTo, setGoTo] = useState(false);
  const portfolios = [
    {
      id: 1,
      src: IICCCS,
      link:"https://iicccs-aec-ece-home-page.vercel.app/",
      codeLink : "https://github.com/Prabal-Chakraborty"
      
    },
    {
      id: 2,
      src: SmoothlyPay,
      link:"https://main--poetic-florentine-d8cce8.netlify.app/",
      codeLink : "https://github.com/Prabal-Chakraborty/SmoothlyPay"
    },
    {
      id: 3,
      src: DisCord,
      link:"https://earnest-bombolone-2c26ad.netlify.app/",
      codeLink : "https://github.com/Prabal-Chakraborty/Discord-Clone"
    },
    {
      id: 4,
      src: DevD,
      link:"https://prabal-chakraborty.github.io/Dev-Detective/",
      codeLink : "https://github.com/Prabal-Chakraborty/Dev-Detective"
    },
    {
      id: 5,
      src: TopCoursesByPrabal,
      link:"https://top-cources-prabal.netlify.app/",
      codeLink : "https://github.com/Prabal-Chakraborty/Top-Courses-By-Prabal"
    },
    {
      id: 6,
      src: PlanWithPrabal,
      link:"https://plan-with-prabal.vercel.app/",
      codeLink : "https://github.com/Prabal-Chakraborty/Plan-With-Prabal"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link, "_blank")}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(codeLink, "_blank")}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
