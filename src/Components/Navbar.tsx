import { Chart } from "../icons/Chart";
import { Logo } from "../icons/Logo";
import { User } from "../icons/User";

const defaultStyles=" hover:text-violet-500 ";
const defaultTransition="hover:scale-110  transition delay-150duration-300 ease-in-out  cursor-pointer ";

export function Navbar(){
    return<div className=" bg-white z-20 flex justify-between items-center border-b-2 border-gray-200 shadow-1 pb-3  pl-40 pr-40 pt-4 shadow-lg font-medium text-lg sticky top-0 text-black  ">
        
                <div className={`  flex flex-1 items-center text-lg font-bold  ${defaultStyles} `}>
                    <div className={` flex  text-black cursor-pointer ${defaultTransition}  `}>
                        <Logo/> SARKAR 
                    </div>
                    
                </div>




        <div className="flex w-120 justify-between ">

       
        <div className={` hover:underline ${defaultStyles} ${defaultTransition}`}>
            Courses
        </div>
       
         <div className={` hover:underline ${defaultStyles} ${defaultTransition}`}>
            About
        </div>

          <div className={`hover:underline ${defaultStyles} ${defaultTransition}`}>
            Contact
        </div>
        
          
        <div className="flex items-center text-black font-extrabold cursor-pointer">

            {/* <div className={`pr-3 ${defaultTransition}`}>
                 <Chart/>
            </div> */}
            <div  className={` ${defaultTransition}`} >
               <User/>
            </div>
        </div>
         </div>
         
        
    </div>
}