import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="blur-blob w-80 h-80 bg-sky-400/40 -left-10 top-10" />
        <div className="blur-blob w-96 h-96 bg-fuchsia-500/30 right-0 top-40" />
        <div className="blur-blob w-72 h-72 bg-cyan-400/25 left-1/2 -translate-x-1/2 bottom-0" />
      </div>
      <Header />
      <main className="pt-24 sm:pt-28">
        <Hero />
        <About />
        <Skill />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
