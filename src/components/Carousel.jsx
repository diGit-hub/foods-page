import React, { useState } from 'react';

const chefsIniciales = [
  { id: 1, nombre: "Gordon Ramsay", especialidad: "Cocina Internacional", foto: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=600", frase: "La cocina es un lenguaje de armonía y felicidad." },
  { id: 2, nombre: "Elena Arzak", especialidad: "Alta Cocina Española", foto: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg", frase: "Innovar es mirar el producto con ojos nuevos." },
  { id: 3, nombre: "Massimo Bottura", especialidad: "Gastronomía Italiana", foto: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg", frase: "Cocinar es un acto de amor y cultura." },
  { id: 4, nombre: "Dominique Crenn", especialidad: "Cocina de Autor", foto: "https://www.pexels.com/es-es/foto/hombre-tenencia-sarten-3298687/", frase: "La gastronomía es el arte de alimentar el alma." },
  { id: 5, nombre: "Mitsuharu Tsumura", especialidad: "Cocina Nikkei", foto: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg", frase: "La cocina Nikkei es el encuentro de dos mundos." },
  { id: 6, nombre: "Daniela Soto-Innes", especialidad: "Cocina Mexicana Moderna", foto: "https://www.pexels.com/es-es/foto/mujer-chef-jefe-de-cocina-blanco-5463856/", frase: "Cocino con alegría para transmitir felicidad mexicana." },
];

const Carousel = () => {
  const [cantidadMostrar, setCantidadMostrar] = useState(6);

  const agregarChef = () => {
    if (cantidadMostrar < chefsIniciales.length) setCantidadMostrar(cantidadMostrar + 1);
  };

  const quitarChef = () => {
    if (cantidadMostrar > 1) setCantidadMostrar(cantidadMostrar - 1);
  };

  return (
    // CAMBIO: Fondo Blanco puro para que resalte el café y amarillo
    <section className="py-16 bg-white overflow-hidden"> 
      <div className="container mx-auto px-4 md:px-10">
        
        <div className="flex justify-between items-end mb-12 border-b border-amber-100 pb-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-stone-800">Nuestros Chefs</h2>
            <p className="text-amber-600 font-medium italic">El alma detrás de cada sabor</p>
          </div>
          
          {/* Botones estilo Café y Amarillo */}
          <div className="flex gap-3">
            <button onClick={quitarChef} className="bg-stone-100 text-stone-700 w-12 h-12 rounded-xl shadow-sm hover:bg-amber-400 hover:text-white transition-all flex items-center justify-center font-bold">➖</button>
            <button onClick={agregarChef} className="bg-stone-800 text-white w-12 h-12 rounded-xl shadow-md hover:bg-amber-500 transition-all flex items-center justify-center font-bold font-serif">➕</button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-14 snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {chefsIniciales.slice(0, cantidadMostrar).map((chef, index) => (
            <div 
              key={chef.id} 
              className={`flex-none w-[320px] bg-stone-50 rounded-2xl shadow-lg p-8 snap-center border-t-4 border-amber-400 flex flex-col items-center text-center group hover:bg-white transition-colors duration-300 ${index === 0 ? "ml-4" : ""} ${index === cantidadMostrar - 1 ? "mr-4" : ""}`}
            >
              <div className="relative mb-8">
                 {/* Círculo decorativo Café detrás de la foto */}
                 <div className="absolute -inset-2 bg-stone-200 rounded-full scale-95 group-hover:scale-105 transition-transform duration-500"></div>
                 <img 
                  src={chef.foto} 
                  alt={chef.nombre} 
                  className="relative w-44 h-44 rounded-full object-cover border-4 border-white shadow-xl z-10"
                  onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/3461/3461902.png'; }}
                 />
              </div>
              
              {/* Texto en tono Café Oscuro (Stone-900) */}
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{chef.nombre}</h3>
              
              {/* Badge Amarillo (Amber) */}
              <span className="px-4 py-1 bg-amber-100 text-amber-800 text-[10px] font-black rounded-md uppercase tracking-[0.2em]">
                {chef.especialidad}
              </span>

              <p className="mt-6 text-stone-500 text-sm font-light italic leading-relaxed line-clamp-2">
                "{chef.frase}"
              </p>
            </div>
          ))}
        </div>

        {/* Indicadores dinámicos estilo Café/Miel */}
        <div className="flex justify-center gap-3">
          {chefsIniciales.slice(0, cantidadMostrar).map((_, index) => (
            <div key={index} className={`h-1.5 rounded-full transition-all duration-500 ${index === 0 ? "w-12 bg-amber-500 shadow-sm" : "w-3 bg-stone-200"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;