import React, { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#new-projects' },
  { name: 'Skills', href: '#skills' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="w-full px-2 md:px-8 py-3 shadow-lg fixed top-0 left-0 z-50"
      style={{
        background: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(25px)",
        WebkitBackdropFilter: "blur(15px)"
      }}
    >
      {/* Hamburger for mobile */}
      <div className="flex justify-between items-center md:hidden px-2">
        <span className="text-xl font-bold text-white">tmodi</span>
        <button
          className="text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2" rx="1" fill="currentColor"/>
            <rect y="11" width="24" height="2" rx="1" fill="currentColor"/>
            <rect y="17" width="24" height="2" rx="1" fill="currentColor"/>
          </svg>
        </button>
      </div>
      {/* Links */}
      <ul
        className={`flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10
          ${open ? 'block' : 'hidden'} md:flex
          bg-black/80 md:bg-transparent rounded-b-xl md:rounded-none py-2 md:py-0 transition-all duration-300`}
      >
        {navLinks.map(link => (
          <li key={link.name} className="w-full md:w-auto">
            <a
              href={link.href}
              className="relative block px-4 py-2 text-white text-lg font-medium transition-colors duration-200
                hover:text-white
                group"
            >
              <span className="absolute inset-0 rounded-md bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar