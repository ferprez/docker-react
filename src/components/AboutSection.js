import React from "react";

const AboutSection = () => {
  return (
    <div className="App-About bg-gray-200 flex flex-col items-center">
      <div className="App-Social-container flex justify-center items-center">
        <i className="fab text-white mx-4 text-xl  fa-linkedin-in"></i>
        <i className="fab text-white mx-4 text-xl  fa-facebook-square"></i>
        <i className="fab text-white mx-4 text-xl  fa-twitter"></i>
        <i className="fab text-white mx-4 text-xl  fa-instagram"></i>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl mb-4">Hello! I'm Fer</h1>
        <p className="max-w-2xl">
          I'm Paraguayan, engineering student, 27 years old, lover of the
          Olimpia Club of Paraguay. I consider myself a person of good taste,
          self-taught, proactive, innovative and with leadership. Relatively new
          in the software development market, working for 3 years. Always
          studying to improve the quality of my work at the code level to be
          updated with the latest trends in the market in terms of technologies
          and testing different tools that can improve the final development
          that I can offer my clients. Able to take on challenges, always
          willing to learn new things and grow both professionally and
          personally.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
