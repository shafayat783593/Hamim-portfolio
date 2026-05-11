"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaArrowRight, FaDraftingCompass, FaHardHat } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  // এনিমেশন ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-white dark:bg-slate-950">
      
      {/* Background Engineering Grid Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] -z-10"></div>
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6"
          >
            <FaHardHat /> Civil Engineering Student
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white"
          >
            Hi, I&apos;m <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 bg-clip-text text-transparent">
              Abdul Al Hamim
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
          >
            Expert in <span className="text-blue-600 font-semibold underline decoration-2 underline-offset-4">AutoCAD & 3D Modeling</span>. 
            Bridging the gap between architectural drafting and structural site management.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-6 items-center"
          >
            {/* Action Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 transition-all"
            >
              See My Blueprints <FaArrowRight />
            </motion.button>

            {/* LinkedIn Link */}
            <div className="flex gap-5 text-3xl">
              <motion.a 
                href="https://www.linkedin.com/in/md-abdul-al-hamim-28415738a/" 
                target="_blank"
                whileHover={{ y: -5, color: "#0077b5" }}
                className="text-slate-400 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.div className="text-slate-400 flex items-center gap-2 text-sm font-medium">
                <FaDraftingCompass className="text-blue-600" /> Professional Drafter
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right Side: Image with Floating Animation */}
        <div className="relative flex justify-center items-center">
          
          {/* Engineering Decorative Ring (Rotating) */}
          <motion.div 
            animate={{ rotate: 3 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px] border-2 border-dashed border-blue-500/20 rounded-full z-0"
          />

          {/* Main Image Container: Rounded Full applied here */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-72 h-72 md:w-[400px] md:h-[400px] relative rounded-full overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl z-20"
          >
            <Image 
              src="/profile.jpeg" 
              alt="Md Abdul Al Hamim" 
              fill 
              className="object-cover" 
              priority 
            />
          </motion.div>

          {/* Floating Skill Badge */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 right-0 md:right-5 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl z-30 border border-slate-100 dark:border-slate-700"
          >
            <p className="text-blue-600 font-black text-xl">3D</p>
            <p className="text-[10px] uppercase font-bold text-slate-500">Expertise</p>
          </motion.div>
          
          {/* Secondary Decorative Circle */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600/10 rounded-full blur-xl -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;