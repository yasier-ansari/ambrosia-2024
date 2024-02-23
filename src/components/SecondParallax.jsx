import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import BaseHeroImage from '../assets/images/layer-base.png'
import MiddleHeroImage from '../assets/images/layer-middle.png'
import owlImage from '../assets/images/owl.png'
import Logo from '../assets/images/logo.jpg'
import instaLogo from '../assets/images/insta-logo.png'
import linkLogo from '../assets/images/link-logo.png'
const SecondParallax = ({ className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <footer
            name='Footer'
            id='Footer'
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center z-10 text-black mt-20"
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
                    <img src={Logo} className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 " />
                </div>
                <div className="w-full md:w-[40%] flex flex-col items-center justify-center " >
                    <div className="flex items-center justify-start space-x-4" >
                        <p className=" text-xs md:text-sm " >Safwan</p>
                        <p className="xs:text-lg sm:text-xl md:text-2xl" >9769537374</p>
                    </div>
                    <div className="flex items-center justify-start space-x-4" >
                        <p className=" text-xs md:text-sm " >Owesh</p>
                        <p className="xs:text-lg sm:text-xl md:text-2xl" >7718018404</p>
                    </div>
                    <div className="flex items-center justify-start space-x-4" >
                        <p className=" text-xs md:text-sm " >Muzakkir</p>
                        <p className="xs:text-lg sm:text-xl md:text-2xl" >9619823196</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full py-7 md:py-0 md:w-[30%] space-y-4 "  >
                    <div className="flex items-center justify-center space-x-12 w-full">
                        <motion.a
                            initial={{
                                transform: "translateZ(8px) translateY(-2px) ",
                            }}
                            animate={{
                                transform: "translateZ(32px) translateY(-8px)",
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 2,
                                ease: "easeInOut",
                            }}

                            href="https://www.instagram.com/ambrosiathefest/" target="_blank" rel="noreferrer" className="drop-shadow-xl p-2 rotate-12 footerBorder shadow-black rounded-lg bg-white/70  footerBorder" >
                            <img src={instaLogo} className="w-12 h-12 drop-shadow-sm shadow-black " />
                        </motion.a>
                        <motion.a
                            initial={{
                                transform: "translateZ(18px) translateY(-2px) ",
                            }}
                            animate={{
                                transform: "translateZ(32px) translateY(-12px)",
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 2,
                                ease: "easeInOut",
                            }}

                            href="https://linktr.ee/ambrosia.fest" target="_blank" rel="noreferrer" className="drop-shadow-xl p-2 -rotate-6 footerBorder shadow-black rounded-lg bg-white/70  footerBorder" >
                            <img src={linkLogo} className="w-12 h-12 drop-shadow-sm shadow-black " />
                        </motion.a>
                    </div>
                    <div>
                        <h4 className="text-black text-sm xs:text-base md:text-lg glow" >safwan.612014.it@mhssce.ac.in</h4>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default SecondParallax