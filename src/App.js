import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroInformation from "./components/HeroInformation";
import AboutSection from "./components/AboutSection";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";

const App = props => {
  return (
    <div className="App">
      <Header />
      <HeroInformation />
      <AboutSection />
      <TimeLine headerTitle="Experience" />
      <TimeLine headerTitle="Education" />
      <Footer />
    </div>
  );
};

export default App;
