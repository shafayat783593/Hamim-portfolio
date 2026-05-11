"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaTools, FaCalendarAlt, FaMapMarkerAlt, FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { projectsData } from "@/app/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData[id];

  // যদি আইডি না পাওয়া যায়
  if (!project) return <div className="py-20 text-center">Project not found!</div>;

  return (
    <section className="min-h-screen py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button & Title */}
        <div className="mb-12">
          <Link href="/#projects" className="flex items-center gap-2 text-blue-600 font-bold mb-6 group">
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
          {/* Media Section */}
          <div className="lg:col-span-8 space-y-12">
            <div className="relative h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900">
              <Image src={project.gallery[0]} alt={project.title} fill className="object-cover" />
            </div>

            {/* Why This Project - Individual for each */}
            <div className="grid md:grid-cols-2 gap-6">
              {project.whyThisProject.map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-lg mb-2 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold dark:text-white">Project Story</h3>
              <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl sticky top-24">
              <h4 className="text-xl font-bold mb-8 dark:text-white border-b pb-4">Specifications</h4>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl"><FaMapMarkerAlt /></div>
                  <div><p className="text-[10px] font-bold text-slate-400 uppercase">Location</p><p className="font-bold dark:text-white">{project.location}</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 text-green-600 rounded-2xl"><FaCalendarAlt /></div>
                  <div><p className="text-[10px] font-bold text-slate-400 uppercase">Date</p><p className="font-bold dark:text-white">{project.date}</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 rounded-2xl"><FaTools /></div>
                  <div><p className="text-[10px] font-bold text-slate-400 uppercase">Tools</p><p className="font-bold dark:text-white text-xs">{project.tools.join(", ")}</p></div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t dark:border-slate-800">
                <h5 className="font-bold mb-4 dark:text-white italic">Deliverables:</h5>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <FaCheckCircle className="text-blue-500" /> {f}
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