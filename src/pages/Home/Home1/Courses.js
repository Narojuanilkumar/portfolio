import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
 import { courses } from '../../../resources/courses';

function Courses() {
    const [selectedItemIndex,setSelectedItemIndex]=React.useState(0);
  return (
    <div>
      <SectionTitle title="Courses"/>
      <div className="flex py-10 gap-20 sm:flex-col" >
        <div className='flex flex-col gap-10 border-l-2 border-[#2d706b] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
              { courses.map((courses,index) =>(
                <div onClick={() =>{
                    setSelectedItemIndex(index);

                }} className='cursor-pointer'>
                <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-teritery border-teritery border-l-4 -ml-[3px] bg-[#5ebc784d] py-3' : 'text-white'} `} >{courses.title}</h1>
                    </div>
              ))}z
        </div>
        <div className='flex items-center justify-center gap-10 sm:flex-col'>
             
        <div className='flex flex-col gap-5'>
<h1 className="text-Secondary text-2xl ">{courses[selectedItemIndex].title}</h1>
<p className="text-white">{courses[selectedItemIndex].description}</p>

       <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, distinctio dicta accusamus ad rerum accusantium! Adipisci, culpa. Repudiandae dicta laboriosam iste natus, deserunt dolor dolore perspiciatis ipsum qui fugiat magnam!</p>
        </div>
        <img src={courses[selectedItemIndex].image} alt=""  className='h-60 w-72'/>
        </div>
        
      </div>
    </div>
  )
}

export default  Courses

