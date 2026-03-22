import GoBack from "./components/GoBack";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function InfoPage() {
    return (
        <>
            <Header></Header>
            <GoBack className="pt-10 pb-1 px-14"></GoBack>
            <main className="min-h-dvh flex flex-col items-center gap-14">
                <iframe className="rounded-2xl" width="749" height="430" src="https://www.youtube.com/embed/5nL-Eq1lpDU" title="I Fixed YouTube !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h1 className="text-5xl font-black">Classic Hamburger</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 lg:px-32 w-full max-w-7xl pb-14">
                    <div className="relative flex justify-center">
                        <img className="h-96 object-contain" src="src/assets/ingredients-note.png"></img>
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full px-10 text-sm text-center">
                            <h2 className="font-bold text-base mb-2">Ingredients</h2>
                            <ul className="list-disc list-inside text-left pl-6">
                                <li>500g ground beef</li>
                                <li>4 hamburger buns</li>
                                <li>1 onion, chopped</li>
                                <li>4 slices of cheese</li>
                                <li>Lettuce, tomato, pickles</li>
                                <li>Salt, pepper, garlic powder</li>
                                <li>Ketchup and mustard</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img className="h-96 w-full max-w-md object-cover rounded-lg shadow-lg" src="src/assets/placeholder-food.jpg"></img>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="font-bold text-xl mb-4">Receta</h2>
                        <p>1. Season the ground beef with salt, pepper, and garlic powder. Form into 4 patties.</p>
                        <p>2. Cook patties on a grill or pan over medium-high heat for 4-5 minutes per side.</p>
                        <p>3. Add cheese slices on top during the last minute of cooking. Let it melt.</p>
                        <p>4. Toast the hamburger buns lightly on the grill.</p>
                        <p>5. Assemble: bottom bun, ketchup, mustard, lettuce, patty, onion, tomato, pickles, top bun.</p>
                        <p>6. Serve immediately with fries or a side salad.</p>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}