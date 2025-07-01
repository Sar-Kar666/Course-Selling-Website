interface CardProps{
    heading1?:String;
    heading2: String;
    details: String;
}

export function Card({heading1,heading2,details}:CardProps){
    return<div className="flex justify-center items-center  ">
        <div className=" "> 
        <div className="font-bold text-lg  pb-2">
            {heading1}
        </div>
        <div className="font-bold text-4xl pb-2">
            {heading2}
        </div>
        <div>
            {details}
        </div>
    </div>
    </div>
}