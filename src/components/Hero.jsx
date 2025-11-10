import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const paperBg = 'bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.9),rgba(245,240,230,0.9))]';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.05]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <section id="home" ref={ref} className={`relative isolate ${paperBg} overflow-hidden`}> 
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div style={{ opacity: glowOpacity }} className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-teal-300/40 blur-3xl" />
        <motion.div style={{ opacity: glowOpacity }} className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-emerald-300/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <motion.div style={{ y }} className="relative rounded-2xl bg-white/70 shadow-xl ring-1 ring-black/5 p-6">
              <div className="relative h-64 rounded-xl bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-100 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,245,230,0.9),transparent_50%)]" />
                <motion.div
                  className="absolute bottom-6 left-6 h-4 w-48 rounded-full bg-zinc-800 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.4 }}
                />
                <motion.div
                  className="absolute bottom-12 left-6 h-4 w-64 rounded-full bg-zinc-800 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-20 left-6 h-4 w-80 rounded-full bg-zinc-800 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -right-4 bottom-4 h-24 w-24 rounded-full bg-teal-400 shadow-lg"
                  animate={{ y: [0, -6, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute right-10 top-6 h-8 w-8 rounded-md bg-emerald-500/80"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                />
                <div className="absolute inset-x-0 top-0 h-10 bg-amber-200/60" />
              </div>
              <div className="mt-6 space-y-3">
                <motion.h1
                  className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="font-[Kalam] block text-zinc-900">Hi, I'm</span>
                  <span className="font-[Kalam] bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Your Name</span>
                </motion.h1>
                <motion.p
                  className="text-lg text-zinc-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  UI/UX Designer • Graphic Designer
                </motion.p>
                <motion.p
                  className="text-zinc-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                >
                  “Designing emotions through visuals.”
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="relative h-80 rounded-2xl bg-white/70 shadow-xl ring-1 ring-black/5 p-6 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0">
                <div className="absolute left-10 top-10 h-28 w-40 rounded-xl bg-amber-100 border border-amber-200 shadow-inner" />
                <div className="absolute left-8 top-12 h-24 w-36 rounded-xl bg-rose-100 border border-rose-200 rotate-3" />
                <div className="absolute right-10 top-14 h-10 w-10 rounded-full bg-teal-300" />
                <div className="absolute right-6 bottom-10 h-24 w-24 rounded-xl bg-emerald-200" />
                <motion.div
                  className="absolute left-20 bottom-6 h-1 w-40 bg-zinc-900 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.6 }}
                />
              </div>
              <div className="relative h-full w-full rounded-xl border border-zinc-200 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <p className="font-[Kalam] text-3xl text-zinc-800">Portfolio</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
