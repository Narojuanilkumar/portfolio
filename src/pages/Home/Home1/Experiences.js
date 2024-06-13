import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import { experiences } from '../../../resources/experiences'
function Experiences() {
    const [selectedItemIndex,setSelectedItemIndex]=React.useState(0);
  return (
    <div>
      <SectionTitle title="Experiences"/>
      <div className="flex py-10 gap-20 sm:flex-col" >
        <div className='flex flex-col gap-10 border-l-2 border-[#2d706b] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
              {experiences.map((experience,index) =>(
                <div onClick={() =>{
                    setSelectedItemIndex(index);

                }} className='cursor-pointer'>
                <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-teritery border-teritery border-l-4 -ml-[3px] bg-[#5ebc784d] py-3' : 'text-white'} `} >{experience.period}</h1>
                    </div>
              ))}z
        </div>
        <div className='flex flex-col gap-5'>
<h1 className="text-Secondary text-2xl ">{experiences[selectedItemIndex].title}</h1>
<h1 className="text-teritery text-2xl ">{experiences[selectedItemIndex].company}</h1>
       <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, distinctio dicta accusamus ad rerum accusantium! Adipisci, culpa. Repudiandae dicta laboriosam iste natus, deserunt dolor dolore perspiciatis ipsum qui fugiat magnam!</p>
        </div>
      </div>
    </div> 
  );
}

export default Experiences
