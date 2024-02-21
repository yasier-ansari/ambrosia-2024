import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import BaseHeroImage from '../assets/images/layer-base.png'
import MiddleHeroImage from '../assets/images/layer-middle.png'
import FrontHeroImage from '../assets/images/layer-front.png'
import FooterImage from '../assets/images/borderless-card.jpg'
import owlImage from '../assets/images/owl.png'
import Logo from '../assets/images/logo.jpg'
import instaLogo from '../assets/images/insta-logo.png'
import { LuInstagram } from "react-icons/lu";
const SecondParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <>
            <div
                ref={ref}
                className="w-full h-screen overflow-hidden relative grid place-items-center text-black"
            >

                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${BaseHeroImage})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backgroundY,
                    }}
                />
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${MiddleHeroImage})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backgroundY,
                    }}
                />
                {/* <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${MiddleHeroImage})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            /> */}
                <div
                    style={{
                        backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RTqv2DpNys3JchDF1evivAHaFF%26pid%3DApi&f=1&ipt=96e2706a0de7681fc8ae0b3e884267070de893aeba40f38526cdc9e3a70a1c50&ipo=images')`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                    className="relative footerBorder flex flex-col space-y-8 sm:space-y-12 md:space-y-0 md:flex-row items-center mx-auto justify-center md:justify-between px-8 py-12 md:px-20 md:py-8 max-w-5xl w-full">
                    <img src={owlImage} alt="" className="absolute -top-40 -right-20 w-40 h-40 " />
                    <div className="md:w-[20%]" >
                        <img src={Logo} className="rounded-full w-32 h-32 " />
                    </div>
                    <div className="w-full md:w-[40%] flex flex-col items-center justify-center " >
                        <div className="flex items-center justify-start space-x-4" >
                            <p className=" text-sm " >Safwan</p>
                            <p className="text-2xl" >9769537374</p>
                        </div>
                        <div className="flex items-center justify-start space-x-4" >
                            <p className=" text-sm " >Owesh</p>
                            <p className="text-2xl" >7718018404</p>
                        </div>
                        <div className="flex items-center justify-start space-x-4" >
                            <p className=" text-sm " >Muzakkir</p>
                            <p className="text-2xl" >9619823196</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full py-7 md:py-0 md:w-[30%] space-y-4 "  >
                        <div className="flex items-center justify-center space-x-12 w-full">
                            <div className="drop-shadow-xl p-2 rotate-12 footerBorder shadow-black rounded-lg " >
                                {/* <LuInstagram className="w-12 h-12 text-black   " /> */}
                                <img src={instaLogo} className="w-12 h-12 drop-shadow-sm shadow-black " />
                            </div>
                            <div className="drop-shadow-xl p-2 -rotate-12 footerBorder shadow-black rounded-lg " >
                                {/* <LuInstagram className="w-12 h-12 text-black   " /> */}
                                <img src={instaLogo} className="w-12 h-12 drop-shadow-sm shadow-black " />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-black text-lg glow" >safwan.612014.it@mhssce.ac.in</h4>
                        </div>
                    </div>
                </div>
                {/* <motion.div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: `url(${MiddleHeroImage})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            >
                <img className="absolute inset-0 -top-[200px] z-10 filter sepia-50 object-cover" src={FrontHeroImage} />
            </motion.div> */}

            </div >
            <div className="flex items-center justify-between w-full h-full mx-auto px-8 md:px-16 lg:px-24 ">
                <div>
                    MIT Licensed
                </div>
                <div>
                    &copy; Ambrosia
                </div>
                <div>
                    Made By Rahil
                </div>
            </div>
        </>
    );
}

export default SecondParallax