// import { useEffect, useState } from "react";
// import { Send, CheckCircle, AlertCircle } from "lucide-react";

// interface FormStatus {
//   type: "idle" | "loading" | "success" | "error";
//   message: string;
// }

// export const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState<FormStatus>({
//     type: "idle",
//     message: "",
//   });

//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     const section = document.getElementById("contact");
//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus({ type: "loading", message: "Sending message..." });

//     try {
//       // Send to backend endpoint
//       // Replace "/api/contact" with your actual backend endpoint
//       // const response = await fetch("/api/contact",
//       const response = await fetch("http://localhost:8082/api/contact", 
//         {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus({
//           type: "success",
//           message: "Message sent successfully! I'll get back to you soon.",
//         });
//         setFormData({ name: "", email: "", message: "" });

//         // Clear success message after 5 seconds
//         setTimeout(() => {
//           setStatus({ type: "idle", message: "" });
//         }, 5000);
//       } else {
//         setStatus({
//           type: "error",
//           message: "Failed to send message. Please try again.",
//         });
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setStatus({
//         type: "error",
//         message:
//           "Failed to send message. Please try again or contact me directly.",
//       });
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Get In Touch
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"></div>
//           <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? I'd love to hear from you!
//           </p>
//         </div>

//         {/* Form Container */}
//         <div className="max-w-2xl mx-auto">
//           <div
//             className={`${
//               isVisible ? "animate-fade-in scroll-fade-in-delay-1" : "opacity-0"
//             }`}
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="bg-blue-50 dark:bg-slate-800 p-8 md:p-12 rounded-lg shadow-lg"
//             >
//               {/* Name Field */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="name"
//                   className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-900 dark:text-white"
//                   placeholder="Ginta Sabil Ramadhani"
//                 />
//               </div>

//               {/* Email Field */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-900 dark:text-white"
//                   placeholder="ginta@example.com"
//                 />
//               </div>

//               {/* Message Field */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="message"
//                   className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-900 dark:text-white resize-none"
//                   placeholder="Tell me about your project or idea..."
//                 />
//               </div>

//               {/* Status Message */}
//               {status.type !== "idle" && (
//                 <div
//                   className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
//                     status.type === "success"
//                       ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
//                       : status.type === "error"
//                       ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
//                       : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
//                   }`}
//                 >
//                   {status.type === "success" ? (
//                     <CheckCircle size={20} />
//                   ) : status.type === "error" ? (
//                     <AlertCircle size={20} />
//                   ) : null}
//                   <span>{status.message}</span>
//                 </div>
//               )}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={status.type === "loading"}
//                 className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 <Send size={20} />
//                 {status.type === "loading" ? "Sending..." : "Send Message"}
//               </button>

//               {/* Note about configuration */}
//               {/* <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 text-center">
//                 Note: To enable email notifications, create a backend endpoint at /api/contact that handles the form submission
//               </p> */}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import { useEffect, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "emailjs-com";

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

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

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
    const result = await emailjs.send(
      "service_zsw949x", // Service ID
      "template_fqaadtp", // Template ID
      {
        name: formData.name,      // sesuai {{name}} di template
        email: formData.email,    // sesuai {{email}} di template (kalau ada)
        message: formData.message, // sesuai {{message}}
        time: new Date().toLocaleString(), // isi {{time}} kalau kamu tambahkan
      },
      "JHkf6Jysn4OgnbG5E" // Public Key
    );

      console.log(result.text);
      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-blue-50 dark:bg-slate-800 p-8 md:p-12 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
                placeholder="Ginta Sabil Ramadhani"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white"
                placeholder="ginta@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-white resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            {status.type !== "idle" && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  status.type === "success"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                    : status.type === "error"
                    ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                    : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle size={20} />
                ) : status.type === "error" ? (
                  <AlertCircle size={20} />
                ) : null}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
