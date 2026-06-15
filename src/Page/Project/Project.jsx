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
    <section className="py-20 ">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            My <span className="text-amber-700">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-amber-700 rounded-full mx-auto mt-4"></div>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Here are some of my featured projects showcasing my skills in
            frontend and full-stack web development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-amber-700 hover:bg-amber-800 text-white py-2.5 rounded-lg font-medium transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-amber-700 text-amber-700 hover:bg-amber-50 py-2.5 rounded-lg font-medium transition"
                  >
                    GitHub
                  </a>
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
