// Datos de las skills organizados por categoría
const skillsData = {
    programmingLanguages: [
        { name: 'JavaScript', src: '/images/javascript-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'TypeScript', src: '/images/typescript-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'Java', src: '/images/java-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'Python', src: '/images/python-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'Node.js', src: '/images/node-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'SQL', src: '/images/sql-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'PostgreSQL', src: '/images/postgresql-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'MySQL', src: '/images/mysql-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'React', src: '/images/react-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'Tailwind CSS', src: '/images/tailwind-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'HTML', src: '/images/html-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'CSS', src: '/images/css-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'Git', src: '/images/git-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'GitHub', src: '/images/github-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'Trello', src: '/images/trello-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'Jira', src: '/images/jira-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'Figma', src: '/images/figma-logo.png', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
        { name: 'Postman', src: '/images/postman-logo.webp', imgSize: 'w-12 h-12 sm:w-12 sm:h-12' },
    ]
};

const SkillItem = ({ name, src, imgSize }: { name: string; src: string; imgSize: string }) => (
    <div className="flex flex-col text-sm sm:text-base md:text-lg font-medium justify-center items-center gap-2">
        <div className="relative bg-gray-800 p-3 sm:p-4 rounded-full flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 overflow-hidden group cursor-pointer">
            {/* Imagen principal */}
            <img 
                src={src} 
                alt={`${name} Logo`} 
                className={`${imgSize} object-contain transition-all duration-500 ease-in-out group-hover:scale-150 group-hover:rotate-360 group-hover:opacity-0 relative z-10`} 
            />
            
            {/* Efecto de partículas - Patrón radial */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 ease-in-out group-hover:scale-200 group-hover:rotate-45"
                style={{
                    backgroundImage: `radial-gradient(circle at center, #06b6d4 1px, transparent 2px, transparent 50px)`,
                    backgroundSize: '50px 50px'
                }}
            ></div>
            
            {/* Efecto de partículas - Segunda capa */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 ease-in-out group-hover:scale-200 group-hover:-rotate-45"
                style={{
                    backgroundImage: `radial-gradient(circle at center, #06b6d4 1px, transparent 2px, transparent 50px)`,
                    backgroundSize: '50px 50px'
                }}
            ></div>
            
            {/* Puntos de partículas adicionales con diferentes delays */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 ease-in-out">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-ping" style={{animationDelay: '0.1s'}}></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-ping" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-ping" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-ping" style={{animationDelay: '0.4s'}}></div>
                <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-ping" style={{animationDelay: '0.6s'}}></div>
                <div className="absolute bottom-1/6 right-1/6 w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-ping" style={{animationDelay: '0.7s'}}></div>
            </div>
            
            {/* Texto que aparece al final de la animación */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" style={{transitionDelay: '0.4s'}}>
                <span className="text-cyan-400 text-md text-center items-center font-bold animate-pulse">{name}</span>
            </div>
        </div>
    </div>
);

const Skills = () => {
    return (
        <div className="text-white bg-[#1C1C1C] p-4 sm:p-6 md:p-8 rounded-2xl shadow-md border border-gray-700">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Skills</h2>
            {/* <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Programming Languages</h3> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 mb-4">
                {skillsData.programmingLanguages.map((skill) => (
                    <SkillItem key={skill.name} name={skill.name} src={skill.src} imgSize={skill.imgSize} />
                ))}
            </div>
        </div>
    )
}

export default Skills