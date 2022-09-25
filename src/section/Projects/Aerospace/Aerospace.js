import React from 'react'
import './Aerospace.scss'
import {Layout}from '../../../wrapper'

const aerospace = require("../../../assets/Projects_images/aerospace/aerospace_content.json")
console.log(aerospace)

const Aerospace= () => {


  window.onload = () => {
    aerospace.map((value,key)=>{
      console.log(value.title)
      console.log(value.html)
      var aerospace_post = document.createElement("div")
      aerospace_post.setAttribute("class","aerospace")
      
      var a = document.createElement("a")
      a.setAttribute("href","/Projects/Aerospace/"+value.title)

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


      aerospace_post.appendChild(title)
      aerospace_post.appendChild(img)
      aerospace_post.appendChild(date)
      aerospace_post.appendChild(summary)
      aerospace_post.appendChild(a)
      document.querySelector('.aerospace__content').appendChild(aerospace_post)
  })
  }
  return (
    <div className='app__aerospace'>
      <h1>Aerospace</h1>
      <div className='aerospace__content'></div>
    </div>
  )
}

export default Layout(Aerospace)