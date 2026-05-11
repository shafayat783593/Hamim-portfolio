"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaArrowUp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // block ও w-full ব্যবহার করা হয়েছে যেন এটি পুরো জায়গা নেয়
    <footer className="block w-full bg-white dark:bg-slate-950 pt-20 pb-10 px-6 border-t border-slate-100 dark:border-slate-900 transition-colors">
      
      <div className="max-w-7xl mx-auto">
        {/* flex md:flex-row নিশ্চিত করবে যে ডেস্কটপে এটি অবশ্যই পাশাপাশি থাকবে */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-12 mb-16">
          
          {/* Column 1: Branding - Fixed Width for stability */}
          <div className="w-full md:w-[300px] flex-shrink-0">
            <Link href="/" className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
              AL <span className="text-blue-600">HAMIM.</span>
            </Link>
            <p className="mt-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Civil Engineering student & AutoCAD specialist focusing on sustainable structural design and 3D visualization.
            </p>
            <div className="flex gap-4 mt-8">
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/md-abdul-al-hamim-28415738a/" },
                { icon: <FaGithub />, href: "#" },
                { icon: <FaFacebook />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -5, color: "#2563eb" }}
                  className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 border border-slate-100 dark:border-slate-800 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="min-w-[150px]">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><Link href="/" className="hover:text-blue-600 transition-colors block">Home</Link></li>
              <li><Link href="#projects" className="hover:text-blue-600 transition-colors block">Projects</Link></li>
              <li><Link href="#about" className="hover:text-blue-600 transition-colors block">About Me</Link></li>
              <li><Link href="#contact" className="hover:text-blue-600 transition-colors block">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="min-w-[200px]">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li className="block whitespace-nowrap italic">2D Architectural Plan</li>
              <li className="block whitespace-nowrap italic">3D Exterior Rendering</li>
              <li className="block whitespace-nowrap italic">Site Supervision</li>
              <li className="block whitespace-nowrap italic">Structural Estimation</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="min-w-[200px]">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <FaEnvelope className="text-blue-600 flex-shrink-0" />
                <span className="break-all">aahamim2@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <FaPhoneAlt className="text-blue-600 flex-shrink-0" />
                <span>+880 1874509231</span>
              </div>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ x: 5 }}
              className="mt-8 flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-tighter"
            >
              Back to top <FaArrowUp />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Md Abdul Al Hamim. Built with Passion for Engineering.
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <span className="hover:text-blue-600 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-blue-600 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;