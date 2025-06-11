import { useState } from "react";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Header from "./component/header/header";
import Hero from "./component/Hero/hero";
import Main from "./component/main/main";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    
    <div className="container">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <div className="divider" />

      <section id="home">
        <Hero language={language} />
      </section>
      <div className="divider" />

      <section id="about">
        <About language={language} />
      </section>
      <div className="divider" />

      <section id="projects">
        <Main language={language} />
      </section>
      <div className="divider" />

      <section id="contact">
        <Contact language={language} />
      </section>
    </div>
  );
}

export default App;

