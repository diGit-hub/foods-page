import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListCatg() {
  const [recetas, setRecetas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState("Seafood");
  const [fotocat, setFotocat] = useState([]);

  
  /* 1. LISTA DE CATEGORIAS CON FOTOS  */
  useEffect(() => {
    async function traerCategorias() {
      try {
        const respuesta = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
        );
        const data = await respuesta.json();
        setFotocat(data.categories);
        console.log(data.categories);
      } catch (error) {
        console.error("Algo salio mal:", error);
      }
    }
    traerCategorias();
  }, []);

  /* 2. FILTRO - PLATOS X CATEGORIA*/

  useEffect(() => {
    async function listComidas() {
      try {
        const respuesta = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`,
        );
        const data = await respuesta.json();
        setRecetas(data.meals);
        console.log(data.meals);
      } catch (error) {
        console.error("Algo salió mal:", error);
      }
    }
    listComidas();
  }, [categoria]);

  return (
    <>
      <p className="flex justify-center items-center my-5 font-light text-2xl">
        {" "}
        CATEGORY - MEALS 2026
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 px-10">
        {fotocat.map((cat) => (
          <button
            className="bg-white shadow p-4 rounded-2xl"
            key={cat.idCategory}
            onClick={() => setCategoria(cat.strCategory)}
          >
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className="w-full h-32 object-cover rounded-xl"
            />
            <h2 className="text-center mt-2 font-bold">{cat.strCategory}</h2>
          </button>
        ))}
      </div>

      <p className="px-10 my-5 font-light text-2xl">
        LIST MEALS OF CATEGORY
      </p>
      
      <div className=" px-10  grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recetas.map((receta) => (
          <Link key={receta.idMeal} to={`/receta/${receta.idMeal}`}>
            
            <article
              
              className="rounded-b-md border border-slate-500 bg-amber-800-200 p-3"
            >
              <p className="text-sm font-semibold text-black-300">
                {receta.strMeal}
              </p>
            </article>

          </Link>
        ))}
      </div>
    </>
  );
}

export default ListCatg;
