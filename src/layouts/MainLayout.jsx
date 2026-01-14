import React from 'react';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-blue-500/30">
        <Header />
        <main className="container mx-auto px-6 py-8">
            {children}
        </main>
        
        <footer className="border-t border-white/5 py-8 text-center text-gray-400 text-sm mt-20">
            <p>© {new Date().getFullYear()} Haseeb Ur Rehman. Built with React & Tailwind.</p>
        </footer>
    </div>
  );
};

export default MainLayout;
