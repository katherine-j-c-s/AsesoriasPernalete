import React from 'react';
import Navbar from './components/Navbar';
import InicioSection from "./components/InicioSection"
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <InicioSection />
        <AboutSection />
        <CoursesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;