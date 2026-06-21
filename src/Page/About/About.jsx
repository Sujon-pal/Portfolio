const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <dialog id="about_modal" className="modal">
      <div className="modal-box max-w-5xl bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl relative">

        {/* Close Button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle absolute right-4 top-4">
            ✕
          </button>
        </form>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              About Me
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Hi, I'm <span className="font-semibold">Sujon Pal</span>, a
              passionate Frontend Developer focused on building responsive,
              user-friendly, and modern web applications. I specialize in
              React.js, Tailwind CSS, JavaScript, and Firebase. Currently,
              I'm expanding my skills in the MERN Stack ecosystem to become a
              full-stack developer.
            </p>

            {/* Skills */}
            <h3 className="text-xl text-amber-50 font-bold mb-4">Skills</h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-blue-100 text-blue-700
                  dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* MERN Stack */}
            <h3 className="text-xl font-bold mt-8 mb-4">
              MERN Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold">
                MongoDB
              </span>

              <span className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold">
                Express.js
              </span>

              <span className="px-4 py-2 rounded-lg bg-cyan-100 text-cyan-700 font-semibold">
                React.js
              </span>

              <span className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold">
                Node.js
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-blue-600">15+</h4>
                <p className="text-sm text-gray-500">Projects</p>
              </div>

              <div className="text-center">
                <h4 className="text-3xl font-bold text-blue-600">1+</h4>
                <p className="text-sm text-gray-500">Years Learning</p>
              </div>

              <div className="text-center">
                <h4 className="text-3xl font-bold text-blue-600">100%</h4>
                <p className="text-sm text-gray-500">Passion</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4661/4661318.png"
              alt="Developer"
              className="w-full max-w-sm drop-shadow-2xl"
            />
          </div>

        </div>
      </div>

      {/* Click Outside Close */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default About;