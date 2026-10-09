import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Naval Air Warfare Center Aircraft Division (U.S. Navy)',
    date: 'June 2026 - August 2026',
    blurb: 'Built a full-stack benchmarking platform with React & FastAPI, using Celery/Redis and WebSockets for async simulation processing.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'TerpLabs',
    date: 'December 2025 - February 2026',
    blurb: 'Built a secure Express.js API with JWT & OAuth 2.0, optimized MongoDB queries, and engineered an AWS S3 upload pipeline.',
  },
  {
    role: 'Undergraduate Researcher',
    company: 'UMD FIRE Program',
    date: 'Jan 2025 - Dec 2025',
    blurb: 'Programmed C++ servo control algorithms for an autonomous underwater robot, reducing motor response latency by 35%.',
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative z-10 py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-blue-500">
        Experience
      </h2>
      <div className="w-12 h-1 rounded-full bg-blue-500/60 mx-auto mb-16" />

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div
            key={exp.role + exp.company}
            className={`flex items-start md:items-center gap-6 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Icon marker */}
            <div className="flex-shrink-0 z-10 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center">
              <FaBriefcase className="text-blue-500 w-4 h-4" />
            </div>

            {/* Card */}
            <div className="flex-1 bg-gray-900/50 border border-white/10 hover:border-blue-500/50 rounded-xl p-5 hover:scale-[1.02] transition">
              <p className="text-sm text-blue-400 font-medium">{exp.date}</p>
              <h3 className="text-lg font-bold mt-1">{exp.role}</h3>
              <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{exp.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
