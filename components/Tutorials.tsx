import React from 'react';
import { PlayCircle, BookOpen, Code, Cpu } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const tutorials = [
  {
    title: "ProXPL in 10 Minutes",
    desc: "A quick tour of the syntax, variables, loops, and functions for experienced developers.",
    level: "Beginner",
    time: "10 min",
    icon: <ClockIcon />
  },
  {
    title: "Building a Web Server",
    desc: "Learn how to use std.http to create a high-performance REST API service.",
    level: "Intermediate",
    time: "25 min",
    icon: <ServerIcon />
  },
  {
    title: "Concurrency Patterns",
    desc: "Mastering threads, channels, and async/await in ProXPL.",
    level: "Advanced",
    time: "40 min",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Writing a CLI Tool",
    desc: "Create a command-line utility with argument parsing and colored output.",
    level: "Beginner",
    time: "15 min",
    icon: <TerminalIcon />
  }
];

function ClockIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>; }
function ServerIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>; }
function TerminalIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17v1a3 3 0 003 3h10a3 3 0 003-3v-1m-2-4l-4-4m0 0l-4 4m4-4v12" /></svg>; }

export const Tutorials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#050b1d] min-h-screen">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 dark:border-white/10 pb-8">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Tutorials</h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                        Step-by-step guides to help you master ProXPL, from your first "Hello World" to complex concurrent systems.
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <Link to="/docs">
                        <Button variant="outline">View Full Documentation</Button>
                    </Link>
                </div>
            </div>
         </Reveal>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tut, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                    <div className="flex flex-col h-full p-8 bg-slate-50 dark:bg-[#0B1120] rounded-2xl border border-slate-200 dark:border-white/5 hover:border-brand-500/30 transition-all hover:shadow-lg">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white dark:bg-white/5 rounded-xl text-brand-600 dark:text-brand-400 border border-slate-100 dark:border-white/5">
                                {tut.icon}
                            </div>
                            <div className="flex flex-col items-end">
                                <span className={`text-xs font-bold px-2 py-1 rounded-full mb-2 ${
                                    tut.level === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                    tut.level === 'Intermediate' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                    'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                }`}>{tut.level}</span>
                                <span className="text-xs text-slate-500 flex items-center">
                                    <BookOpen className="w-3 h-3 mr-1" /> {tut.time}
                                </span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{tut.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">{tut.desc}</p>
                        <Button variant="secondary" className="w-full justify-between group">
                            Start Learning 
                            <PlayCircle className="w-5 h-5 group-hover:text-brand-400 transition-colors" />
                        </Button>
                    </div>
                </Reveal>
            ))}
         </div>
       </div>
    </section>
  );
};