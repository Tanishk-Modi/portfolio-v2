import React from 'react';

const AboutSection = () => (
  <section id="about" className="relative z-10 flex items-center justify-center min-h-[75vh] px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-500">
        About
      </h2>
      <div className="w-12 h-1 rounded-full bg-blue-500/60 mx-auto mb-8" />
      <div className="space-y-6 text-lg text-gray-300 leading-relaxed rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
        <p>
          I recently completed my internship at NAWCAD (Naval Air Warfare Center Aircraft Division), where I built a full-stack benchmarking platform for computational algorithms. 
        </p>
        <p>
        Before that, I engineered a bioinspired underwater robot through UMD's FIRE program, and built full-stack web platforms as a software intern at TerpLabs.
        </p>
        <p>
          I mostly work in Python, Java, and JavaScript, with React, Express, and FastAPI on the web side.
        </p>
        <p>
          Outside of engineering, I enjoy philosophy, bodybuilding, traveling, and playing the piano.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;