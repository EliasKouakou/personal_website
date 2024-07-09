import './App.scss';
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About,Contact,Projects,Resume,Posts,Aerospace,Robotics,Automotive,Maritime,Experience } from './section';
import { Layout } from './wrapper';
const posts = require("./assets/Posts_content/posts_content.json")

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<About/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='Projects/Robotics' element={<Robotics/>}/>
        <Route path='Projects/Maritime' element={<Maritime/>}/>
        <Route path='Projects/Aerospace' element={<Aerospace/>} />
        <Route path='Projects/Automative' element={<Automotive/>} />
        <Route path='/Posts' element={<Posts/>}/>
        {
            posts.map((post, index)=>{
              const Html = () =>{ 
                const x = document.createElement('p')
                x.innerHTML = post.html +  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis ab maiores velit, optio vitae sit qui ducimus repudiandae excepturi recusandae facilis id quisquam autem possimus similique harum quos iste." +  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis ab maiores velit, optio vitae sit qui ducimus repudiandae excepturi recusandae facilis id quisquam autem possimus similique harum quos iste."
                console.log(x)
                return (
                  <div className={`${post.title}`}>
                    {x}
                  </div>
                )
              }
            return (
              <Route path={`/Posts/${post.title}`} element={Layout(<Html/>)}/>
            )
          })
        }
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        </Routes>
    </BrowserRouter>
   
    </>
  );
}
export default App;

