import React from 'react'

function Loader() {
  return (
     <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
        <div className='flex gap-5 text-6xl font-semibold sm:text-3xl'>
      <h1 className="text-Secondary  N">N</h1>
      <h1 className="text-white A" >A</h1>
      <h1 className="text-teritery K">K</h1>
    </div>
     </div>
  )
}

export default Loader
