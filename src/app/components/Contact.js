"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPaperPlane, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      message: form.message.value,
    };

    setLoading(true);
    const toastId = toast.loading("Sending your inquiry...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message sent successfully! 🚀", { id: toastId });
        form.reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Contact Me</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Great Together</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
You can contact us directly for your new project, design or construction consultancy.
              </p>
            </div>

            <div className="space-y-6">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/md-abdul-al-hamim-28415738a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all group"
              >
                <div className="p-3 bg-blue-600 text-white rounded-xl group-hover:scale-110 transition-transform">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Professional Profile</p>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Connect on LinkedIn</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/88001874509231" // আপনার হোয়াটসঅ্যাপ নাম্বারটি এখানে দিন
                target="_blank"
                className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-green-500 transition-all group"
              >
                <div className="p-3 bg-green-500 text-white rounded-xl group-hover:scale-110 transition-transform">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Fast Response</p>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Chat on WhatsApp</p>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                <div className="p-3 bg-red-500 text-white rounded-xl group-hover:scale-110 transition-transform">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email Address</p>
                  <p className="font-bold text-slate-800 dark:text-slate-200">aahamim2@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Decorative Blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
            
            <form 
              onSubmit={handleSubmit} 
              className="relative z-10 p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5"
            >
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1 text-slate-600 dark:text-slate-400">Full Name</label>
                  <input 
                    name="user_name" 
                    required 
                    placeholder="Enter your name" 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1 text-slate-600 dark:text-slate-400">Email Address</label>
                  <input 
                    name="user_email" 
                    type="email" 
                    required 
                    placeholder="example@mail.com" 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1 text-slate-600 dark:text-slate-400">Project Details</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4}
                    placeholder="Describe your project or inquiry..." 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex justify-center items-center gap-3 transition-all shadow-xl shadow-blue-500/20 disabled:opacity-70"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Sending...
                  </span>
                ) : (
                  <>Send Message <FaPaperPlane /></>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;