import React from 'react';
import { Tag, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { Reveal } from './Reveal';

const releases = [
  {
    version: "v0.1.0-alpha",
    date: "Dec 27, 2025",
    type: "Major Release",
    description: "First public alpha release of ProXPL.",
    features: [
        "Initial compiler implementation (Lexer, Parser, Codegen).",
        "Stack-based Virtual Machine.",
        "Basic standard library (io, math, fs).",
        "VS Code syntax highlighting support."
    ]
  },
  {
    version: "v0.0.9",
    date: "Nov 15, 2025",
    type: "Internal Beta",
    description: "Internal testing release focused on stability.",
    features: [
        "Fixed memory leaks in the garbage collector.",
        "Improved error messages for syntax errors.",
        "Added support for Windows build targets."
    ]
  }
];

export const Releases: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#020617] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Release Notes</h1>
                <p className="text-slate-600 dark:text-slate-400">
                    Stay up to date with the latest improvements and fixes in ProXPL.
                </p>
            </div>
        </Reveal>

        <div className="space-y-12 relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0">
            {releases.map((rel, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                    <div className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-6 w-5 h-5 rounded-full bg-brand-500 border-4 border-slate-50 dark:border-[#020617]"></div>
                        
                        <div className="bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/5 rounded-2xl p-6 md:p-8 shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-mono">{rel.version}</h2>
                                        <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                                            {rel.type}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-sm text-slate-500">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {rel.date}
                                    </div>
                                </div>
                                <a 
                                    href={`https://github.com/ProgrammerKR/ProXPL/releases/tag/${rel.version}`} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center justify-center px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                                >
                                    <Tag className="w-4 h-4 mr-2" /> View on GitHub
                                </a>
                            </div>
                            
                            <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg">
                                {rel.description}
                            </p>

                            <div>
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" /> What's New
                                </h3>
                                <ul className="space-y-2">
                                    {rel.features.map((feat, i) => (
                                        <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 text-sm">
                                            <span className="mr-3 text-slate-300 dark:text-slate-600">•</span>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};