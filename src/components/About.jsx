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
        Result-oriented Electronics and Communication Engineering student with a strong skill set in Java, DSA, HTML, CSS, and JavaScript. Experienced in frontend development and proficient in frameworks like Tailwind CSS and React.js. Enthusiastic about MERN Stack and committed to staying updated with the latest industry trends. Ready to leverage my programming expertise to deliver efficient and innovative solutions.
        </p>

        <br />

        <p className="text-xl">
        In addition to my technical skills, I am actively involved in extracurricular activities as the Treasurer of the IEEE AEC Student Branch Chapter and a core committee member of the AEC Hardware Club. Ready to leverage my programming expertise and leadership experience to deliver efficient and innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
