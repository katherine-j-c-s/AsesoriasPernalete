// src/components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-orange-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl text-white mb-8 font-serif">Más Información</h2>
            <form>
              <div className="mb-8">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-transparent placeholder:text-white focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="mb-8">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-transparent placeholder:text-white focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu email"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-10 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-4xl text-white mb-8 font-serif">Contáctame</h2>
            <div className="text-white">
              <p className="mb-6">+54 9 11 6829-3092</p>
              <p className="mb-6">asesoriastpernalete@gmail.com</p>
              <p className="mb-6">Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;