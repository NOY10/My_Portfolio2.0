import React from 'react';
import "./Work.css";
import Animatedpage from '../Animatedpage';
import Slack from '../img/Slack.png';
import Linkedin from '../img/linkedin.png';
import Hulu from '../img/Hulu.png';
import Whatsapp from '../img/whatsapp.png';
import Samuh from '../img/Samuh.png';
import { motion } from "framer-motion";

const Work = () => {
    const projects = [ 
        {id:'1',title:'Slack Clone [Desktop Version]', link:'https://slack-clone-96342.web.app/',pic:Slack},
        {id:'2',title:'LinkedIn Clone [Desktop Version]', link:'https://linkedin-clone-f072e.web.app/',pic:Linkedin},
        {id:'3',title:'Hulu Clone', link:'https://hulu-clone-noy10.vercel.app/',pic:Hulu},
        {id:'4',title:'Whatsapp Clone [Desktop Version]', link:'https://whatsapp-2-0-13p69lumu-noy10.vercel.app/',pic:Whatsapp},
        {id:'5',title:'Samuh Clone [Desktop Version]', link:'https://samuh-clone.vercel.app/',pic:Samuh},
    ]
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
  return (
        <Animatedpage>
            <div className="work">
                <h1>Clones</h1>
                <motion.div
                    className="works"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project,i) => (
                        <motion.li key={i} variants={item} className='info'>
                            <h2>{project.title}</h2>
                            <a href={project.link} target='_SEJ'  rel='noreferrer'>
                            <img src={project.pic} alt="whatsapp icon"loading="lazy"/>
                            </a>
                        </motion.li>
                    ))}
                </motion.div> 
            </div>
        </Animatedpage>
  
    )
};

export default Work;