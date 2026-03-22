import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GoBack from "./components/GoBack";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ingredientsNote from "./assets/ingredients-note.png";

export default function InfoPage() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        async function fetchMeal() {
            try {
                const { data } = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                );
                if (data.meals) {
                    setMeal(data.meals[0]);
                    const ingredientList = [];
                    for (let i = 1; i <= 20; i++) {
                        const ingredient = data.meals[0][`strIngredient${i}`];
                        const measure = data.meals[0][`strMeasure${i}`];
                        if (ingredient && ingredient.trim()) {
                            ingredientList.push(`${measure} ${ingredient}`.trim());
                        }
                    }
                    setIngredients(ingredientList);
                }
            } catch (error) {
                console.log("Error:", error);
            }
        }
        fetchMeal();
    }, [id]);

    if (!meal) {
        return (
            <>
                <Header />
                <main className="min-h-dvh flex items-center justify-center">
                    <p>Loading...</p>
                </main>
                <Footer />
            </>
        );
    }

    const youtubeId = meal.strYoutube ? meal.strYoutube.split("v=")[1] : null;
    const videoSrc = youtubeId
        ? `https://www.youtube.com/embed/${youtubeId}`
        : null;

    return (
        <>
            <Header />
            <GoBack className="pt-10 pb-1 px-14" />
            <main className="min-h-dvh flex flex-col items-center gap-14">
                {videoSrc && (
                    <iframe
                        className="rounded-2xl"
                        width="749"
                        height="430"
                        src={videoSrc}
                        title={meal.strMeal}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                )}
                <h1 className="text-5xl font-black">{meal.strMeal}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 lg:px-32 w-full max-w-7xl pb-14">
                    <div className="relative flex justify-center">
                        <img
                            className="h-96 object-contain"
                            src={ingredientsNote}
                            alt="Ingredients note"
                        />
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full px-10 text-sm text-center">
                            <h2 className="font-bold text-base mb-2">Ingredients</h2>
                            <ul className="list-disc list-inside text-left pl-6">
                                {ingredients.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            className="h-96 w-full max-w-md object-cover rounded-lg shadow-lg"
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                        />
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="font-bold text-xl mb-4 text-center">Recipe</h2>
                        <div className="space-y-2">
                            {meal.strInstructions.split(/\r?\n/).filter(p => p.trim()).map((paragraph, index) => (
                                <p key={index} className="text-indent">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
