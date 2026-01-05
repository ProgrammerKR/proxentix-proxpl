import React from 'react';
import { Server, Database, Cloud, Lock, Clock, FileText } from 'lucide-react';
import { Reveal } from './Reveal';

const modules = [
  { name: 'std.io', desc: 'Input/Output operations, console interaction, and buffer management.', icon: <TerminalIcon /> },
  { name: 'std.fs', desc: 'File system manipulation, reading/writing files, and directory traversal.', icon: <FileText className="w-6 h-6" /> },
  { name: 'std.net', desc: 'Networking primitives, TCP/UDP sockets, and HTTP client capabilities.', icon: <Cloud className="w-6 h-6" /> },
  { name: 'std.math', desc: 'Advanced mathematical functions, constants, and random number generation.', icon: <span className="font-mono text-xl font-bold">∑</span> },
  { name: 'std.time', desc: 'Time measurement, duration, sleeping, and date formatting.', icon: <Clock className="w-6 h-6" /> },
  { name: 'std.crypto', desc: 'Cryptographic hashing, encryption utilities, and secure randoms.', icon: <Lock className="w-6 h-6" /> },
  { name: 'std.sql', desc: 'Database connectivity and lightweight SQL query building.', icon: <Database className="w-6 h-6" /> },
  { name: 'std.http', desc: 'High-level HTTP server and client implementations.', icon: <Server className="w-6 h-6" /> },
];

function TerminalIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17v1a3 3 0 003 3h10a3 3 0 003-3v-1m-2-4l-4-4m0 0l-4 4m4-4v12" />
    </svg>
  );
}

export const StandardLibrary: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#020617] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Standard Library</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              ProXPL comes with "batteries included". Explore the robust set of modules available out of the box.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:border-brand-500/50 transition-all hover:shadow-lg group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand-50 dark:bg-brand-900/20 rounded-xl text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                    {mod.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-mono">{mod.name}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};