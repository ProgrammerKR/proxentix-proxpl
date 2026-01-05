import React, { useState, useEffect } from 'react';
import { Book, Code, Terminal, Layers, ArrowRight, FileText, Search, ChevronLeft, ChevronRight, Menu, X, Hash, Server, Shield, Cpu, Database, Box } from 'lucide-react';
import { Reveal } from './Reveal';

// --- Documentation Data Structure ---

const docCategories = [
  {
    title: "1. Introduction",
    icon: <Book className="w-5 h-5" />,
    links: ["About ProXPL", "Why ProXPL?", "Key Features", "Quick Start", "Installation"]
  },
  {
    title: "2. Language Core",
    icon: <Code className="w-5 h-5" />,
    links: ["Variables & Primitives", "Collections", "Functions", "Control Flow", "Async/Await"]
  },
  {
    title: "3. Modules & System",
    icon: <Layers className="w-5 h-5" />,
    links: ["Module System", "Standard Library Overview"]
  },
  {
    title: "4. Standard Library",
    icon: <Server className="w-5 h-5" />,
    links: ["std.io", "std.fs", "std.math", "std.sys", "std.net", "std.time"]
  },
  {
    title: "5. Package Manager",
    icon: <Box className="w-5 h-5" />,
    links: ["PRM Overview", "PRM Commands", "Project Structure"]
  },
  {
    title: "6. Architecture",
    icon: <Cpu className="w-5 h-5" />,
    links: ["Architecture Overview", "Compilation Pipeline", "Virtual Machine", "Project File Structure"]
  },
  {
    title: "7. Roadmap",
    icon: <ArrowRight className="w-5 h-5" />,
    links: ["Current Status", "Upcoming Features", "Future Plans"]
  },
  {
    title: "8. Contributing",
    icon: <Shield className="w-5 h-5" />,
    links: ["How to Contribute", "Areas for Contribution", "License"]
  }
];

// Helper to get next/prev links
const flatLinks = docCategories.flatMap(c => c.links);

