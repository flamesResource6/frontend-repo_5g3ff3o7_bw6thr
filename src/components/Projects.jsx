import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Image as ImageIcon, FileText } from 'lucide-react';

const Projects = () => {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(null);
  const inputRef = useRef(null);

  const onFiles = (files) => {
    const mapped = Array.from(files).map((f) => ({
      id: `${f.name}-${Date.now()}`,
      name: f.name,
      type: f.type,
      url: URL.createObjectURL(f),
    }));
    setItems((prev) => [...mapped, ...prev]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    onFiles(e.dataTransfer.files);
  };

  return (
    <section id="projects" className="py-20 bg-[linear-gradient(180deg,rgba(255,255,255,.8),rgba(250,247,238,.8))]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-zinc-800">Projects</h2>
          <button
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-white shadow hover:bg-teal-700 transition-colors"
          >
            <Upload size={18} /> Upload
          </button>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => onFiles(e.target.files)}
          />
        </div>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="mb-6 rounded-2xl border border-dashed border-teal-300 bg-white/70 p-8 text-center text-zinc-600 shadow-sm"
        >
          Drag & drop images or documents here
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <motion.div
              key={it.id}
              layout
              className="group relative overflow-hidden rounded-2xl bg-white/80 shadow-lg ring-1 ring-black/5"
            >
              <button onClick={() => setModal(it)} className="block w-full text-left">
                <div className="aspect-video overflow-hidden">
                  {it.type.includes('image') ? (
                    <img src={it.url} alt={it.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-emerald-50 text-emerald-700">
                      {it.type.includes('pdf') ? <FileText /> : <ImageIcon />}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-medium text-zinc-800 truncate">{it.name}</p>
                  <p className="text-sm text-zinc-500">Click to view details</p>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b px-4 py-3">
                <p className="font-medium text-zinc-800 truncate pr-4">{modal.name}</p>
                <button className="rounded-md px-3 py-1 text-sm text-white bg-zinc-800" onClick={() => setModal(null)}>Close</button>
              </div>
              <div className="max-h-[70vh] overflow-auto">
                {modal.type.includes('image') ? (
                  <img src={modal.url} alt={modal.name} className="w-full" />
                ) : (
                  <iframe title="doc" src={modal.url} className="h-[70vh] w-full" />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
