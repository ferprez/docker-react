import React from "react";
const HeroInformation = () => {
  return (
    <div className="App-Hero flex justify-center items-end shadow-lg">
      <div className="App-Info-Container">
        <div className="App-Info-Image" />
        <div className="App-Info-description flex flex-col justify-center items-center">
          <div className="text-left">
            <h2 className="text-3xl">Fernando Pérez</h2>
            <p className="text-xl font-medium">Sofware Developer</p>
            <div className="mt-4">
              <h4 className="font-medium">Phone:</h4>
              <p>+(595)981-777-232</p>
              <h4 className="font-medium">Email:</h4>
              <p>ferprez17@gmail.com</p>
              <h4 className="font-medium">Address:</h4>
              <p>Saturio Rios 603 esq Marcos Riera</p>
              <h4 className="font-medium">Date of Birth:</h4>
              <p>January, 17th, 1992</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInformation;
