// src/components/InicioSection.js
import React from 'react';
import fondo from "../assets/fondoinicio.svg"

const InicioSection = () => {
  return (
    <section id="inicio" className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-7xl font-bold mb-4 font-serif">Clases</h1>
          <h1 className="text-7xl text-orange-400 font-bold mb-4 font-serif">Virtuales</h1>
          <button className="bg-green-600 hover:bg-green-700 transition-all ease-in-out text-white font-bold py-4 px-10 mt-5 rounded">
            Contactar a Profe Pernalete
          </button>
        </div>
      </div>
    </section>
  );
};

export default InicioSection;