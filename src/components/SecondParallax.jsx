import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import BaseHeroImage from '../assets/images/layer-base.png'
import MiddleHeroImage from '../assets/images/layer-middle.png'
import FrontHeroImage from '../assets/images/layer-front.png'
import FooterImage from '../assets/images/footer.webp'
import owlImage from '../assets/images/owl.png'
import Logo from '../assets/images/logo.jpg'
const SecondParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center "
        >
            <motion.h1
                style={{ y: textY }}
                className="font-bold text-white text-7xl md:text-9xl relative z-10"
            >
                <div className="caption henny  text-8xl -mt-20 ">AMBROSIA</div>
                <div className=" forum text-4xl">The Magic Begins</div>
            </motion.h1 >

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
                    backgroundImage: `url(${FooterImage})`,
                    backgroundPosition: "topo",
                    backgroundSize: "fill",
                }}
                className="relative footerBorder flex flex-col md:flex-row items-center mx-auto justify-center md:justify-between md:px-12 md:py-6 max-w-5xl w-full">
                <img src={owlImage} alt="" className="absolute -top-40 -right-20 w-40 h-40 " />
                <div>
                    <img src={Logo} className="rounded-full w-32 h-32 " />
                </div>
                <div>Contact</div>
                <div className="flex justify-between items-center mx-auto "  >
                    <div>
                        Instagram
                    </div>
                    <div>Twitter</div>
                    <div>Facebook</div>
                    <div></div>
                    Email + social
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
    );
}

export default SecondParallax