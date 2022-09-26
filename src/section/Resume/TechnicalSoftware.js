import React from 'react'
import './TechnicalSoftware.scss'
import { motion} from 'framer-motion'
const software1 = [
    require("../../assets/Software/ANSYS.jpg"),
    require("../../assets/Software/CATIA.png"),
    require("../../assets/Software/Eagle.webp"),
    require("../../assets/Software/Fusion360.webp"),
    require("../../assets/Software/OpenRocket.webp"),
    require( "../../assets/Software/Solidworks.png"),
    require("../../assets/Software/Matlab_and_Simulink.png")
]
const software2 = [
    require("../../assets/Software/Blender.png"),
    require("../../assets/Software/Houdini.png"),
    require("../../assets/Software/Keil.png"),
    require("../../assets/Software/MarvelousDesign.png"),
    require("../../assets/Software/UE.png"),
    require("../../assets/Software/Unity.png"),
    require( "../../assets/Software/Zbrush.jpg"),
]


const TechnicalSoftware = () => {
  return (
    <div className='app__software'>
        <motion.div className='container'>
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
        </motion.div>
        <motion.div className='container'>
            {

                software2.map((logo,key)=>{
                console.log(logo)
                return (
                    <div className={logo} key={logo+key}>
                        <img src={logo}/>
                    </div>
                )
            })
            }
        </motion.div>
       
    </div>
  )
}

export default TechnicalSoftware