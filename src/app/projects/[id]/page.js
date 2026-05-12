"use client";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCheckCircle, FaTools, FaCalendarAlt, FaMapMarkerAlt, FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { projectsData } from "@/app/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData[id];

  // স্লাইডারের জন্য স্টেট
  const [currentIndex, setCurrentIndex] = useState(0);

  // অটো স্লাইড ইফেক্ট (প্রতি ৫ সেকেন্ডে)
  useEffect(() => {
    if (!project) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [project]);

  if (!project) return <div className="py-20 text-center">Project not found!</div>;

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back Button */}
        <div className="mb-12">
          <Link href="/#projects" className="flex items-center gap-2 text-blue-600 font-bold mb-6 group w-fit">
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white"
          >
            {project.title}
          </motion.h1>
          <p className="text-blue-600 font-bold mt-2 uppercase tracking-widest">{project.category}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">

    
          <div className="lg:col-span-8 space-y-12">
         
            <div
              className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800"
              style={{ height: '700px' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={project.gallery[currentIndex]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover object-center"
                    priority
                  />

                  {/* Bottom Shadow Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                </motion.div>
              </AnimatePresence>

              {/* Slider Dots Indicator */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {project.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-500 ${index === currentIndex
                        ? "w-12 bg-blue-500"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info (Sticky) */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl sticky top-24">
              <h4 className="text-xl font-bold mb-8 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4 tracking-tight">Project Specifications</h4>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl"><FaMapMarkerAlt /></div>
                  <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Location</p><p className="font-bold dark:text-white">{project.location}</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 text-green-600 rounded-2xl"><FaCalendarAlt /></div>
                  <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Completion Date</p><p className="font-bold dark:text-white">{project.date}</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 rounded-2xl"><FaTools /></div>
                  <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Engineering Tools</p><p className="font-bold dark:text-white text-sm">{project.tools.join(", ")}</p></div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                <h5 className="font-bold mb-4 dark:text-white italic">Project Deliverables:</h5>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <FaCheckCircle className="text-blue-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

