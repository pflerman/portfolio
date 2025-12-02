export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
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

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Sobre mí</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Soy Systems Analyst de Argentina con años de experiencia en desarrollo de software. 
            Mi transición hacia el desarrollo full-time nace de una pasión genuina: cuando programo, 
            el tiempo literalmente vuela.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            He construido e-commerce completos, CRMs, aplicaciones móviles y sistemas de gestión 
            para negocios reales. Trabajo con tecnologías modernas y me enfoco en crear soluciones 
            prácticas que resuelven problemas reales.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Stack Técnico</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'JavaScript', 'React', 'Next.js', 'Node.js',
              'Python', 'Go', 'Flutter', 'Tailwind CSS',
              'Supabase', 'PostgreSQL', 'Git', 'Linux'
            ].map((tech) => (
              <div key={tech} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition">
                <span className="text-lg">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Proyectos Destacados</h2>
          
          <div className="space-y-8">
            
            {/* Proyecto 1: Cajas Ordenadoras */}
            <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition">
              <h3 className="text-2xl font-bold mb-3">E-commerce Cajas Ordenadoras</h3>
              <p className="text-gray-300 mb-4">
                Plataforma de e-commerce completa con integración de pagos MercadoPago, 
                gestión de productos, carrito de compras y panel de administración. 
                Migración completa desde TiendaNube a solución custom.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Supabase</span>
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">MercadoPago API</span>
              </div>
              <a 
                href="https://cajasordenadoras.com" 
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Ver sitio en producción →
              </a>
            </div>

            {/* Proyecto 2: CRM */}
            <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition">
              <h3 className="text-2xl font-bold mb-3">Sistema CRM Cloud</h3>
              <p className="text-gray-300 mb-4">
                Sistema de gestión de clientes con dashboard interactivo, seguimiento de ventas, 
                gestión de contactos y notificaciones automáticas por email.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Supabase</span>
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>

            {/* Proyecto 3: MercadoLibre Manager */}
            <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition">
              <h3 className="text-2xl font-bold mb-3">MercadoLibre Product Manager</h3>
              <p className="text-gray-300 mb-4">
                Aplicación GUI en Python para gestión masiva de publicaciones en MercadoLibre. 
                Incluye autenticación OAuth, multi-cuenta, filtros avanzados y actualización batch de productos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">MercadoLibre API</span>
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">OAuth</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
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

    </main>
  );
}
