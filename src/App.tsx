import Hero from "./components/profileSec";
import Navbar from "./components/navbar";
import TecnologySection from "./components/tecnologySec";
import ProjectSection from "./components/projectSec";
import HeadContact from "./components/headconSec";
import Contact from "./components/contactSec";
import Footer from "./components/footerSec";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TecnologySection />
      <ProjectSection />
      <HeadContact/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
