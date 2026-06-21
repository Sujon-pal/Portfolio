import { FaArrowRight } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import img from "../../assets/WhatsApp Image 2026-04-29 at 11.22.55 PM.jpeg";
import "./Hero.css"

const Hero = () => {
  const handleAboutClick = () => {
    document.getElementById("about_modal").showModal();
  };

  return (
    <div className="min-h-[70vh] md:min-h-screen ">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:py-16 py-10">
        {/* Left - Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-105 md:h-105 rounded-full border-[6px] border-blue-600/25 overflow-hidden shadow-xl">
            <img src={img} alt="Sujon" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hey I'm <span className="text-blue-600">Sujon</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            I'm a{" "}
            <span className="text-blue-600">
              <ReactTyped
                strings={["Frontend Developer", "React Developer"]}
                typeSpeed={70}
                backSpeed={40}
                loop
              />
            </span>
          </h2>
          Portfolio websit
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            quasi commodi quia rerum, iste corporis expedita in excepturi
            nesciunt repellendus quisquam amet provident ad mollitia debitis
            odit voluptatem necessitatibus tempora.
          </p>
          {/* Buttons */}
          <div className="flex justify-center gap-10 md:justify-start">
            <button
              onClick={handleAboutClick}
              className="bg-linear-to-r from-blue-500 to-indigo-700 hover:from-blue-700 hover:to-indigo-700
  text-white font-semibold px-5 py-3 md:px-10 md:py-4  rounded-lg flex items-center gap-2
  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              About Me
              <FaArrowRight />
            </button>

            <button
              className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700
  text-white font-semibold px-5 py-3 md:px-10 md:py-4 rounded-lg
  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
