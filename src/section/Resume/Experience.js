import React from 'react'
import './Experience.scss'
import { Layout } from '../../wrapper'
const workExp = require('../../assets/WorkExp/workex_content.json')
const Experience = () => {
  return (
    <div className='app__we section'>
        <h1>WorkExperience</h1>
        {
          workExp.map((we, key)=>{
            return(
              <div className={we} key={we+key}>
                <h2>{we.title}</h2>
                <img src={we.Company_logo} alt={we.Company_logo}/>
                <h3>{we.description}</h3>
                <a href=''><input className='btn' value={"learn more"}/></a>
              </div>
            )
          })
        }
        
    </div>
  )
}

export default Layout(Experience)