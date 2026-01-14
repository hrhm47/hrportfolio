import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { motion } from 'framer-motion';

const ValuePitch = () => {
  return (
    <MainLayout>
      <div className="pt-24 max-w-4xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Why hire me for your team?
            </h1>
            <p className="text-xl text-gray-400">
                Realistic Value Creation
            </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-1">
             <div className="glass-card p-8 md:p-10 rounded-2xl border-l-4 border-l-blue-500 hover:bg-white/5 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-white">1. Direct Ownership</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                    I have experience working as a solo developer at Menox. You won't need to 'hand-hold' me; I know how to find answers and deliver results.
                </p>
            </div>

            <div className="glass-card p-8 md:p-10 rounded-2xl border-l-4 border-l-purple-500 hover:bg-white/5 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-white">2. Finnish Integration</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                    Currently living in Oulu and working with Finnish companies (Vesko, Menox). I understand the local work culture and am committed to growing within the Finnish tech ecosystem.
                </p>
            </div>

            <div className="glass-card p-8 md:p-10 rounded-2xl border-l-4 border-l-green-500 hover:bg-white/5 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-white">3. Future-Proof</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                   With a Master’s focus in Applied Computing and AI, I am not just a coder—I am an engineer who understands how to integrate intelligent features into your existing products.
                </p>
            </div>
        </div>

        <div className="mt-16 text-center">
            <a href="mailto:haseeb.rehman@student.oulu.fi" className="bg-white text-dark-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                Let's Discuss Value
            </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default ValuePitch;
