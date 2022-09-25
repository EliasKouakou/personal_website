import React from 'react'
import { Layout } from '../../wrapper'
import "./Resume.scss"
import Education from './Education'
const Resume = () => {
  return (
    <div className='app__resume'>
       <h3 className='resume'> You can download the English resume <a href={require("../../assets/cv_en_25092022.pdf")}>here</a></h3>
       <h3 className='resume'> French version <a href={require("../../assets/cv_fr_25092022.pdf")}>here</a></h3>
       <Education/>
    </div>
  )
}

export default Layout(Resume)