import React from 'react'
import './Layout.scss'
import { Link } from 'react-router-dom'
const links = {"github":"https://github.com/EliasKouakou","linkedin":"https://www.linkedin.com/in/elias-micha%C3%ABl-kouakou-4a4006195/","gitlab":"https://gitlab.com/EliasKouakou","grabcad":""}

const Layout = (Component) => function HOC(){
  return (
    <div className='app__layout'>
        <main className='content'>
            <aside className='aside__left'>
                <div className='simple__about'>
                    <h1>KOUAKOU<br/> Elias<br/> Michaël</h1>
                    {/* <p className='p-text info'> Engineering<br/> Programming<br/> Drawing</p> */}
                </div>
                
                <nav>
                <ul className='menu__navigation'>
                   {["About","Resume","Experience","Projects","Posts","Contact"].map((value,key)=>{
                    return (
                        <li className={`${value}`} key={`${key}`}>
                            <a href={`/${value}`}><span>{value.toUpperCase()}</span></a>
                        </li>
                    )
                   })
                   }
                </ul>
                </nav>
                <div className='urls'>
                    {
                        ["linkedin","github","gitlab"].map((value,key)=>{
                            return (
                                <a href={links[value]} key={`${value+key}`}><i className={`fa fa-${value}`}></i></a>
                            )
                        })
                    }
                </div>
            <footer>
                <p> &copy; 2022 K.E.M </p>
            </footer>


            </aside>

            <aside className='aside__right'>
                <Component/>
            </aside>
        </main>
    </div>
  )
}

export default Layout