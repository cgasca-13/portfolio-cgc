import { IoSchoolSharp } from "react-icons/io5";

const About = () => {
  return (
    <div className="text-white">
        <div className="bg-[#1C1C1C] p-4 sm:p-6 md:p-8 rounded-2xl shadow-md border border-gray-700">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">About me</h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start lg:items-center">
              <IoSchoolSharp size={100} className="hidden md:block flex-shrink-0 mt-1 md:w-32 md:h-32 lg:w-40 lg:h-40 lg:mt-0"/>
              <IoSchoolSharp size={80} className="block md:hidden flex-shrink-0"/>
            <div>
              <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 md:mb-8 text-center md:text-left">
                I am a frontend-focused software developer with experience in React, Tailwind CSS, 
                and API integration. I also participate in Backend development using Django and microservices, 
                always aiming to create complete, efficient, and scalable applications.
              </p>
              <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4">My Journey</h2>
              <p className="text-base sm:text-lg md:text-xl text-white text-center md:text-left">
                From an early age, I was drawn to technology. During high school, I discovered programming, 
                and since then I've continued learning both independently and through formal education. 
                Over time, I developed a strong passion for frontend development, where I can blend logic and 
                design to build intuitive, visually appealing web interfaces that prioritize user experience. 
                This passion extends to the role of a UI/UX Designer, as I find great satisfaction in focusing on 
                the entire user journey, ensuring not only aesthetic quality but also optimal usability and accessibility 
                in every product I help create.
              </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About