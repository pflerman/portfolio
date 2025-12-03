export default function Projects() {
  const projects = [
    {
      title: "E-commerce Cajas Ordenadoras",
      description: "Plataforma de e-commerce completa con integración de pagos MercadoPago, gestión de productos, carrito de compras y panel de administración. Migración completa desde TiendaNube a solución custom.",
      technologies: ["Next.js", "React", "Supabase", "MercadoPago API"],
      link: "https://cajasordenadoras.com"
    },
    {
      title: "Sistema CRM Cloud",
      description: "Sistema de gestión de clientes con dashboard interactivo, seguimiento de ventas, gestión de contactos y notificaciones automáticas por email.",
      technologies: ["React", "Supabase", "Tailwind CSS"],
      link: null
    },
    {
      title: "MercadoLibre Product Manager",
      description: "Aplicación GUI en Python para gestión masiva de publicaciones en MercadoLibre. Incluye autenticación OAuth, multi-cuenta, filtros avanzados y actualización batch de productos.",
      technologies: ["Python", "MercadoLibre API", "OAuth"],
      link: null
    }
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Proyectos Destacados</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Ver sitio en producción →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
