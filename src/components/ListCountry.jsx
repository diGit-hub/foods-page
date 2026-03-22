import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListCountry() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    async function traerPais() {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
        );
        setPaises(data.meals);
      } catch (error) {
        console.log("Algo salió mal:", error);
      }
    }

    traerPais();
  }, []);

  return (
    <>
      {console.log(paises)}

      <p className="flex justify-center font-light text-2xl py-5">
        MEALS BY COUNTRY
      </p>

      <div className="px-15 grid grid-cols-2 md:grid-cols-5 gap-2 w-fit">
        {paises.map((paises) => (
          <Link
            to={`/mealCountry/${paises.strArea}`}
            className="w-60 flex bg-white px-3 py-5 gap-5 rounded-x2 shadow text-center hover:scale-105 transition"
          >
            <img
              src={`/src/assets/flags/4x3/${paises.strArea}.svg`}
              alt={paises.strArea}
              className="w-auto h-7 object-cover rounded-xl "
            />
            <p>{paises.strArea}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ListCountry;
