import React from 'react';
import { Reveal } from './Reveal';
import { Terminal, Zap, Shield, Layers, Cpu, Box, Server, Map, GitMerge, FileCode } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#050b1d] relative min-h-screen transition-colors duration-300">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
       
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <Reveal>
            <div className="prose prose-lg max-w-none dark:prose-invert">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">About ProXPL</h2>
               <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                 <strong>ProXPL</strong> (ProX Programming Language) is a modern, statically-typed programming language designed for <strong>clarity, performance, and reliability</strong>. Born from a vision to combine Python's readability with C's execution speed, ProXPL features a professional compiler architecture with a custom bytecode VM, comprehensive type system, and integrated package management.
               </p>
               <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                 Implemented entirely in C/C++ with zero runtime dependencies, it is ideal for systems programming, backend services, command-line tools, and performance-critical applications.
               </p>
            </div>
         </Reveal>

         <Reveal delay={100}>
            <div className="my-16">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Why ProXPL?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { icon: <Terminal className="w-5 h-5" />, title: "Familiar Syntax", desc: "Clean, expressive syntax inspired by JavaScript and Python." },
                        { icon: <Zap className="w-5 h-5" />, title: "True Performance", desc: "Bytecode compilation to a stack-based VM with LLVM backend support." },
                        { icon: <Shield className="w-5 h-5" />, title: "Type Safety", desc: "Static typing with intelligent type inference prevents runtime errors." },
                        { icon: <Box className="w-5 h-5" />, title: "Batteries Included", desc: "75+ built-in standard library functions covering I/O, math, collections, and more." },
                        { icon: <Server className="w-5 h-5" />, title: "Integrated Tooling", desc: "Built-in package manager (PRM), CLI tools, and LSP support." },
                        { icon: <Layers className="w-5 h-5" />, title: "Professional Architecture", desc: "Clean separation between lexer, parser, type checker, compiler, and VM." }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-dark-800/50 p-6 rounded-xl border border-slate-200 dark:border-white/5 hover:border-brand-500/30 transition-colors group">
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                                <span className="p-2 rounded-lg bg-white dark:bg-white/5 text-brand-600 dark:text-brand-400 mr-3 group-hover:scale-110 transition-transform shadow-sm">{item.icon}</span> 
                                {item.title}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
         </Reveal>

         <Reveal delay={200}>
            <div className="my-16">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Architecture Overview</h3>
                <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 overflow-x-auto shadow-2xl">
                    <div className="min-w-[700px] flex items-center justify-between text-xs font-mono text-slate-300">
                        {/* Front End */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2 p-3 bg-slate-800/80 rounded-lg border border-slate-700 shadow-sm w-32 justify-center">
                                <FileCode className="w-4 h-4 text-blue-400" /> Source
                            </div>
                            <div className="h-6 w-px bg-slate-700"></div>
                            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 shadow-sm w-32 text-center">Lexer</div>
                            <div className="h-6 w-px bg-slate-700"></div>
                            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 shadow-sm w-32 text-center">Parser (AST)</div>
                        </div>

                        <div className="h-px flex-1 bg-slate-700 mx-4 relative">
                            <div className="absolute right-0 -top-1 w-2 h-2 bg-slate-700 rotate-45"></div>
                        </div>

                        {/* Middle End */}
                         <div className="flex flex-col items-center gap-3">
                            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 shadow-sm w-32 text-center">Type Checker</div>
                            <div className="h-6 w-px bg-slate-700"></div>
                            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 shadow-sm w-32 text-center">IR Gen (SSA)</div>
                            <div className="h-6 w-px bg-slate-700"></div>
                            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 shadow-sm w-32 text-center">Optimizer</div>
                        </div>

                        <div className="h-px flex-1 bg-slate-700 mx-4"></div>

                        {/* Back End */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                                <div className="p-3 bg-brand-900/30 text-brand-300 rounded-lg border border-brand-500/30 w-40 text-center shadow-lg shadow-brand-900/10">
                                    <span className="font-bold block mb-1">Bytecode</span>
                                    Stack VM
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                                <div className="p-3 bg-purple-900/30 text-purple-300 rounded-lg border border-purple-500/30 w-40 text-center shadow-lg shadow-purple-900/10">
                                    <span className="font-bold block mb-1">LLVM Backend</span>
                                    Native Binary
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-start gap-4 p-4 bg-brand-50 dark:bg-brand-900/10 rounded-lg border border-brand-200 dark:border-brand-500/20">
                     <Cpu className="w-5 h-5 text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0" />
                     <p className="text-sm text-slate-700 dark:text-slate-300">
                        ProXPL uses a multi-phase compiler pipeline. It can execute code immediately via its custom <strong>Stack-Based Virtual Machine</strong> or compile ahead-of-time (AOT) to machine code using <strong>LLVM</strong> for maximum performance.
                     </p>
                </div>
            </div>
         </Reveal>

         <Reveal delay={300}>
            <div className="border-t border-slate-200 dark:border-white/5 pt-12">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                   <Map className="w-6 h-6 mr-3 text-brand-500" /> Project Roadmap
               </h3>
               
               <div className="space-y-10 relative border-l-2 border-slate-200 dark:border-slate-800 ml-3.5">
                  {[
                      { version: "v1.0.0", date: "Dec 2024", status: "Released", title: "Production-Ready Core", items: ["Complete compiler pipeline (Lexer → Codegen)", "Stack-based VM with bytecode execution", "LLVM backend for AOT compilation", "75+ standard library functions", "Mark-and-sweep Garbage Collector", "Basic Module system & PRM"] },
                      { version: "v1.1.0", date: "Q1 2025", status: "Upcoming", title: "Dev Experience & System APIs", items: ["Advanced Diagnostics with column tracking", "VS Code Extension (Hover, Snippets)", "Expanded std.fs and std.sys", "LSP foundation to functional Server", "PRM Remote GitHub Support"] },
                      { version: "v1.2.0", date: "Q2 2025", status: "Planned", title: "OOP & Ecosystem", items: ["Class-based OOP with inheritance", "Access modifiers (pub, priv)", "ProX Studio Alpha IDE"] },
                      { version: "v1.3.0", date: "Q3 2025", status: "Planned", title: "Advanced Features", items: ["Pattern matching & Enums", "Generics & Traits", "Option/Result error types"] },
                      { version: "v2.0.0", date: "Q4 2025+", status: "Future", title: "Concurrency & Integration", items: ["ProX Studio Stable Release", "Async/Await & Actor Model", "FFI & WebAssembly Target", "JIT Compilation"] }
                  ].map((milestone, idx) => (
                      <div key={idx} className="pl-8 relative">
                          <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${milestone.status === 'Released' ? 'bg-brand-500 border-brand-500' : 'bg-slate-50 dark:bg-dark-900 border-slate-300 dark:border-slate-600'}`}></div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                              <span className="font-mono font-bold text-lg text-brand-600 dark:text-brand-400">{milestone.version}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded">{milestone.date}</span>
                                {milestone.status === "Released" && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300">RELEASED</span>}
                                {milestone.status === "Upcoming" && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">IN PROGRESS</span>}
                              </div>
                          </div>
                          
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{milestone.title}</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {milestone.items.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                    <GitMerge className="w-3.5 h-3.5 mr-2 mt-1 text-slate-400 flex-shrink-0" />
                                    {item}
                                </li>
                              ))}
                          </ul>
                      </div>
                  ))}
               </div>
            </div>
         </Reveal>
       </div>
    </section>
  );
};