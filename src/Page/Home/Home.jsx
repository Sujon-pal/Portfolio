import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
