import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MealCountry() {
  const { xpais } = useParams();
  const [mealCity, setMealCity] = useState([]);

useEffect(() => {
    async function comidasPais() {
      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${xpais}`
        );
        setMealCity(data.meals);
      } catch (error) {
        console.log("Algo salió mal:", error);
      }
    }

    comidasPais();
  }, [xpais]);

  return (
    <div>
      <p className="flex justify-center text-2xl font-light mb-4">MEALS FAVORITY</p>
      <p className=" flex justify-center text-2xl font-bold mb-4">{xpais}</p>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-20">
        {mealCity.map((meal) => (
          
          <div> 
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-1 w-full h-50"
            />
            <p className="text-center mt-2">
              {meal.strMeal}
            </p>
          </div>

        ))}
      </div>
    </div>
  );
}

export default MealCountry;
