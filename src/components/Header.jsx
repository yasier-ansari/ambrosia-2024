import { TbNotes } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiSelfLove } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";
const Header = () => {
    return (
        <div className="  text-stone-800 fixed top-10 right-[50%] translate-x-[50%] max-w-2xl lg:max-w-3xl min-h-12 sm:min-h-16 px-4 sm:px-8 md:px-12 z-[1000] flex items-center space-x-8 justify-evenly mx-auto w-[95%] sm:w-[90%] md:w-full text-base md:text-lg shadow-sm drop-shadow-2xl shadow-white head ">
            <a href="#History"><div className="hidden sm:block" >
                <div className="block sm:hidden" >
                    <TbNotes className="md:h-8 md:w-8 sm:w-6 sm:h-6 w-4 h-4 " />
                </div>
                <div className="hidden sm:block" >History</div>
            </div></a>
            <a href="#Event"><div className=" " >
                <div className="block sm:hidden" >
                    <LuCalendarDays className="md:h-8 md:w-8 sm:w-6 sm:h-6 w-4 h-4 " />
                </div>
                <div className="hidden sm:block" >Event</div>
            </div></a>
            <a href="#Hero"><div className="font-bold  glow text-lg md:text-xl lg:text-2xl  w-full h-full flex items-center justify-center mx-auto" >
                <p className="henny" >AMBROSIA</p>
            </div></a>
            <a href="#Sponsor"><div className="" >
                <div className="block sm:hidden" >
                    <GiSelfLove className="md:h-8 md:w-8 sm:w-6 sm:h-6 w-4 h-4 " />
                </div>
                <div className="hidden sm:block" >Sponsor</div>
            </div></a>
            <a href="#Member"><div className="hidden sm:block" >
                <div className="block sm:hidden" >
                    <HiOutlineUserGroup className="md:h-8 md:w-8 sm:w-6 sm:h-6 w-4 h-4 " />
                </div>
                <div className="hidden sm:block" >Member</div>
            </div></a>
        </div>
    );
};

export default Header;
