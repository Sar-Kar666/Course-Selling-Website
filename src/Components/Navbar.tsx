
import { useState } from "react";
import { Logo } from "../icons/Logo";
import { Menu } from "../icons/Menu";
import { Link } from "react-router-dom";

const defaultStyles = " hover:text-violet-500 ";
const defaultTransition = "hover:scale-110  transition delay-150duration-300 ease-in-out  cursor-pointer ";

export function Navbar() {
    const [showGrid, setShowGrid] = useState(false);
    return <div className="sticky top-0 z-50 top-0 ">
        <div className=" bg-white  flex justify-between items-center border-b-2 border-gray-200 shadow-1 pb-3    pr-5 pl-5 shadow-lg   font-medium text-lg  text-black  sm:pl-40 sm:pr-40 sm:text pt-2 " >

            <div className={`  flex flex-1 items-center text-lg font-bold  ${defaultStyles} `}>
                <div className={` flex  text-black cursor-pointer ${defaultTransition}  `}>
                    <Logo /> SARKAR
                </div>

            </div>




            <div className="hidden  lg:flex w-120 justify-between ">


                <div className={` hover:underline ${defaultStyles} ${defaultTransition}`}>
                    Courses
                </div>

                <div className={` hover:underline ${defaultStyles} ${defaultTransition}`}>
                    About
                </div>

                <div className={`hover:underline ${defaultStyles} ${defaultTransition}`}>
                    Contact
                </div>


                <div className="flex items-center  font-sm cursor-pointer">

                    <div className={`  ${defaultTransition}`} >
                     
                            <Link to={"/signup"}>Signup</Link>
                       
                    </div>
                </div>

            </div>
            <div className="cursor-pointer lg:hidden "
                onClick={() => setShowGrid((prev) => !prev) } >

                <Menu />
                <div className="  ">
                            {showGrid && (
                                <div className= { `grid grid-cols-1 right-0 gap-4 p-4   h-50  absolute top-full w-40 bg-white shadow-md rounded-md py-2 px-4 text-left text-sm font-medium space-y-2 sm:right-40  `}>
                                    <div className={`${defaultTransition}`}>Courses</div>
                                    <div className={`${defaultTransition}`}>About</div>
                                    <div className={`${defaultTransition}`}>Contact</div>
                                    <div className={`${defaultTransition}`}>Signup</div>
                                </div>)}
                        </div>
            </div >
            
        </div>
            
        
    </div>
}

