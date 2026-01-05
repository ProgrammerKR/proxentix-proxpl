import React from 'react';
import { Github, FileText, ExternalLink, ArrowRight, GitPullRequest } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-white/5 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 space-y-8">
            <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Join the Community</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                ProXPL is an open-source project created by ProgrammerKR. 
                We are building a language from scratch, and we welcome contributors, feedback, and discussions.
                </p>
            </Reveal>
            
            <Reveal delay={100}>
                <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://github.com/ProgrammerKR/ProXPL" target="_blank" rel="noreferrer">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    <Github className="w-5 h-5 mr-2" />
                    Star on GitHub
                    </Button>
                </a>
                <a href="https://github.com/ProgrammerKR/ProXPL/issues" target="_blank" rel="noreferrer">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-slate-800 text-white border-slate-700 hover:bg-slate-700">
                    Report an Issue
                    </Button>
                </a>
                </div>
            </Reveal>

            {/* Contributing CTA */}
            <Reveal delay={200}>
                <div className="p-6 rounded-2xl bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-500/20 mt-8">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                    <GitPullRequest className="w-5 h-5 mr-2 text-brand-500 dark:text-brand-400" />
                    Ready to Contribute?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                    Whether it's fixing bugs, improving documentation, or proposing new features, your help is appreciated. We've prepared a guide to help you get started.
                </p>
                <a href="https://github.com/ProgrammerKR/ProXPL/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer" className="text-brand-600 dark:text-brand-400 hover:text-brand-500 dark:hover:text-brand-300 font-medium text-sm flex items-center group">
                    Read Contributing Guide <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
                </div>
            </Reveal>
          </div>

          <div className="flex-1 w-full max-w-lg">
             <div className="grid grid-cols-1 gap-4">
                
                {/* Dev.to Article */}
                <Reveal delay={100}>
                    <a href="https://dev.to/programmerkr/introducing-proxpl-a-modern-programming-language-built-from-scratch-81n" target="_blank" rel="noreferrer" className="block group">
                        <div className="bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/5 rounded-xl p-6 hover:bg-white dark:hover:bg-dark-700 hover:border-brand-500/30 transition-all shadow-sm hover:shadow-md">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-slate-900 dark:text-white flex items-center">
                                <FileText className="w-4 h-4 mr-2 text-brand-500 dark:text-brand-400" /> Read on Dev.to
                                </h4>
                                <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-brand-600 dark:group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">"Introducing ProXPL: A Modern Programming Language Built from Scratch"</p>
                        </div>
                    </a>
                </Reveal>

                {/* Medium Article */}
                <Reveal delay={200}>
                    <a href="https://medium.com/@programmerkr.123/introducing-proxpl-a-modern-programming-language-built-from-scratch-89b426c5a063" target="_blank" rel="noreferrer" className="block group">
                        <div className="bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/5 rounded-xl p-6 hover:bg-white dark:hover:bg-dark-700 hover:border-brand-500/30 transition-all shadow-sm hover:shadow-md">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-slate-900 dark:text-white flex items-center">
                                    <FileText className="w-4 h-4 mr-2 text-slate-800 dark:text-white" /> Read on Medium
                                </h4>
                                <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-brand-600 dark:group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Deep dive into the architecture and design decisions behind ProXPL.</p>
                        </div>
                    </a>
                </Reveal>

                {/* GitHub */}
                <Reveal delay={300}>
                    <a href="https://github.com/ProgrammerKR/ProXPL" target="_blank" rel="noreferrer" className="block group">
                        <div className="bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/5 rounded-xl p-6 hover:bg-white dark:hover:bg-dark-700 hover:border-brand-500/30 transition-all shadow-sm hover:shadow-md">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-slate-900 dark:text-white flex items-center">
                                    <Github className="w-4 h-4 mr-2" /> Source Code
                                </h4>
                                <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-brand-600 dark:group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Explore the codebase, fork the repo, and start contributing.</p>
                        </div>
                    </a>
                </Reveal>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};