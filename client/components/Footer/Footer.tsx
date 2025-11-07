// import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

// export const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 dark:bg-slate-950 text-white transition-colors duration-300">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//           {/* Brand Section */}
//           <div className="col-span-1">
//             <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
//               Portfolio
//             </h3>
//             <p className="text-gray-400 text-sm">
//               Creating beautiful and functional web experiences.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-white mb-4">Navigation</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>
//                 <a href="#home" className="hover:text-blue-400 transition-colors">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="hover:text-blue-400 transition-colors">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#projects" className="hover:text-blue-400 transition-colors">
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:text-blue-400 transition-colors">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h4 className="font-semibold text-white mb-4">Resources</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-blue-400 transition-colors"
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-blue-400 transition-colors"
//                 >
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-blue-400 transition-colors"
//                 >
//                   Resume
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-blue-400 transition-colors"
//                 >
//                   Services
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Connect */}
//           {/* <div>
//             <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
//             <div className="flex gap-4">
//               <a
//                 href="https://github.com/gintasabilr"
//                 className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//                 aria-label="GitHub"
//               >
//                 <Github size={20} />
//               </a>
//               <a
//                 href="www.linkedin.com/in/ginta-sabil-ramadhani"
//                 className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="https://www.instagram.com/gntasabilrr?utm_source=qr&igsh=MWhoMXB1NGxyZzBjNw=="
//                 className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={20} />
//               </a>
//               <a
//                 href="d"
//                 className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//                 aria-label="Email"
//               >
//                 <Mail size={20} />
//               </a>
//             </div>
//           </div> */}
//           import { Github, Linkedin, Instagram, Mail } from "lucide-react";

// export const ConnectSection = () => {
//   return (
//     <div>
//       <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
//       <div className="flex gap-4">
//         {/* GitHub */}
//         <a
//           href="https://github.com/gintasabilr"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//           aria-label="GitHub"
//         >
//           <Github size={20} />
//         </a>

//         {/* LinkedIn */}
//         <a
//           href="https://www.linkedin.com/in/ginta-sabil-ramadhani"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//           aria-label="LinkedIn"
//         >
//           <Linkedin size={20} />
//         </a>

//         {/* Instagram */}
//         <a
//           href="https://www.instagram.com/gntasabilrr?utm_source=qr&igsh=MWhoMXB1NGxyZzBjNw=="
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//           aria-label="Instagram"
//         >
//           <Instagram size={20} />
//         </a>

//         {/* Email */}
//         <a
//           href="mailto:ginta@example.com"
//           className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
//           aria-label="Email"
//         >
//           <Mail size={20} />
//         </a>
//       </div>
//     </div>
//   );
// };
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 pt-8">
//           {/* Bottom Content */}
//           <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
//             <p>
//               &copy; {currentYear} John Doe. All rights reserved.
//             </p>
//             <div className="flex gap-6 mt-4 md:mt-0">
//               <a
//                 href="#"
//                 className="hover:text-blue-400 transition-colors"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-blue-400 transition-colors"
//               >
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              Creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Resume</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Connect With Me */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/gintasabilr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ginta-sabil-ramadhani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/gntasabilrr?utm_source=qr&igsh=MWhoMXB1NGxyZzBjNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:ginta@example.com"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Ginta Sabil Ramadhani. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};