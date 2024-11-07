// src/components/AboutSection.js
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
            <p className="text-gray-600 mb-8">
              Somos una empresa dedicada a la educación y formación, clases virtuales, en conjunto de la tecnología que hoy nos acompaña, nos atrevemos a desafiar los límites de la distancia para llevarte todo un contenido como nunca antes visto.
            </p>
            <p className="text-gray-600 mb-8">
              Soluciones de aprendizaje para ayudar al estudiante a alcanzar los objetivos académicos.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Contactar a Asesor
            </button>
          </div>
          <div>
            <img src="/about-image.jpg" alt="About" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;