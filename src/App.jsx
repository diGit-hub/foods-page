import Header from './Header.jsx'; 
import Carousel from './Carousel.jsx'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* contenido principal */}
      <main>
        {/* carrusel */}
        <Carousel />

        {/* filtros */}
        <section className="container mx-auto px-4 py-10">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-20 text-center">
            <p className="text-gray-400 text-xl italic">
              Sección de filtros y recetas (Próximamente)
            </p>
          </div>
        </section>
      </main>

      {/* footer */}
    </div>
  );
}

export default App;