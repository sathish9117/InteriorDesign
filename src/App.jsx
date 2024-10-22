import Brands from "./components/Brands/Brands";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <main className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
    </main>
  );
}

export default App;
