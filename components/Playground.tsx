import React, { useState, useRef, useEffect } from 'react';
import { Play, Sparkles, RefreshCw, Terminal, AlertCircle, Code2, LayoutTemplate, Trash2, Copy, Check, Activity } from 'lucide-react';
import { generateProXPLContent } from '../services/geminiService';
import { Button } from './Button';
import { EXAMPLE_CODE_SNIPPETS, APP_VERSION } from '../constants';
import { Reveal } from './Reveal';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';

// Define ProXPL Grammar for Prism
const proxplGrammar = {
    'comment': [
        { pattern: /\/\/.*|(\/\*[\s\S]*?\*\/)/, greedy: true }
    ],
    'string': {
        pattern: /"(?:[^\\"]|\\.)*"/,
        greedy: true
    },
    'keyword': /\b(func|let|if|else|while|for|return|async|await|use|print|input|break|continue|match|struct|impl|pub|priv|const)\b/,
    'boolean': /\b(true|false)\b/,
    'function': /\b\w+(?=\()/,
    'number': /\b\d+(\.\d+)?\b/,
    'operator': /[+\-*/=<>!&|^%]+/,
    'punctuation': /[{}[\];(),.:]/,
    'class-name': /\b[A-Z]\w*/
};

export const Playground: React.FC = () => {
  const [inputCode, setInputCode] = useState(EXAMPLE_CODE_SNIPPETS.helloWorld);
  const [output, setOutput] = useState<string>("// Output will appear here...");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'ready' | 'compiling' | 'success' | 'error'>('ready');
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  // Sync scroll between editor container and line numbers
  const handleScroll = () => {
    if (scrollContainerRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = scrollContainerRef.current.scrollTop;
    }
  };

  const handleAiGeneration = async () => {
    if (!prompt.trim()) return;
    setIsAiLoading(true);
    setStatus('compiling'); 
    
    const fullPrompt = `User Request: "${prompt}". \n\nPlease generate a valid ProXPL code snippet that solves this. Only return the code, no markdown backticks if possible, or minimal explanation.`;
    
    const result = await generateProXPLContent(fullPrompt);
    const cleanCode = result.replace(/```(proxpl|rust|go)?/g, '').replace(/```/g, '');
    
    setInputCode(cleanCode.trim());
    setIsAiLoading(false);
    setStatus('ready');
  };

  const runCode = () => {
    setOutput("Compiling...");
    setStatus('compiling');
    
    setTimeout(() => {
        if (inputCode.includes("error") || inputCode.includes("panic")) {
             setOutput(`Error: Compilation failed.\n  --> main.prox:4:5\n  |\n4 |     invalid_syntax\n  |     ^^^^^^^^^^^^^^ expected ';', found identifier`);
             setStatus('error');
        } else {
             // Extract print content or simulate generic success
             const printMatch = inputCode.match(/print\("(.+?)"\)/);
             let simulatedOutput = "Program execution completed successfully.";
             
             if (printMatch) simulatedOutput = printMatch[1];
             else if (inputCode.includes("Fibonacci")) simulatedOutput = "Fibonacci sequence up to 10:\n0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n55";
             else if (inputCode.includes("User {")) simulatedOutput = "Welcome, admin";
             else if (inputCode.includes("Main thread")) simulatedOutput = "Main thread start\nMain thread end\nBackground task running...";
             else if (inputCode.includes("match status")) simulatedOutput = "OK";

             setOutput(`> Compiling proxpl ${APP_VERSION}\n> Finished dev [unoptimized + debuginfo] target(s) in 0.42s\n> Running \`target/debug/main\`\n\n${simulatedOutput}`);
             setStatus('success');
        }
    }, 800);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(inputCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearOutput = () => {
    setOutput("// Output will appear here...");
    setStatus('ready');
  };

  const formatPresetName = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
  };

  // Generate line numbers
  const lines = inputCode.split('\n');
  const lineNumbers = Array.from({ length: Math.max(lines.length, 15) }, (_, i) => i + 1);

  return (
    <section id="playground" className="py-24 bg-slate-50 dark:bg-[#0B1120] border-t border-slate-200 dark:border-white/5 transition-colors duration-300 min-h-screen relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
            <div className="flex flex-col items-center justify-center text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 bg-brand-100 dark:bg-brand-500/10 rounded-2xl mb-6">
                    <Terminal className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    Interactive Playground
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
                    Experience the power of ProXPL ({APP_VERSION}) directly in your browser. 
                    Write code manually or ask our AI Architect to generate optimized snippets.
                </p>

                {/* Dynamic Preset Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm max-w-3xl">
                    <span className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider hidden md:inline-block">Presets:</span>
                    {Object.entries(EXAMPLE_CODE_SNIPPETS).map(([key, code]) => (
                      <button 
                          key={key}
                          onClick={() => {
                            setInputCode(code);
                            setStatus('ready');
                          }} 
                          className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 rounded-lg transition-all flex items-center border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                      >
                          {key === 'helloWorld' ? <LayoutTemplate className="w-3 h-3 mr-1.5" /> : <Code2 className="w-3 h-3 mr-1.5" />} 
                          {formatPresetName(key)}
                      </button>
                    ))}
                </div>
            </div>
        </Reveal>

        {/* AI Prompt Bar */}
        <Reveal delay={100}>
            <div className="max-w-4xl mx-auto mb-10">
                <div className="group relative bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-brand-500/20 rounded-2xl p-2 pl-4 flex flex-col sm:flex-row gap-3 items-center shadow-lg dark:shadow-brand-900/10 focus-within:ring-2 focus-within:ring-brand-500/50 transition-all">
                    <div className="p-2 bg-brand-50 dark:bg-brand-500/20 rounded-xl">
                        <Sparkles className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <input 
                        type="text" 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Ask AI: 'Write a struct for a User and a method to print details'"
                        className="flex-1 bg-transparent border-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-0 text-base w-full outline-none py-2"
                        onKeyDown={(e) => e.key === 'Enter' && handleAiGeneration()}
                    />
                    <Button 
                        variant="primary" 
                        size="md" 
                        onClick={handleAiGeneration} 
                        disabled={isAiLoading || !prompt}
                        className="w-full sm:w-auto rounded-xl whitespace-nowrap"
                    >
                        {isAiLoading ? <RefreshCw className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
                        Generate
                    </Button>
                </div>
            </div>
        </Reveal>

        <Reveal delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-2xl bg-[#1e1e1e]">
                
                {/* Editor Pane */}
                <div className="flex flex-col h-[600px] border-r border-[#333] bg-[#1e1e1e]">
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-3 bg-[#252526] border-b border-[#1e1e1e]">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors"></div>
                        </div>
                        <span className="text-xs font-mono text-slate-400 select-none flex items-center gap-2">
                           <FileCodeIcon className="w-3 h-3" /> main.prox
                        </span>
                        <div className="flex items-center gap-2">
                           <button onClick={handleCopyCode} className="text-slate-400 hover:text-white transition-colors" title="Copy Code">
                             {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                           </button>
                        </div>
                    </div>
                    
                    {/* Code Area with Line Numbers */}
                    <div className="flex-1 relative group flex overflow-hidden">
                        {/* Line Numbers */}
                        <div 
                            ref={lineNumbersRef}
                            className="hidden sm:block w-14 bg-[#1e1e1e] border-r border-[#333]/30 text-right text-[#6e7681] font-mono text-sm leading-6 pt-4 px-3 select-none overflow-hidden"
                            style={{ paddingTop: '24px' }}
                        >
                            {lineNumbers.map((num) => (
                              <div key={num}>{num}</div>
                            ))}
                        </div>

                        {/* Editor Container */}
                        <div 
                            ref={scrollContainerRef}
                            className="flex-1 h-full overflow-auto custom-scrollbar bg-[#1e1e1e]"
                            onScroll={handleScroll}
                        >
                            <Editor
                                value={inputCode}
                                onValueChange={setInputCode}
                                highlight={code => Prism.highlight(code, proxplGrammar, 'proxpl')}
                                padding={24}
                                className="font-mono text-sm prism-editor"
                                style={{
                                    fontFamily: '"JetBrains Mono", monospace',
                                    fontSize: 14,
                                    lineHeight: '1.5rem', // leading-6 equivalent
                                    minHeight: '100%',
                                }}
                                textareaClassName="focus:outline-none"
                            />
                        </div>

                        {/* Floating Run Button */}
                        <div className="absolute top-4 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                             <Button variant="ghost" size="sm" onClick={runCode} className="text-green-400 hover:text-green-300 bg-green-900/20 hover:bg-green-900/40 border border-green-500/30 backdrop-blur-md">
                                <Play className="w-4 h-4 mr-1.5" /> Run
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Console Pane */}
                <div className="flex flex-col h-[600px] bg-[#0d1117]">
                    <div className="flex items-center justify-between px-5 py-3 bg-[#161b22] border-b border-[#30363d]">
                        <div className="flex items-center gap-3">
                          <Terminal className="w-4 h-4 text-slate-500" />
                          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Terminal</span>
                          <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
                              status === 'ready' ? 'border-slate-700 text-slate-500' :
                              status === 'compiling' ? 'border-yellow-900/50 text-yellow-500 bg-yellow-900/10' :
                              status === 'success' ? 'border-green-900/50 text-green-500 bg-green-900/10' :
                              'border-red-900/50 text-red-500 bg-red-900/10'
                          }`}>
                              <Activity className="w-3 h-3" /> {status}
                          </div>
                        </div>
                        <button onClick={clearOutput} className="text-slate-500 hover:text-slate-300 transition-colors" title="Clear Console">
                           <Trash2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                    <div className="flex-1 p-6 font-mono text-sm text-slate-300 overflow-auto custom-scrollbar bg-[#0d1117]">
                        <pre key={output} className="whitespace-pre-wrap font-mono text-sm leading-6 animate-fade-in">
                            {output.startsWith('>') ? (
                                <div>
                                    <span className="text-slate-500">{output.split('\n').slice(0, 3).join('\n')}</span>
                                    <div className={`mt-4 border-l-2 pl-3 ${status === 'error' ? 'text-red-400 border-red-900' : 'text-green-400 border-green-900'}`}>
                                        {output.split('\n').slice(3).join('\n')}
                                    </div>
                                </div>
                            ) : output.includes('Error') ? (
                                <span className="text-red-400">{output}</span>
                            ) : (
                                <span className="text-slate-500 italic">{output}</span>
                            )}
                        </pre>
                        <div className="mt-2 inline-block w-2 h-4 bg-brand-500 animate-pulse align-middle"></div>
                    </div>
                </div>
            </div>
        </Reveal>
        
        <Reveal delay={300}>
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 dark:text-slate-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <p>Running on ProXPL Compiler {APP_VERSION}.</p>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

function FileCodeIcon({className}: {className?: string}) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    )
}