import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <CallToAction />
      <Contact />
    </main>
  );
}
