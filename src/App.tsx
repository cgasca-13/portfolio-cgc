import './App.css'
import About from './assets/components/About'
import FooterContact from './assets/components/FooterContact'
import Navbar from './assets/components/Navbar'
import Projects from './assets/components/Projects'
import Skills from './assets/components/Skills'
import { motion } from 'framer-motion'

function App() {

  // Fade animation
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  }

  // Función para descargar CV
  const downloadCV = async (filename: string) => {
    try {
      const response = await fetch(`/files/${filename}`);
      if (!response.ok) {
        throw new Error('Failed to fetch CV');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: abrir en nueva pestaña
      window.open(`/files/${filename}`, '_blank');
    }
  }

  return (
    <div id="top" className="relative min-h-screen">
      {/* Fondo animado con patrones de cuadros */}
      <div className="fixed inset-0 z-0">
        {/* Patrón de cuadros animado */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #333333 25%, transparent 25%),
              linear-gradient(-45deg, #333333 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #333333 75%),
              linear-gradient(-45deg, transparent 75%, #333333 75%)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
            animation: 'float 15s ease-in-out infinite'
          }}
        ></div>
        
        {/* Segundo patrón con diferente tamaño y velocidad */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #444444 25%, transparent 25%),
              linear-gradient(0deg, #444444 25%, transparent 25%),
              linear-gradient(90deg, transparent 75%, #444444 75%),
              linear-gradient(0deg, transparent 75%, #444444 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        ></div>
        
        {/* Patrón de puntos sutil */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #555555 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            animation: 'drift 20s linear infinite'
          }}
        ></div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10">
        <Navbar/>
        <div className="flex flex-col overflow-x-hidden">
        {/* About Section */}
        <motion.div
          // id="about"
          className="flex h-auto px-6 py-8 md:px-20 md:py-12 lg:px-52 lg:py-16 gap-8 flex-col lg:flex-row items-center scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeInLeft}
        >
          <div className="flex-grow flex flex-col h-auto lg:w-2xl justify-center lg:items-start items-center text-center lg:text-left">
            
            
            <div className="w-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Welcome!</h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mt-4">
                I'm <span className="font-bold">Carlos Gasca Contreras</span>.
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white mt-2">
                I am a Computer Systems Engineer and a web developer specializing in creating dynamic and responsive web applications.
              </h2>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">
                <button 
                  className="relative overflow-hidden group
                  hover:translate-y-[-6px] duration-300 ease-in-out hover:scale-105
                  bg-[#1C1C1C] border border-gray-700 text-white text-base md:text-lg lg:text-xl px-4 py-3 md:px-6 md:py-4 rounded-4xl hover:bg-gray-700 transition hover:cursor-pointer
                  hover:shadow-[0_0_15px_rgba(156,163,175,0.4)] hover:border-gray-400">
                  {/* Efecto metálico */}
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
                    bg-gradient-to-br from-transparent via-gray-300/10 to-gray-500/15
                    transform -rotate-45 opacity-0 group-hover:opacity-100 group-hover:translate-y-full
                    transition-all duration-500 ease-in-out"></div>
                  <span className="relative z-10">Contact Me</span>
                </button>
                <button 
                  onClick={() => downloadCV('CV English Carlos Gasca.pdf')}
                  className="relative overflow-hidden group
                  hover:translate-y-[-6px] duration-300 ease-in-out hover:scale-105
                  bg-[#1C1C1C] border border-gray-700 text-white text-base md:text-lg lg:text-xl px-4 py-3 md:px-6 md:py-4 rounded-4xl hover:bg-gray-700 transition hover:cursor-pointer w-full sm:w-auto
                  hover:shadow-[0_0_15px_rgba(156,163,175,0.4)] hover:border-gray-400">
                  {/* Efecto metálico */}
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
                    bg-gradient-to-br from-transparent via-gray-300/10 to-gray-500/15
                    transform -rotate-45 opacity-0 group-hover:opacity-100 group-hover:translate-y-full
                    transition-all duration-500 ease-in-out"></div>
                  <span className="relative z-10">Download CV - English</span>
                </button>
                <button 
                  onClick={() => downloadCV('CV Español Carlos Gasca.pdf')}
                  className="relative overflow-hidden group
                  hover:translate-y-[-6px] duration-300 ease-in-out hover:scale-105
                  bg-[#1C1C1C] border border-gray-700 text-white text-base md:text-lg lg:text-xl px-4 py-3 md:px-6 md:py-4 rounded-4xl hover:bg-gray-700 transition hover:cursor-pointer w-full sm:w-auto
                  hover:shadow-[0_0_15px_rgba(156,163,175,0.4)] hover:border-gray-400">
                  {/* Efecto metálico */}
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] 
                    bg-gradient-to-br from-transparent via-gray-300/10 to-gray-500/15
                    transform -rotate-45 opacity-0 group-hover:opacity-100 group-hover:translate-y-full
                    transition-all duration-500 ease-in-out"></div>
                  <span className="relative z-10">Download CV - Español</span>
                </button>
              </div>
            </div>

          </div>
          
          {/* Profile Image */}
          <div className="flex-grow flex flex-col h-auto justify-center items-center lg:order-last order-first">
            <img 
              src="/images/fotoLinkedin.png" 
              alt="Profile Picture" 
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-gray-700 aspect-square"
            />
          </div>
        </motion.div>
        
        {/* About Section (details) */}
        <motion.div
          id="about"
          className="px-6 md:px-20 lg:px-52 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          variants={fadeInLeft}
        >
          <About/>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          id="skills"
          className="px-6 md:px-20 lg:px-52 mt-16 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          variants={fadeInLeft}
        >
          <Skills/>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          id="projects"
          className="px-6 md:px-20 lg:px-52 mt-16 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          variants={fadeInLeft}
        >
          <Projects/>
        </motion.div>

        {/* Footer / Contact Section */}
        <motion.div
          id="contact"
          className="scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          variants={fadeInLeft}
        >
          <FooterContact/>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
