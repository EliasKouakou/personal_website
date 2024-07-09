import React from 'react'
import { Layout } from '../../wrapper'
import Carousel from 'react-material-ui-carousel'
import './Projects.scss'
import { motion } from 'framer-motion';

        
//use less heavy image
const Proejcts = () => {
  var category=["Robotics","Automotive","Maritime","Aerospace","Game","Software"]
  // var carousel={"Robotics":require("../../assets/Projects_images/robotics_urls.json"),"Automotive":require("../../assets/Projects_images/automative_urls.json"),"Maritime":require("../../assets/Projects_images/maritime_urls.json"),"Aerospace":require("../../assets/Projects_images/aerospace_urls.json")}
  var carousel={"Robotics":[
                    require("../../assets/Projects_images/robotics/robotics.jfif"),
                    require("../../assets/Projects_images/robotics/asimo.jpg"),
                    require("../../assets/Projects_images/robotics/lego.jpg"),
                    require("../../assets/Projects_images/robotics/mechanical_arm.jpg"),
                    require("../../assets/Projects_images/robotics/mobile_robot.jpg"),
                    require("../../assets/Projects_images/robotics/robot_reading.jpg")
                
                ],
                "Automotive":[
                  require("../../assets/Projects_images/automotive/automotive.jpg"),
                  require("../../assets/Projects_images/automotive/byke.jpg"),
                  require("../../assets/Projects_images/automotive/car.jpg"),
                  require("../../assets/Projects_images/automotive/mining.jpg"),
                  require("../../assets/Projects_images/automotive/train.jpg")
              
              ],
                "Maritime":[
                  require("../../assets/Projects_images/maritime/maritime.jpg"),
                  require("../../assets/Projects_images/maritime/boat.jpg"),
                  require("../../assets/Projects_images/maritime/cockpit.jpg"),
                  require("../../assets/Projects_images/maritime/loading_bay.jpg")
              ],
                "Aerospace":[
                  require("../../assets/Projects_images/aerospace/aerospace.jpg"),
                  require("../../assets/Projects_images/aerospace/cockpit.jpg"),
                  require("../../assets/Projects_images/aerospace/engine.jpg"),
                  require("../../assets/Projects_images/aerospace/helicopter.jpg"),
                  require("../../assets/Projects_images/aerospace/jetfighter.jpg"),
                  require("../../assets/Projects_images/aerospace/lockheed.jpg"),
                  require("../../assets/Projects_images/aerospace/plane.jpg"),
                  require("../../assets/Projects_images/aerospace/spaceX.jpg")
              ],
              "Software":[
                  require("../../assets/Projects_images/software/software.jpeg")
              ],
              "Game":[
                require("../../assets/Projects_images/game/game.jfif")

              ]}
  return (
    <div className='app__projects section'>
      {
      category.map((value,key)=>{
        const IMG= carousel[value]
        return (
          <Carousel 
          className={`${value} carousel`} 
          key={`${key}`}
          autoPlay={true}
          animation={'slide'}
          swipe={true}
          >
              {
                    IMG.map((img,keys)=>{
                        return(
                          <motion.div className='images' keys={img+keys}
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5, type: 'tween' }}
                          >
                              <a  href={`/Projects/${value}`}><img src={img}/></a>
                              <p>{value.toUpperCase()}</p>
                          </motion.div>
                        )
                    })
              }
          </Carousel>
        )
      })
      }
    </div>
  )
}

export default Layout(Proejcts)