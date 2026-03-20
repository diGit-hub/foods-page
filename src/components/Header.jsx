import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🥘</span>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            Meal<span className="text-orange-500">Master</span>
          </h1>
        </div>

        {/* Navegación (Desktop) */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-600">
          <a href="#" className="hover:text-orange-500 transition-colors">
            Inicio
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Recetas
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Categorías
          </a>
          <a
            href="#contact"
            className="hover:text-orange-500 transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Botón de acción / Perfil */}
        <div className="flex items-center gap-4">
          <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-sm">
            Explorar
          </button>

          {/* Menu hamburguesa simple para móvil (solo icono por ahora) */}
          <button
            className="md:hidden text-gray-600 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col px-4 pb-4 gap-3 font-medium text-gray-600">
          <a href="#">Inicio</a>
          <a href="#">Recetas</a>
          <a href="#">Categorías</a>
          <a href="#contacto">Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
