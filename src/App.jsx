import React from 'react';
import {Navigate, Route, Routes, useLocation } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Header from './Components/Header/Header';
import Homepage from './Components/HomePage/Homepage';
import Work from './Components/Works/Work';
import ContactF from './Components/ContactPage/ContactF';
import { AnimatePresence } from 'framer-motion';
import Scrolltotop from './Components/Scrolltotop';
import Footer from './Components/Footer/Footer';
import ChortenT from './Components/3jsModels/ChortenT';
import Achievement from './Components/Achievement/Achievement';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const location= useLocation();

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme}/> 
      <ChortenT />
      <Scrolltotop />
        <AnimatePresence mode="wait" >
            <Routes key={location.pathname} location={location}>
            <Route exact path="/Homepage" element={<Homepage />}/>
              <Route exact path="/Works" element={<Work />}/>
              <Route exact path="/Events" element={<Achievement />}/>
              <Route exact path="/ContactMe" element={<ContactF />}/>
              <Route path="*" element={<Navigate to="/Homepage" replace />} />
            </Routes>
        </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
