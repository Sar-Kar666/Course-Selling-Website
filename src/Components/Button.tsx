import { IconTruckReturn } from "@tabler/icons-react";

interface ButtonProps{
    variant: "primary" | "secondary";
    title: String;
    onClick?:()=>void;
}
const defaultStyles=" min-w-30 font-medium h-12 px-4 py-2  rounded-lg  flex items-center  justify-center cursor-pointer hover:scale-110 duration-300 ease-out "

const variantClasses={
    "primary":"bg-violet-500  text-white  text-xl  rounded ",
    "secondary": "bg-violet-200  text-purple-600 hover:bg-black "
}
export function Button({variant,title,onClick}:ButtonProps){
 return <button onClick={onClick} className={variantClasses[variant] +""+defaultStyles}>
            <div>
              {title}
            </div>

            </button>
}