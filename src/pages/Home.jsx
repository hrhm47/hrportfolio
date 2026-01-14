import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import ProjectGallery from '../components/ProjectGallery';
import Skills from '../components/Skills';
import Philosophy from '../components/Philosophy';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Experience />
      <ProjectGallery />
      <Philosophy />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default Home;
