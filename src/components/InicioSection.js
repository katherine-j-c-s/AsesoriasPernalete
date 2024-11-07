// src/components/InicioSection.js
import React from 'react';

const InicioSection = () => {
  return (
    <section id="inicio" className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Clases Virtuales</h1>
          <p className="text-lg mb-8">Soluciones de aprendizaje para ayudar al estudiante a alcanzar los objetivos académicos</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Contactar a Asesor
          </button>
        </div>
      </div>
    </section>
  );
};

export default InicioSection;