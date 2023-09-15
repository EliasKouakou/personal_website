import React from 'react'
import './Posts.scss'
import {Layout}from '../../wrapper'

const posts = require("../../assets/Posts_content/posts_content.json")
console.log(posts)

const Posts = () => {


  window.onload = () => {
    posts.map((value,key)=>{
      console.log(value.title)
      console.log(value.html)
      var post = document.createElement("div")
      post.setAttribute("class","post")
      
      var a = document.createElement("a")
      a.setAttribute("href","/Posts/"+value.title)

      var title = document.createElement("h2")
      title.innerHTML = value.title

      var img = document.createElement("img")
      img.setAttribute("src",value.img)

      var date = document.createElement("h3")
      date.innerHTML = "<i className='fa fa-calendar></i>'" + value.date

      var keywords = document.createElement('div')
      keywords.setAttribute('class',"keywords")

      //populate keywords with keywords from posts_urls


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


      post.appendChild(title)
      post.appendChild(img)
      post.appendChild(date)
      post.appendChild(summary)
      post.appendChild(a)
      document.querySelector('.post__content').appendChild(post)
  })
  }
  return (
    <div className='app__posts section'>
      <h1>Posts</h1>
      <div className='post__content'></div>
    </div>
  )
}

export default Layout(Posts)