import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1000",
    tags: ["React", "Firebase", "Tailwind"],
    title: "ShopEase — E-Commerce App",
    desc: "A full-featured online shopping platform with cart, authentication, and payment integration.",
    live: "https://your-live-link.com",
    code: "https://github.com/your-repo",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000",
    tags: ["Node.js", "MongoDB", "Express"],
    title: "TaskFlow — Project Manager",
    desc: "A collaborative task management tool with real-time updates, drag & drop boards, and team roles.",
    live: "https://your-live-link.com",
    code: "https://github.com/your-repo",
  },
  {
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1000",
    tags: ["React", "REST API", "CSS"],
    title: "CineVault — Movie App",
    desc: "Browse and search movies using TMDB API. Features watchlist, ratings, and genre filters.",
    live: "https://your-live-link.com",
    code: "https://github.com/your-repo",
  },
];

const Project = () => {
  return (
    <section className="mt-7 ">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            My Latest{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            A curated collection of projects highlighting my focus on modern UI
            design, responsiveness, and smooth user experience in web
            development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Glow */}
              {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 blur-2xl"></div>
              </div> */}
              {/* Project Image */}
              <div className="overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  {/* Live Demo */}
                  <button
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-white py-2.5 rounded-lg font-medium bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <FiExternalLink className="text-lg" />
                    Live Demo
                  </button>

                  {/* GitHub */}
                  <button
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 "
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
