export default function Blog() {
  const articles = [
    {
      title: "De Systems Analyst a Full Stack Developer",
      date: "Diciembre 2024",
      tag: "Carrera",
      summary: "Mi experiencia transitando del análisis de sistemas al desarrollo full-time. Desafíos, aprendizajes y por qué el código se convirtió en mi pasión.",
      tagColor: "bg-purple-600"
    },
    {
      title: "Construyendo un E-commerce Completo con Next.js",
      date: "Noviembre 2024",
      tag: "Next.js",
      summary: "Cómo desarrollé una plataforma e-commerce desde cero usando Next.js, Supabase y MercadoPago. Decisiones técnicas y lecciones aprendidas.",
      tagColor: "bg-blue-600"
    },
    {
      title: "Mi Setup de Desarrollo: Tmux, Claude Code y Productividad",
      date: "Diciembre 2024",
      tag: "Herramientas",
      summary: "Las herramientas que uso diariamente para maximizar mi productividad. Desde tmux hasta Claude Code y mi workflow de terminal.",
      tagColor: "bg-green-600"
    }
  ];

  return (
    <section id="blog" className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Blog</h2>
        <p className="text-xl text-gray-400 mb-12 text-center">
          Reflexiones sobre desarrollo, aprendizaje y tecnología
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all hover:transform hover:scale-105 hover:shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">{article.date}</span>
                <span className={`${article.tagColor} px-3 py-1 rounded-full text-xs font-semibold`}>
                  {article.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                {article.title}
              </h3>

              <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                {article.summary}
              </p>

              <button
                disabled
                className="w-full px-4 py-2 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed opacity-50 text-sm"
              >
                Próximamente
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
