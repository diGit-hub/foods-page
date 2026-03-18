
import React from 'react';

const chefsIniciales = [
  { id: 1, nombre: "Gordon Ramsay", especialidad: "Cocina Internacional", foto: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=600", frase: "La cocina es un lenguaje de armonía y felicidad." },
  { id: 2, nombre: "Elena Arzak", especialidad: "Alta Cocina Española", foto: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg", frase: "Innovar es mirar el producto con ojos nuevos." },
  { id: 3, nombre: "Massimo Bottura", especialidad: "Gastronomía Italiana", foto: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg", frase: "Cocinar es un acto de amor y cultura." },
  { id: 4, nombre: "Dominique Crenn", especialidad: "Cocina de Autor", foto: "https://images.pexels.com/photos/6605421/pexels-photo-6605421.jpeg?auto=compress&cs=tinysrgb&w=600", frase: "La gastronomía es el arte de alimentar el alma." },
  { id: 5, nombre: "Mitsuharu Tsumura", especialidad: "Cocina Nikkei", foto: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg", frase: "La cocina Nikkei es el encuentro de dos mundos." },
  { id: 6, nombre: "Daniela Soto-Innes", especialidad: "Cocina Mexicana Moderna", foto: "https://images.pexels.com/photos/6076110/pexels-photo-6076110.jpeg?auto=compress&cs=tinysrgb&w=600", frase: "Cocino con alegría para transmitir felicidad mexicana." },
];

const Carousel = () => {
  return (
    <section className="py-16 bg-white overflow-hidden"> 
      <div className="container mx-auto px-4 md:px-10">
        
        {/* Título centrado y sin botones laterales */}
        <div className="text-center mb-12 border-b border-amber-100 pb-8">
          <h2 className="text-4xl font-serif font-bold text-stone-800">Nuestros Chefs</h2>
          <p className="text-amber-600 font-medium italic mt-2">El alma detrás de cada sabor</p>
        </div>

        {/* Carrusel de scroll suave */}
        <div className="flex overflow-x-auto gap-8 pb-14 snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {chefsIniciales.map((chef, index) => (
            <div 
              key={chef.id} 
              className={`flex-none w-[320px] bg-stone-50 rounded-2xl shadow-lg snap-center border-t-4 border-amber-400 flex flex-col items-center text-center group hover:bg-white transition-colors duration-300 overflow-hidden pb-8 ${index === 0 ? "ml-4" : ""} ${index === chefsIniciales.length - 1 ? "mr-4" : ""}`}
            >
              {/* Foto Cuadrada */}
              <div className="w-full h-72 overflow-hidden mb-6">
                 <img 
                  src={chef.foto} 
                  alt={chef.nombre} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/3461/3461902.png'; }}
                 />
              </div>
              
              <div className="px-6 flex flex-col items-center">
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{chef.nombre}</h3>
                
                <span className="px-4 py-1 bg-amber-100 text-amber-800 text-[10px] font-black rounded-md uppercase tracking-[0.2em]">
                  {chef.especialidad}
                </span>

                {/* Slogan en color Café (Stone-700) */}
                <p className="mt-6 text-stone-700 text-sm font-medium italic leading-relaxed">
                  "{chef.frase}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de posición (puntos) */}
        <div className="flex justify-center gap-3">
          {chefsIniciales.map((_, index) => (
            <div key={index} className="h-1.5 w-3 bg-stone-200 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;