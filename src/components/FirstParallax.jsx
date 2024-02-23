import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import BaseHeroImage from '../assets/images/layer-base.png'
import MiddleHeroImage from '../assets/images/layer-middle.png'
import FrontHeroImage from '../assets/images/layer-front.png'
const FirstParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const text = 'AMBROSIA'

    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center  "
            id='Hero'
        >
            <motion.h1
                style={{ y: textY }}
                className="font-bold fixed text-white text-7xl md:text-9xl mx-auto flex items-center justify-center flex-col z-10"
            >

                <motion.div
                    transition={{ delay: 4 }}
                    className="caption henny text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl -mt-20 glowText">
                    {text.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className=" caption henny text-4xl sm:text-6xl lg:text-7xl xl:text-8xl  glowText"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
                <div className=" forum text-xl md:text-3xl xl:text-4xl glowText ">The Magic Begins</div>
            </motion.h1 >
            <div className="bg-red-100 w-full h-full inset-0 absolute">
                <img src={FrontHeroImage} alt="asd" className="absolute bottom-0 w-full h-full bg-red-100 " />
            </div>
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
    );
}

export default FirstParallax