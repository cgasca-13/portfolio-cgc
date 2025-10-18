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

  return (
    <>
      <Navbar/>
      <div className="flex flex-col overflow-x-hidden">
        {/* About Section */}
        <motion.div
          className="flex h-auto px-6 py-8 md:px-20 md:py-12 lg:px-36 lg:py-16 gap-8 flex-col lg:flex-row items-center"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeInLeft}
        >
          <div className="flex-grow flex flex-col h-auto justify-center lg:items-start items-center text-center lg:text-left">
            <div className="w-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Welcome!</h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mt-4">
                I'm <span className="font-bold">Carlos Gasca Contreras</span>.
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white mt-2">
                I am a web developer specializing in creating dynamic and responsive web applications.
              </h2>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">
                <button className="bg-[#1C1C1C] border border-gray-700 text-white text-base md:text-lg lg:text-xl px-4 py-3 md:px-6 md:py-4 rounded-4xl hover:bg-gray-700 transition hover:cursor-pointer">
                  Contact Me
                </button>
                <a href="/public/files/CV English Carlos Gasca.pdf" download>
                  <button className="bg-[#1C1C1C] border border-gray-700 text-white text-base md:text-lg lg:text-xl px-4 py-3 md:px-6 md:py-4 rounded-4xl hover:bg-gray-700 transition hover:cursor-pointer w-full sm:w-auto">
                    Download CV - English
                  </button>
                </a>
                <a href="/public/files/CV Español Carlos Gasca.pdf" download>
                  <button className="bg-[#1C1C1C] border border-gray-700 text-white text-base md:text-lg lg:text-xl px-4 py-3 md:px-6 md:py-4 rounded-4xl hover:bg-gray-700 transition hover:cursor-pointer w-full sm:w-auto">
                    Download CV - Español
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-grow flex flex-col h-auto justify-center items-center lg:order-last order-first">
            <img 
              src="/public/images/fotoLinkedin.png" 
              alt="Profile Picture" 
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-gray-700 aspect-square"
            />
          </div>
        </motion.div>
        
        {/* About Section */}
        <motion.div 
          className="px-6 md:px-20 lg:px-36"
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
          className="px-6 md:px-20 lg:px-36 mt-16"
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
          className="px-6 md:px-20 lg:px-36 mt-16"
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
    </>
  )
}

export default App
