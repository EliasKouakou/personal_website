import React from 'react'
import './Robotics.scss'
import {Layout}from '../../../wrapper'

const robotics = require("../../../assets/Projects_images/robotics/robotics_content.json")
console.log(robotics)

const Robotics = () => {


  window.onload = () => {
    robotics.map((value,key)=>{
      console.log(value.title)
      console.log(value.html)
      var robotic_post = document.createElement("div")
      robotic_post.setAttribute("class","robotics")
      
      var a = document.createElement("a")
      a.setAttribute("href","/Projects/Robotics/"+value.title)

      var title = document.createElement("h2")
      title.innerHTML = value.title

      var img = document.createElement("img")
      img.setAttribute("src",value.img)

      var date = document.createElement("h3")
      date.innerHTML = value.date

      var summary = document.createElement("p")
      summary.innerHTML = value.summary

      var html = document.createElement("p")
      html.innerHTML = value.html +  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis ab maiores velit, optio vitae sit qui ducimus repudiandae excepturi recusandae facilis id quisquam autem possimus similique harum quos iste." +  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis ab maiores velit, optio vitae sit qui ducimus repudiandae excepturi recusandae facilis id quisquam autem possimus similique harum quos iste."
      
      var btn = document.createElement('input')
      btn.setAttribute('type',"button")
      btn.setAttribute("class","btn")
      btn.setAttribute("style","margin:0 auto;")
      btn.setAttribute("value", "Learn More...")

      a.appendChild(btn)


      robotic_post.appendChild(title)
      robotic_post.appendChild(img)
      robotic_post.appendChild(date)
      robotic_post.appendChild(summary)
      robotic_post.appendChild(a)
      document.querySelector('.robotics__content').appendChild(robotic_post)
  })
  }
  return (
    <div className='app__robotics'>
      <h1>Robotics</h1>
      <div className='robotics__content'></div>
    </div>
  )
}

export default Layout(Robotics)