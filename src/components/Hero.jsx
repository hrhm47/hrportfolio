import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-blue-400 font-medium mb-4 text-lg">Hello, I'm Haseeb Ur Rehman</h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Software Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mobile & Full-Stack Developer</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
            M.Sc. Student at the University of Oulu with 3+ years of professional experience. I am tech-agnostic: whether it’s Mobile, Web, or AI-assisted hardware, I focus on learning the right tool to solve the problem.
          </p>
          
          <div className="flex gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all">
              View Work
            </a>
            <a href="/value" className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all">
               Why Hire Me?
            </a>
          </div>
        </motion.div>

        {/* Abstract Tech Visual/Illustration */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative hidden md:block"
        >
            <div className="relative z-10 glass-card p-8 rounded-2xl border-white/10 transform rotate-[-5deg] hover:rotate-0 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">RM</div>
                    <div>
                         <h3 className="font-bold">React Native & Mobile</h3>
                         <p className="text-sm text-gray-400">Cross-Platform Architecture</p>
                    </div>
                </div>
                 <div className="space-y-3">
                    <div className="h-2 bg-white/10 rounded w-full"></div>
                    <div className="h-2 bg-white/10 rounded w-3/4"></div>
                    <div className="h-2 bg-white/10 rounded w-1/2"></div>
                </div>
            </div>

             <div className="absolute top-20 right-10 z-0 glass-card p-8 rounded-2xl border-white/10 transform rotate-[5deg] translate-x-4 opacity-60">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">AI</div>
                    <div>
                         <h3 className="font-bold">AI & Cloud</h3>
                         <p className="text-sm text-gray-400">Intelligent Systems</p>
                    </div>
                </div>
                 <div className="space-y-3">
                    <div className="h-2 bg-white/10 rounded w-full"></div>
                    <div className="h-2 bg-white/10 rounded w-3/4"></div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
