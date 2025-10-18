import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-[#1C1C1C] text-white px-6 md:px-20 py-4 w-full h-24 mb-8 sticky top-0 z-50">
        <div className="flex justify-between items-center h-full">
            <a href="/" >
                <p className="text-2xl font-medium">Portfolio</p>
            </a>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-2xl font-medium">
            <p className="hover:text-gray-400 cursor-pointer transition">About</p>
            <p className="hover:text-gray-400 cursor-pointer transition">Skills</p>
            <p className="hover:text-gray-400 cursor-pointer transition">Projects</p>
            <p className="hover:text-gray-400 cursor-pointer transition">Contact</p>
            </div>

            {/* Mobile Menu Button */}
            <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-4 text-xl font-medium pb-4">
            <p className="hover:text-gray-400 cursor-pointer transition" onClick={() => setIsMenuOpen(false)}>About</p>
            <p className="hover:text-gray-400 cursor-pointer transition" onClick={() => setIsMenuOpen(false)}>Skills</p>
            <p className="hover:text-gray-400 cursor-pointer transition" onClick={() => setIsMenuOpen(false)}>Projects</p>
            <p className="hover:text-gray-400 cursor-pointer transition" onClick={() => setIsMenuOpen(false)}>Contact</p>
            </div>
        </div>
        </nav>
    )
}

export default Navbar