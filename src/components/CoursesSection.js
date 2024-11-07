// src/components/CoursesSection.js
import React from 'react';

const CoursesSection = () => {
  return (
    <section id="courses" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Clases Virtuales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pack Cursos</h3>
            <p className="text-gray-600 mb-4">Acceso a todos los cursos</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Ver Más
            </button>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Seminarios</h3>
            <p className="text-gray-600 mb-4">Seminarios y talleres</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Ver Más
            </button>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Cursos Online</h3>
            <p className="text-gray-600 mb-4">Metodología online</p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Ver Más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;