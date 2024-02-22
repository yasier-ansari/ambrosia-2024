import Logo from '../assets/logo.jpg'
import { motion } from 'framer-motion'

const PreLoader = () => {
    return (
        <div className="flex items-center justify-center w-full h-full mx-auto min-h-screen" >
            <motion.div
                className='loader '
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <img src={Logo} className=" w-20 h-20 sm:w-28 sm:h-28 md:h-36 md:w-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 object-cover rounded-full " />
            </motion.div>
        </div>
    )
}

export default PreLoader