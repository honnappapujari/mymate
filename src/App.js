import React from 'react';
import './index.css';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Comparison from './components/Comparison';
import CTA from './components/CTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function App() {
  return (
    <main className="antialiased selection:bg-orange-100">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  );
}