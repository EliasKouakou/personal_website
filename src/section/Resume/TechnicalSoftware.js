import React from 'react'
import './TechnicalSoftware.scss'
import { motion} from 'framer-motion'
const software1 = [
    require("../../assets/Software/CATIA.png"),
    require( "../../assets/Software/Solidworks.png"),
    require("../../assets/Software/Fusion360.webp"),
    require("../../assets/Software/Eagle.webp"),
    require( "../../assets/Software/Kicad.png"),
    require("../../assets/Software/ANSYS.jpg"),
    require("../../assets/Software/Matlab_and_Simulink.png"),
    require("../../assets/Software/Qt.png")
]
const software2 = [
    require( "../../assets/Software/Gazebo.png"),
    require( "../../assets/Software/Rviz.png"),
    require("../../assets/Software/Unity.png"),
    require("../../assets/Software/UE.png"),
    require("../../assets/Software/Blender.png"),
    require("../../assets/Software/Houdini.png"),
    require("../../assets/Software/MarvelousDesign.png"),
    require( "../../assets/Software/Zbrush.jpg"),
    require( "../../assets/Software/Godot.png"),
    
]
const software3 = [
    require( "../../assets/Software/FluidX3D.ico"),
    require("../../assets/Software/Open3D.png"),
    require("../../assets/Software/OpenFOAM.png"),
    require("../../assets/Software/ParaView.png"),
    require("../../assets/Software/R.png"),
    require("../../assets/Software/OpenRocket.webp"),
    require("../../assets/Software/Keil.png"),
    require( "../../assets/Software/Quartus.jpg"),
    require( "../../assets/Software/Simscale.jpg"),
    require( "../../assets/Software/ntopology.png"),
    
]

const tools=[
    require("../../assets/Tools/Android_Studio.png"),
    require("../../assets/Tools/Aws.png"),
    require("../../assets/Tools/Docker.png"),
    require("../../assets/Tools/Ganttpro.jpg"),
    require("../../assets/Tools/Github.png"),
    require("../../assets/Tools/GitLab.png"),
    require("../../assets/Tools/Google-Cloud.jpg"),
    require("../../assets/Tools/IBM_Cloud.png"),
]
const tools2=[
    
    require("../../assets/Tools/Kubernetes.jpg"),
    require("../../assets/Tools/Linux.png"),
    require("../../assets/Tools/Notion.png"),
    require("../../assets/Tools/TeXstudio.png"),
    require("../../assets/Tools/Ubuntu.png"),
    require("../../assets/Tools/visual_studio.png"),
    require("../../assets/Tools/vscode.png"),
    require("../../assets/Tools/Xampp.png"),
    

]
const TechnicalSoftware = () => {
  return (
    <div className='app__software'>
        <h1>Main Softwares</h1>
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
        <h1>Others Softwares</h1>
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
        <h1>Still Learning</h1>
        <motion.div className='container'>
            {

                software3.map((logo,key)=>{
                console.log(logo)
                return (
                    <div className={logo} key={logo+key}>
                        <img src={logo}/>
                    </div>
                )
            })
            }
        </motion.div>
        <h1>Tools</h1>
        <motion.div className='container tools'>
            {

                tools.map((logo,key)=>{
                console.log(logo)
                return (
                    <div className={logo} key={logo+key}>
                        <img src={logo}/>
                    </div>
                )
            })
            }
        </motion.div>
        <motion.div className='container tools'>
            {

                tools2.map((logo,key)=>{
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