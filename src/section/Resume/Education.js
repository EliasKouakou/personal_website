import React from 'react'
import "./Education.scss"
import { motion } from 'framer-motion';
const Education = () => {
  return (
    <div className='app__education'>
        <h1>Education</h1>
        <h3>My academic history and details</h3>
        <motion.div className='insa'
         whileInView={{ opacity: [0, 1] }}
         transition={{ duration: 0.5, type: 'tween' }}
         >
            <h2>Institut National des Sciences Appliquées Hauts-de-France</h2>
            {/* <img src={require("../../assets/insa.jpg")}/> */}
            <h3>September 2019 - Jully 2022</h3>
            <p className='p-text'>
                Graduate in November 2022. I enrolled in Mechatronics field .
                Add 2 experiences during this period. One at the <a href="">laboratory of the campus</a> in Design and one at 
                <a href="">INRAE Clermont-Ferrand</a> in Software developpement.
                <br/>
                <br/>
                <h4>
                    Relevant courses:
                        <br/>
                        <br/>-informatics: programming with C
                        <br/>-electronics: Embedded systems, ElectroTechnics, FPGA
                        <br/>-Automatics: Sampling
                        <br/>-Mechanics: CAD Modeling, Finite Elements, 
                        <br/>-Optomecatronics: MEMS
                </h4>
               
            </p>
        </motion.div >
        <br/>
        <motion.div className='estem'
         whileInView={{ opacity: [0, 1] }}
         transition={{ duration: 0.5, type: 'tween' }}
        >
            <h2>Ecole Supérieure Marocaine de la Télécommunication, du Commerce et du Genie Civil </h2>
            {/* <img src={require("../../assets/estem.png")}/> */}
            <h3>September 2017 - Jully 2019</h3>
            <p className='p-text'>
                I attend ESTEM Maroc as a result of baccalaureat exam to prepare for the French Engineering School entry exam.
                Followed the MP(Mathematics & Physics) cursus.
                <br/>
                <br/>
                <h4>
                    Relevant courses:
                        <br/>
                        <br/>-informatics: programming with Python
                        <br/>-Mathematics: advanced Mathematics
                        <br/>-Physics: advanced Physics
                        <br/>-Mechanics: Engineering Science
                </h4>
            </p>
        </motion.div>
        <br/>
        <motion.div className='lsy'
         whileInView={{ opacity: [0, 1] }}
         transition={{ duration: 0.5, type: 'tween' }}
        >
            <h2>Lycée Scientifique de Yamoussoukro </h2>
            {/* <img src={require("../../assets/lsy.jpg")}/> */}
            <h3>September 2014 - Jully 2017</h3>

            <p className='p-text'>
                Obtained the bachelor degree with mention which led to obtaining a scholarship. 
                <br/>
                <br/>
                <h4>
                    Relevant courses:
                        <br/>
                        <br/>-Mathematics
                        <br/>-Physics: advanced Physics
                        <br/>-Others Science: history, Geography, Earth Science
                </h4>
            </p>
        </motion.div>
    </div>
  )
}

export default Education