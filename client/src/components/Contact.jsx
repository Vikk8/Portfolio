// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Send, Loader2, MapPin, Mail, Linkedin, Phone, Instagram } from "lucide-react";
// import Toast from "./Toast";

// const API_URL = import.meta.env.VITE_API_URL || "";

// const initialForm = { name: "", email: "", project: "" };

// export default function Contact() {
//   const [form, setForm] = useState(initialForm);
//   const [loading, setLoading] = useState(false);
//   const [toast, setToast] = useState(null);

//   // Auto-dismiss toast after 5 seconds
//   useEffect(() => {
//     if (!toast) return;
//     const t = setTimeout(() => setToast(null), 5000);
//     return () => clearTimeout(t);
//   }, [toast]);

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("https://portfolio-backend-a97d.onrender.com/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (res.ok && data.success) {
//         setToast({ type: "success", message: data.message });
//         setForm(initialForm);
//       } else {
//         setToast({ type: "error", message: data.message || "Please try again." });
//       }
//     } catch {
//       setToast({ type: "error", message: "Network error. Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClass =
//     "w-full bg-bg border border-border rounded-xl px-4 py-3 text-light text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200";

//   return (
//     <section id="contact" className="py-28 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-16"
//         >
//           <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
//             Get In Touch
//           </p>
//           <h2 className="text-3xl sm:text-4xl font-bold text-light">
//             Let's Build Something Great
//           </h2>
//           <p className="text-muted mt-4 max-w-xl text-base leading-relaxed">
//             Have a data challenge that needs solving? I'm open to new projects,
//             consulting engagements, and full-time opportunities.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-5 gap-12 items-start">
//           {/* Left — Contact info */}
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55 }}
//             className="md:col-span-2 flex flex-col gap-6"
//           >
//             {[
//               {
//                 icon: Mail,
//                 label: "Email",
//                 value: "vikkigupta081@gmail.com",
//                 href: "mailto:vikkigupta081@gmail.com",
//               },
//               {
//                 icon: Phone,
//                 label: "Phone",
//                 value: "+91 8145425340",
//                 href: "tel:+918145425340",
//               },
//               {
//                 icon: Linkedin,
//                 label: "LinkedIn",
//                 value: "linkedin.com/in/vikkigupta8",
//                 href: "https://www.linkedin.com/in/vikkigupta8/",
//               },
//               {
//                 icon: Instagram,
//                 label: "Instagram",
//                 value: "@vikki.gupta_",
//                 href: "https://www.instagram.com/vikki.gupta_?igsh=MTlrN3dpamo0bWFncw%3D%3D&utm_source=qr",
//               },
//               {
//                 icon: MapPin,
//                 label: "Location",
//                 value: "Available Remotely",
//                 href: null,
//               },
//             ].map((item) => {
//               const Icon = item.icon;
//               return (
//                 <div key={item.label} className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
//                     <Icon size={16} className="text-accent" />
//                   </div>
//                   <div>
//                     <p className="text-muted text-xs font-medium mb-0.5">{item.label}</p>
//                     {item.href ? (
//                       <a
//                         href={item.href}
//                         className="text-light text-sm hover:text-accent transition-colors"
//                         target={item.href.startsWith("http") ? "_blank" : undefined}
//                         rel="noreferrer"
//                       >
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="text-light text-sm">{item.value}</p>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </motion.div>

//           {/* Right — Form */}
//           <motion.form
//             initial={{ opacity: 0, x: 24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55 }}
//             onSubmit={handleSubmit}
//             className="md:col-span-3 bg-surface border border-border rounded-2xl p-8 card-glow flex flex-col gap-5"
//           >
//             <div className="grid sm:grid-cols-2 gap-5">
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="name" className="text-muted text-xs font-medium">
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   placeholder="Jane Smith"
//                   value={form.name}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="email" className="text-muted text-xs font-medium">
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="jane@company.com"
//                   value={form.email}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2">
//               <label htmlFor="project" className="text-muted text-xs font-medium">
//                 Project Details
//               </label>
//               <textarea
//                 id="project"
//                 name="project"
//                 required
//                 rows={5}
//                 placeholder="Tell me about your data challenge, timeline, and goals..."
//                 value={form.project}
//                 onChange={handleChange}
//                 className={`${inputClass} resize-none`}
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-all duration-200 shadow-lg shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 size={16} className="animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <Send size={16} />
//                   Send Message
//                 </>
//               )}
//             </button>
//           </motion.form>
//         </div>
//       </div>

//       <Toast toast={toast} onClose={() => setToast(null)} />
//     </section>
//   );
// }
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, MapPin, Mail, Linkedin, Phone, Instagram } from "lucide-react";
import Toast from "./Toast";
// import Toast from "./Toast";

const initialForm = { name: "", email: "", project: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // Auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Web3Forms API integrated here
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7135c823-2daa-4836-92d8-44a3149b7fb2",
          ...form,
        }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setToast({ type: "success", message: "Message sent successfully!" });
        setForm(initialForm);
      } else {
        setToast({ type: "error", message: data.message || "Please try again." });
      }
    } catch {
      setToast({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-bg border border-border rounded-xl px-4 py-3 text-light text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-200";

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-light">
            Let's Build Something Great
          </h2>
          <p className="text-muted mt-4 max-w-xl text-base leading-relaxed">
            Have a data challenge that needs solving? I'm open to new projects,
            consulting engagements, and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "vikkigupta081@gmail.com",
                href: "mailto:vikkigupta081@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 8145425340",
                href: "tel:+918145425340",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/vikkigupta8",
                href: "https://www.linkedin.com/in/vikkigupta8/",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@vikki.gupta_",
                href: "https://www.instagram.com/vikki.gupta_?igsh=MTlrN3dpamo0bWFncw%3D%3D&utm_source=qr",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Available Remotely",
                href: null,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-muted text-xs font-medium mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-light text-sm hover:text-accent transition-colors"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-light text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-surface border border-border rounded-2xl p-8 card-glow flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-muted text-xs font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-muted text-xs font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="project" className="text-muted text-xs font-medium">
                Project Details
              </label>
              <textarea
                id="project"
                name="project"
                required
                rows={5}
                placeholder="Tell me about your data challenge, timeline, and goals..."
                value={form.project}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-all duration-200 shadow-lg shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}