export default function TechStack() {
  const technologies = [
    'JavaScript', 'React', 'Next.js', 'Node.js',
    'Python', 'Go', 'Flutter', 'Tailwind CSS',
    'Supabase', 'PostgreSQL', 'Git', 'Linux'
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Stack Técnico</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div key={tech} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition">
              <span className="text-lg">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
