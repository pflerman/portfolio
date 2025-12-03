export default function Contact() {
  return (
    <section className="container mx-auto px-6 py-16 pb-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">¿Trabajamos juntos?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Estoy disponible para proyectos freelance y oportunidades full-time.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/5491140461603"
            target="_blank"
            className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg text-lg transition"
          >
            Contactar por WhatsApp
          </a>
          <a
            href="mailto:pflerman@gmail.com"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
}
