
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import SocialLinks from './components/SocialLinks';


export default function App(){

  return(
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />

      <SocialLinks />
    </>
  )
}