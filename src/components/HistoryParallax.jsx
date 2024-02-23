import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const HistoryParallax = ({ products }) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-600, 100]),
        springConfig
    );

    return (
        <div
            ref={ref}
            id="History"
            className="h-full pb-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
            <h1 className="text-4xl md:text-7xl xl:text-8xl glowText font-bold dark:text-white henny ">
                The Ultimate <br /> College Fest to Attend
            </h1>
            <p className="max-w-3xl text-base md:text-xl mt-8 dark:text-neutral-200 glowText font-extralight">
                Nestled in the heart of Byculla, our centrally located campus is
                seamlessly connected to the Three lines of Mumbai Local, making it a convenient choice for students, especially during festival
                times, owing to its superb facilities. <br /><br />
                At the forefront is Ambrosia, the Techno-Cultural festival inaugurated in 2008. A stage for magical Car Exhibitions, Musical Nights, and Dance Shows. The history echoes with the commitment to social welfare through events like Blood Donations, Charity Drives, and Green Rallies. With over 5000 students, Ambrosia continues to draw magical foot traffic, creating a history that intertwines technology, culture, and community in the enchanted tapestry of our college&apos;s story.
            </p>
        </div>
    );
};

export const ProductCard = ({ product, translate }) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product footerBorder sepia-[50%] hover:sepia-0 h-96 w-[30rem] relative flex-shrink-0"
        >
            <a href={product.link} className="block group-hover/product:shadow-2xl ">
                <img
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </a>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};

export default HistoryParallax;