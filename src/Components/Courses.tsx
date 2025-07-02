import { ReactElement } from "react";

interface CoursesProps {
    image: ReactElement;
    title: String;
    price: number;
    details: String;

}

export function Courses({ image, title, price, details }: CoursesProps) {
    return <div className="h-85 max-w-110 rounded-2xl bg-white border-gray-400 shadow-lg cursor-pointer hover:scale-110 duration-300 ease-in-out">
        <div className="p-4">
            <div className=" rounded-2xl">
                {image}
            </div>
            <div className=" font-bold text-lg flex  pt-2 items-center justify-between  max-w-110">
                <div>
                    {title}
                </div>
                <div >
                    ${price}
                </div>

            </div>
            <div className=" max-w-110 pt-1 black font-md">
                {details}
            </div>
        </div>
    </div>
}