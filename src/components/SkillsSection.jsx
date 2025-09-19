import React from 'react';
import {
   DiReact, DiPython, DiJava
} from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiExpress, SiTailwindcss, SiGit, SiFigma, SiPostman, SiDocker, SiFastapi, SiMongodb } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";

const skills = {
  languages: [
    { name: 'Python', icon: <DiPython className="w-16 h-16" /> },
    { name: 'Java', icon: <DiJava className="w-16 h-16" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-16 h-16" /> },
  ],
  frameworks: [
    { name: 'React', icon: <DiReact className="w-16 h-16" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-16 h-16" /> },
    { name: 'Express', icon: <SiExpress className="w-16 h-16" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-16 h-16" /> },
    { name: 'FastAPI', icon: <SiFastapi className="w-16 h-16" /> },
  ],
  tools: [
    { name: 'Git', icon: <SiGit className="w-16 h-16" /> },
    { name: 'Docker', icon: <SiDocker className="w-16 h-16" /> },
    { name: 'Figma', icon: <SiFigma className="w-16 h-16" /> },
    { name: 'Postman', icon: <SiPostman className="w-16 h-16" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-16 h-16" /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql className="w-16 h-16" /> },
  ],
};

const SkillCard = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center py-4 bg-gray-900/50 rounded-lg transition-transform transform hover:scale-105">
    {icon}
    <p className="mt-2 text-center">{name}</p>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-20 text-blue-500">My Tech Stack</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.languages.map(skill => <SkillCard key={skill.name} {...skill} />)}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Frameworks & Libraries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.frameworks.map(skill => <SkillCard key={skill.name} {...skill} />)}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.tools.map(skill => <SkillCard key={skill.name} {...skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;