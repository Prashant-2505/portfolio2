import React from 'react'


const Education = () => {

 

    return (
        <div className=' flex h-full w-full p-2 sm:p-5'>
            <div
                className="verticle-line w-[30%] h-full  flex-col  items-center pt-[4rem] hidden sm:flex">
                <p className=' text-[1.4rem]'>o</p>
                <div className='h-[8rem] border-l-2 border-black '></div>
            </div>
            <div className="data w-[100%]  flex flex-col justify-center  text-start sm:w-[70%]">
                <h1 className='font-bold text-[2rem] '>B-tech in CSE</h1>
                <h2 className=' font-semibold'>Guru Gobind Singh Indraprastha University</h2>
                <button className='w-[100%] bg-[#ff7675] px-3 py-3 my-5 sm:w-[20]'>
                    2020-2024
                </button>
                <p className=' text-gray-500'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>

                <p className=' text-gray-500 pt-5'><span className=' text-black'>CGPA: </span> 8.7</p>
            </div>
        </div>
    )
}

export default Education
