import React from 'react'
import Header from '../../../components/Header'
import Intro from "./Intro"
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Courses from './Courses'
import Contact from '../Contact'
import Footer from './Footer'
import Leftsider from './Leftsider'


function index() {
  return (
    <div>
      <Header/>
      <div className='bg-primary px-40 sm:px-5'>
        <Intro/>
        <About/>
        <Experiences/>
        <Projects/>
        <Contact/>
        <Footer/>
        <Leftsider/>
      </div>
    </div>
  ) 
}

export default index
