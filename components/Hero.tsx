import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowRight, Copy, Check, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { InteractiveBackground } from './InteractiveBackground';
import { Link } from 'react-router-dom';
import { APP_VERSION } from '../constants';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const installCmd = "git clone https://github.com/ProgrammerKR/ProXPL.git";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-20 min-h-[90vh] flex items-center justify-center">
      
      {/* Interactive Canvas Background */}
      <InteractiveBackground />

      {/* Gradient Blobs (Still nice to have underneath) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-40 dark:opacity-100 transition-opacity duration-300">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-300/30 dark:bg-brand-900/30 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-300/20 dark:bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badge */}
        <Reveal>
          <a href="https://github.com/ProgrammerKR/ProXPL/releases" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-3 py-1 mb-8 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-pointer shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 dark:bg-brand-400 animate-pulse"></span>
            <span className="text-sm text-brand-700 dark:text-brand-100 font-medium">New Release: {APP_VERSION}</span>
            <ChevronRight className="w-3 h-3 text-slate-500 dark:text-slate-400" />
          </a>
        </Reveal>

        {/* Heading */}
        <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            A Modern Language <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-500">
                Built from Scratch.
            </span>
            </h1>
        </Reveal>

        <Reveal delay={200}>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-10">
            ProXPL is designed for performance, simplicity, and safety. 
            Experience a new approach to systems programming created by ProgrammerKR.
            </p>
        </Reveal>

        {/* CTA Actions */}
        <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://github.com/ProgrammerKR/ProXPL" target="_blank" rel="noreferrer">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                View on GitHub <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </a>
            <Link to="/about">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Read More
                </Button>
            </Link>
            </div>
        </Reveal>

        {/* Code Snippet / Install */}
        <Reveal delay={400} width="100%">
            <div className="mt-12 flex items-center justify-center w-full">
            <div className="group relative bg-white/50 dark:bg-dark-800/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-xl p-4 pr-14 font-mono text-sm text-slate-700 dark:text-slate-300 shadow-xl dark:shadow-2xl max-w-md w-full text-left flex items-center justify-between transition-all hover:border-brand-500/50">
                <div className="flex items-center space-x-3 overflow-hidden">
                <span className="text-brand-600 dark:text-brand-400 font-bold">$</span>
                <span className="truncate">{installCmd}</span>
                </div>
                <button 
                onClick={handleCopy}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Copy to clipboard"
                >
                {copied ? <Check className="w-4 h-4 text-green-500 dark:text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
            </div>
        </Reveal>

        {/* Social Proof */}
        <Reveal delay={500}>
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/5 w-full">
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-6">Featured On</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale transition-all duration-500">
                <a href="https://dev.to/programmerkr/introducing-proxpl-a-modern-programming-language-built-from-scratch-81n" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:grayscale-0 transition-all hover:scale-105 transform duration-200">
                    <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" alt="Dev.to" className="h-8 w-auto dark:invert" />
                </a>
                <a href="https://medium.com/@programmerkr.123/introducing-proxpl-a-modern-programming-language-built-from-scratch-89b426c5a063" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:grayscale-0 transition-all hover:scale-105 transform duration-200">
                    <span className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Medium</span>
                </a>
            </div>
            </div>
        </Reveal>
      </div>
    </div>
  );
};