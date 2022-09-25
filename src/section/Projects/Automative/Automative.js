import React from 'react'
import './Automative.scss'
import {Layout}from '../../../wrapper'

const automative = require("../../../assets/Projects_images/automative/automative_content.json")
console.log(automative)

const Automative= () => {


  window.onload = () => {
    automative.map((value,key)=>{
      console.log(value.title)
      console.log(value.html)
      var automative_post = document.createElement("div")
      automative_post.setAttribute("class","automative")
      
      var a = document.createElement("a")
      a.setAttribute("href","/Projects/Automative/"+value.title)

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


      automative_post.appendChild(title)
      automative_post.appendChild(img)
      automative_post.appendChild(date)
      automative_post.appendChild(summary)
      automative_post.appendChild(a)
      document.querySelector('.automative__content').appendChild(automative_post)
  })
  }
  return (
    <div className='app__automative'>
      <h1>Automative</h1>
      <div className='automative__content'></div>
    </div>
  )
}

export default Layout(Automative)