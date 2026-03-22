import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListCatg from "./components/ListCatg";
import ListCountry from "./components/ListCountry";

export default function Home() {
    return (
        <>
            <Header></Header>
            <Carousel></Carousel>
            <ListCatg></ListCatg>
            <ListCountry></ListCountry>
            <Footer></Footer>
        </>
    );
}
