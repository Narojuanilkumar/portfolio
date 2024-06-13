import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import index from '.'

function About() {
  const skills=[
    "java",
    "javaScript",
    "React",
    "Nodejs",
    "Expressjs",
    "MongoDB",
    "MySQl",
    "Firebase",
    "python",
    
  ]
  return (
    <div>
     <SectionTitle title="About"/>
     <div className="flex w-full items-cente sm:flex-col">
      <div className='h-[70vh] w-1/2 sm:w-full'>
<dotlottie-player
 src="https://lottie.host/2afb11ec-0184-45c4-b519-00b22f158560/lk4hkKsq2p.json"
  background="transparent" speed="1"
 
    autoplay>

</dotlottie-player>
      </div>
      <div className='flex flex-col gap-5 w-1/2'>
        <p className="text-white">
         Hello, I'm (Anil) and I work as a web developer. I have been working as a web developer for quite some time now. I believe I am a very ambitious person who loves to work on making the website work well.
        </p>
        <p className='text-white'>
        love to have my clients happy with the site’s performance, which they are able to see on their personal devices. Apart from this, I have also worked in several renowned companies from around the world. I hope I get the opportunity to work in your esteemed organization. That’s all from my side. 
        </p>
      </div>
     </div>
     <div className='py-5'>
      <h1 className="text-teritery text-xl">
        here are a few technologies I've been working with recently 
      </h1>
       <div className="flex flex-wrap gap-10 mt-5">
       {skills.map((skill,index) => (
        <div className='border border-teritery py-3 px-7'>
          <h1 className='text-teritery'>{skill}</h1>
          </div>

      ))}
       </div>

     </div>
    </div>
  )
}

export default About
