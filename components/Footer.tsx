import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-white/5 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
             <span className="text-xl font-bold text-slate-900 dark:text-white">Pro<span className="text-brand-500 dark:text-brand-400">XPL</span></span>
             <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
               Empowering developers to build the next generation of high-performance software.
             </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/docs" className="hover:text-brand-600 dark:hover:text-brand-400">Documentation</Link></li>
              <li><Link to="/stdlib" className="hover:text-brand-600 dark:hover:text-brand-400">Standard Library</Link></li>
              <li><Link to="/tutorials" className="hover:text-brand-600 dark:hover:text-brand-400">Tutorials</Link></li>
              <li><Link to="/releases" className="hover:text-brand-600 dark:hover:text-brand-400">Releases</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="https://github.com/ProgrammerKR/ProXPL" target="_blank" rel="noreferrer" className="hover:text-brand-600 dark:hover:text-brand-400">GitHub</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Discord</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Twitter</a></li>
              <li><Link to="/events" className="hover:text-brand-600 dark:hover:text-brand-400">Events</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Legal</h4>
             <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/privacy" className="hover:text-brand-600 dark:hover:text-brand-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-600 dark:hover:text-brand-400">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-brand-600 dark:hover:text-brand-400">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center">
           <p className="text-slate-500 text-sm">© 2024 ProXPL Foundation. All rights reserved.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
             <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
             <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><MessageCircle className="w-5 h-5"/></a>
           </div>
        </div>
      </div>
    </footer>
  );
};