import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,240,230,.7),rgba(255,255,255,.7))]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-white/70 p-8 shadow-xl ring-1 ring-black/5"
          >
            <h2 className="text-3xl font-bold text-zinc-800 mb-4">Contact</h2>
            <ul className="space-y-3 text-zinc-700">
              <li className="flex items-center gap-3"><Mail className="text-teal-600" size={18} /><a className="hover:underline" href="mailto:your.email@gmail.com">your.email@gmail.com</a></li>
              <li className="flex items-center gap-3"><Phone className="text-teal-600" size={18} /><a className="hover:underline" href="tel:+1234567890">+1 234 567 890</a></li>
              <li className="flex items-center gap-3"><Linkedin className="text-teal-600" size={18} /><a className="hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li className="flex items-center gap-3"><Github className="text-teal-600" size={18} /><a className="hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4 rounded-2xl bg-white/70 p-8 shadow-xl ring-1 ring-black/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm text-zinc-600">Name</label>
              <input className="mt-1 w-full rounded-lg border border-zinc-200 bg-white/60 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            </div>
            <div>
              <label className="block text-sm text-zinc-600">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-zinc-200 bg-white/60 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            </div>
            <div>
              <label className="block text-sm text-zinc-600">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg border border-zinc-200 bg-white/60 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500" required />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2 text-white shadow hover:bg-teal-700 transition-colors">
              <Send size={18} /> Send
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
