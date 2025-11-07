import { useEffect, useState } from "react";

export const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js","MySQL", "Laravel"] },
    { category: "Tools", items: ["Git","Figma"] },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* About Description */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-fade-in scroll-fade-in-delay-1" : "opacity-0"
            }`}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
             I'm Ginta Sabil Ramadhani, a university student who also works as a Full Stack Developer and UI/UX Enthusiast. I have a deep passion for building responsive, visually appealing web applications that captivate users. </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
             My journey began with a curiosity about how technology works, which gradually evolved into a career focused on creating exceptional digital experiences. I'm highly enthusiastic about clean code, modern design, and crafting solutions for complex problems. </p>
            {/* <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm particularly interested in building scalable applications, optimizing performance, and creating intuitive user interfaces that solve real-world problems.
            </p> */}

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</p>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</p>
                <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
            </div> */}
          </div>

          {/* Skills */}
          <div className={`${isVisible ? "animate-fade-in scroll-fade-in-delay-2" : "opacity-0"}`}>
            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div
          className={`${
            isVisible ? "animate-fade-in scroll-fade-in-delay-3" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Experience</h3>
          <div className="space-y-6">
            {[
              {
                title: "Intern - Programmer",
                company: "PT.Kilang Pertamina RU II DUMAI ",
                period: "2025 - Present",
                description: "Developing an AI-based chatbot integrated with WhatsApp to support internal and external company communication.",
              },
              // {
              //   title: "Full Stack Developer",
              //   company: "Digital Innovations Ltd",
              //   period: "2020 - 2022",
              //   description: "Built and maintained multiple production applications",
              // },
              // {
              //   title: "Junior Developer",
              //   company: "StartUp Hub",
              //   period: "2018 - 2020",
              //   description: "Developed frontend applications and learned full stack development",
              // },
            ].map((exp, index) => (
              <div
                key={index}
                className="p-6 border-l-4 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
