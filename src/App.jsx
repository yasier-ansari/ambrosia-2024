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
import { LuCalendarCheck, LuDollarSign, LuMap, LuPin, LuPinOff, LuTimer } from "react-icons/lu";
import PreLoader from "./components/PreLoader";
import EventCardComponent from "./components/EventCard";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <AnimatePresence initial={true} animate='animate' >
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
                className="content w-full h-full relative text-gray-200 z-20 bg-red-100 text-opacity-80 mx-auto min-h-screen ">
                <div className="w-full h-full absolute">
                  <img src={FrontHeroImage} alt="asd" className="absolute -top-12 xs:-top-24 sm:-top-32 md:-top-40 lg:-top-64 w-full  " />
                  <img src={FrontHeroImage} alt="asd" className="absolute -top-0 w-full rotate-180 " />
                </div>
                <div className=" px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44 mt-28 xs:mt-36 sm:mt-48 md:mt-60 lg:mt-96 xl:mt-[420px] ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cupiditate eligendi atque deserunt mollitia aliquid porro ratione nesciunt beatae, facilis totam neque nostrum molestiae quam. Nesciunt pariatur sunt praesentium dolorem.
                  Beatae veniam harum sit iure accusamus ullam in optio architecto, quia corrupti et est distinctio ducimus! Ex nam magni reprehenderit, consequatur sapiente velit temporibus illo, sunt delectus harum, repellendus earum.
                  Dolorum dicta sit officiis facere iusto officia culpa eum cupiditate. Unde quaerat corporis mollitia maxime beatae neque molestias ducimus aliquid, adipisci vero veritatis ea, cupiditate quod, dolor perferendis velit cumque!
                  Laudantium, aliquam. Fugit quae animi pariatur aspernatur fuga eius quis unde, laboriosam sed a, quidem deleniti repudiandae eos ut consequatur, aperiam quibusdam dolores blanditiis facilis dolorum ipsum obcaecati itaque debitis.
                  Dignissimos veniam tempore beatae delectus facilis. Distinctio mollitia natus repellat impedit velit, pariatur tenetur cupiditate fugit quia delectus reprehenderit nemo aperiam neque nobis ad veritatis illo modi atque eaque autem!
                  Neque tempora accusantium corporis voluptatem ipsam molestias minima ut doloremque earum inventore porro similique nemo et commodi ducimus nam natus, maxime voluptatibus! Ipsum saepe laboriosam sapiente eum exercitationem, nihil distinctio!
                  Nihil quae asperiores porro? Adipisci velit incidunt iusto quaerat iste eligendi reiciendis nobis mollitia itaque suscipit officiis repellat soluta fuga ipsa, consectetur illum beatae ratione odio aspernatur rem modi laudantium.
                  Dignissimos corrupti rem numquam omnis? Corrupti pariatur saepe ratione eaque explicabo minus autem doloribus iusto quos error ad impedit ut possimus et quo dolorem, dolorum officia nemo odit ipsam soluta.
                  Eum, perferendis, voluptatibus facilis, incidunt quidem commodi odio ducimus natus architecto quam maiores atque neque! Nesciunt nostrum velit architecto pariatur vero maiores vitae, molestias aperiam ullam in nobis expedita autem!
                  Ipsam eum itaque sapiente ex libero, totam ab quos. Aut veniam voluptate quisquam magnam sit dicta illo ipsum laborum ea reiciendis inventore quos, temporibus qui aliquid et, tempore atque placeat!
                </div>
                <SectionContainer title={'Events'} >
                  <div className=" px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44 grid gap-12 grid-cols-auto place-content-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 ">
                    <EventCardComponent

                      img={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images'}
                      title={'Treasure Hunt'}
                      text='getget ready for an amazing treasure hunt ready for an amazinget treasure hunt'
                      date={'Sat, 12'}
                      time='4:30 - 6:30 pm'
                      price={'200'}
                      location={'Central Building'}
                    />
                    <EventCardComponent
                      img={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images'}
                      title={'Treasure Hunt'}
                      text='get ready for an amazing treasure hunt'
                      date={'Sat, 12'}
                      time='4:30 - 6:30 pm'
                      price={'200'}
                      location={'Central Building'}
                    />
                    <EventCardComponent
                      img={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images'}
                      title={'Treasure Hunt'}
                      text='get ready for an amazing treasure hunt'
                      date={'Sat, 12'}
                      time='4:30 - 6:30 pm'
                      price={'200'}
                      location={'Central Building'}
                    />
                    <EventCardComponent
                      img={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images'}
                      title={'Treasure Hunt'}
                      text='get ready for an amazing treasure hunt'
                      date={'Sat, 12'}
                      time='4:30 - 6:30 pm'
                      price={'200'}
                      location={'Central Building'}
                    />
                    <EventCardComponent
                      img={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images'}
                      title={'Treasure Hunt'}
                      text='get ready for an amazing treasure hunt'
                      date={'Sat, 12'}
                      time='4:30 - 6:30 pm'
                      price={'200'}
                      location={'Central Building'}
                    />
                    <EventCardComponent
                      img={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xRplVX1ia3NMexehWl0BnQHaEj%26pid%3DApi&f=1&ipt=3d6f67e3052c579228ecb5199a15a31b41a0780ee3dacfb9be096221b0b4dc63&ipo=images'}
                      title={'Treasure Hunt'}
                      text='get ready for an amazing treasure hunt'
                      date={'Sat, 12'}
                      time='4:30 - 6:30 pm'
                      price={'200'}
                      location={'Central Building'}
                    />
                  </div>
                </SectionContainer>
                <SectionContainer title={'Members'}  >
                  <AnimatedTooltip items={people} className='pt-8 px-6 sm:px-12 md:px-16 lg:px-24' />
                </SectionContainer>
                <SectionContainer title={'History'} >
                  <HistoryParallax products={events} />
                </SectionContainer>
                <SectionContainer title={'Sponsors'} >
                  <div className="grid gap-12 grid-cols-auto place-content-center place-items-center grid-cols-2 lg:grid-cols-3 mt-12 px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44 ">
                    <img src={Sponsor1} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto rotate-3  " />
                    <img src={Sponsor2} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto -rotate-3  " />
                    <img src={Sponsor3} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto -rotate-6  " />
                    <img src={Sponsor4} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto rotate-6  " />
                    <img src={Sponsor5} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto -rotate-3  " />
                    <img src={Sponsor6} className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-16 w-auto rotate-6  " />
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
                  <div className="flex flex-col items-center owlCursor cursor-not-allowed justify-between w-full h-full space-y-8 md:space-y-10 my-12 px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44">
                    <figure
                      style={{
                        backgroundImage: `url(${EventCard})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                      }}
                      className="footerBorder owlCursor p-2 w-full h-full min-h-80 max-w-[1000px] max-h-[700px] aspect-video"
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1687001235955!2d72.82874567489719!3d18.96815558221434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40ffcfcacd%3A0x5d71ff22760f8e77!2sM.H.%20Saboo%20Siddik%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708544675679!5m2!1sen!2sin"
                        className="filter sepia footerBorder rounded-3xl w-full h-full min-h-80 max-w-[1000px] max-h-[700px] aspect-video"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </figure>
                    <div className="flex items-center justify-around  w-full space-x-20">
                      <div className="flex flex-col items-start justify-center space-y-2">
                        <div className=" flex items-center justify-center space-x-4 glowText henny text-xl sm:text-2xl md:text-3xl">
                          <div className=" h-10 w-10 bg-gray-300 p-2 footerBorder items-center justify-center flex text-yellow-700 rotate-12 " >
                            <LuPin clasName='w-full h-full ' />
                          </div>
                          <h4 className="henny" >From Byculla</h4>
                        </div>
                        <p>Jaldi Aao Khana Khao, Khelo Kudo Aur ghar ko nikal lo. Kyunki kya hai na beta, aaj kal bahut accident hote hai, road dhyaan se cross karna</p>
                      </div>
                      <div className="flex flex-col items-start justify-center space-y-2">
                        <div className=" flex items-center justify-center space-x-3 glowText henny text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                          <div className=" flex items-center justify-center space-x-4 glowText henny text-xl sm:text-2xl md:text-3xl">
                            <div className=" h-10 w-10 bg-gray-300 p-2 footerBorder items-center justify-center flex text-yellow-700 rotate-12 " >
                              <LuPin clasName='w-full h-full ' />
                            </div>
                            <h4 className="henny" >From Mumbai Central</h4>
                          </div>
                        </div>
                        <p>Jaldi Aao Khana Khao, Khelo Kudo Aur ghar ko nikal lo. Kyunki kya hai na beta, aaj kal bahut accident hote hai, road dhyaan se cross karna</p>
                      </div>
                    </div>
                  </div>

                </SectionContainer>
                <div className=" px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44 mb-28 xs:mb-36 sm:mb-48 md:mb-60 lg:mb-96 xl:mb-[420px] ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cupiditate eligendi atque deserunt mollitia aliquid porro ratione nesciunt beatae, facilis totam neque nostrum molestiae quam. Nesciunt pariatur sunt praesentium dolorem.
                  Beatae veniam harum sit iure accusamus ullam in optio architecto, quia corrupti et est distinctio ducimus! Ex nam magni reprehenderit, consequatur sapiente velit temporibus illo, sunt delectus harum, repellendus earum.
                  Dolorum dicta sit officiis facere iusto officia culpa eum cupiditate. Unde quaerat corporis mollitia maxime beatae neque molestias ducimus aliquid, adipisci vero veritatis ea, cupiditate quod, dolor perferendis velit cumque!
                  Laudantium, aliquam. Fugit quae animi pariatur aspernatur fuga eius quis unde, laboriosam sed a, quidem deleniti repudiandae eos ut consequatur, aperiam quibusdam dolores blanditiis facilis dolorum ipsum obcaecati itaque debitis.
                  Dignissimos veniam tempore beatae delectus facilis. Distinctio mollitia natus repellat impedit velit, pariatur tenetur cupiditate fugit quia delectus reprehenderit nemo aperiam neque nobis ad veritatis illo modi atque eaque autem!
                  Neque tempora accusantium corporis voluptatem ipsam molestias minima ut doloremque earum inventore porro similique nemo et commodi ducimus nam natus, maxime voluptatibus! Ipsum saepe laboriosam sapiente eum exercitationem, nihil distinctio!
                  Nihil quae asperiores porro? Adipisci velit incidunt iusto quaerat iste eligendi reiciendis nobis mollitia itaque suscipit officiis repellat soluta fuga ipsa, consectetur illum beatae ratione odio aspernatur rem modi laudantium.
                  Dignissimos corrupti rem numquam omnis? Corrupti pariatur saepe ratione eaque explicabo minus autem doloribus iusto quos error ad impedit ut possimus et quo dolorem, dolorum officia nemo odit ipsam soluta.
                  Eum, perferendis, voluptatibus facilis, incidunt quidem commodi odio ducimus natus architecto quam maiores atque neque! Nesciunt nostrum velit architecto pariatur vero maiores vitae, molestias aperiam ullam in nobis expedita autem!
                  Ipsam eum itaque sapiente ex libero, totam ab quos. Aut veniam voluptate quisquam magnam sit dicta illo ipsum laborum ea reiciendis inventore quos, temporibus qui aliquid et, tempore atque placeat!
                </div>
                <div className="w-full h-full absolute bottom-0 ">
                  <img src={FrontHeroImage} alt="asd" className="absolute -bottom-20 xs:-bottom-10 md:bottom-6 lg:bottom-10 xl:bottom-12 w-full z-60 " />
                  <img src={FrontHeroImage} alt="asd" className="absolute -bottom-36 xl:-bottom-52 w-full rotate-180 z-50 " />
                </div>
              </section>
              <SecondParallax />
            </main>
          </motion.div>
      }

    </AnimatePresence>
  )
}

export default App
