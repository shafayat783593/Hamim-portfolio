"use client";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <GraduationCap className="text-blue-600" /> Education
        </h2>
        <div className="space-y-8 border-l-2 border-blue-600 ml-4 pl-8 relative">
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950"></div>
            <h3 className="text-2xl font-bold">Diploma in Engineering</h3>
            <p className="text-blue-600 font-medium">Bangladesh Technical Education Board</p>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Specializing in Microcontrollers and Embedded Systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;