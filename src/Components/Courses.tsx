import { ReactElement } from "react";

interface CoursesProps{
    image:ReactElement;
    title:String;
    price: number;
    details?:String;

}

export function Courses({image,title,price,details}:CoursesProps){
    return<div className="h-85 w-110 rounded-2xl border-gray-400 shadow-2xl pt-2 mt-10 cursor-pointer hover:scale-110 duration-300 ease-in-out">
        <div className="p-2 rounded-2xl"> 
            {image}
        </div>
        <div className=" font-bold text-lg flex items-center ">
            <div className="pl-7 pr-46">
                {title} 
            </div>
            <div>
                ${price }
            </div>
           
            
        </div>
       <div className="pl-7 pt-2 text-violet-600 font-bold">
        {details}
       </div>
    </div>
}