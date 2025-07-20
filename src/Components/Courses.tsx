import { ReactElement } from "react";
import { useState } from "react";

export interface CoursesProps {
    image: ReactElement;
    title: String;
    price: number;
    details: String;

}

export function Courses({ image, title, price, details }: CoursesProps) {

    const [openCourse,setOpenCourse]=useState(true);

    const OnLoad=()=>{
        setOpenCourse(!openCourse);
    }

    return <div > 
        {openCourse && <div className="flex justify-center items-center" onClick={OnLoad}>
        <div className="max-h-85 min-w-70 max-w-110 rounded-2xl bg-white border-gray-400 shadow-lg cursor-pointer hover:scale-110 duration-300 ease-in-out md:gird md:grid-cols-1 md:gap-7">
        <div className="p-4">
            <div className=" rounded-2xl ">
                {image}
            </div>
            <div className=" font-bold text-md flex  pt-2 items-center justify-between  max-w-110 sm:text-lg">
                <div >
                    {title}
                </div>
                <div >
                    ${price}
                </div>

            </div>
            <div className="text-sm max-w-110 pt-1 black sm:text-md">
                {details}
            </div>
        </div>
        </div>
    </div>}

    {!openCourse && <div className="top-0  left-0 flex justify-center items-center">
    <div className=" bg-red-400 h-300">
  <div className="">
    {image}
  </div>
  <div>
    {title}
  </div>
  <div>
    {price}
  </div>
  <div>
    {details}
  </div>
</div>
</div>}
   
    </div> 
}
