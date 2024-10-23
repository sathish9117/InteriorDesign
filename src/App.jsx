import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Brands from "./components/Brands/Brands";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonal from "./components/Testimonal/Testimonal";

function App() {
  return (
    <main className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Banner />
      <Banner2 />
      <Testimonal />
    </main>
  );
}

export default App;
