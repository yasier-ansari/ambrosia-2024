import './App.css'
import { motion, AnimatePresence } from "framer-motion";
import FirstParallax from "./components/FirstParallax"
import SecondParallax from "./components/SecondParallax"
import { useEffect, useRef, useState } from "react";
import BaseHeroImage from './assets/images/layer-base.png'
import MiddleHeroImage from './assets/images/layer-middle.png'
import FrontHeroImage from './assets/images/layer-front-2.png'
import ArticleImage from './assets/images/dungeon.jpg'
import Header from "./components/Header";
import SectionContainer from "./components/SectionContainer";
import AnimatedTooltip from "./components/Member";
import { people } from "./utils/members";
import HistoryParallax from "./components/HistoryParallax";
import { events } from "./utils/event";
import Sponsor1 from './assets/images/sponsor-1.png'
import Sponsor2 from './assets/images/sponsor-2.png'
import Sponsor3 from './assets/images/sponsor-3.png'
import Sponsor4 from './assets/images/sponsor-4.png'
import Sponsor5 from './assets/images/sponsor-5.png'
import Sponsor6 from './assets/images/sponsor-6.png'

import Event1 from './assets/images/event-1.png'
import Event2 from './assets/images/event-2.png'
import Event3 from './assets/images/event-3.png'
import Event4 from './assets/images/event-4.png'
import Event5 from './assets/images/event-5.png'
import Event6 from './assets/images/event-6.png'
import EventCard from './assets/images/event-card.jpg'
import { LuCalendarCheck, LuDollarSign, LuMap, LuPin, LuPinOff, LuTimer } from "react-icons/lu";
import PreLoader from "./components/PreLoader";
import EventCardComponent from "./components/EventCard";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeLayout from "./HomeLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Error from "./components/Error";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <BrowserRouter>
      {
        loading ? <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key='loader'
        >
          <PreLoader />
        </motion.div> :
          <motion.div
            key='main content'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Routes>
              <Route path='/' element={<HomeLayout />} errorElement={<Error />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </motion.div>
      }
      {/* <Route path='/' exact element={<HomeLayout />} /> */}
    </BrowserRouter>
  )
}

export default App