import GoBack from "./components/GoBack";
import Header from "./components/Header";

export default function InfoPage() {
    return (
        <>
            <Header></Header>
            <GoBack className="pt-10 pb-1 px-14"></GoBack>
            <main className="min-h-dvh flex flex-col items-center gap-14">
                <iframe className="rounded-2xl" width="749" height="430" src="https://www.youtube.com/embed/5nL-Eq1lpDU" title="I Fixed YouTube !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h1 className="text-5xl font-black">Receipt Name - Main Title</h1>
                <div className="flex-grid">
                    <div className="relative w-100 h-auto">
                        <img className="absolute w-100" src="src/assets/ingredients-note.png"></img>
                        <div className="absolute left-16 top-24">
                            <h2>Ingredients</h2>
                            <p> - Fake</p>
                            <p> - Fake</p>
                            <p> - Fake</p>
                            <p> - Fake</p>
                            <p> - Fake</p>
                        </div>
                    </div>
                    <img src="src/assets/placeholder-food.jpg"></img>
                    <div></div>
                </div>
            </main>
            <footer className="flex w-full justify-center py-12">Placeholder footer Bruh</footer>
        </>
    )
}