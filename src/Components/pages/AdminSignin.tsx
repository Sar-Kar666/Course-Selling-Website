import axios from "axios";
import { useRef } from "react";


export function AdminSignin(){

    const signinpasswordRef = useRef<HTMLInputElement>(null);;
    const signinemailRef = useRef<HTMLInputElement>(null);;

     function signin() {
        const email = signinemailRef.current?.value;
        const password = signinpasswordRef.current?.value;

        axios.post("https://csa-backend-2.onrender.com/admin/signin", {
            email,
            password
        }).then((Response) => {
            // @ts-ignore
            const token = Response.data.token;
            

            // ✅ Store token in localStorage
            localStorage.setItem("token", token);
            alert(Response.data)
        })
       

        



    }


    return <div className="h-screen w-full flex justify-center items-center bg-gray-200">
        <div className=" max-h-120 border bg-gray-100 border-gray-200  shadow-2xl min-w-50  flex justify-center p-6 rounded-2xl sm:w-100 md:w-130">
            <div>

                <div className="text-3xl text-purple-600 font-bold text-center">Signin</div>
                <div className="pt-10 ">


                    <div className="pb-5 min-w-50 sm:w-100 flex justify-center" >
                        <div>
                            <div  className="">Email</div>
                            <div>
                                <input ref={signinemailRef}  type="email" placeholder="you@example.com" className="min-w-50  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 sm:w-70  md:w-100" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>


                            <div>
                                <div>Password</div>
                            </div>
                            <div>

                                <input ref={signinpasswordRef} type="password" placeholder="Password" className="min-w-50  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 sm:w-70 md:w-100" />

                            </div>
                        </div>
                    </div>

                    <div className="pt-6 flex justify-center">
                     <button onClick={signin} className="min-w-50 max-w-100 h-11 border border-black cursor-pointer rounded-lg bg-violet-600 text-white sm:w-70 md:w-100" >
                           Signin

                        </button>
                    </div>

                    

                </div>
            </div>

        </div>
    </div>
}