import React from 'react'
import './TechnicalSoftware.scss'
const software1 = [
    require("../../assets/Software/ANSYS.jpg"),
    require("../../assets/Software/CATIA.png"),
    require("../../assets/Software/Eagle.webp"),
    require("../../assets/Software/Fusion360.webp"),
    // require("../../assets/Software/LabView.webp"),
    require("../../assets/Software/OpenRocket.webp"),
    require( "../../assets/Software/Solidworks.png"),
    require("../../assets/Software/Matlab_and_Simulink.png")
]


const software2= []
const TechnicalSoftware = () => {
  return (
    <div className='app__software'>
        {
            software1.map((logo,key)=>{
                console.log(logo)
                return (
                    <div className={logo} key={logo+key}>
                        <img src={logo}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TechnicalSoftware