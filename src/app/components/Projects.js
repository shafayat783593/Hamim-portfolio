"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaDraftingCompass, FaCube, FaBuilding } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { 
    id: "architectural-plan", 
    title: "Residential Building Design", 
    desc: "A complete 2D floor plan and 3D exterior visualization for a modern 5-story building.", 
    img: "/project1.jpeg", 
    category: "AutoCAD & 3D",
    icon: <FaDraftingCompass />
  },
  { 
    id: "site-management", 
    title: "Structural Supervision", 
    desc: "Overseeing foundation work and quality control for a commercial construction site.", 
    img: "/project2.jpeg", 
    category: "Site Management",
    icon: <FaBuilding />
  },
  // { 
  //   id: "interior-modeling", 
  //   title: "Modern Interior Layout", 
  //   desc: "Detailed interior 3D modeling with realistic lighting and furniture placement using SketchUp.", 
  //   img: "/project3.jpeg", 
  //   category: "3D Modeling",
  //   icon: <FaCube />
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3"
          >
            My Portfolio
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Featured <span className="text-blue-600">Engineering</span> Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <motion.div 
              key={p.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }} 
              className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-all"
            >
              {/* Image Area */}
              <div className="h-64 relative overflow-hidden">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Category Badge */}
                <div className="absolute top-5 left-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold shadow-lg">
                  <span className="text-blue-600">{p.icon}</span>
                  <span className="text-slate-700 dark:text-slate-200 uppercase">{p.category}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {p.desc}
                </p>
                
                <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
                  <Link 
                    href={`/projects/${p.id}`} 
                    className="flex items-center gap-2 text-sm font-extrabold text-blue-600 hover:gap-3 transition-all"
                  >
                    View Details <FaExternalLinkAlt size={12} />
                  </Link>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-200"></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="mt-16 text-center">
           <Link href="/all-projects" className="inline-block px-10 py-4 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all">
              Explore All Projects
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;