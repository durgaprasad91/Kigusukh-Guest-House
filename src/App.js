import React, { Suspense, lazy } from 'react';
import './App.css';
import ErrorBoundary from './components/JS/ErrorBoundary.js';
import 'intersection-observer';


const Navbar = lazy(() => import('../src/components/JS/Navbar'));
const Hero = lazy(() => import('../src/components/JS/Hero'));
const AboutUs = lazy(() => import('../src/components/JS/About.js'));
const Service = lazy(() => import('../src/components/JS/Services'));
const Gallery = lazy(() => import('../src/components/JS/Gallery'));
const SupportPage = lazy(() => import('../src/components/JS/support.js'));
const ContactForm = lazy(() => import('../src/components/JS/Contactform.js'));
const Footer = lazy(() => import('../src/components/JS/Footer.js'));

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        }>
          <Navbar />
          <Hero />
          <AboutUs />
          <Service />
          <Gallery/>
          <SupportPage />
          <ContactForm />
          <Footer />
          <button 
            className="scroll-to-top" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑
          </button>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
