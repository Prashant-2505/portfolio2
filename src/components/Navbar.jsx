import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import { MdOutlineContacts } from "react-icons/md";

import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ scrollToSection }) => {
    const [showIconHome, setShowIconHome] = useState(false)
    const [showIconAbout, setShowIconAbout] = useState(false)
    const [showIconSkill, setShowIconSkill] = useState(false)
    const [showIconProject, setShowIconProject] = useState(false)
    const [showIconContact, setShowIconContact] = useState(false)


    const liStyle = 'h-[4rem] w-full flex justify-center items-center relative cursor-pointer '
    const liDivStyle = 'absolute w-full h-full  flex justify-center items-center'
    const liDivTextStyle = 'w-full flex justify-center items-center text-[#ff7675] text-[1rem] p-5 sm:text-[1.4rem]'

    return (
        <nav className=' w-[22vw]  h-[100vh] flex flex-col justify-between items-center sm:w-[15vw]'>



            <div className=' flex h-full w-full flex-col'>
                <div
                    to='home'
                    smooth='true' duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    onClick={() => scrollToSection("home")} // Added onClick handler

                    className="logo w-full h-[6.4rem] flex
            flex-col justify-center items-center bg-[#ff7675] font-semibold text-white cursor-pointer">
                    <p>PRASHANT</p>
                    <p>SHARMA</p>
                </div>
                <div className=" w-full h-full ">
                    <ul className=' space-y-5 '>
                        <li
                            to='home'
                            smooth='true' duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            onClick={() => scrollToSection("home")} // Added onClick handler


                            onMouseEnter={() => setShowIconHome(true)}
                            onMouseLeave={() => setShowIconHome(false)}
                            className={liStyle}>
                            <motion.div
                                initial={{ x: -150, opacity: 0 }}
                                animate={{ x: showIconHome ? 0 : -150, opacity: showIconHome ? 1 : 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={liDivStyle}>
                                <p className={liDivTextStyle}>Home</p>
                            </motion.div>
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: showIconHome ? -150 : 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={liDivStyle}>
                                <p className='text-[2rem]'><IoHomeOutline /></p>
                            </motion.div>
                        </li>

                        <li
                            to='about'
                            smooth='true' duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            onClick={() => scrollToSection("about")} // Added onClick handler


                            onMouseEnter={() => setShowIconAbout(true)}
                            onMouseLeave={() => setShowIconAbout(false)}
                            className={liStyle}>
                            <motion.div
                                initial={{ x: -150 }}
                                animate={{ x: showIconAbout ? 0 : -150 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={liDivStyle}>
                                <p className={liDivTextStyle}>About</p>
                            </motion.div>
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: showIconAbout ? -150 : 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={liDivStyle}>
                                <p className='text-[2rem]'><CgProfile />
                                </p>
                            </motion.div>
                        </li>

                        <li
                            to='skill'
                            smooth='true' duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            onClick={() => scrollToSection("skill")} // Added onClick handler


                            onMouseEnter={() => setShowIconSkill(true)}
                            onMouseLeave={() => setShowIconSkill(false)}
                            className={liStyle}>
                            <motion.div
                                initial={{ x: -150 }}
                                animate={{ x: showIconSkill ? 0 : -150 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={liDivStyle}>
                                <p className={liDivTextStyle}>Skill</p>
                            </motion.div>
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: showIconSkill ? -150 : 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={liDivStyle}>
                                <p className='text-[2rem]'><IoSettingsOutline /></p>
                            </motion.div>
                        </li>

                        <li
                            to='project'
                            smooth='true' duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            onClick={() => scrollToSection("project")} // Added onClick handler



                            onMouseEnter={() => setShowIconProject(true)}
                            onMouseLeave={() => setShowIconProject(false)}
                            className={liStyle}>
                            <motion.div
                                initial={{ x: -150 }}
                                animate={{ x: showIconProject ? 0 : -150 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={liDivStyle}>
                                <p className={liDivTextStyle}>Project</p>
                            </motion.div>
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: showIconProject ? -150 : 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={liDivStyle}>
                                <p className='text-[2rem]'><CgToolbox /></p>
                            </motion.div>
                        </li>

                        <li

                            to='contact'
                            smooth='true' duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            onClick={() => scrollToSection("contact")} // Added onClick handler


                            onMouseEnter={() => setShowIconContact(true)}
                            onMouseLeave={() => setShowIconContact(false)}
                            className={liStyle}>
                            <motion.div
                                initial={{ x: -150 }}
                                animate={{ x: showIconContact ? 0 : -150 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={liDivStyle}>
                                <p className={liDivTextStyle}>Contact</p>
                            </motion.div>
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: showIconContact ? -150 : 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={liDivStyle}>
                                <p className='text-[2rem]'><MdOutlineContacts /></p>
                            </motion.div>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
