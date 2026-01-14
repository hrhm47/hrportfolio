import React from 'react';

const ExperienceItem = ({ role, company, location, type, liveLink, whatIDoing, technicalLearning, domainLearning, softSkills, stack }) => (
  <div className="relative pl-0 md:pl-0">
    {/* Timeline Line (Desktop Only) */}
    <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>
    
    <div className={`md:flex items-center justify-between mb-8 md:mb-12 w-full ${type === 'left' ? 'flex-row-reverse' : ''}`}>
        <div className="hidden md:block w-5/12"></div>
        
        {/* Timeline Dot (Desktop Only) */}
        <div className="absolute hidden md:block left-[50%] w-3 h-3 bg-blue-500 rounded-full -translate-x-[5px] mt-1.5 ring-4 ring-dark-900 z-10"></div>

        <div className="w-full md:w-5/12">
             <div className="glass-card p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                <div className="flex flex-col gap-1 mb-6">
                    <h3 className="text-2xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{role}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-base text-gray-400">
                        <span>{company}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{location}</span>
                    </div>
                    {liveLink && <a href={`https://${liveLink}`} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 mt-1 inline-flex items-center gap-1">
                        {liveLink} <span className="text-xs">↗</span>
                    </a>}
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">What I am doing</h4>
                        <p className="text-gray-200 text-base leading-relaxed">{whatIDoing}</p>
                    </div>
                    
                    <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                        <h4 className="text-xs uppercase tracking-wider text-green-400 font-bold mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                            Core Learnings
                        </h4>
                        <ul className="space-y-3 text-gray-300 text-base">
                            {technicalLearning && <li className="leading-relaxed"><strong className="text-white font-medium">Technical:</strong> {technicalLearning}</li>}
                            {softSkills && <li className="leading-relaxed"><strong className="text-white font-medium">Soft Skills:</strong> {softSkills}</li>}
                            {domainLearning && <li className="leading-relaxed"><strong className="text-white font-medium">Domain:</strong> {domainLearning}</li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
       <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Professional Experience</h2>
            <p className="text-gray-400">Focus on Learning & Ownership</p>
       </div>

       <div className="relative max-w-5xl mx-auto px-4">
            <ExperienceItem 
                type="right"
                role="Solo Full-Stack Developer"
                company="Menox"
                location="Finland"
                liveLink="app.menox.fi"
                whatIDoing="Managing the entire digital ecosystem, from the cross-platform app to the backend."
                technicalLearning="Mastering Capacitor and React for cross-platform delivery and Supabase (PostgreSQL) for real-time data."
                softSkills="Taking 100% ownership of a product and building complex multi-role systems (Guest, User, Organizer)."
            />
            <ExperienceItem 
                type="left"
                role="Software Developer / Researcher"
                company="University of Oulu"
                location="Finland"
                whatIDoing="Developing a medical/health-tech research platform (Glymphometer)."
                technicalLearning="Building professional web interfaces with Angular, writing scalable APIs with Next.js, and maintaining a React Native mobile codebase."
                domainLearning="Understanding the high precision and data integrity required for healthcare applications."
            />
             <ExperienceItem 
                type="right"
                role="Mobile App Developer"
                company="Vesko"
                location="Finland"
                liveLink="vesko.fi"
                whatIDoing="Contributed to the mobile social media architecture."
                technicalLearning="Implementing high-performance UI features like photo filters with RN Skia and managing complex application states with Zustand."
            />
       </div>
    </section>
  );
};

export default Experience;
