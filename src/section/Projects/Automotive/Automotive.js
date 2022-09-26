import React from 'react'
import './Automotive.scss'
import {Layout}from '../../../wrapper'

const automotive = require("../../../assets/Projects_images/automotive/automotive_content.json")
console.log(automotive)

const Automotive= () => {


  window.onload = () => {
    automotive.map((value,key)=>{
      console.log(value.title)
      console.log(value.html)
      var automotive_post = document.createElement("div")
      automotive_post.setAttribute("class","automotive")
      
      var a = document.createElement("a")
      a.setAttribute("href","/Projects/Automotive/"+value.title)

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


      automotive_post.appendChild(title)
      automotive_post.appendChild(img)
      automotive_post.appendChild(date)
      automotive_post.appendChild(summary)
      automotive_post.appendChild(a)
      document.querySelector('.automotive__content').appendChild(automotive_post)
  })
  }
  return (
    <div className='app__automotive'>
      <h1>Automotive</h1>
      <div className='automotive__content'></div>
    </div>
  )
}

export default Layout(Automotive)