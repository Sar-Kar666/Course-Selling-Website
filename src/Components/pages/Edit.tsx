import axios from "axios";
import { useRef } from "react";

const defaultText = "font-bold text-2xl py-2 text-violet-500";
export function Edit() {

    const titleRef=useRef<HTMLInputElement>(null);
    const descriptionRef=useRef<HTMLTextAreaElement>(null);
    const priceRef=useRef<HTMLInputElement>(null);
    const linkRef=useRef<HTMLInputElement>(null);


    function createCourse(){
        const title = titleRef.current?.value;
        const description = descriptionRef.current?.value;
        const price =  priceRef.current?.value;
        const imageUrl = linkRef.current?.value;
        const token=localStorage.getItem("token");


        
        axios.post("https://csa-backend-2.onrender.com/admin/course",{
        //    axios.post("http://localhost:3000/admin/course", {

                title,
                description,
                imageUrl,
                price

        },{
            headers:{
                token:token
            }
        }).then((Response)=>{
            const message= Response.data.message;
            const courseId=Response.data.CourseId;

            alert(`${message} and ${courseId}`)
        })

    }



    return <div className="pr-5 pl-5 sm:pr-40 sm:pl-40">
        <div className="font-bold text-3xl p-2 flex justify-center">
            <div className="py-6 text-violet-700">Create new course</div>
        </div>
        <div className="py-4" >
            <div className={`${defaultText} `}>Create Title</div>
            <div><input ref={titleRef} className="bg-gray-100 rounded shadow-lg w-120 h-10 p-2" placeholder="Enter Title here"></input></div>
        </div>

        <div className="py-4">
            <div className={`${defaultText}`}>Course Description</div>
            <div><textarea ref={descriptionRef}
                placeholder="Enter description here"
                className=" w-120 h-40 p-2 bg-gray-100 rounded shadow-lg  placeholder-gray-500"
            /></div>
        </div>

        <div className="py-4">
            <div className={`${defaultText}`}>Price</div>
            <div><input  ref={priceRef} className="bg-gray-100 rounded shadow-lg w-120 h-10 p-2"  placeholder="Enter Price here"></input></div>
        </div>

        <div className="py-4">
            <div className={`${defaultText}`}>Image Url</div>
            <div><input ref={linkRef} className="bg-gray-100 rounded shadow-lg w-120 h-10 p-2"  placeholder="Enter Image Link here"></input></div>
        </div>
        <div className="flex justify-center py-4">
            <button onClick={createCourse} className="border-white  cursor-pointer text-white text-lg h-10 w-40 rounded bg-violet-700">Submit</button>
        </div>
    </div>
} 