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
      
      <p className="flex justify-center font-light text-2xl py-5">MEALS FOR COUNTRY</p>
       
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">
      {paises.map((paises) => (
        
        
        <Link to={`/mealCountry/${paises.strArea}`}
        className="bg-white p-3 rounded-x2 shadow text-center hover:scale-105 transition">
          <p>{paises.strArea}</p>
        </Link>
      ))}

      </div>
    </>
  );
}

export default ListCountry;
