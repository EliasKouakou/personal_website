import React from 'react'
import './Maritime.scss'
import {Layout}from '../../../wrapper'

const maritime = require("../../../assets/Projects_images/maritime/maritime_content.json")
console.log(maritime)

const Maritime= () => {


  window.onload = () => {
    maritime.map((value,key)=>{
      console.log(value.title)
      console.log(value.html)
      var maritime_post = document.createElement("div")
      maritime_post.setAttribute("class","maritime")
      
      var a = document.createElement("a")
      a.setAttribute("href","/Projects/Maritime/"+value.title)

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


      maritime_post.appendChild(title)
      maritime_post.appendChild(img)
      maritime_post.appendChild(date)
      maritime_post.appendChild(summary)
      maritime_post.appendChild(a)
      document.querySelector('.maritime__content').appendChild(maritime_post)
  })
  }
  return (
    <div className='app__maritime section'>
      <h1>Maritime</h1>
      <div className='maritime__content'></div>
    </div>
  )
}

export default Layout(Maritime)