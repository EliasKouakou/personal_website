import React from 'react'
import { Layout } from '../../wrapper'
import './About.scss'
const About = () => {
  return (
    <div className='app__about'>
      <h1>KOUAKOU Elias Michaël</h1>
      <div className='image'>
        <a href='/Resume'></a>
      </div>
      <div className='about__text'>
        <h4>Welcome to my little corner of the internet where I host some of my projects as well my toughts.</h4>
        <h5>
          
          My name is <a href='/Resume'>KOUAKOU Elias Michaël</a>, and i am a Mechatronic engineer that graduate in 2022 
          in the fields of Mechatronics and want to share a part of my journey. 
          <br/>
          <br/>
          My main interests as of now include the all fields of <b>Robotics</b> and Aerospacial engineering, but i can't do without the helper 
          domain such as Computer Science(AI,Computer vision,deep learnin, etc...), Mathematics, Physics. 
          <br/>
          <br/>
          Python and C++ are my go to programming language, but i cannot help but have to explore other alternative if they offer the 
          desired results. I use both Windows and Ubuntu as my main OSs and i am looking to using MacOS, Other Linux distro's as well RTOS.
          <br/>
          <br/>
          I dedicate this website to subjects and projects of all kind. I will try my best to explain and connect every single one 
          of the fields in order to make you gain a versatile of knowledge of each domains. Whether you work as a Mechanical engineer, 
          Electrical engineer, Economist and so on... you'll probably find your field of interests.
          <br/>
          <br/>
          Aside from those engineering stuff, i have plenty of hobbies that includes Sports(Basketball, Tennis, Football, Track and Fitness) , drawing(not industrial)
          <br/>
          <br/>
          I encourage you to take a look through this online CV, which details my projects and experience. Feel free to get in contact with me if you have any questions or comments.
          <br/>
          Sincerely,

         
        </h5>
      </div>
    </div>
  )
}

export default Layout(About)