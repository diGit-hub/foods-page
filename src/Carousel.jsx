import React, { useState } from 'react';

const chefsIniciales = [
  { 
    id: 1, 
    nombre: "Gordon Ramsay", 
    especialidad: "Cocina Internacional", 
    foto: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg",
    frase: "La cocina es un lenguaje de armonía y felicidad."
  },
  { 
    id: 2, 
    nombre: "Elena Arzak", 
    especialidad: "Alta Cocina Española", 
    foto: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg",
    frase: "Innovar es mirar el producto con ojos nuevos."
  },
  { 
    id: 3, 
    nombre: "Massimo Bottura", 
    especialidad: "Gastronomía Italiana", 
    foto: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg",
    frase: "Cocinar es un acto de amor y cultura."
  },
  { 
    id: 4, 
    nombre: "Dominique Crenn", 
    especialidad: "Cocina de Autor", 
    foto: "https://images.pexels.com/photos/3814442/pexels-photo-3814442.jpeg",
    frase: "La gastronomía es el arte de alimentar el alma."
  },
  { 
    id: 5, 
    nombre: "Mitsuharu Tsumura", 
    especialidad: "Cocina Nikkei", 
    foto: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg",
    frase: "La cocina Nikkei es el encuentro de dos mundos."
  },
  { 
    id: 6, 
    nombre: "Daniela Soto-Innes", 
    especialidad: "Cocina Mexicana Moderna", 
    // Nueva URL para asegurar que se vea
    foto: "https://www.foodandwine.com/thmb/hN6R3w-T0m8nI7E_GvL8v9nF_X8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/daniela-soto-innes-world-best-female-chef-2019-FT-BLOG0419-78b27670732e4d0cb5f69e663a8637e7.jpg",
    frase: "Cocino con alegría para transmitir felicidad mexicana."
  },
];

const Carousel = () => {
  const [cantidadMostrar, setCantidadMostrar] = useState(3);

  const agregarChef = () => {
    if (cantidadMostrar < chefsIniciales.length) setCantidadMostrar(cantidadMostrar + 1);
  };

  const quitarChef = () => {
    if (cantidadMostrar > 1) setCantidadMostrar(cantidadMostrar - 1);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Chef's de Élite</h2>
          <div className="flex gap-2">
            <button onClick={quitarChef} className="bg-white border w-10 h-10 rounded-full shadow hover:bg-gray-100">➖</button>
            <button onClick={agregarChef} className="bg-white border w-10 h-10 rounded-full shadow hover:bg-gray-100">➕</button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory">
          {chefsIniciales.slice(0, cantidadMostrar).map((chef) => (
            <div key={chef.id} className="min-w-[300px] bg-white rounded-3xl shadow-xl p-6 snap-center border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                   <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur opacity-25"></div>
                   <img 
                    src={chef.foto} 
                    alt={chef.nombre} 
                    className="relative w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
                    // Si la imagen falla, muestra un placeholder de chef
                    onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/3461/3461902.png' }}
                   />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">{chef.nombre}</h3>
                
                <span className="mt-2 px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-black rounded-full uppercase tracking-tighter border border-orange-100">
                  {chef.especialidad}
                </span>

                {/* Slogan personalizado por cada chef */}
                <p className="mt-6 text-gray-400 text-sm italic font-medium leading-relaxed px-4">
                  "{chef.frase}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Puntitos indicadores dinámicos */}
        <div className="flex justify-center gap-2 mt-4">
          {chefsIniciales.slice(0, cantidadMostrar).map((_, index) => (
            <div key={index} className={`h-1.5 rounded-full transition-all ${index === 0 ? "w-8 bg-orange-400" : "w-2 bg-gray-200"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;