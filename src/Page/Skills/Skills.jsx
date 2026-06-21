
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML & CSS",
    desc: "Strong foundation in semantic HTML and modern responsive CSS design.",
  },
  
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    desc: "Building modern, responsive, and utility-first UI with Tailwind CSS.",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    desc: "Core programming logic, DOM manipulation, and interactive web features.",
  },
  {
    icon: <FaReact />,
    title: "React.js",
    desc: "Component-based UI development with hooks and modern React ecosystem.",
  },
];

const Skills = () => {
  return (
    <section className="md:mt-7 mt-4 ">
      <div className="w-11/12  mx-auto ">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Technical <span className="text-blue-600">Skills</span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-3"></div>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            A collection of technologies I use to build modern, responsive, and interactive web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6
              hover:border-blue-600 hover:shadow-xl hover:-translate-y-2
              transition-all duration-300 hover:bg-gray-200"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4
              group-hover:bg-blue-600 group-hover:text-white transition">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

