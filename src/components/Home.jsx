import React from "react";
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a fresher who loves working on web applications using technologies like React, Tailwind, and Next.js. I recently graduated from Asansol Engineering College with a degree in Electronics and Communication Engineering, achieving an 8.79 CGPA. My skill set includes React, Tailwind, MySQL, Data Structures and Algorithms (DSA), and Core Java.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-black font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-200 to-yellow-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
