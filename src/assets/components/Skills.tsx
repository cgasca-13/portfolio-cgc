// Datos de las skills organizados por categoría
const skillsData = {
    programmingLanguages: [
        { name: 'JavaScript', src: '/public/images/javascript-logo.png', imgSize: 'w-8 h-8 sm:w-12 sm:h-12' },
        { name: 'TypeScript', src: '/public/images/typescript-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' },
        { name: 'Java', src: '/public/images/java-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' },
        { name: 'C', src: '/public/images/c-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' },
        { name: 'C++', src: '/public/images/cpp-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' },
        { name: 'C#', src: '/public/images/csharp-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' },
        { name: 'Python', src: '/public/images/python-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' }
    ],
    tools: [
        { name: 'Git', src: '/public/images/git-logo.png', imgSize: 'w-8 h-8 sm:w-12 sm:h-12' },
        { name: 'GitHub', src: '/public/images/github-logo.png', imgSize: 'w-8 h-8 sm:w-12 sm:h-12' },
        { name: 'Trello', src: '/public/images/trello-logo.png', imgSize: 'w-8 h-8 sm:w-12 sm:h-12' },
        { name: 'Jira', src: '/public/images/jira-logo.png', imgSize: 'w-8 h-8 sm:w-12 sm:h-12' },
        { name: 'Figma', src: '/public/images/figma-logo.png', imgSize: 'w-8 h-8 sm:w-12 sm:h-12' },
        { name: 'Postman', src: '/public/images/postman-logo.webp', imgSize: 'w-8 h-8 sm:w-12 sm:h-12' }
    ],
    frontEnd: [
        { name: 'React', src: '/public/images/react-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' },
        { name: 'Tailwind CSS', src: '/public/images/tailwind-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' },
        { name: 'HTML', src: '/public/images/html-logo.png', imgSize: 'w-8 h-8 sm:w-12 sm:h-12' },
        { name: 'CSS', src: '/public/images/css-logo.png', imgSize: 'w-8 h-8 sm:w-12 sm:h-12' }
    ],
    backEnd: [
        { name: 'Node.js', src: '/public/images/node-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' },
        { name: 'SQL', src: '/public/images/sql-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' },
        { name: 'PostgreSQL', src: '/public/images/postgresql-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' },
        { name: 'MySQL', src: '/public/images/mysql-logo.png', imgSize: 'w-10 h-10 sm:w-12 sm:h-12' }
    ]
};

// Componente reutilizable para renderizar un skill item
const SkillItem = ({ name, src, imgSize }: { name: string; src: string; imgSize: string }) => (
    <div className="flex flex-col text-sm sm:text-base md:text-lg font-medium justify-center items-center gap-2">
        <div className="bg-gray-800 p-3 sm:p-4 rounded-full flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24">
            <img src={src} alt={`${name} Logo`} className={`${imgSize} object-contain`} />
        </div>
        <span className="text-center">{name}</span>
    </div>
);

const Skills = () => {
    return (
        <div className="text-white bg-[#1C1C1C] p-4 sm:p-6 md:p-8 rounded-2xl shadow-md border border-gray-700">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Skills</h2>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Programming Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                {skillsData.programmingLanguages.map((skill) => (
                    <SkillItem key={skill.name} name={skill.name} src={skill.src} imgSize={skill.imgSize} />
                ))}
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                {skillsData.tools.map((skill) => (
                    <SkillItem key={skill.name} name={skill.name} src={skill.src} imgSize={skill.imgSize} />
                ))}
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Front-End</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                {skillsData.frontEnd.map((skill) => (
                    <SkillItem key={skill.name} name={skill.name} src={skill.src} imgSize={skill.imgSize} />
                ))}
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Back-End</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                {skillsData.backEnd.map((skill) => (
                    <SkillItem key={skill.name} name={skill.name} src={skill.src} imgSize={skill.imgSize} />
                ))}
            </div>
        </div>
    )
}

export default Skills