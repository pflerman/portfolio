import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Hero />
        <About />
        <Blog />
        <TechStack />
        <Projects />
        <CallToAction />
        <Contact />
      </main>
    </>
  );
}
