import React from 'react';
import { Home, Star, Terminal, Book, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { id: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: '/features', label: 'Features', icon: <Star className="w-5 h-5" /> },
    { id: '/playground', label: 'Code', icon: <Terminal className="w-5 h-5" /> },
    { id: '/docs', label: 'Docs', icon: <Book className="w-5 h-5" /> },
    { id: '/community', label: 'Social', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe">
      <div className="bg-white/90 dark:bg-dark-900/90 backdrop-blur-lg border-t border-slate-200 dark:border-white/10 px-4 pb-4 pt-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-2xl">
        <div className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.id;
            return (
                <Link
                key={item.id}
                to={item.id}
                className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
                    isActive
                    ? 'text-brand-600 dark:text-brand-400 scale-105' 
                    : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
                }`}
                >
                <div className={`p-1.5 rounded-full ${isActive ? 'bg-brand-50 dark:bg-brand-500/10' : 'bg-transparent'}`}>
                    {item.icon}
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
                </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};