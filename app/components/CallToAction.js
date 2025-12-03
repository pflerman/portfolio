'use client';

export default function CallToAction() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Charlemos sobre cómo puedo ayudarte a convertir tu idea en realidad
          </p>
          <a
            href="#contacto"
            onClick={scrollToContact}
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
}
