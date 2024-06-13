import React from 'react'

function Leftsider() {
  return (
    <div className='fixed left-0 bottom-0 px-5 sm:static'>
        <div className='flex flex-col items-center'>
        <div className="flex flex-col gap-4 sm:flex-row">
            <a href="https://www.facebook.com/anil.rockess/"><i class="ri-facebook-fill text-gray-400 text-xl"></i></a>
            <a href="https://mail.google.com/"><i class="ri-mail-line  text-gray-400 text-xl"></i></a>
            <a href="https://github.com/Narojuanilkumar"><i class="ri-github-fill  text-gray-400 text-xl"></i></a>
            <a href="https://www.instagram.com/anilrockess/"><i class="ri-instagram-line  text-gray-400 text-xl"></i></a>
            <a href="https://www.linkedin.com/in/naroju-anil-kumar-57953b251/"><i class="ri-linkedin-box-fill  text-gray-400 text-xl"></i></a>

      </div>
      <div className='w-[1px] h-32 sm:hidden bg-gray-400'></div>
        </div>
       
    </div>
  )
}

export default Leftsider
