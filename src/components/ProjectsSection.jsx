import React from 'react'
import { Github, ExternalLink } from 'lucide-react';

const profitGridImg = '/profitgridimg.png';
const rayCastingImg = '/mammothmaze.png';

const projects = [
    {
      id: 1,
      type: 'Full Stack',
      title: 'Profit Grid',
      description: 'Full stack stock analysis platform built with React/Tailwind Frontend, Python backend, and PostgreSQL database.',
      tags: ['React', 'Tailwind', 'Python', 'PostgreSQL', 'FastAPI'],
      imageSrc: profitGridImg,
      githubUrl: 'https://github.com/Tanishk-Modi/Profit-Grid',
      liveUrl: 'https://profit-grid-git-main-tanishk-modis-projects.vercel.app/'
    },
    {
      id: 2,
      type: 'Game Design',
      title: 'Custom Raycasting Engine',
      description: 'A Java-based retro-style 3D maze game featuring raycasting visuals, real-time player movement, and a relentless woolly mammoth that stalks you through a procedural hell.',
      tags: ['Java AWT', 'A* Pathfinding'],
      imageSrc: rayCastingImg,
      githubUrl: 'https://github.com/8tsmith11/mammoth-maze',
      liveUrl: 'https://www.youtube.com/watch?v=x7w1gzq9Fo8'
    },
];

const ProjectsSection = () => {
  return (
    <section id="new-projects" className="py-20 px-5 lg:px-20 text-[#a8b2d1]">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center w-full mb-[150px] md:mb-[100px] sm:mb-[80px]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-500">
            Projects
          </h2>
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
                className={`relative flex-1 max-w-full md:max-w-[60%] rounded-md overflow-hidden shadow-xl transition-transform duration-300 group`}
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
                className={`flex-1 z-10 bg-[#050e1c] p-6 rounded-md shadow-xl text-center md:text-left ${index % 2 === 0 ? 'md:-ml-24' : 'md:-mr-24'} ${index % 2 === 0 ? 'lg:-ml-32' : 'lg:-mr-32'}`}
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
                    <span key={tagIndex} className="bg-[#112240] text-blue-400 text-sm font-mono px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center md:justify-start gap-4">
                  {/* GitHub link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a8b2d1] hover:text-blue-400 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  {/* Live project link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a8b2d1] hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

          {/* Minor Projects */}

      </div>
    </section>
  );
}

export default ProjectsSection