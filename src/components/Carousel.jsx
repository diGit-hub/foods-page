import React, { useState, useEffect } from 'react';

const chefs = [
  { id: 1, nombre: "Gordon Ramsay", especialidad: "Cocina Internacional", foto: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg", frase: "La cocina es un lenguaje de armonía y felicidad." },
  { id: 2, nombre: "Elena Arzak", especialidad: "Alta Cocina Española", foto: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg", frase: "Innovar es mirar el producto con ojos nuevos." },
  { id: 3, nombre: "Massimo Bottura", especialidad: "Gastronomía Italiana", foto: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg", frase: "Cocinar es un acto de amor y cultura." },
  { id: 4, nombre: "Dominique Crenn", especialidad: "Cocina de Autor", foto: "https://img.freepik.com/foto-gratis/chef-cocinando-cocina-mientras-lleva-ropa-profesional_23-2151208316.jpg?semt=ais_hybrid&w=740&q=80", frase: "La gastronomía es el arte de alimentar el alma." },
  { id: 5, nombre: "Mitsuharu Tsumura", especialidad: "Cocina Nikkei", foto: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg", frase: "La cocina Nikkei es el encuentro de dos mundos." },
  { id: 6, nombre: "Daniela Soto-Innes", especialidad: "Cocina Mexicana Moderna", foto: "https://www.shutterstock.com/image-photo/young-smiling-happy-chef-cook-600nw-2493491261.jpg", frase: "Cocino con alegría para transmitir felicidad mexicana." },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % chefs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = (current - 1 + chefs.length) % chefs.length;
  const next = (current + 1) % chefs.length;

 return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Chef's de Élite</h2>

      <div className="flex items-center justify-center gap-2 md:gap-4 overflow-hidden px-4">

        <button onClick={() => setCurrent(prev)} className="text-2xl bg-white rounded-full w-10 h-10 shadow hover:bg-gray-100 flex-shrink-0">
          ‹
        </button>

        {[-1, 0, 1].map(offset => {
          const index = (current + offset + chefs.length) % chefs.length;
          const isCenter = offset === 0;
          return (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all
                ${isCenter ? 'w-full md:w-80 z-10' : 'hidden md:block md:w-60 opacity-50'}`}
            >
              <img src={chefs[index].foto} alt={chefs[index].nombre} className="w-full h-56 object-cover" />
              {isCenter && (
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{chefs[index].nombre}</h3>
                  <p className="mt-2 text-orange-500 text-xs uppercase font-bold">{chefs[index].especialidad}</p>
                  <p className="mt-3 text-gray-400 text-sm italic">"{chefs[index].frase}"</p>
                </div>
              )}
            </div>
          );
        })}
        
        <button onClick={() => setCurrent(next)} className="text-2xl bg-white rounded-full w-10 h-10 shadow hover:bg-gray-100 flex-shrink-0">
          ›
        </button>
      </div>
    </section>
  );
};

export default Carousel;