const CodeBlock = ({ code, language = 'javascript', title }: { code: string, language?: string, title?: string }) => (
  <div className="my-6 rounded-lg overflow-hidden bg-[#1e1e1e] border border-slate-700 shadow-xl">
    <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#333]">
      <div className="flex items-center gap-2">
        {title && <span className="text-xs text-slate-300 font-medium mr-2">{title}</span>}
        <span className="text-xs font-mono text-slate-500">{language}</span>
      </div>
      <div className="flex space-x-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
      </div>
    </div>
    <div className="p-5 overflow-x-auto">
      <pre className="font-mono text-sm leading-relaxed text-[#d4d4d4]">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

// --- Content Database ---
const DOC_CONTENT: Record<string, { title: string; content: React.ReactNode }> = {
  // --- 1. Introduction ---
  "About ProXPL": {
    title: "About ProXPL",
    content: (
      <>
        <p><strong>ProXPL</strong> (ProX Programming Language) is a modern, statically-typed programming language designed for <strong>clarity, performance, and reliability</strong>.</p>
        <p>Born from a vision to combine Python's readability with C's execution speed, ProXPL features a professional compiler architecture with a custom bytecode VM, comprehensive type system, and integrated package management.</p>
        <p>ProXPL is implemented entirely in C/C++ with zero runtime dependencies, making it ideal for systems programming, backend services, command-line tools, and performance-critical applications.</p>
      </>
    )
  },
  "Why ProXPL?": {
    title: "Why ProXPL?",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>🎯 Familiar Syntax</strong>: Clean, expressive syntax inspired by JavaScript and Python.</li>
          <li><strong>⚡ True Performance</strong>: Bytecode compilation to a stack-based VM with LLVM backend for AOT compilation.</li>
          <li><strong>🛡️ Type Safety</strong>: Static typing with intelligent type inference prevents entire classes of runtime errors.</li>
          <li><strong>🔧 Batteries Included</strong>: 75+ built-in standard library functions covering I/O, math, strings, collections, and system operations.</li>
          <li><strong>📦 Integrated Tooling</strong>: Built-in package manager (PRM), CLI tools, and LSP support.</li>
          <li><strong>🏗️ Professional Architecture</strong>: Clean separation between lexer, parser, type checker, compiler, and VM.</li>
        </ul>
      </>
    )
  },
  "Key Features": {
    title: "Key Features",
    content: (
      <>
        <p>ProXPL combines the best of modern language design:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg"><strong>🔤 Modern Syntax</strong>: JavaScript-like syntax with curly braces.</div>
          <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg"><strong>⚡ Fast Execution</strong>: Custom stack-based VM & LLVM AOT.</div>
          <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg"><strong>📦 Rich StdLib</strong>: 75+ native functions.</div>
          <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg"><strong>🛡️ Static Type System</strong>: Compile-time checks.</div>
          <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg"><strong>🔧 PRM Package Manager</strong>: Built-in dependency management.</div>
          <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg"><strong>⏩ Async/Await</strong>: Native asynchronous support.</div>
        </div>
      </>
    )
  },
  "Quick Start": {
    title: "Quick Start",
    content: (
      <>
        <h3>Your First Program</h3>
        <p>Create a file named <code>hello.prox</code>:</p>
        <CodeBlock code={`// hello.prox
// Your first ProXPL program

func main() {
    print("Welcome to ProXPL!");
    
    let name = input("What is your name? ");
    print("Hello, " + name + "!");
    
    // Generate a random lucky number
    let lucky = random(1, 100);
    print("Here is a lucky number for you: " + to_string(lucky));
}

main();`} title="hello.prox" />
        <h3>Run It</h3>
        <p>Using the ProXPL CLI:</p>
        <CodeBlock code="prox run hello.prox" language="bash" />
        <p>Or using the compiled executable:</p>
        <CodeBlock code="./proxpl hello.prox" language="bash" />
      </>
    )
  },
  "Installation": {
    title: "Installation",
    content: (
      <>
        <h3>Option 1: Pre-built Binaries (Recommended)</h3>
        <p>Download the latest release for your operating system from the <a href="https://github.com/ProgrammerKR/ProXPL/releases/latest" className="text-brand-500 hover:underline">Releases Page</a>.</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><strong>Windows</strong>: <code>proxpl.exe</code></li>
          <li><strong>Linux</strong>: <code>proxpl</code></li>
          <li><strong>macOS</strong>: <code>proxpl-macos</code></li>
        </ul>
        <p>Add the executable to your system <code>PATH</code> for global access.</p>

        <h3>Option 2: Build from Source</h3>
        <p><strong>Requirements:</strong> C/C++ Compiler (GCC 9+, Clang 10+, or MSVC 2019+), CMake 3.15+, LLVM 10+, Git.</p>
        <CodeBlock code={`# Clone the repository
git clone https://github.com/ProgrammerKR/ProXPL.git
cd ProXPL

# Create build directory
mkdir build && cd build

# Configure with CMake
cmake -DCMAKE_BUILD_TYPE=Release ..

# Build the project
make`} language="bash" />
      </>
    )
  },

  // --- 2. Language Core ---
  "Variables & Primitives": {
    title: "Variables & Primitives",
    content: (
      <>
        <p>ProXPL supports core data types with static type checking.</p>
        <CodeBlock code={`// Primitives
let count = 42;              // Integer
let price = 19.99;           // Float
let active = true;           // Boolean
let message = "Hello!";      // String

// Type inference works automatically
let auto = 100;  // Inferred as Integer`} />
      </>
    )
  },
  "Collections": {
    title: "Collections",
    content: (
      <>
        <p>ProXPL provides robust collection types like Lists and Dictionaries.</p>
        <h3>Lists</h3>
        <CodeBlock code={`let numbers = [1, 2, 3, 4, 5];
let first = numbers[0];     // Access by index
push(numbers, 6);           // Add element
let size = length(numbers); // Get size`} />
        <h3>Dictionaries</h3>
        <CodeBlock code={`let config = {"host": "localhost", "port": 8080};
config["debug"] = true;     // Add key
let host = config["host"];  // Access value`} />
      </>
    )
  },
  "Functions": {
    title: "Functions",
    content: (
      <>
        <p>Functions are defined using the <code>func</code> keyword.</p>
        <CodeBlock code={`func fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Call the function
let result = fibonacci(10);`} />
      </>
    )
  },
  "Control Flow": {
    title: "Control Flow",
    content: (
      <>
        <h3>For Loops</h3>
        <CodeBlock code={`for (let i = 0; i < 10; i = i + 1) {
    print("Count: " + to_string(i));
}`} />
        <h3>While Loops</h3>
        <CodeBlock code={`let count = 0;
while (count < 5) {
    print("Count: " + to_string(count));
    count = count + 1;
}`} />
      </>
    )
  },
  "Async/Await": {
    title: "Async/Await",
    content: (
      <>
        <p>ProXPL supports native asynchronous programming with LLVM Coroutines support.</p>
        <CodeBlock code={`async func fetchUser(id) {
    // Simulate non-blocking operation
    return {"id": id, "name": "User" + to_string(id)};
}

async func main() {
    print("Fetching user...");
    let user = await fetchUser(42);
    print("Got user: " + user["name"]);
}`} />
      </>
    )
  },

  // --- 3. Modules & System ---
  "Module System": {
    title: "Module System",
    content: (
      <>
        <p>ProXPL uses the <code>use</code> keyword for modular programming. You can import standard libraries, packages, or local files.</p>
        <CodeBlock code={`// Import standard library module
use std.math;

// Import from installed package
use http.client;

// Import local file (relative path)
use local_helper;

func main() {
    let result = std.math.sqrt(16);
    print("Result: " + to_string(result));
}`} />
      </>
    )
  },
  "Standard Library Overview": {
    title: "Standard Library Overview",
    content: (
      <>
        <p>The standard library provides 75+ built-in functions.</p>
        <CodeBlock code={`use std.io;
use std.fs;
use std.sys;

// File I/O
let content = read_file("data.txt");
write_file("output.txt", "Hello from ProXPL!");

// Math
let result = sqrt(144);
let power = pow(2, 8);

// System
let env_var = env("PATH");
let current_time = time();`} />
      </>
    )
  },

  // --- 4. Standard Library ---
  "std.io": {
    title: "std.io",
    content: (
      <>
        <p>The <strong>Input/Output</strong> module provides core functionality for interacting with the console and standard streams.</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><code>print(message)</code>: Output text to stdout with a newline.</li>
          <li><code>input(prompt)</code>: Read a line of text from stdin with an optional prompt.</li>
          <li><code>eprint(message)</code>: Output error messages to stderr.</li>
        </ul>
      </>
    )
  },
  "std.fs": {
    title: "std.fs",
    content: (
      <>
        <p>The <strong>File System</strong> module enables reading from and writing to the local file system.</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><code>read_file(path)</code>: Read the entire contents of a file as a string.</li>
          <li><code>write_file(path, content)</code>: Write string content to a file, creating it if it doesn't exist.</li>
          <li><code>append_file(path, content)</code>: Append content to the end of a file.</li>
          <li><code>exists(path)</code>: Check if a file or directory exists.</li>
        </ul>
      </>
    )
  },
  "std.math": {
    title: "std.math",
    content: (
      <>
        <p>The <strong>Math</strong> module includes common mathematical functions and constants.</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><code>sqrt(n)</code>, <code>pow(base, exp)</code>, <code>abs(n)</code></li>
          <li><code>sin(x)</code>, <code>cos(x)</code>, <code>tan(x)</code>, <code>log(x)</code>, <code>log10(x)</code></li>
          <li><code>random(min, max)</code>: Generate a pseudo-random integer.</li>
          <li><code>PI</code>, <code>E</code>: Common constants.</li>
        </ul>
      </>
    )
  },
  "std.sys": {
    title: "std.sys",
    content: (
      <>
        <p>System-level operations for environment and process management.</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><code>env(key)</code>: Retrieve the value of an environment variable.</li>
          <li><code>exit(code)</code>: Terminate the program with a specific exit code.</li>
          <li><code>args()</code>: Get command-line arguments as a list.</li>
          <li><code>time()</code>: Get the current system timestamp.</li>
        </ul>
      </>
    )
  },
  "std.net": {
    title: "std.net (Experimental)",
    content: (
      <>
        <p>Networking capabilities for building TCP clients and servers.</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><code>socket_create()</code>, <code>socket_bind()</code>, <code>socket_listen()</code></li>
          <li><code>http_get(url)</code>: Simple HTTP GET request helper.</li>
        </ul>
      </>
    )
  },
  "std.time": {
    title: "std.time",
    content: (
      <>
        <p>Utilities for time manipulation and performance measurement.</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><code>sleep(ms)</code>: Pause execution for a specified number of milliseconds.</li>
          <li><code>now()</code>: High-resolution monotonic clock for benchmarking.</li>
        </ul>
      </>
    )
  },

  // --- 5. Package Manager ---
  "PRM Overview": {
    title: "PRM Overview",
    content: (
      <>
        <p>ProXPL includes <strong>PRM</strong> (ProX Repository Manager), a built-in tool for dependency management and project scaffolding.</p>
      </>
    )
  },
  "PRM Commands": {
    title: "PRM Commands",
    content: (
      <>
        <CodeBlock code={`# Initialize a new project
prm init my-project

# Install a package
prm install http-server

# List installed packages
prm list

# Search for packages
prm search json

# Update dependencies
prm update

# Remove a package
prm remove old-package`} language="bash" />
      </>
    )
  },
  "Project Structure": {
    title: "Project Structure",
    content: (
      <>
        <p>A project is defined by a <code>prox.toml</code> file.</p>
        <CodeBlock code={`[package]
name = "my-web-server"
version = "1.0.0"
authors = ["Your Name <you@example.com>"]
edition = "2025"
description = "A fast web server built with ProXPL"
license = "MIT"

[dependencies]
http_parser = "2.1.0"
json = "1.5.0"

[build]
target = "native"
optimize = true`} language="toml" />
      </>
    )
  },

  // --- 6. Architecture ---
  "Architecture Overview": {
    title: "Architecture Overview",
    content: (
      <>
        <p>ProXPL follows a professional multi-phase compiler architecture.</p>
        <CodeBlock code={`Source (.prox) 
  ↓
Scanner/Lexer
  ↓
Parser (AST)
  ↓
Type Checker
  ↓
IR Generator (SSA)
  ↓
SSA Optimizer
  ↓
[Compilation Mode] -> Bytecode -> Stack VM
                   -> LLVM Backend -> Native Binary`} language="text" />
      </>
    )
  },
  "Compilation Pipeline": {
    title: "Compilation Pipeline",
    content: (
      <>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Lexical Analysis</strong>: Source code is tokenized into meaningful symbols.</li>
          <li><strong>Syntax Analysis</strong>: Tokens are parsed into an Abstract Syntax Tree (AST).</li>
          <li><strong>Semantic Analysis</strong>: Type checking and semantic validation.</li>
          <li><strong>IR Generation</strong>: AST is lowered to SSA-based intermediate representation.</li>
          <li><strong>Optimization</strong>: IR optimizations (constant folding, dead code elimination).</li>
          <li><strong>Code Generation</strong>: Generating Bytecode or LLVM IR.</li>
          <li><strong>Execution</strong>: VM execution or Native binary execution.</li>
        </ol>
      </>
    )
  },
  "Virtual Machine": {
    title: "Virtual Machine",
    content: <p>A stack-based VM that executes optimized bytecode, featuring a Mark-and-Sweep Garbage Collector for automatic memory management.</p>
  },
  "Project File Structure": {
    title: "Project File Structure",
    content: (
      <>
        <CodeBlock code={`ProXPL/
├── include/                  # Public header files
├── src/
│   ├── main.c                # Entry point
│   ├── lexer/                # Lexical analysis
│   ├── parser/               # Syntax analysis
│   ├── compiler/             # Code generation
│   ├── runtime/              # Runtime system (VM, GC)
│   ├── stdlib/               # Standard library (native)
│   └── prm/                  # Package manager
├── lib/std/                  # Standard library (ProXPL)
└── docs/                     # Documentation`} language="text" />
      </>
    )
  },

  // --- 7. Roadmap ---
  "Current Status": {
    title: "Current Status (v1.0.0 - Alpha)",
    content: (
      <>
        <h3>Released Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>✅ <strong>Class-based OOP</strong>: First-class support for Classes, Objects, Inheritance, and Interfaces.</li>
          <li>✅ <strong>Runtime Architecture</strong>: Enhanced VM with Class, Instance, and BoundMethod support.</li>
          <li>✅ <strong>New Keywords</strong>: <code>class</code>, <code>new</code>, <code>this</code>, <code>extends</code>, <code>interface</code>, <code>static</code>.</li>
          <li>✅ <strong>Inheritance</strong>: Single inheritance model with superclass method lookup.</li>
        </ul>
      </>
    )
  },
  "Upcoming Features": {
    title: "Upcoming Features (v1.1.0)",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>📋 <strong>Access Control</strong>: <code>pub</code>/<code>priv</code> visibility enforcement.</li>
          <li>📋 <strong>Constructors</strong>: <code>init</code> constructor method.</li>
          <li>📋 <strong>Exception Handling</strong>: <code>try</code>/<code>catch</code> blocks.</li>
          <li>📋 <strong>Module System Refinements</strong>: Enhanced import resolution and cyclic dependency handling.</li>
        </ul>
      </>
    )
  },
  "Future Plans": {
    title: "Future Plans (2026+)",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>📋 <strong>v1.2.0</strong>: FFI Stability & ProX Studio Alpha.</li>
          <li>📋 <strong>v1.3.0</strong>: Pattern Matching, Enums, Generics.</li>
          <li>📋 <strong>v2.0.0</strong>: Async/Await overhaul, WebAssembly target, JIT compilation.</li>
        </ul>
      </>
    )
  },

  // --- 8. Contributing ---
  "How to Contribute": {
    title: "How to Contribute",
    content: (
      <>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Fork</strong> the repository.</li>
          <li>Create a feature branch (<code>git checkout -b feature/amazing-feature</code>).</li>
          <li>Follow the Coding Standards.</li>
          <li>Write tests for new features.</li>
          <li>Commit your changes.</li>
          <li>Push to the branch.</li>
          <li>Open a <strong>Pull Request</strong>.</li>
        </ol>
      </>
    )
  },
  "Areas for Contribution": {
    title: "Areas for Contribution",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>🐛 Bug fixes and stability improvements</li>
        <li>✨ New standard library functions</li>
        <li>📝 Documentation and tutorials</li>
        <li>⚡ Performance optimizations</li>
        <li>📦 Community packages</li>
      </ul>
    )
  },
  "License": {
    title: "License",
    content: <p>This project is licensed under the ProXPL Professional License - MIT.</p>
  }
};

