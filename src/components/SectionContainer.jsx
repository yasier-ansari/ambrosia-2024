import { cn, transition1 } from "../utils/merge"
import { motion } from 'framer-motion'
const SectionContainer = ({ title, children, className }) => {
    return (
        <motion.div
            className={cn(` div flex flex-col  w-full h-full py-8 mt-20 ${className} `)}>
            <div
                className='flex w-full h-full items-center mb-6 px-4 xs:px-8 sm:px-12 md:px-20 lg:px-32 xl:px-44 '>
                <h3 className='w-max font-bold heading box-shadow-hover text-xl  sm:text-2xl md:text-3xl xl:text-4xl mr-3 rounded-md md:self-start henny '>
                    {title}
                </h3>
                <div className='w-full h-full min-h-12 head p-1 rounded-sm'>
                    ‎
                </div>
            </div>
            {
                children
            }
        </motion.div>
    )
}


export default SectionContainer