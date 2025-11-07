import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center animate-fade-in">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Ginta Sabil Ramadhani</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-6">
                Full Stack Developer & UI/UX Enthusiast
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-8">
                I build beautiful, responsive web applications that users love. Passionate about clean code, modern design, and solving complex problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
              >
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            {/* <div className="flex gap-6">
              <a
                href="www.linkedin.com/in/ginta-sabil-ramadhani"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/gintasabilr"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/gntasabilrr?utm_source=qr&igsh=MWhoMXB1NGxyZzBjNw=="
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Instagram
              </a>
            </div> */}
            {/* Social Links */}
<div className="flex gap-6">
  <a
    href="https://www.linkedin.com/in/ginta-sabil-ramadhani"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
  >
    LinkedIn
  </a>
  <a
    href="https://github.com/gintasabilr"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
  >
    GitHub
  </a>
  <a
    href="https://www.instagram.com/gntasabilrr?utm_source=qr&igsh=MWhoMXB1NGxyZzBjNw=="
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
  >
    Instagram
  </a>
</div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center animate-fade-in-delayed">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-3xl opacity-30"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQH637G9Ath0SA/profile-displayphoto-shrink_400_400/B56ZccUzxqHoAg-/0/1748526907790?e=1764201600&v=beta&t=L-lY_676cMQA92rMecovbZ0NyRwhd3gNO1HrYc2cM8M"
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce cursor-pointer text-blue-600 dark:text-blue-400"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDelayed {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-delayed {
          animation: fadeInDelayed 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};
