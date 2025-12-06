import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Home = ({ handleNavClick }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <About onEducationClick={() => handleNavClick('https://www.kuet.ac.bd/')} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
