import React from 'react';
import { Cpu, Eye, Code } from 'lucide-react';

const Philosophy = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-dark-900 to-black relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
             
             <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <Cpu size={16} />
                        <span>AI-Assisted & Hardware Interest</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Tech-Agnostic Philosophy</h2>
                    
                    <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12">
                        "I believe the best developers are the best learners. While my core expertise is in <span className="text-white font-semibold">React Native</span> and <span className="text-white font-semibold">Web</span>, I have a deep interest in <span className="text-white font-semibold">AR/VR</span> and <span className="text-white font-semibold">Hardware</span>. When a project requires a technology outside my main stack, I utilize <span className="text-blue-400">AI-assisted development (LLMs/Agents)</span> to rapidly prototype and bridge my knowledge gaps. This allows me to be a versatile 'Problem Solver' who can contribute to any part of a company’s tech stack."
                    </blockquote>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                         <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1">
                            <Code className="text-purple-400 mb-4" size={32} />
                            <h4 className="text-xl font-bold mb-3">Core Stack</h4>
                            <p className="text-base text-gray-300 leading-relaxed">Deep expertise in React ecosystem for stable, scalabe production code.</p>
                         </div>
                         <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1">
                            <Eye className="text-green-400 mb-4" size={32} />
                            <h4 className="text-xl font-bold mb-3">Future Tech</h4>
                            <p className="text-base text-gray-300 leading-relaxed">Expanding into AR/VR and Hardware integration for next-gen interfaces.</p>
                         </div>
                         <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1">
                            <Cpu className="text-blue-400 mb-4" size={32} />
                            <h4 className="text-xl font-bold mb-3">AI Leverage</h4>
                            <p className="text-base text-gray-300 leading-relaxed">Using Agents to accelerate learning and implementation of new tools.</p>
                         </div>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default Philosophy;
