import React from 'react'
import SplitText from './SplitText';
import TextType from './TextType';

const HeroSection = () => {
  const handleAnimationComplete = () => {
    // Animation complete callback
  };

  return (
    <section id='home'>
      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center">
        {/* Left Column */}
        <div className="flex flex-col items-center justify-center max-w-xl space-y-6">
          <div className="flex items-center">
            <SplitText
              text="Hey There! 👋"
              className="text-2xl md:text-3xl font-bold"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold">I'm Tanishk</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            I'm a{' '}
            <span className="text-blue-500">
              <TextType 
                text={["Full-Stack Developer.", "Software Engineer.", "Tech Enthusiast."]}
                showCursor={true}
                cursorCharacter="|"
              />
            </span>
          </h2>
          {/* Button and Socials */}
          <div className="flex items-center space-x-4 mt-8">
            <button
              className="bg-gray-800/50 border border-gray-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-700/50 transition flex items-center"
            >
              Lets connect! <span className="ml-2">→</span>
            </button>
            <a
              href="https://www.linkedin.com/in/tanishk-modi/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow hover:bg-gray-200 transition"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.604v5.592z"/>
              </svg>
            </a>
            <a
              href="https://github.com/Tanishk-Modi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow hover:bg-gray-200 transition"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.585 8.2-6.082 8.2-11.385 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection