// src/components/AboutSection.js
import React from 'react';
import foto from "../assets/nosotros.svg"
import { Link } from 'react-scroll';

const AboutSection = () => {
  return (
    <section id="about" className="bg-orange-200 bg-opacity-50 py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src={foto} alt="About" className="rounded-lg shadow-lg" />
          </div>
          <div className='my-10 max-w-xl'>
            <h2 className="text-3xl font-bold mb-4 font-serif">Sobre Nosotros</h2>
            <p className="text-gray-600 mb-8">
            Hola, mi nombre es Olga Pernalete, soy docente recibida en informática y analista de sistemas, cuento con capacitaciones digitales y habilidades tecnológicas para desarrollar en el estudiante el pensamiento lógico computacional mediante un enfoque lúdico.
            </p>
            <p className="text-gray-600 mb-8">
            Trabajo con software de contenido educativo transformador que las tecnologías tienen para ofrecer. Me apasiona la educación y la tecnología. Convencida de que una de las  habilidades del siglo XXI es aprender a programar desde muy joven ya que permite desarrollar el pensamiento lógico matemático y  potenciar el proceso de enseñanza y aprendizaje.
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-green-600 hover:bg-green-700 transition-all ease-in-out text-black font-semibold py-2 px-4 rounded"
              >
              Contáctanos
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;