export const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDoc, setActiveDoc] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (activeDoc) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeDoc]);

  const filteredCategories = docCategories.map(category => ({
    ...category,
    links: category.links.filter(link => {
      const term = searchQuery.toLowerCase();
      const titleMatch = link.toLowerCase().includes(term);
      const contentMatch = DOC_CONTENT[link]?.content?.toString().toLowerCase().includes(term);
      const categoryMatch = category.title.toLowerCase().includes(term);
      return term === '' || titleMatch || categoryMatch || (contentMatch && term.length > 3);
    })
  })).filter(cat => cat.links.length > 0);

  const handleDocClick = (link: string) => {
    setActiveDoc(link);
    setSearchQuery('');
    setIsMobileMenuOpen(false);
  };

  const getAdjacentLinks = (current: string) => {
    const idx = flatLinks.indexOf(current);
    return {
      prev: idx > 0 ? flatLinks[idx - 1] : null,
      next: idx < flatLinks.length - 1 ? flatLinks[idx + 1] : null
    };
  };

  const { prev, next } = activeDoc ? getAdjacentLinks(activeDoc) : { prev: null, next: null };

  if (activeDoc && DOC_CONTENT[activeDoc]) {
    const doc = DOC_CONTENT[activeDoc];
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 flex">
        <aside className={`fixed inset-y-0 left-0 pt-24 pb-8 w-72 bg-white dark:bg-[#0B1120] border-r border-slate-200 dark:border-white/5 overflow-y-auto transform transition-transform duration-300 z-30 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 custom-scrollbar`}>
          <div className="px-6 mb-6 md:hidden flex justify-between items-center">
            <span className="font-bold text-slate-900 dark:text-white">Documentation</span>
            <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-6 h-6 text-slate-500" /></button>
          </div>

          <div className="px-6 space-y-8">
            <button
              onClick={() => setActiveDoc(null)}
              className="flex items-center text-sm font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 mb-6 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" /> Back to Overview
            </button>

            {docCategories.map((cat, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center text-xs uppercase tracking-wider opacity-80">
                  {cat.title}
                </h4>
                <ul className="space-y-1 ml-1 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>
                  {cat.links.map(link => (
                    <li key={link}>
                      <button
                        onClick={() => handleDocClick(link)}
                        className={`relative block w-full text-left pl-4 py-2 text-sm transition-all duration-200 border-l-2 -ml-[1px] ${activeDoc === link
                          ? 'border-brand-500 text-brand-600 dark:text-brand-400 font-semibold bg-brand-50 dark:bg-brand-500/10 rounded-r-lg'
                          : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
                          }`}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="fixed bottom-20 right-4 z-40 p-3 bg-brand-600 text-white rounded-full shadow-lg md:hidden hover:bg-brand-500 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <main className="flex-1 md:ml-72 w-full max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
          <article className="prose prose-slate dark:prose-invert max-w-none prose-h1:text-4xl prose-h1:font-extrabold prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-7 prose-a:text-brand-500 hover:prose-a:text-brand-400 prose-code:text-brand-600 dark:prose-code:text-brand-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-strong:text-slate-900 dark:prose-strong:text-white">
            <div className="flex items-center space-x-2 text-sm text-brand-600 dark:text-brand-400 font-medium mb-4 uppercase tracking-wider">
              <Hash className="w-4 h-4" />
              <span>Documentation</span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-white/10 pb-6">
              {doc.title}
            </h1>
            {doc.content}
          </article>

          <div className="mt-20 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row justify-between gap-6">
            {prev ? (
              <button
                onClick={() => handleDocClick(prev)}
                className="flex-1 p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/50 hover:border-brand-500/50 hover:bg-slate-50 dark:hover:bg-brand-500/5 transition-all text-left group shadow-sm hover:shadow-md"
              >
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block mb-2">Previous Article</span>
                <div className="flex items-center text-lg text-slate-900 dark:text-white font-bold group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  <ChevronLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" /> {prev}
                </div>
              </button>
            ) : <div className="flex-1" />}

            {next && (
              <button
                onClick={() => handleDocClick(next)}
                className="flex-1 p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/50 hover:border-brand-500/50 hover:bg-slate-50 dark:hover:bg-brand-500/5 transition-all text-right group shadow-sm hover:shadow-md"
              >
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block mb-2">Next Article</span>
                <div className="flex items-center justify-end text-lg text-slate-900 dark:text-white font-bold group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {next} <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            )}
          </div>
        </main>
      </div>
    );
  }

  return (
    <section id="docs" className="py-24 bg-slate-50 dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-300 min-h-screen">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-100/50 dark:bg-brand-900/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-brand-100 dark:bg-brand-500/10 rounded-2xl mb-6">
              <Book className="w-8 h-8 text-brand-600 dark:text-brand-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Documentation</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Start your journey with ProXPL. The complete guide from basics to advanced systems programming.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} width="100%">
          <div className="max-w-2xl mx-auto mb-16 relative">
            <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-2 flex items-center shadow-lg dark:shadow-brand-900/5 focus-within:ring-2 focus-within:ring-brand-500/50 transition-all">
              <Search className="w-5 h-5 text-slate-400 ml-3 mr-2 group-focus-within:text-brand-500 transition-colors" />
              <input
                type="text"
                placeholder="Search topics, functions, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-slate-900 dark:text-white shadow-none focus:ring-0 placeholder-slate-400 py-2 text-base"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full mr-1 text-slate-400">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredCategories.map((category, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl p-8 hover:border-brand-500/30 transition-all group h-full shadow-sm hover:shadow-xl dark:shadow-brand-900/10 dark:hover:shadow-brand-900/20 relative overflow-hidden flex flex-col">

                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none" />

                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-white/5">
                      <span className="text-brand-600 dark:text-brand-400">{category.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{category.title}</h3>
                  </div>

                  <ul className="space-y-2 relative z-10 flex-1">
                    {category.links.map((link, i) => {
                      const isMatch = searchQuery && link.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <li key={i}>
                          <button
                            onClick={() => handleDocClick(link)}
                            className="flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors w-full text-left py-1.5 group/link"
                          >
                            <FileText className={`w-3.5 h-3.5 mr-2 transition-colors ${isMatch ? 'text-brand-500 opacity-100' : 'opacity-40 group-hover/link:text-brand-500 group-hover/link:opacity-100'}`} />
                            <span className={`${isMatch ? 'text-brand-600 dark:text-brand-400 font-bold bg-brand-50 dark:bg-brand-900/50 px-1 rounded' : ''} transition-all`}>
                              {link}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">No results found</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
                We couldn't find any articles matching "{searchQuery}". Try searching for keywords like "functions", "variables", or "install".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-6 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-medium bg-brand-50 dark:bg-brand-500/10 px-4 py-2 rounded-lg transition-colors"
              >
                Clear Search
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};