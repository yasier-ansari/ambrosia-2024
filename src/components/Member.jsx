import { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import borderLessImage from '../assets/images/borderless-card.jpg'
import { cn } from "../utils/merge";
const AnimatedTooltip = ({ items, className }) => {
    const randomRotation = () => {
        console.log(Math.floor(Math.random() * 31) - 5)
        return Math.floor(Math.random() * 31) - 5
    }
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);

    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );

    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );

    const handleMouseMove = (event) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth);
    };
    randomRotation()
    return (
        <div className={cn(`flex items-center justify-center ${className} flex-wrap`)}  id='Member'>
            {items?.map((item) => (
                <div
                    className="-mr-4 relative group"
                    key={item.name}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="wait">
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                            >
                                <div className="flex items-center justify-center relative mx-auto" >
                                    <div className="">
                                        <img
                                            onMouseMove={handleMouseMove}
                                            src={item.image}
                                            alt={item.name}
                                            className="object-cover absolute top-20 right-8 !m-0 !p-0 object-top card-image-container h-32 w-32 footerBorder border-2 group-hover:scale-105 group-hover:z-30 border-white transition duration-500"
                                        />
                                        <img src={borderLessImage}
                                            alt={`${item.name} placeholder `} className="h-72 w-auto object-cover " />
                                        <p className="absolute bottom-12 right-6 text-black henny text-2xl  ">Safwan Bebal</p>
                                        <p className="text-center text-xl " >General Secretary</p>
                                    </div>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="card-image-container -mx-3"
                        style={{
                            transform: `rotate(${randomRotation()}deg)`, // Apply the dynamic rotation
                        }}
                    >
                        <img
                            onMouseMove={handleMouseMove}
                            src={item.image}
                            alt={item.name}
                            className="object-cover relative !m-0 !p-0 object-top h-40 w-40 border-2 group-hover:scale-105 group-hover:z-30 border-white transition duration-500 footerBorder rounded-2xl bg-red-100 "
                        />

                    </div>

                </div>
            ))}
        </div>
    );
};

export default AnimatedTooltip;