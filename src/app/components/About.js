"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDraftingCompass, FaHardHat, FaCube, FaBuilding } from "react-icons/fa";

const About = () => {
  const stats = [
    { label: "Design Expert", value: "AutoCAD", icon: <FaDraftingCompass /> },
    { label: "3D Modeling", value: "Revit Design & Drafting", icon: <FaCube /> },
    { label: "Site Management", value: "Construction", icon: <FaHardHat /> },
    { label: "Department", value: "Civil Eng.", icon: <FaBuilding /> },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Animated Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* Background Animated Ring - Perfectly Circle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] md:w-[480px] md:h-[480px] border-2 border-dashed border-blue-500/20 rounded-full z-0"
            ></motion.div>

            {/* Glowing Backdrop */}
            <div className="absolute w-72 h-72 md:w-[400px] md:h-[400px] bg-blue-600/10 blur-[100px] rounded-full -z-10"></div>

            {/* Main Image Container - Updated to rounded-full */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-white dark:border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10"
            >
              <Image 
                src="/profile2.jpeg"
                alt="Md Abdul Al Hamim" 
                fill 
                className="object-cover"
                priority 
              />
              
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 md:right-4 bg-blue-600 text-white p-5 rounded-2xl shadow-xl z-20 border-4 border-white dark:border-slate-950"
            >
              <p className="text-[10px] font-bold text-center uppercase tracking-widest leading-tight opacity-90">Civil</p>
              <p className="text-lg font-black text-center">Engineer</p>
            </motion.div>
          </motion.div>

          {/* Right Side: Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 italic">About Me</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Designing the future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Precision & Engineering</span> Excellence.
            </h2>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 text-justify">
              <p>
                Hello! I&apos;m <strong>Md Abdul Al Hamim</strong>. I am a dedicated student of the <strong>Civil Engineering Department</strong> with a strong passion for structural design and project execution.
              </p>
              <p>
                As an <strong>AutoCAD & 3D Modeling Expert</strong>, I specialize in creating detailed architectural drafting and 3D visualizations. My expertise also extends to <strong>Construction Site Management</strong>, where I focus on ensuring technical accuracy and efficiency on the field.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, borderColor: '#2563eb', backgroundColor: 'rgba(37, 99, 235, 0.05)' }}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-4 transition-all"
                >
                  <div className="text-blue-600 text-2xl">{stat.icon}</div>
                  <div>
                    <p className="text-sm md:text-base font-bold leading-none mb-1">{stat.value}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg transition-all"
            >
              Download Resume
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;