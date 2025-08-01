import React from 'react';

const AboutSection = () => (
  <section id="about" className="relative z-10 flex items-center justify-center min-h-[75vh] px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-500">
        About
      </h2>
      <div className="space-y-6 text-lg text-gray-300 leading-relaxed ">
        <p>
          I am a student @ The University of Maryland studying computer science.🧑‍💻
        </p>
        <p>
          I'm currently involved with the FIRE (First Year Innovation and Research Experience) program here, where I am learning how to engineer bioinspired robotic systems.🦾
        </p>
        <p>
          In addition to my love of technology, I am also interested in history, bodybuilding, science, entrepreneurship, and writing.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;