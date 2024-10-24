import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import NewsLetter from "./components/NewsLetter";
import Services from "./components/Services";
import Testimonal from "./components/Testimonal";

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
      <NewsLetter />
      <Footer />
    </main>
  );
}

export default App;
