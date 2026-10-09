import React from 'react'
import { Github, ExternalLink } from 'lucide-react';

const rayCastingImg = '/mammothmaze.png';
const fetchImg = '/fetchimg.png';

const projects = [
    {
      id: 1,
      type: 'Graphics & Game Design',
      title: 'Custom Raycasting Engine',
      description: 'A Java-based retro-style 3D maze game featuring raycasting visuals, real-time player movement, and a relentless woolly mammoth that stalks you through a procedural hell.',
      tags: ['Java AWT', 'A* Pathfinding'],
      imageSrc: rayCastingImg,
      githubUrl: 'https://github.com/8tsmith11/mammoth-maze',
      liveUrl: 'https://devpost.com/software/mammoth-maze'
    },
    {
      id: 2,
      type: 'Computer Vision & Machine Learning',
      title: 'Fetch',
      description: 'An AI-powered smart storage system that uses computer vision to automatically catalog physical objects and physically retrieve them instantly by text or voice command.',
      tags: ['Python', 'CLIP', 'FastAPI', 'OpenCV', 'PySerial'],
      imageSrc: fetchImg,
      githubUrl: 'https://github.com/8tsmith11/turntable-storage',
      liveUrl: 'https://devpost.com/software/fetch-rmeo7c'
    }
];

const ProjectsSection = () => {
  return (
    <section id="new-projects" className="py-20 px-5 lg:px-20 text-[#a8b2d1]">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center w-full mb-[150px] md:mb-[100px] sm:mb-[80px]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-500">
            Projects
          </h2>
          <div className="w-12 h-1 rounded-full bg-blue-500/60" />
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-[100px] sm:gap-[60px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-[50px] md:gap-[30px] ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Project Image */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex-1 max-w-full md:max-w-[60%] rounded-lg overflow-hidden shadow-xl border border-white/10 transition-transform duration-300 group`}
              >
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-auto block filter grayscale brightness-50 transition-all duration-300 group-hover:filter-none group-hover:scale-105"
                  onError={(e) => { e.target.src = "https://placehold.co/1200x800/292d3e/a8b2d1?text=Image+Unavailable"; }}
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,25,47,0.9)] to-[rgba(6,17,28,0.3)] opacity-80 transition-opacity duration-300 group-hover:opacity-0"></div>
              </a>

              {/* Project Details */}
              <div
                className={`flex-1 z-10 bg-[#050e1c] border border-white/10 p-6 rounded-lg shadow-xl text-center md:text-left ${index % 2 === 0 ? 'md:-ml-24' : 'md:-mr-24'} ${index % 2 === 0 ? 'lg:-ml-32' : 'lg:-mr-32'}`}
              >
                <span className="block text-blue-400 text-md font-mono mb-2">
                  {project.type}
                </span>
                <h3 className="text-[#ccd6f6] text-xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-md md:text-base lg:text-lg leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-[#112240] border border-blue-500/20 text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center md:justify-start gap-4">
                  {/* GitHub link */}
                  {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="text-[#a8b2d1] hover:text-blue-400 hover:-translate-y-0.5 transition"
                  >
                    <Github size={24} />
                  </a>
                  )}
                  {/* Live project link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live project`}
                    className="text-[#a8b2d1] hover:text-blue-400 hover:-translate-y-0.5 transition"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Notes PDF */}
        <div className="mt-[100px] sm:mt-[60px] flex justify-center">
          <a
            href="/Quantum_Notes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open quantum research notes (PDF) in a new tab"
            className="group inline-flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-left transition hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-white/10"
          >
            <img
              src="/quantum-notes-preview.png"
              alt="Preview of quantum research notes"
              className="h-28 w-auto rounded-md border border-white/10 bg-white object-cover object-top"
            />
            <span>
              <span className="block text-blue-400 text-sm font-mono mb-1">Research</span>
              <span className="block text-lg font-semibold text-[#ccd6f6]">Quantum Research Notes</span>
              <span className="block text-sm text-gray-400">PDF · Opens in a new tab</span>
            </span>
            <span className="text-blue-500 text-xl transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection