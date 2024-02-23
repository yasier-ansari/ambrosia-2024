import React from 'react'
import { LuCalendarCheck2, LuDollarSign, LuLayout, LuMap, LuTimer } from "react-icons/lu"
import EventCard from '../assets/images/event-card.jpg'
import { motion } from 'framer-motion'
import { fadeInUp } from "../utils/merge"

const EventCardComponent = ({ img, title, text, button, date, time, price, location, url }) => {
    // const rotateAngle = [-2, -3, 3, 2, 6, -6]
    // const getRandomRotateAngle = () => {
    //     const randomIndex = Math.floor(Math.random() * rotateAngle.length);
    //     console.log(rotateAngle[randomIndex])
    //     return rotateAngle[randomIndex];
    // };

    return (
        <motion.div
            data-aos={"fade-up"}
            style={{
                backgroundImage: `url(${EventCard})`,
                backgroundPosition: "bottom",
                backgroundSize: "cover",
            }}
            className="flex w-full min-w-32 min-h-64 h-auto max-w-[300px] footerBorder flex-col justify-around items-center mx-auto space-y-3 px-2 sm:px-3 -py-8  ">
            <img src={img} className={`bg-zinc-200 p-2 rounded-lg footerBorder aspect-[10/9] h-full w-auto rotate-3 object-cover object-top `} />
            <div className="w-full flex justify-center items-center flex-col space-y-2  pb-2 md:pb-4 mx-auto " >
                <h3 className="henny text-black font-bold text-2xl md:text-3xl  text-center " >{title}</h3>
                <div className="flex items-center flex-wrap justify-start w-full px-2 text-xs  md:text-sm  ">
                    <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                        <LuCalendarCheck2 />
                        <p>{date}</p>
                    </div>
                    <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                        <LuTimer />
                        <p>{time}</p>
                    </div>
                    <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                        <LuDollarSign />
                        <p>{price}</p>
                    </div>
                    <div className="bg-stone-600 flex items-center justify-start w-max m-1 footerBorder space-x-2 rounded-xl p-1 px-2 md:p-2 md:px-3 ">
                        <LuMap />
                        <p>{location}</p>
                    </div>
                </div>
                <a href={url} target="_blank" rel="noreferrer" className="flex items-center justify-center mx-auto bg-white/70 px-3 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 text-black glowText font-normal rounded-md xs:rounded-lg md:rounded-xl ">
                    Register
                </a>
            </div>
        </motion.div>
    )
}

export default EventCardComponent