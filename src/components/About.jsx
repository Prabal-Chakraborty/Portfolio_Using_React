import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
I’m a Frontend Developer at TCS with 1+ years of experience in building scalable and interactive web applications. Skilled in Angular (8 & 19), TypeScript, Tailwind, PrimeFlex, CesiumJS, OpenLayers Maps, eCharts, GeoServer, and Godot Engine, with hands-on exposure to map-based solutions and 3D visualization.        </p>

        <br />

        <p className="text-xl">
Passionate about creating user-centric designs, data-driven dashboards, and high-performance applications. Always eager to learn, collaborate, and explore new opportunities in the frontend and visualization space        </p>
      </div>
    </div>
  );
};

export default About;

