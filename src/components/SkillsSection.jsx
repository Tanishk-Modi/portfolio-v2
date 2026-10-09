const skills = [
  { label: 'Languages', items: ['Python', 'Java', 'C', 'JavaScript'] },
  { label: 'Frontend', items: ['React', 'Tailwind CSS', 'Vite'] },
  { label: 'Backend', items: ['FastAPI', 'Express', 'Celery', 'Redis', 'SQLite'] },
  { label: 'Research & ML', items: ['Qiskit', 'OpenCV', 'CLIP', 'LaTeX'] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-blue-500">
          Tech Stack
        </h2>
        <div className="w-12 h-1 rounded-full bg-blue-500/60 mx-auto mb-12" />

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 divide-y divide-white/10">
          {skills.map(({ label, items }) => (
            <div
              key={label}
              className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 py-4 first:pt-0 last:pb-0"
            >
              <span className="md:w-40 shrink-0 text-blue-400 text-sm font-mono text-center md:text-left">
                {label}
              </span>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-[#112240] border border-blue-500/20 text-gray-300 text-sm font-mono px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;