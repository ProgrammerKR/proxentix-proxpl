import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Playground } from './components/Playground';
import { Documentation } from './components/Documentation';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

// New Pages
import { StandardLibrary } from './components/StandardLibrary';
import { Tutorials } from './components/Tutorials';
import { Releases } from './components/Releases';
import { Events } from './components/Events';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { CookiePolicy } from './components/CookiePolicy';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 font-sans selection:bg-brand-500/30 selection:text-brand-600 dark:selection:text-brand-100 pb-16 md:pb-0 transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/community" element={<Community />} />

              {/* Resource Pages */}
              <Route path="/stdlib" element={<StandardLibrary />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/releases" element={<Releases />} />
              <Route path="/events" element={<Events />} />

              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
            </Routes>
          </main>
          <Footer />
          <MobileBottomNav />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;