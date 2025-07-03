

interface ButtonProps{
    variant: "primary" | "secondary";
    title: String;  
    onClick?:()=>void;
}
const defaultStyles=" min-w-30 font-medium px-4 py-2 h-10  rounded-lg  flex items-center  justify-center cursor-pointer hover:scale-110 duration-300 ease-out "

const variantClasses={
    "primary":"bg-black text-gray-200 text-xl  rounded ",
    "secondary": "bg-white border text-purple-600 hover:bg-violet-200  hover:shadow-black "
}
export function Button({variant,title,onClick}:ButtonProps){
 return <button onClick={onClick} className={variantClasses[variant] +""+defaultStyles}>
            <div>
              {title}
            </div>

            </button>
}