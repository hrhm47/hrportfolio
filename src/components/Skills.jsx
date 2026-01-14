import React from 'react';
import { Smartphone, Globe, Cpu, Wrench } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills }) => (
    <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5 hover:bg-white/10 transition-colors">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-black/20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skill Matrix</h2>
                <p className="text-gray-400">Stack for Success</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <SkillCategory 
                    title="Mobile Development" 
                    icon={Smartphone}
                    skills={['React Native', 'Expo', 'Capacitor', 'TypeScript', 'RN Skia']}
                />
                <SkillCategory 
                    title="Web & Backend" 
                    icon={Globe}
                    skills={['React', 'Angular', 'Next.js', 'Node.js', 'Supabase', 'PostgreSQL']}
                />
                <SkillCategory 
                    title="Cloud & AI" 
                    icon={Cpu}
                    skills={['AWS (Rekognition/S3)', 'TensorFlow Lite', 'NLP', 'Data Mining']}
                />
                <SkillCategory 
                    title="Tools & DevOps" 
                    icon={Wrench}
                    skills={['Figma', 'DevOps', 'Tanstack Query', 'Zustand', 'Redux']}
                />
            </div>
        </section>
    );
};

export default Skills;
