import Navbar from './components/Navbar'
import DarkVeil from './components/DarkVeil'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='relative min-h-screen bg-black/80 text-white font-sans overflow-x-hidden'>

      <Navbar />

      {/* DarkVeil as background */}
      <div className="absolute top-0 left-0 w-full h-[75vh] z-0">
        <DarkVeil />
      </div>

      <HeroSection></HeroSection>

      <AboutSection></AboutSection>

      <ExperienceSection></ExperienceSection>

      <ProjectsSection></ProjectsSection>

      <Footer></Footer>

    </div>
  )
}

export default App