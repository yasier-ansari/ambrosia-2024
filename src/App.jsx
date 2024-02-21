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
import EventCard from './assets/images/event-card.jpg'
import { LuCalendarCheck, LuDollarSign, LuMap, LuTimer } from "react-icons/lu";
import PreLoader from "./components/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <AnimatePresence>
      {
        loading ?
          <motion.div
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
            <main className=" antialiased scroll-smooth flex flex-col relative w-full h-full " >
              <Header />
              <FirstParallax />
              <section
                style={{
                  backgroundImage: `url(${ArticleImage})`,
                  backgroundPosition: "bottom",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed"
                }}
                className="content w-full h-full relative text-gray-200 bg-red-100 text-opacity-80 mx-auto min-h-screen ">
                <SectionContainer title={'Members'} >
                  <AnimatedTooltip items={people} />
                </SectionContainer>
                <SectionContainer title={'History'} >
                  <HistoryParallax products={events} />
                </SectionContainer>
                <SectionContainer title={'Sponsors'} >
                  <div className="grid gap-12 grid-cols-auto place-content-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 ">
                    <img src={Sponsor1} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto rotate-3  " />
                    <img src={Sponsor2} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto -rotate-3  " />
                    <img src={Sponsor3} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto -rotate-6  " />
                    <img src={Sponsor4} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto rotate-6  " />
                    <img src={Sponsor5} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto -rotate-3  " />
                    <img src={Sponsor6} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto rotate-6  " />

                  </div>
                </SectionContainer>
                <SectionContainer title={'Events'} >
                  <div className="grid gap-12 grid-cols-auto place-content-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 ">
                    <div
                      style={{
                        backgroundImage: `url(${EventCard})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                      }}
                      className="flex w-full min-w-32 aspect-[8/12] max-w-[300px] flex-col footerBorder justify-center items-center mx-auto space-y-3 p-2 sm:p-3 ">
                      <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images' className="bg-zinc-200 p-2 rounded-lg footerBorder aspect-video w-full h-auto rotate-3  " />
                      <div className="w-full flex justify-center flex-col space-y-2 " >
                        <h3 className="henny text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl " >Treasure Hunt</h3>
                        <h5 className=" text-black px-2 " >get ready for an amazing treasure hunt</h5>
                        <div className="flex items-center flex-wrap justify-start w-full px-2 text-xs  md:text-sm">
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuCalendarCheck />
                            <p>Sat, 12</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuTimer />
                            <p>4:30 - 6:30 pm</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuDollarSign />
                            <p>200</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuMap />
                            <p>Central Building</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${EventCard})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                      }}
                      className="flex w-full min-w-32 h-auto aspect-[8/12] max-w-[300px] flex-col footerBorder justify-center items-center mx-auto space-y-3 p-2 sm:p-3 ">
                      <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images' className="bg-zinc-200 p-2 rounded-lg footerBorder aspect-video w-full h-auto rotate-3  " />
                      <div className="w-full flex justify-center flex-col space-y-2 " >
                        <h3 className="henny text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl " >Treasure Hunt</h3>
                        <h5 className=" text-black px-2 " >get ready for an amazing treasure hunt</h5>
                        <div className="flex items-center flex-wrap justify-start w-full px-2 text-xs  md:text-sm">
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuCalendarCheck />
                            <p>Sat, 12</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuTimer />
                            <p>4:30 - 6:30 pm</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuDollarSign />
                            <p>200</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuMap />
                            <p>Central Building</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${EventCard})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                      }}
                      className="flex w-full min-w-32 h-auto aspect-[8/12] max-w-[300px] flex-col footerBorder justify-center items-center mx-auto space-y-3 p-2 sm:p-3 ">
                      <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images' className="bg-zinc-200 p-2 rounded-lg footerBorder aspect-video w-full h-auto rotate-3  " />
                      <div className="w-full flex justify-center flex-col space-y-2 " >
                        <h3 className="henny text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl " >Treasure Hunt</h3>
                        <h5 className=" text-black px-2 " >get ready for an amazing treasure hunt</h5>
                        <div className="flex items-center flex-wrap justify-start w-full px-2 text-xs  md:text-sm">
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuCalendarCheck />
                            <p>Sat, 12</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuTimer />
                            <p>4:30 - 6:30 pm</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuDollarSign />
                            <p>200</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuMap />
                            <p>Central Building</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${EventCard})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                      }}
                      className="flex w-full min-w-32 h-auto aspect-[8/12] max-w-[300px] flex-col footerBorder justify-center items-center mx-auto space-y-3 p-2 sm:p-3 ">
                      <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images' className="bg-zinc-200 p-2 rounded-lg footerBorder aspect-video w-full h-auto rotate-3  " />
                      <div className="w-full flex justify-center flex-col space-y-2 " >
                        <h3 className="henny text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl " >Treasure Hunt</h3>
                        <h5 className=" text-black px-2 " >get ready for an amazing treasure hunt</h5>
                        <div className="flex items-center flex-wrap justify-start w-full px-2 text-xs  md:text-sm">
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuCalendarCheck />
                            <p>Sat, 12</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuTimer />
                            <p>4:30 - 6:30 pm</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuDollarSign />
                            <p>200</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuMap />
                            <p>Central Building</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${EventCard})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                      }}
                      className="flex w-full min-w-32 h-auto aspect-[8/12] max-w-[300px] flex-col footerBorder justify-center items-center mx-auto space-y-3 p-2 sm:p-3 ">
                      <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images' className="bg-zinc-200 p-2 rounded-lg footerBorder aspect-video w-full h-auto rotate-3  " />
                      <div className="w-full flex justify-center flex-col space-y-2 " >
                        <h3 className="henny text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl " >Treasure Hunt</h3>
                        <h5 className=" text-black px-2 " >get ready for an amazing treasure hunt</h5>
                        <div className="flex items-center flex-wrap justify-start w-full px-2 text-xs  md:text-sm">
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuCalendarCheck />
                            <p>Sat, 12</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuTimer />
                            <p>4:30 - 6:30 pm</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuDollarSign />
                            <p>200</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuMap />
                            <p>Central Building</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${EventCard})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                      }}
                      className="flex w-full min-w-32 h-auto aspect-[8/12] max-w-[300px] flex-col footerBorder justify-center items-center mx-auto space-y-3 p-2 sm:p-3 ">
                      <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images' className="bg-zinc-200 p-2 rounded-lg footerBorder aspect-video w-full h-auto rotate-3  " />
                      <div className="w-full flex justify-center items-center flex-col space-y-2 mx-auto" >
                        <h3 className="henny text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center " >Treasure Hunt</h3>
                        <h5 className=" text-black px-2 " >get ready for an amazing treasure hunt</h5>
                        <div className="flex items-center flex-wrap justify-start w-full px-2 text-xs  md:text-sm">
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuCalendarCheck />
                            <p>Sat, 12</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuTimer />
                            <p>4:30 - 6:30 pm</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuDollarSign />
                            <p>200</p>
                          </div>
                          <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                            <LuMap />
                            <p>Central Building</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionContainer>
                <SectionContainer title={'Location '} >
                  {/* <div className="flex justify-between w-full h-full space-x-12 ">
                    <figure
                      style={{
                        backgroundImage: `url(${EventCard})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                      }}
                      className=" footerBorder p-2 w-full h-full min-h-80 max-w-[700px] basis-[75%] " >
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1687001235955!2d72.82874567489719!3d18.96815558221434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40ffcfcacd%3A0x5d71ff22760f8e77!2sM.H.%20Saboo%20Siddik%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708544675679!5m2!1sen!2sin" className="filter sepia footerBorder rounded-3xl w-full h-full  min-h-80 "
                        allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </figure>
                    <div className="flex items-start justify-around flex-col space-y-8  w-full basis-[25%]" >
                      <div className="flex flex-col items-start justify-center space-y-2" >
                        <h4 className="henny text-xl sm:text-2xl md:text-3xl lg:text-4xl" >From Byculla</h4>
                        <p>Jaldi Aao Khana Khao, Khelo Kudo Aur ghar ko nikal lo. Kyunki kya hai na beta, aaj kal bahut accident hote hai, road dhyaan se cross karna</p>
                      </div>
                      <div className="flex flex-col items-start justify-center space-y-2" >
                        <h4 className="henny text-xl sm:text-2xl md:text-3xl lg:text-4xl" >From Mumbai Central</h4>
                        <p>Jaldi Aao Khana Khao, Khelo Kudo Aur ghar ko nikal lo. Kyunki kya hai na beta, aaj kal bahut accident hote hai, road dhyaan se cross karna</p>
                      </div>
                    </div>
                  </div> */}
                  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full h-full space-y-8 md:space-y-10 lg:space-x-12 my-12">
                    <figure
                      style={{
                        backgroundImage: `url(${EventCard})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        width: "65%", // Adjust the width for the map
                      }}
                      className="footerBorder p-2 w-full min-h-80 max-w-[1000px] max-h-[700px] h-full lg:basis-[75%]"
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1687001235955!2d72.82874567489719!3d18.96815558221434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40ffcfcacd%3A0x5d71ff22760f8e77!2sM.H.%20Saboo%20Siddik%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708544675679!5m2!1sen!2sin"
                        className="filter sepia footerBorder rounded-3xl w-full h-full min-h-80 max-w-[1000px] max-h-[700px]"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </figure>
                    <div className="flex items-start justify-around flex-col space-y-8 w-full lg:basis-[35%]">
                      <div className="flex flex-col items-start justify-center space-y-2">
                        <h4 className=" glowText henny text-xl sm:text-2xl md:text-3xl lg:text-4xl">From Byculla</h4>
                        <p>Jaldi Aao Khana Khao, Khelo Kudo Aur ghar ko nikal lo. Kyunki kya hai na beta, aaj kal bahut accident hote hai, road dhyaan se cross karna</p>
                      </div>
                      <div className="flex flex-col items-start justify-center space-y-2">
                        <h4 className=" glowText henny text-xl sm:text-2xl md:text-3xl lg:text-4xl">From Mumbai Central</h4>
                        <p>Jaldi Aao Khana Khao, Khelo Kudo Aur ghar ko nikal lo. Kyunki kya hai na beta, aaj kal bahut accident hote hai, road dhyaan se cross karna</p>
                      </div>
                    </div>
                  </div>

                </SectionContainer>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint deleniti a praesentium quia dignissimos, excepturi ad tempora aperiam nisi odio quis minus sunt, provident veniam esse molestiae dolorem aliquam laborum.
                Nobis dolores dicta illo qui, perspiciatis earum, neque quo repellendus sapiente rem natus praesentium sequi commodi molestias reiciendis, modi maxime delectus nesciunt? Quidem, itaque quo! Consectetur sed quod quidem iure.
                Maxime tempore obcaecati maiores odio et iusto ipsa consequuntur magnam, quo reprehenderit hic consequatur debitis repellendus dolore ratione earum eos quidem amet vitae nesciunt quae nisi ex illum possimus. Consectetur.
                Dolorum ipsa pariatur quas eos. Minima nam unde, dolores velit amet laborum repudiandae recusandae possimus et cupiditate doloribus illo tenetur numquam accusamus perferendis porro quasi, autem, expedita qui! Excepturi, molestiae?
                Consectetur laudantium earum ex consequatur praesentium. Architecto laudantium quasi aspernatur omnis perferendis recusandae alias illo accusamus quos similique, optio asperiores sunt esse illum, consectetur incidunt doloremque. Reiciendis officia laborum officiis.
                Autem reiciendis repellat vero nulla, eligendi atque eum perspiciatis praesentium tempora pariatur minima ullam fugit vel, modi tenetur odit? Eius cum accusamus unde aliquid ab laboriosam aut esse molestiae cupiditate!
                Quidem, voluptates hic esse provident molestiae accusantium eos perspiciatis voluptatem blanditiis! Quos voluptatum, eveniet id iste accusamus rerum illo hic, quis aliquam provident dolorem accusantium vitae assumenda officia totam ratione.
                Doloribus quia consequatur cumque atque saepe placeat maiores amet at eaque? Obcaecati, sit voluptas tempora consectetur nostrum vel quis iusto, odio corrupti, deleniti ad eum dolorem magni animi incidunt repellendus.
                Officiis, placeat. Culpa itaque corrupti sint ducimus doloribus, perferendis recusandae sed nesciunt iure deleniti aut nisi, repudiandae eaque. Quisquam illo eligendi ab laudantium totam in reiciendis accusantium placeat possimus repellendus!
                Aliquam perferendis animi soluta voluptates nam nostrum delectus cumque dolor velit est illo, reiciendis ea beatae eveniet dolorem recusandae tenetur temporibus officiis. Alias quo ratione animi reprehenderit temporibus! Molestias, sed!
              </section>
              <SecondParallax />
            </main>
          </motion.div>
      }

    </AnimatePresence>
  )
}

export default App
