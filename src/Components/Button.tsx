

interface ButtonProps{
    variant: "primary" | "secondary" | "small";
    title: String;  
    onClick?:()=>void;
}
const defaultStyles="  px-3 rounded-lg  flex items-center  justify-center cursor-pointer hover:scale-110 duration-300 ease-out "

const variantClasses={
    "primary":"bg-black min-w-30 font-medium px-4 py-2 h-10 text-gray-200 text-xl  rounded ",
    "secondary": " p-1 bg-black border text-white hover:bg-violet-200  hover:shadow-black ",
    "small":" p-1 font-sm px-3 text-voilet-300 "
}
export function Button({variant,title,onClick}:ButtonProps){
 return <button onClick={onClick} className={variantClasses[variant] +""+defaultStyles}>
            <div>
              {title}
            </div>

            </button>
}