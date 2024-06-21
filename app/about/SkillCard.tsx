import Image from 'next/image'
import React from 'react'


const SkillCard = ({skill} : {skill: any}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 rounded-md p-2 bg-base-200'>
        <Image className='flex-2 w-8 h-8' src={skill.img} alt={skill.value}/>
        <span className='flex-1 text-xs font-semibold'>{skill.value}</span>
    </div>
  )
}

export default SkillCard