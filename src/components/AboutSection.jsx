import React from 'react';

const AboutSection = () => (
  <section id="about" className="relative z-10 flex items-center justify-center min-h-[75vh] px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-500">
        About
      </h2>
      <div className="space-y-6 text-lg text-gray-300 leading-relaxed ">
        <p>
          I am a student @ The University of Maryland (go terps! 🐢) studying computer science.🧑‍💻
        </p>
        <p>
          Currently, I'm an intern at NAWCAD (Naval Air Warfare Center Aircraft Division) researching quantum algorithms. Before that, I engineered a bioinspired underwater robot 🦾 through UMD's FIRE program, and built full-stack web platforms as a software intern at TerpLabs.
        </p>
        <p>
          In addition to my love of technology, I am also interested in history, bodybuilding, traveling, and playing the piano.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;