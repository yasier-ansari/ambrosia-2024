import React from 'react'
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="flex items-center justify-center mx-auto flex-col min-h-screen max-w-7xl " >
            <h2 className="glowText flex items-center justify-center space-x-3" >
                <span className="head text-black text-4xl md:text-6xl lg:text-7xl xl:text-9xl henny flex items-center justify-center mx-auto border-white border-4 p-4 align align-bottom pt-12 rotate-6  shadow-white shadow-xl drop-shadow-xl " >4</span>
                <span className="head text-black text-4xl md:text-6xl lg:text-7xl xl:text-9xl henny flex items-center justify-center mx-auto border-white border-4 p-4 align align-bottom pt-12 -rotate-0 " >0</span>
                <span className="head text-black text-4xl md:text-6xl lg:text-7xl xl:text-9xl henny flex items-center justify-center mx-auto border-white border-4 p-4 align align-bottom pt-12 -rotate-6  shadow-white shadow-xl drop-shadow-xl " >4</span>
            </h2>
            <p className="mt-6 font-light text-sm sm:text-base md:text-lg text-center max-w-4xl " >Looks like you&apos;ve taken a wrong turn down a hidden corridor at Hogwarts. The page you are looking for has vanished like the Marauder&apos;s Map.</p>
            <Link to="/" className="henny text-lg md:text-xl glowText my-12 " >Return to Home</Link>
        </div>
    )
}

export default Error