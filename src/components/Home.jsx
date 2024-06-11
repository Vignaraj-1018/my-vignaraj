import React from 'react'
import { github, hackerrank, instagram, leetCode, linkedin, myPic, waveHand } from '../assets'
import { socialMediaLink, techStack } from '../constants'

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse w-full justify-center items-center gap-10">
        <div className="flex" data-aos="fade-left" data-aos-duration='1000'>
            <img src={myPic} alt="My Picture" className='flex w-[15rem] h-[15rem] rounded-full hover:scale-125 transition' />
        </div>
        <div className="flex flex-col sm:w-[60rem] w-full gap-10 p-10 " data-aos="fade-right" data-aos-duration='1000'>
            <div className="flex">
                <p className="flex text-3xl text-secondary">Hi, I am</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="flex sm:text-7xl text-4xl font-bold">Vignaraj D</p>
                <p className="flex sm:text-7xl text-4xl font-semibold text-slate-500">I build things for the web.</p>
                <p className="flex text-lg text-slate-400">I'm a full-stack web developer who gets a real kick out of unraveling complex problems and constantly expanding my skillset.  Building things isn't just a job for me, it's a journey of discovery!
                </p>
            </div>
            <div className="flex">
                <a href="#contact">
                    <div className="flex border-2 text-secondary border-secondary hover:text-white hover:bg-secondary p-3 rounded-xl sm:hover:scale-110 cursor-pointer select-none">
                        Get in touch
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home