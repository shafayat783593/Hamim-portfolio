"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHardHat, FaDraftingCompass, FaCube, FaTools } from "react-icons/fa";

const Journey = () => {
  const education = [
    {
      title: "Diploma in Civil Engineering",
      institution: "Bangladesh Technical Education Board",
      date: "2022 - Present",
      description: "Focusing on Structural Analysis, Surveying, and Construction Materials.",
    },
  ];

  const experience = [
    {
      title: "Construction Site Management",
      institution: "Professional Training/Projects",
      date: "2024 - Present",
      description: "Managing on-site operations, supervising workforce, and ensuring structural integrity according to blue-prints.",
    },
    {
      title: "Freelance Architectural Drafter",
      institution: "Remote/Local Projects",
      date: "2023 - 2025",
      description: "Creating detailed 2D floor plans and 3D elevations for residential buildings.",
    },
  ];

  const technicalSkills = [
    { name: "AutoCAD (2D & 3D Drafting)", level: "95%" },
    { name: "3D Modeling (SketchUp/Revit)", level: "90%" },
    { name: "Architectural Design", level: "85%" },
    { name: "Quantity Surveying & Estimation", level: "80%" },
    { name: "Site Supervision & Management", level: "85%" },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold mb-4"
          >
            Engineering <span className="text-blue-600">Journey & Skills</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg italic">
            My educational path, professional experience, and technical expertise in Civil Engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* LEFT SIDE: Experience & Education */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            {/* Professional Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/20">
                  <FaHardHat size={20} />
                </div>
                <h3 className="text-2xl font-bold">Field Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 ring-4 ring-white dark:ring-slate-950"></div>
                    <p className="text-sm text-blue-600 font-bold mb-1">{item.date}</p>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-2">{item.institution}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Journey */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-purple-600 text-white rounded-xl shadow-lg shadow-purple-600/20">
                  <FaGraduationCap size={20} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1 ring-4 ring-white dark:ring-slate-950"></div>
                  <p className="text-sm text-purple-600 font-bold mb-1">{item.date}</p>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-slate-500 mb-2">{item.institution}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Technical Skills Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden"
          >
            {/* Background Icon Watermark */}
            <FaDraftingCompass className="absolute -bottom-10 -right-10 text-slate-100 dark:text-slate-800 text-[15rem] -rotate-12" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl">
                  <FaTools size={20} />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>

              <div className="space-y-7">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        {index === 0 && <FaDraftingCompass className="text-blue-500" />}
                        {index === 1 && <FaCube className="text-purple-500" />}
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-extrabold">{skill.level}</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools Badges */}
              <div className="mt-12">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 text-center md:text-left">Engineering Tools</p>
                <div className="flex flex-wrap gap-3">
                  {["SketchUp", "Revit", "MS Project", "Total Station", "Quality Control", "Structural Plan"].map((tool) => (
                    <span key={tool} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-semibold border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Journey;