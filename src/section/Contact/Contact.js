import React from 'react'
import { Layout } from '../../wrapper'
import "./Contact.scss"
const links = {"github":"https://github.com/EliasKouakou","linkedin":"https://www.linkedin.com/in/elias-micha%C3%ABl-kouakou-4a4006195/","gitlab":"https://gitlab.com/EliasKouakou","grabcad":""}

const Contact = () => {

  function backend_form(){

  }
  
  return (
    <div className='app__contact section'>
      <form  action='http://localhost:8000/server.php' method="POST">
        <label htmlFor='name'><h1>Name</h1></label>
        <input type={"text"} name="name"  placeholder="name" required/>
        <label htmlFor='mail'><h1>eMail </h1></label>
        <input type={"email"} name="mail" placeholder='xxxxxx@yyy.zzz' required/>
        <label htmlFor='subject'><h1>Subject </h1></label>
        <input type={"text"} name="subject" placeholder='...' required/>
        <label htmlFor='message'><h1>Message</h1></label>
        <textarea name='message' placeholder='...' required />
        <input className='btn' type={"submit"} value="Send"/>
        </form>
        <br/>
        <br/>
        <h1 className='p-text'>Or just email me directly at : <a href='mailto:elmichaellangelo@gmail.com'>elmichaellangelo@gmail.com</a></h1>
        <div className='urls'>
              {
                  ["linkedin","github","gitlab"].map((value,key)=>{
                      return (
                          <a href={links[value]} key={`${value+key}`}><i className={`fa fa-${value}`}></i></a>
                      )
                  })
              }
        </div>
    </div>
  )
}

export default Layout(Contact)