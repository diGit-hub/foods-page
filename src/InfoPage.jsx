import Header from "./components/Header";

export default function InfoPage(){
    return(
        <>
            <Header></Header>
            <main className="min-h-dvh flex flex-col items-center py-12">
                <iframe width="749" height="430" src="https://www.youtube.com/embed/5nL-Eq1lpDU" title="I Fixed YouTube !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </main>
            <footer>Placeholder footer too</footer>
        </>
    )
}