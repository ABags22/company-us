// src/pages/Home.tsx
import Profile from "./components/pages/profileSec";
import Navbar from "./components/pages/navbar";
import TecnologySection from "./components/pages/technologySec";
import ProjectSection from "./components/pageProject/projectSec";
import HeadContact from "./components/pages/contactHead";
import Contact from "./components/pages/contactSec";
import Footer from "./components/pages/footerSec";
import ScrollTop from "./components/pages/scrollTop";
const Home = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <TecnologySection />
      <ProjectSection />
      <HeadContact />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Home;
