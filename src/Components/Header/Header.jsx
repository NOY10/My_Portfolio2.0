import React, { useRef, useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';
import "./Header.css";
import { AnimatePresence, motion } from 'framer-motion'
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';


const Header = ({theme,setTheme}) => {
      const switchTheme=()=> {
      const newTheme= theme==='light'?'dark':'light';
      setTheme(newTheme);
      }
      const ref = useRef();

      const [clicked,setClicked] = useState(false);

      useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (clicked && ref.current && !ref.current.contains(e.target)) {
            setClicked(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [clicked])
    
      

      const showMenu= () =>{
        setClicked(!clicked)
      }
  return (
      <header ref={ref}>
        <div className='header_left'>
          {/* <img src="" alt="pic"/> */}
          <p>Lobzang Yonten</p>
        </div>

        <div className={clicked ? 'navMenu' : 'navMenu close'} onClick={showMenu}>
          <NavLink activeclassname="active" to="/Homepage">Home</NavLink>
          <NavLink activeclassname="active" to="/Works" >Works</NavLink>
          <NavLink activeclassname="active" to="/Events">Events</NavLink>
          <NavLink activeclassname="active" to="/ContactMe">Contact Me</NavLink>
        </div>
        
        <div className='header_right'>
          <AnimatePresence  initial={false} mode="wait">
            <motion.div
              style={{ display: 'inline-block' }}
              initial={{ y: -20, opacity: 0 }}
              key={theme}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button onClick={switchTheme} >
                {theme==='light'? 
                  <BiMoon className="icon" size={20}/>
                : 
                  <BsSun className="icon" size={20} />
                }
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='menu_icon' onClick={showMenu}>
          {clicked ? <FaTimes />:<FaBars />}
        </div>
      
      </header>
  )
};

export default Header;
