import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Palette, PenTool } from 'lucide-react';

const skills = [
  { name: 'UI/UX', level: 90, icon: Palette },
  { name: 'Graphic Design', level: 88, icon: PenTool },
  { name: 'Prototyping', level: 82, icon: GraduationCap },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-[conic-gradient(at_top_left,rgba(255,253,245,.7),rgba(245,245,245,.6))]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-white/70 p-8 shadow-xl ring-1 ring-black/5"
          >
            <h2 className="text-3xl font-bold text-zinc-800 mb-4">About Me</h2>
            <p className="text-zinc-600 leading-relaxed">
              I am a friendly and confident designer who loves turning ideas into delightful visual experiences.
              My work blends clean layouts, warm color palettes, and thoughtful motion. I enjoy crafting interfaces
              that feel intuitive and expressive.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-100">
              <div className="flex items-center gap-3 text-zinc-700">
                <GraduationCap className="text-teal-600" size={20} />
                <p><span className="font-medium">Education:</span> Your College • B.Des (Design) • 2021-2025</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {skills.map((s, idx) => (
              <div key={s.name} className="rounded-2xl bg-white/70 p-5 shadow-xl ring-1 ring-black/5">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-800">
                    <s.icon size={18} className="text-teal-600" />
                    <span className="font-medium">{s.name}</span>
                  </div>
                  <span className="text-sm text-zinc-500">{s.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-200 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
