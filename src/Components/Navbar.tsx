import { Chart } from "../icons/Chart";
import { Logo } from "../icons/Logo";
import { User } from "../icons/User";

const defaultStyles="cursor-pointer hover:text-violet-500 ";
const defaultTransition="hover:scale-110 transition delay-150duration-300 ease-in-out ";

export function Navbar(){
    return<div className="flex justify-evenly items-center border-b-2 border-gray-200 shadow-1 pb-3  pl-70 pr-70 pt-4 shadow-2xs font-medium text-lg ">
        
        <div className={` flex items-center text-lg font-bold  ${defaultStyles}  ${defaultTransition}`}>
             <div className="pr-1 text-violet-600 ">
                <Logo/>
            </div>
            <div className=" text-violet-600 text-shadow-md ">
                LMW
            </div>
        </div>
        <div className={` ${defaultStyles} ${defaultTransition}`}>
            Upload Course
        </div>
       
         <div className={` ${defaultStyles} ${defaultTransition}`}>
            Explore Courses
        </div>

          <div className={` ${defaultStyles} ${defaultTransition}`}>
            About US
        </div>
          <div className={` ${defaultStyles} ${defaultTransition}`}>
            Adsda
        </div>
        <div className="flex items-center text-black font-extrabold cursor-pointer">

            <div className={`pr-4 ${defaultTransition}`}>
                 <Chart/>
            </div>
            <div  className={` ${defaultTransition}`} >
               <User/>
            </div>
        </div>
         
        
    </div>
}