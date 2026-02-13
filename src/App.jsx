import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Competitive from './components/Competitive';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <OpenSource />
        <Competitive />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
