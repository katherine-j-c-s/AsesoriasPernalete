// src/components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Más Información</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa tu email"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </form>
          </div>
          <div>
            <div className="text-gray-800">
              <p className="mb-2">+54 9 11 6829-3092</p>
              <p className="mb-2">asesoriastpernalete@gmail.com</p>
              <p className="mb-2">Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;