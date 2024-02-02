import './App.css'
import Navbar from './components/Navbar'
import profile from './assets/profile.webp'
import cpp from './assets/cpp.png'
import js from './assets/js.png'
import react from './assets/react.png'
import next from './assets/next.png'
import bootstrap from './assets/bootstrap.png'
import tailwind from './assets/tailwind.png'
import node from './assets/node.png'
import express from './assets/express.png'
import firebase from './assets/firebase.png'
import sql from './assets/sql.png'
import mongo from './assets/mongo.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Education from './components/Education';
import { project } from './utility'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import resume from './assets/resume.pdf'


function App() {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    rootMargin: '-150px 0px',

  });

  const [homeRef, homeInView] = useInView({
    triggerOnce: false,
    rootMargin: '-150px 0px',

  });

  const [educationRef, educationInView] = useInView({
    triggerOnce: false,
    rootMargin: '-150px 0px',
  });

  const [skillRef, skillInView] = useInView({
    triggerOnce: false,
    rootMargin: '-150px 0px',
  });

  const [project1Ref, project1InView] = useInView({
    triggerOnce: false,
    rootMargin: '-150px 0px',
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    rootMargin: '-150px 0px',
  });


  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex justify-between items-center'>
      <Navbar
        scrollToSection={scrollToSection}
      />
      <div style={{ backgroundImage: 'linear-gradient(to bottom, #ff7675, #ff9573, #ffb37b, #ffd08c, #ffeaa7)' }}
        className='h-screen w-screen overflow-scroll '
      >
        {/* home div */}
        <div
          className="home h-full w-full flex flex-col justify-around items-center sm:flex-row md:flex-col lg:flex-row"
          ref={homeRef}>

          <div className="data pt-[3rem] text-center w-[100%] h-full  flex flex-col justify-center items-start px-10 gap-10 sm:w-[50%] sm:px-7 md:w-full md:flex  md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -250 }}
              animate={homeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              <h1 className=' font-semibold text-[1.4rem] sm:text-[2.3rem]'>Hi  I'm Prashant Sharma</h1>
              <h2 className=' text-[1.5rem]'>Web Developer</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -250 }}
              animate={homeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}

              className=' flex gap-[20px]'
            >
              <a className='px-3 py-2 bg-white text-[#ff7675] text-[1.2rem] rounded-3xl hover:bg-[#ff7675] hover:text-white duration-150 ease-linear flex gap-[10px] items-center sm:px-10 sm:py-4 sm:text-[1.7rem]'
                download={resume}
                target={'_blank'}
                href={resume}
              >Resume   <BsFillArrowDownCircleFill />
              </a>

              <a className='px-3 py-3 bg-white text-[#ff7675] text-[1.2rem] rounded-3xl hover:bg-[#ff7675] hover:text-white duration-150 ease-linear flex gap-[10px] items-center sm:px-10 sm:py-8 sm:text-[1.7rem]'
                target={'_blank'} href="mailto:sharmaprashant2505@gmail.com"
              >Contact
              </a>
            </motion.div>
          </div>
          <div className="image w-[80%] h-full flex justify-center items-center sm:w-[50%]">
            <motion.img
              initial={{ opacity: 0, x: -250 }}
              animate={homeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className='h-[80%]'
              src={profile} alt=""
            />
          </div>
        </div>


        {/* about div */}
        <div
          name="about"
          className="about mt-9 mb-12 h-auto w-full text-center px-5 sm:px-20" ref={aboutRef}>
          <motion.h1
            initial={{ opacity: 0, x: -250 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='text-center text-[2rem] font-semibold border-b-2 inline-block mb-16'>About me</motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -250 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className='text-start text-[1.3rem]'>I can develop that help people</motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -250 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className='text-start text-[1.3rem] pt-8'>Hello! I'm Prashant Sharma, a passionate web developer with a knack for turning ideas into interactive and efficient web applications. My journey in the world of web development has equipped me with a diverse skill set that spans both front-end and back-end technologies. I take pride in creating seamless digital experiences that not only look great but also function flawlessly.</motion.p>

          <motion.p
            initial={{ opacity: 0, x: -250 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className='text-start text-[1.3rem] pt-8'>I have a strong affinity for problem-solving, and I enjoy tackling algorithmic challenges on platforms like LeetCode and GeeksforGeeks. Whether it's optimizing code or finding elegant solutions to complex problems, I'm always up for the challenge.</motion.p>

        </div>


        {/* education div */}
        <div
          name="about"
          className="education about mt-9  h-auto text-center px-5 sm:px-20" ref={educationRef}>
          <motion.button
            initial={{ y: -40 }}
            animate={educationInView ? { y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className='text-center text-[2rem] font-semibold border-2 inline-block p-4 rounded-3xl bg-black text-white hover:bg-white hover:text-black transition duration-500 ease-in-out mb-16 mt-5 cursor-default shadow-2xl'> Education</motion.button>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={educationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.9 }}
            className=" h-[70%] w-full bg-white rounded-3xl">
            <Education />
          </motion.div>
        </div>


        {/* skill div */}
        <div
          className='skill text-center mt-12 p-6 sm:p-20' ref={skillRef}>
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={skillInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='text-center text-[2rem] font-semibold border-b-2 inline-block mb-16'>Skills</motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={skillInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="">

            <h1 className=' bg-white inline-block mb-3 px-4 py-4 rounded-full'>Programming Languages</h1>

            <div className='bg-white flex justify-between p-10 rounded-xl sm:justify-around'>
              <div className="flex justify-center items-center ">
                <img className=' w-[3rem] '
                  src={cpp} alt="" />
                <p
                  className=' font-semibold'>c++</p>
              </div>
              <div className="flex justify-center items-center ">
                <img className=' w-[3rem] '
                  src={js} alt="" />
                <p
                  className=' font-semibold'>javascript</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={skillInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="">
            <h1 className=' bg-white inline-block mb-3 px-4 py-4 rounded-full mt-5'>Frontend Technology</h1>

            <div className='bg-white grid grid-cols-2 justify-between gap-10  items-center p-10 rounded-xl flex-wrap sm:flex-nowrap'>

              <div className="flex  justify-center items-center gap-15px">
                <img className='w-[3rem]' src={cpp} alt="" />
                <p className=' font-semibold'>HTML/</p>
              </div>
              <div className="flex justify-center items-center gap-15px">
                <img className='w-[3rem]' src={js} alt="" />
                <p className=' font-semibold'>CSS</p>
              </div>
              <div className="flex justify-center items-center gap-15px">
                <img className='w-[3rem]' src={js} alt="" />
                <p className=' font-semibold'>Javascript</p>
              </div>

              <div className="flex justify-center items-center gap-15px">
                <img className='w-[3rem]' src={react} alt="" />
                <p className=' font-semibold'>React js</p>
              </div>
              <div className="flex justify-center items-center gap-15px">
                <img className='w-[3rem]' src={next} alt="" />
                <p className=' font-semibold'>Next js</p>
              </div>
              <div className="flex justify-center items-center gap-15px">
                <img className='w-[3rem]' src={bootstrap} alt="" />
                <p className=' font-semibold'>Bootstrap </p>
              </div>
              <div className="flex justify-center items-center gap-15px">
                <img className='w-[3rem]' src={tailwind} alt="" />
                <p className=' font-semibold'>Tailwind css</p>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={skillInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 1 }}
            className="">
            <h1 className=' bg-white inline-block mb-3 px-4 py-4 rounded-full mt-5'>Backend Technology</h1>

            <div className='bg-white grid grid-cols-2 justify-around gap-10 p-10 rounded-xl'>

              <div className="flex justify-center items-center gap-15px">
                <img className='h-[3rem]' src={express} alt="" />
                <p className=' font-semibold'>Express js</p>
              </div>
              <div className="flex justify-center items-center gap-15px">
                <img className='h-[3rem]' src={node} alt="" />
                <p className=' font-semibold'>Node js</p>
              </div>
              <div className="flex justify-center items-center gap-15px">
                <img className='h-[3rem]' src={firebase} alt="" />
                <p className=' font-semibold'>Firebase</p>
              </div>
              <div className="flex justify-center items-center gap-15px">
                <img className='h-[3rem]' src={sql} alt="" />
                <p className=' font-semibold'>Sql</p>
              </div>
              <div className="flex justify-center items-center gap-15px">
                <img className='h-[3rem]' src={mongo} alt="" />
                <p className=' font-semibold'>Mongo DB</p>
              </div>

            </div>
          </motion.div>

        </div>


        {/* projects div */}
        <div className='project text-center my-8 p-4' ref={project1Ref}>
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={project1InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='text-center text-[2rem] font-semibold border-b-2 inline-block mb-16'
          >
            Projects
          </motion.h1>

          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
            {project.map((proj, index) => (
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={project1InView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 * index + 0.9 }}
                key={index}
                className='border-2 p-5 rounded-lg shadow-xl'
              >
                <img className='' src={proj.image} alt={proj.name} />
                <div className='X'>
                  <h2 className='font-semibold text-[1.4rem] border-b-2'>{proj.name}</h2>
                  <p className='text-start font-semibold bg-white p-3'>{proj.description}</p>
                  <div className="flex justify-between pt-5">
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className='bg-black text-white px-8 py-2 rounded-md flex justify-center items-center'>
                      Link
                    </a>

                    <a href={proj.git} target="_blank" rel="noopener noreferrer" className='bg-black text-white px-8 py-2 rounded-md flex justify-center items-center'>
                      <FaGithub className='text-[2rem]' />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* contact div */}
        <div
          className="contact text-center mt-8" ref={contactRef}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={contactInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center text-[2rem] font-semibold border-b-2 inline-block mb-16"
          >
            Contact
          </motion.h1>

          <div className="bg-black h-[10rem] w-full flex justify-around items-center">
            <a
              href="https://www.linkedin.com/in/prashant-sharma-ab9b0a209/"
              target="_blank"
              className="border-2 border-transparent hover:border-white hover:bg-white p-3 rounded-full duration-200 ease-linear cursor-pointer"
            >
              <FaLinkedin className="text-[2rem] bg-blue-400" />
            </a>

            <a
              href="https://github.com/Prashant-2505"
              target="_blank"
              className="border-2 border-transparent hover:border-white hover:bg-white p-3 rounded-full duration-200 ease-linear cursor-pointer"
            >
              <FaGithub className="text-[2rem] bg-white" />
            </a>

            <a
              href="https://leetcode.com/prashant_71200/"
              target="_blank"
              className="border-2 border-transparent hover:border-white hover:bg-white p-3 rounded-full duration-200 ease-linear cursor-pointer"
            >
              <SiLeetcode className="text-[2rem] bg-yellow-400" />
            </a>

            <a
              href="https://www.hackerrank.com/sharmaprashant23"
              target="_blank"
              className="border-2 border-transparent hover:border-white hover:bg-white p-3 rounded-full duration-200 ease-linear cursor-pointer"
            >
              <SiHackerrank className="text-[2rem] bg-green-400" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
