import { useState } from "react"
import { Link } from "react-router-dom";




export function Signin() {
    const[sign,setSign]=useState(true);

    const Toggle=()=>{
        setSign(!sign);
        
        
    }

    return<div className="h-screen w-full flex justify-center items-center bg-gray-200">
        <div className=" max-h-120 border bg-gray-100 border-gray-200  shadow-2xl min-w-50  flex justify-center p-6 rounded-2xl sm:w-100 md:w-130">   
            <div>
                
                <div className="text-3xl text-purple-600 font-bold text-center">{sign==true? "Signin" : "Signup"}</div>
                    <div className="pt-10 ">
                        
                       {!sign &&  <div className="pb-5 min-w-50 sm:w-100 flex justify-center" >
                        <div>
                            <div className="">User Name</div>
                            <div>
                                <input type="email" placeholder="Your name" className="min-w-50  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 sm:w-70  md:w-100"/>
                            </div>
                             </div>
                        </div>}
                    
                       <div className="pb-5 min-w-50 sm:w-100 flex justify-center" >
                        <div>
                            <div className="">Email</div>
                            <div>
                                <input type="email" placeholder="you@example.com" className="min-w-50  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 sm:w-70  md:w-100"/>
                            </div>
                             </div>
                        </div>
                        <div className="flex justify-center">
                            <div>

                            
                                <div>
                                <button>Password</button>
                            </div>
                            <div>
                        
                                <input type="password" placeholder="Password" className="min-w-50  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 sm:w-70 md:w-100"/>
                            
                            </div>
                            </div>
                        </div>
                        
                        <div className="pt-6 flex justify-center">
                            <button className="min-w-50 max-w-100 h-11 border border-black cursor-pointer rounded-lg bg-violet-600 text-white sm:w-70 md:w-100" >
                                {sign===true? "Create Account" : "Signup"}
                            </button>
                        </div>
                       
                       <div className="flex justify-center items-center min-w-50 max-w-100 pt-2">
                            <div className="pr-2">{sign===true? "Dont have an account?" : "Already have an account?"}</div>
                            <div className="  font-bold text-lg text-violet-600 cursor-pointer " onClick={Toggle} >
                                {sign==true? (<Link to={"/signup"}>Signup</Link>) :(<Link to={"/signin"}>Signin</Link>)}</div>
                                
                            
                            
                       </div>
                       
                    </div>
            </div>
       
        </div>
    </div>
}
