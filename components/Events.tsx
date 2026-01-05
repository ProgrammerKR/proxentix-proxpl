import React from 'react';
import { Calendar, MapPin, Users, Video } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from './Button';

const events = [
  {
    title: "ProXPL Community Hangout",
    date: "Jan 15, 2026",
    time: "18:00 UTC",
    location: "Discord Stage",
    type: "Virtual",
    desc: "Join us for our monthly community hangout! We'll discuss the roadmap for v0.2.0 and showcase community projects.",
    action: "Set Reminder"
  },
  {
    title: "Systems Programming Summit",
    date: "Feb 20, 2026",
    time: "09:00 PST",
    location: "San Francisco, CA",
    type: "In-Person & Virtual",
    desc: "ProgrammerKR will be presenting 'Building a Language from Scratch' at the Systems Programming Summit.",
    action: "Get Tickets"
  }
];

export const Events: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#050b1d] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Community Events</h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Connect with other ProXPL developers, learn from the core team, and participate in hackathons.
                </p>
            </div>
        </Reveal>

        <div className="space-y-6">
            {events.map((evt, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                    <div className="flex flex-col md:flex-row bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all">
                        {/* Date Column */}
                        <div className="bg-brand-600 dark:bg-brand-900/20 p-6 flex flex-col items-center justify-center min-w-[150px] text-white">
                            <span className="text-3xl font-bold mb-1">{evt.date.split(' ')[1].replace(',', '')}</span>
                            <span className="text-lg uppercase tracking-wide opacity-90">{evt.date.split(' ')[0]}</span>
                            <span className="text-sm opacity-75 mt-2">{evt.date.split(' ')[2]}</span>
                        </div>
                        
                        {/* Details */}
                        <div className="p-6 md:p-8 flex-1">
                            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                                <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {evt.time}</span>
                                <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {evt.location}</span>
                                <span className="flex items-center">
                                    {evt.type === 'Virtual' ? <Video className="w-4 h-4 mr-2" /> : <Users className="w-4 h-4 mr-2" />} 
                                    {evt.type}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{evt.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {evt.desc}
                            </p>
                            <Button variant="outline" size="sm">{evt.action}</Button>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};