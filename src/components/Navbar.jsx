import React from 'react';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navbar = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => handleScroll('home')} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 shadow-md" />
            <span className="font-semibold tracking-tight text-gray-800">Portfolio</span>
          </button>
          <ul className="hidden md:flex items-center gap-2">
            {links.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => handleScroll(id)}
                  className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-gray-700 hover:text-teal-700 transition-colors"
                >
                  <Icon size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-teal-500 after:transition-all group-hover:after:w-full">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <select
              aria-label="Navigate"
              className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm"
              onChange={(e) => e.target.value && handleScroll(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Navigate
              </option>
              {links.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
