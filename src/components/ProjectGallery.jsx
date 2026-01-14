import React, { useState } from 'react';
import { Layers, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, desc, learning, stack, onTagClick }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border-0 shadow-lg"
    >
        <div className="h-48 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative overflow-hidden shrink-0">
             <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
             <Layers className="w-16 h-16 text-white/10 group-hover:text-white/20 transition-all duration-500 group-hover:scale-110" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-base flex-grow">
                {desc}
            </p>
            
            <div className="mb-6 bg-gradient-to-r from-white/5 to-transparent p-4 rounded-xl border-l-2 border-green-500/50">
                 <h4 className="text-xs font-bold text-green-400 uppercase mb-2 tracking-wide">Key Learning</h4>
                 <p className="text-gray-300 text-base leading-relaxed">
                    {learning}
                 </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {stack.map(tag => (
                    <button 
                        key={tag} 
                        onClick={(e) => { e.stopPropagation(); onTagClick(tag); }}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/5 hover:bg-blue-500/20 hover:text-blue-300 transition-all cursor-pointer font-medium"
                    >
                        #{tag}
                    </button>
                ))}
            </div>
        </div>
    </motion.div>
)

const ProjectGallery = () => {
    const [activeTag, setActiveTag] = useState(null);

    const projects = [
        {
            title: "Ticket Central",
            desc: "A dual-purpose event platform for attendees and organizers.",
            learning: "Stripe integration for secure payments and building a switchable user-role architecture.",
            stack: ['Stripe', 'Node.js', 'Dual-Role']
        },
        {
            title: "Bed Net",
            desc: "A professional networking and ad-posting platform for the furniture industry.",
            learning: "State management with Redux and implementing in-app chat and ad-targeting features.",
            stack: ['Redux', 'Chat Features', 'Mobile']
        },
        {
            title: "Scan Leaf (AI-Powered)",
            desc: "An on-device plant disease scanner.",
            learning: "Integrating TensorFlow Lite models directly into a mobile app for offline image recognition.",
            stack: ['TensorFlow Lite', 'On-Device ML', 'Mobile', 'Offline-First']
        }
    ];

    const allTags = [...new Set(projects.flatMap(p => p.stack))];

    const filteredProjects = activeTag 
        ? projects.filter(p => p.stack.includes(activeTag))
        : projects;

    return (
        <section id="projects" className="py-24 scroll-mt-20">
             <div className="text-center mb-12 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Showcase & Learnings</h2>
                <p className="text-gray-400">Problem Solving & Tech Stack</p>
            </div>

            {/* Filter Bar */}
            <div className="max-w-5xl mx-auto px-4 mb-8">
                <div className="flex flex-wrap justify-center gap-2">
                    <button 
                        onClick={() => setActiveTag(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!activeTag ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                    >
                        All
                    </button>
                    {allTags.map(tag => (
                        <button 
                            key={tag}
                            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTag === tag ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard 
                                key={project.title}
                                {...project}
                                onTagClick={setActiveTag}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {filteredProjects.length === 0 && (
                     <div className="text-center py-12 text-gray-500">
                        No projects found with tag "{activeTag}"
                     </div>
                )}
            </div>
        </section>
    );
};

export default ProjectGallery;
