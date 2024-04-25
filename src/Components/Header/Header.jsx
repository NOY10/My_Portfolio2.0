import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import MenuToggle from "./MenuToggle";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
    ]);
  }, [isOpen]);

  return scope;
}

const Header = ({ theme, setTheme }) => {
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header ref={ref}>
      <div className="header_left">
        {/* <img src="" alt="pic"/> */}
        <p>Lobzang Yonten</p>
      </div>

      <div className={isOpen ? "navMenu" : "navMenu close"} onClick={showMenu}>
        <NavLink activeclassname="active" to="/Homepage">
          Home
        </NavLink>
        <NavLink activeclassname="active" to="/Works">
          Works
        </NavLink>
        {/* <NavLink activeclassname="active" to="/Events">Events</NavLink> */}
        <NavLink activeclassname="active" to="/ContactMe">
          Contact Me
        </NavLink>
      </div>

      <div className="header_right">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            style={{ display: "inline-block" }}
            initial={{ y: -20, opacity: 0 }}
            key={theme}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button onClick={switchTheme}>
              {theme === "light" ? (
                <BiMoon className="icon" size={20} />
              ) : (
                <BsSun className="icon" size={20} />
              )}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div ref={scope} className="menu_icon">
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div>
    </header>
  );
};

export default Header;
