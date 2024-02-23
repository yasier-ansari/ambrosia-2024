import { TbNotes } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiSelfLove } from "react-icons/gi";
import { LuCalendarDays, LuLocate } from "react-icons/lu";
const Header = () => {
    return (
        <div className="  text-stone-800 fixed top-10 right-[50%] translate-x-[50%] max-w-2xl lg:max-w-3xl min-h-12 sm:min-h-16 px-4 sm:px-8 md:px-12 z-[1000] flex items-center space-x-8 justify-between mx-auto w-[95%] sm:w-[90%] md:w-full text-base md:text-lg shadow-sm drop-shadow-2xl shadow-white head ">
            <a href="#History" className="hidden sm:block w-full h-full px-1 md:px-2 py-1 md:py-2" >
                <div className="block sm:hidden w-full h-full" >
                    <TbNotes className="md:h-8 md:w-8 sm:w-6 sm:h-6 w-4 h-4 " />
                </div>
                <div className="hidden sm:block h-full w-full" >History</div>
            </a>
            <a href="#Event" className="w-full h-full px-1 md:px-2 py-1 md:py-2" >
                <div className="block sm:hidden h-full w-full" >
                    <LuCalendarDays className="md:h-8 md:w-8 sm:w-6 sm:h-6 w-4 h-4 " />
                </div>
                <div className="hidden sm:block h-full w-full " >Event</div>
            </a>
            <a href="#Hero" className="font-bold px-1 md:px-2 py-1 md:py-2 glow text-lg md:text-xl lg:text-2xl w-full h-full flex items-center justify-center mx-auto" >
                <p className="henny h-full w-full" >AMBROSIA</p>
            </a>
            <a href="#Sponsor" className="w-full h-full px-1 md:px-2 py-1 md:py-2" >
                <div className="block sm:hidden w-full h-full" >
                    <GiSelfLove className="md:h-8 md:w-8 sm:w-6 sm:h-6 w-4 h-4 " />
                </div>
                <div className="hidden sm:block w-full h-full" >Sponsor</div>
            </a >
            <a href="#Location" className="hidden sm:block w-full h-full px-1 md:px-2 py-1 md:py-2">
                <div className="block sm:hidden w-full h-full" >
                    <LuLocate className="md:h-8 md:w-8 sm:w-6 sm:h-6 w-4 h-4 " />
                </div>
                <div className="hidden sm:block w-full h-full" >Location</div>
            </a>
        </div >
    );
};

export default Header;