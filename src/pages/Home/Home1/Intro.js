import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi ,I am </h1>
      <h1 className='text-7xl sm:text-3xl text-Secondary font-semibold'>Naroju Anil Kumar</h1>
      <h1 className='text-7xl sm:text-3xl text-white font-semibold'>I build things for the web</h1>
      <p className='text-white transition w-2/3'>
      Hi, I'm [Anil ], a passionate MERN stack developer with expertise in HTML, CSS, React, TypeScript, EJS, Node. js, Express, and MongoDB."
      </p>
      <button className=' border border-teritery text-teritery px-10  sm:px-5 py-2 rounded'>Get Started</button>
    </div>
  )
}

export default Intro
