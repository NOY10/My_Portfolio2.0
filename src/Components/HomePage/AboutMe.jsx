import React from 'react';
import "./Aboutme.css";
import { BsFillSuitHeartFill} from 'react-icons/bs';
import Me from '../3jsModels/me';
import Typewriter from 'typewriter-effect';

const aboutMe = () => {
  
  return(
      <div className="aboutMe">
        
        <Me />
        
        <div className="Intro">
          <h2>ABOUT ME</h2>        
          <p><Typewriter 
              options={{
              strings: ['Hello,', 'Hi,', 'Kuzu zangpola,'],
              autoStart: true,
              loop: true,
            }}/> 
            &emsp;  &emsp;My name is Lobzang Yonten and I am is an undergraduate student at the College of Science and Technology pursuing a B.E. in Information Technology.</p>

         <p> I <BsFillSuitHeartFill className='heart'/> </p>

         <p style={{marginLeft:"40px"}}>Music, Photography, Chess[<a href='https://chess.com/play/Yonten2001' target='_SEJ'  rel='noreferrer' style={{color:'red'}}>Challenge Me</a>], Web and App Development, Gaming and Anime. </p>
         
        </div>
        
      </div>
    
      
  )
};

export default aboutMe;
