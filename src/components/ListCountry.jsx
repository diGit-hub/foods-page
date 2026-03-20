import axios from "axios";
import { useEffect, useState } from "react";

function ListCountry() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    async function traerCountry() {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
        );
        setPaises(data);
      } catch (error) {
        console.log("Algo salió mal:", error);
      }
    }

    traerCountry();
  }, []);

  return (
    <>
      <p>hola</p>
      {/*console.log(paises)}
      {paises.map((pais) => {
        <p>{pais.name}</p>
      ))*/}
    </>
  );
}

export default ListCountry;
