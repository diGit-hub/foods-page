import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FootsCatg() {
  const [recetas, setRecetas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState("SeaFood");
  const [fotocat, setFotocat] = useState([]);

  /*const [error, setError] = useState(null);*/

  /*NOMBRE DE CATEGORIAS*/
  useEffect(() => {
    async function listaCategorias() {
      try {
        const respuesta = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
        );

        const data = await respuesta.json();
        console.log(data.meals);
        setCategorias(data.meals);
      } catch (error) {
        console.error("Algo salio mal:", error);
      }
    }
    listaCategorias();
  }, []);

  /* FILTRO - RECETAS DE CADA CATEGORIA*/

  useEffect(() => {
    async function verRecetas() {
      try {
        const respuesta = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=$(categoria)",
        );

        const data = await respuesta.json();
        setRecetas(data.meals);
        console.log(data.meals);
      } catch (error) {
        console.error("Algo salio mal:", error);
      }
    }
    if (categoria) {
      verRecetas();
    }
  }, [categoria]);

  /* FILTRO - FOTO DE CADA CATEGORIA */

  useEffect(() => {
    async function fotoCat() {
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
    fotoCat();
  }, []);

  return (
    <>
      <p>CATEGORY - Foods Meals 2026</p>
      <div className="flex flex-col gap-2 border-2 bg-green-200 w-45">
        {categorias.map((categoria, index) => (
          <button
            key={index}
            value={categoria.strCategory}
            onClick={(e) => setCategoria(e.target.value)}
          >
            {categoria.strCategory}
          </button>
        ))}
      </div>

      <p>LISTA platos x categoria 2026</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/*recetas.map((receta) => (
         <p>{receta.strMeal}</p>
         
        ))*/}
      </div>

      <p>Fotos y categorias</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-10">
        {}

        {fotocat.map((cat) => (
          <div key={cat.idCategory} className="bg-white shadow p-4 rounded-2xl">
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className="w-full h-32 object-cover rounded-xl"
            />
            <h2 className="text-center mt-2 font-bold">{cat.strCategory}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default FootsCatg;
