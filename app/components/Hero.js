export default function Hero() {
  return (
    <section id="inicio" className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Pablo Francisco Lerman
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-4">
          Desarrollador Full Stack
        </p>
        <p className="text-lg text-gray-400 mb-8">
          Systems Analyst transitioning to Software Development
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/pflerman"
            target="_blank"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/pabloflerman"
            target="_blank"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/5491140461603"
            target="_blank"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
