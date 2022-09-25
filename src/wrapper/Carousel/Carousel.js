import React from 'react'

const Carousel = ({active,IMG}) => {
  return (
    <div className={`${value} carousel`} key={`${key}`}>
        {
            IMG.map((img,keys)=>{
            if(keys<3){
                return (
                <ul className='images' key={`${keys}`} style={active === value ? {display: 'contents' } : {display:"none"}}>
                    <h2>{value.toUpperCase()}</h2>
                    <li><a href={`${value}`}><img src={img} alt={img}/></a></li>
                    <span>  
                    <ul>
                        {
                        IMG.map((im,k)=>{
                            return(
                            <li className='dot nav' key={`${k}`}><a href={im} style={active === value ? { backgroundColor: '#313BAC' } : {}}></a></li>     
                            )
                        })
                        }
                    </ul>
                    </span>
                </ul>
                    )
            }
            
        })
        }
    </div>
  )
}

export default Carousel