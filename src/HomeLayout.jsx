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
import Dubai from './assets/images/dubai-logo.webp'
import Grabon from './assets/images/grabon-logo.png'
import Heatz from './assets/images/heatz-logo.png'
import Burj from './assets/images/burjj-logo.png'
import Micro from './assets/images/microdigit-logo.png'
import Kokan from './assets/images/kokann-logo.png'
import Zest from './assets/images/zest-logo.png'
import Unique from './assets/images/unique-arts-logo.png'


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

function HomeLayout() {
    const [loading, setLoading] = useState(true);
    const handleDownload = () => {
        const pdfFilePath = 'https://ambrosia-2024.vercel.app/timeline.pdf';
        window.location.href = pdfFilePath;
    };
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
                                className="content w-full h-full relative select-none text-gray-200 z-20 bg-black/90 text-opacity-80 mx-auto min-h-screen ">
                                <div className="w-full h-full absolute">
                                    <img src={FrontHeroImage} alt="asd" className="absolute -top-12 xs:-top-24 sm:-top-32 md:-top-40 lg:-top-64 w-full  " />
                                    <img src={FrontHeroImage} alt="asd" className="absolute -top-0 w-full rotate-180 " />
                                </div>
                                <div className=" px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44 mt-28 xs:mt-36 sm:mt-48 md:mt-60 lg:mt-96 xl:mt-[420px] glowText text-lg font-extralight ">
                                    At the forefront of our vibrant campus culture is Ambrosia, our Techno-Cultural festival inaugurated in
                                    2008. This event showcases a diverse range of activities such as Car Exhibitions, Musical Nights, Dance Shows. Treasure Hunts, Go Karting, Paintball, Robo Wars,
                                    Mud Rally, Laser Tag, Rock Shows, LAN Gaming, and more.
                                    Additionally, our commitment to social welfare is evident through events like Blood Donations, Charity Drives, and Green
                                    Rallies, all of which have received tremendous responses. With an impressive turnover of over 5000 students solely from our college.
                                    Ambrosia has consistently drawn overwhelming foot traffic. Join us in experiencing the fusion of technology, culture, and community at
                                    Ambrosia - a celebration like no other.
                                </div>
                                <SectionContainer id='Event' title={'Events'} className="justify-center text-center">
                                    <div className=" px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44 grid gap-12 grid-cols-auto place-content-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 " id='Event'>
                                        <EventCardComponent

                                            img={Event1}
                                            title={'Shark Tank'}
                                            text='getget ready for an amazing treasure hunt ready for an amazinget treasure hunt'
                                            date={'Mar, 6'}
                                            time='2:00 pm '
                                            price={'200'}
                                            location={'Classroom'}
                                            url='https://docs.google.com/forms/d/e/1FAIpQLSf_RGIS6H2o_OUF42U7Cg0Svc4w4VWxhnd6r6KPOwRuTiPEMA/viewform'
                                        />
                                        <EventCardComponent
                                            img={Event2}
                                            title={'Halloween Hunt'}
                                            text='get ready for an amazing treasure hunt'
                                            date={'Mar, 6'}
                                            time='2:00 pm'
                                            price={'200'}
                                            location={'Central Building'}
                                            url='https://docs.google.com/forms/d/e/1FAIpQLSd9Fj1VWHTcjaMdsNedVEaUjNZ23nU5hOa3y8PNe5f_2gADAQ/viewform'
                                        />
                                        <EventCardComponent
                                            img={Event3}
                                            title={'Musical Night'}
                                            text='get ready for an amazing treasure hunt'
                                            date={'Mar, 7'}
                                            time='7:00 pm'
                                            price={'200'}
                                            location={'Central Building'}
                                            url='https://docs.google.com/forms/d/e/1FAIpQLSf5tKGrklxGK6_gqkbelpShOS_UmQx-sxfICISZnFg4K4Qg2g/viewform?usp=sf_link'
                                        />
                                        <EventCardComponent
                                            img={Event4}
                                            title={'Car & Bike Meet'}
                                            text='get ready for an amazing treasure hunt'
                                            date={'Mar, 7'}
                                            time='2:00 pm'
                                            price={'200'}
                                            location={'Central Building'}
                                            url='https://docs.google.com/forms/d/e/1FAIpQLSevYJYbXCez0X2hP_Cc4uMn-wAseRPXTTqxpneeylMW9RXEog/viewform'
                                        />
                                        <EventCardComponent
                                            img={Event5}
                                            title={'Tug Of War'}
                                            text='get ready for an amazing treasure hunt'
                                            date={'Mar, 2-4'}
                                            time='12:00 pm'
                                            price={'600'}
                                            location={'Central Building'}
                                            url='https://docs.google.com/forms/d/e/1FAIpQLScqN0rb0813zU_A3e0L5MLkP8VacMMLuCvfNP5RZ8cA5h28lA/viewform'
                                        />
                                        <EventCardComponent
                                            img={Event6}
                                            title={'Stand Up Eve'}
                                            text='get ready for an amazing treasure hunt'
                                            date={'Mar, 6'}
                                            time='4:00 pm'
                                            price={'200'}
                                            location={'Central Building'}
                                            url='https://docs.google.com/forms/d/e/1FAIpQLSf5tKGrklxGK6_gqkbelpShOS_UmQx-sxfICISZnFg4K4Qg2g/viewform?usp=sf_link'
                                        />
                                    </div>
                                    <a href="https://ambrosia-2024.vercel.app/timeline.pdf" rel="noreferrer" target="_blank" className='mt-8 head footerBorder bg-white/80 w-full max-w-lg flex z-50 items-center justify-center mx-auto py-1 xs:py-2 md:py-3 rounded-lg sm:rounded-xl text-black '> Download Full Timeline ...</a>

                                </SectionContainer>
                                {/* <SectionContainer title={'Members'} id={'Member'} >
                                    <AnimatedTooltip items={people} className='pt-8 px-12 md:px-16 lg:px-24' />
                                </SectionContainer> */}
                                <SectionContainer title={'History'} id='History' >
                                    <HistoryParallax products={events} />
                                </SectionContainer>
                                <SectionContainer title={'Sponsors'} id='Sponsor' >
                                    <div className="grid gap-12 grid-cols-auto place-content-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44 " id='Sponsor'>
                                        <a href="https://www.dubaienergydrink.com/" rel="noreferrer" target="_blank" className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-20 w-auto head aspect-[12/4] rotate-3 z-[99999]  " >
                                            <img src={Dubai} className="w-full h-full  " />
                                        </a>

                                        <a href="https://www.grabon.in/" rel="noreferrer" target="_blank" className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-20 w-auto head aspect-[12/4] rotate-3 z-[99999]  " >
                                            <img src={Grabon} className="w-full h-fulla>ate-3  " />
                                        </a>
                                        <a href="https://www.instagram.com/heatzindia?igsh=MTl1YWZwZTAyY2dhaQ==" rel="noreferrer" target="_blank" className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-20 w-auto head aspect-[12/4] rotate-3 z-[99999]  " >
                                            <img src={Heatz} className="w-full h-full  " />
                                        </a>
                                        <a href="https://burjconstructions.com/" rel="noreferrer" target="_blank" className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-20 w-auto head aspect-[12/4] rotate-3 z-[99999]  " >
                                            <img src={Burj} className="w-full h-full  " />
                                        </a>
                                        <a href="https://www.instagram.com/microdigit.online?igsh=MWNyeWszajluMGt4Yw==" rel="noreferrer" target="_blank" className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-20 w-auto head aspect-[12/4] rotate-3 z-[99999]  " >
                                            <img src={Micro} className="w-full h-full  " />
                                        </a>
                                        <a href="https://kokanbank.net/" rel="noreferrer" target="_blank" className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-20 w-auto head aspect-[12/4] rotate-3 z-[99999]  " >
                                            <img src={Kokan} className="w-full h-full  " />
                                        </a>
                                        <a href="https://www.zestglobaleducation.com/" rel="noreferrer" target="_blank" className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-20 w-auto head aspect-[12/4] rotate-3 z-[99999]  " >
                                            <img src={Zest} className="w-full h-full  " />
                                        </a>
                                        <a href="https://www.grabon.in/" rel="noreferrer" target="_blank" className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-20 w-auto head aspect-[12/4] rotate-3 z-[99999]  " >
                                            <img src={Unique} className="w-full h-full  " />
                                        </a>
                                        <a href="https://www.grabon.in/" rel="noreferrer" target="_blank" className="bg-zinc-200 px-4 py-2 rounded-lg footerBorder h-20 w-auto head aspect-[12/4] rotate-3 z-[99999]  " >
                                            <img src={Grabon} className="w-full h-full  " />
                                        </a>
                                        <a href="https://www.grabon.in/" rel="noreferrer" target="_blank" className=" px-4 py-2 rounded-lg  h-20 w-auto  aspect-[12/4] text-base sm:text-lg md:text-xl xl:text-2xl glowText font-light " >Graduate Vadapav</a>
                                        <a href="https://www.grabon.in/" rel="noreferrer" target="_blank" className="px-4 py-2 rounded-lg  h-20 w-auto  aspect-[12/4] text-base sm:text-lg md:text-xl xl:text-2xl glowText font-light " >Barbeque Savour</a>
                                        <a href="https://www.grabon.in/" rel="noreferrer" target="_blank" className="px-4 py-2 rounded-lg  h-20 w-auto  aspect-[12/4] text-base sm:text-lg md:text-xl xl:text-2xl glowText font-light " >Nawab Juice</a>
                                    </div>
                                </SectionContainer>
                                <SectionContainer title={'Location '} >
                                    <div id='Location' className="flex flex-col items-center owlCursor cursor-not-allowed justify-between w-full h-full space-y-8 md:space-y-10 my-12 px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44">
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
                                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around  w-full space-y-8 md:space-y-0 md:space-x-20">
                                            <div className="flex flex-col items-start justify-center space-y-2">
                                                <div className=" flex items-center justify-center space-x-4 glowText henny text-xl sm:text-2xl md:text-3xl">
                                                    <div className=" h-10 w-10 bg-gray-300 p-2 footerBorder items-center justify-center flex text-yellow-700 rotate-12 " >
                                                        <LuPin clasName='w-full h-full ' />
                                                    </div>
                                                    <h4 className="henny" >From Byculla</h4>
                                                </div>
                                                <p className="glowText font-extralight" >Take sharing Taxi, till Saboo Siddik college or Walk upto 15-20 mins </p>
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
                                                <p className="glowText font-extralight" >Take sharing Taxi, till Saboo Siddik college or Walk upto 10-15 mins</p>
                                            </div>
                                        </div>
                                    </div>

                                </SectionContainer>
                                <div className=" glowText font-extralight px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44 mb-28 xs:mb-36 sm:mb-48 md:mb-60 lg:mb-96 xl:mb-[420px] ">
                                    So... are you apparating to the grand spectacle or not? 🧙‍♂️ Join us at Ambrosia, the magical Techno-Cultural festival of M.H. Saboo Siddik College of Engineering! Picture this: Car Exhibitions on flying broomsticks, Musical Nights with tunes straight out of Hogwarts, and Dance Shows that would make even house-elves groove. Ambrosia consistently draws foot traffic like a magnet. Don your wizarding robes, grab your wands (or pens), and join us in this celebration like no other. So, are you ready to immerse yourself in the magic of technology, culture, and community? 🎉✨ See you at Ambrosia—where the magic happens!
                                </div>
                                <div className="w-full h-full absolute bottom-0 select-none ">
                                    <img src={FrontHeroImage} alt="asd" className="absolute -bottom-12 xs:-bottom-10 md:bottom-6 lg:bottom-10 xl:bottom-12 w-full z-60 " />
                                    <img src={FrontHeroImage} alt="asd" className="absolute -bottom-28 xl:-bottom-52 w-full rotate-180 z-50 " />
                                </div>
                            </section>
                            <SecondParallax />
                        </main>
                    </motion.div>
            }

        </AnimatePresence>
    )
}

export default HomeLayout