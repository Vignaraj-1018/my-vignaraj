import React, { useEffect, useState } from 'react'
import { aboutPic, internImg } from '../assets'
import axios from 'axios'
import { leetCodeProblemsSolvedQuery, leetCodeProfileDataQuery, leetCodeLanguagesSolvedQuery, leetCodeCalendarDataQuery, techStack } from '../constants'

import './style.css'

const About = () => {

  return (
    <div className="flex flex-col gap-5 sm:w-[60vw] w-[75vw]">
      <div className="flex flex-row items-center gap-5">
        <p className="flex text-secondary font-bold text-3xl">About me</p>
        <div className="flex border-secondary border-2 bg-secondary sm:w-56 w-36 h-1"></div>
      </div>
      <div className="flex flex-col gap-10">
        <p className="flex text-slate-400">
          Full stack web developer with a strong passion for problem-solving and continuous learning. Experienced in front-end and back-end technologies, with a knack for building robust and user-friendly applications. Dedicated to sharing knowledge and staying updated with the latest industry trends.
        </p>
        <div className="flex flex-wrap flex-row gap-1 justify-around select-none">
          {techStack.map((item, key)=>(
            <div className="flex gap-3 bg-slate-800 p-3 rounded-xl hover:scale-110" key={key}>
              <img src={item.src} alt={item.name} className="flex w-8 h-8" />
              <p className="flex text-slate-400 text-lg">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About