import React from 'react';
import { Zap, Shield, Code2, Terminal, Cpu, Heart } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  {
    title: "Built from Scratch",
    description: "No legacy bloat. ProXPL is architected from the ground up to solve modern programming challenges with a fresh perspective.",
    icon: <Code2 className="w-6 h-6 text-brand-500 dark:text-brand-400" />,
    gradient: "from-brand-400/20 to-blue-500/20"
  },
  {
    title: "Simple & Expressive",
    description: "Clean syntax that gets out of your way. Write less boilerplate and focus on solving the actual problem.",
    icon: <Terminal className="w-6 h-6 text-green-500 dark:text-green-400" />,
    gradient: "from-green-400/20 to-emerald-500/20"
  },
  {
    title: "High Performance",
    description: "Designed for speed. ProXPL aims to provide performance comparable to C and C++ while maintaining safety.",
    icon: <Zap className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />,
    gradient: "from-yellow-400/20 to-orange-500/20"
  },
  {
    title: "Memory Safety",
    description: "Robust memory management features ensuring your applications are stable and free from common memory leaks.",
    icon: <Shield className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    gradient: "from-purple-400/20 to-pink-500/20"
  },
  {
    title: "Cross Platform",
    description: "Write once, run anywhere. ProXPL supports major operating systems including Windows, Linux, and macOS.",
    icon: <Cpu className="w-6 h-6 text-red-500 dark:text-red-400" />,
    gradient: "from-red-400/20 to-rose-500/20"
  },
  {
    title: "Open Source",
    description: "Driven by the community. Join the development on GitHub and contribute to the future of ProXPL.",
    icon: <Heart className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
    gradient: "from-pink-400/20 to-rose-500/20"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-dark-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                ProXPL combines the best aspects of modern languages into a cohesive, powerful toolset.
            </p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Reveal key={idx} delay={idx * 100}>
                <div 
                className="group relative p-8 rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden h-full"
                >
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-dark-700 rounded-lg flex items-center justify-center mb-6 shadow-inner">
                    {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                    {feature.description}
                    </p>
                </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};