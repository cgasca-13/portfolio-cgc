import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

const FooterContact = () => {
    return (
        <footer className="bg-[#1C1C1C] text-white px-6 md:px-36 pt-8 pb-4 mt-8">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex flex-col lg:justify-center">
                    <p className="text-3xl md:text-4xl mb-4 font-bold">Contact me!</p>
                </div>

                <div className="flex flex-col gap-3">
                    <a href="mailto:carlosgascac@gmail.com" className="flex items-center hover:text-gray-400 cursor-pointer transition">
                        <MdEmail size={30} className="mr-4 flex-shrink-0"/>
                        <p className="text-lg md:text-xl break-all">carlosgascac@gmail.com</p>
                    </a>
                    <a href="https://www.linkedin.com/in/c-gasca/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-400 cursor-pointer transition">
                        <FaLinkedin size={30} className="mr-4 flex-shrink-0"/>
                        <p className="text-lg md:text-xl">Carlos Gasca</p>
                    </a>
                    <a href="https://github.com/cgasca-13" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-400 cursor-pointer transition">
                        <IoLogoGithub size={30} className="mr-4 flex-shrink-0"/>
                        <p className="text-lg md:text-xl">cgasca-13</p>
                    </a>
                </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-700">
            </div>
        </footer>
    )
}

export default FooterContact