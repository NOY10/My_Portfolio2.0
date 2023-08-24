import React, { useRef, useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';
import "./Header.css";
import { AnimatePresence, motion } from 'framer-motion'
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import MenuToggle from './MenuToggle';
import { useAnimate, stagger } from "framer-motion";
import Menu from './Menu';

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
          ],
          [
            "NavLink",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "NavLink",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen]);

  return scope;
}

const Header = ({theme,setTheme}) => {
    const switchTheme=()=> {
    const newTheme= theme==='light'?'dark':'light';
    setTheme(newTheme);
    }
    const ref = useRef();

    const [isOpen, setIsOpen] = useState(false);

    const scope = useMenuAnimation(isOpen);
    
  return (
      <header ref={ref}>
        <div className='header_left'>
          {/* <img src="" alt="pic"/> */}
          <p>Lobzang Yonten</p>
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
        
        <div ref={scope}>
          <Menu />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
      
      </header>
  )
};

export default Header;
