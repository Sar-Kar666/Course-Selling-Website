import { Button } from "../Button"

export function Signin() {
    return <div className=" flex justify-center items-center h-screen w-screen ">
        <div className="h-100 border-2 rounded-2xl w-200 grid grid-cols-2 ">
                    <div className="border-r shadow-2xl  flex justify-center items-center">
                            <div className="">
                                <div>Hello guys</div>
                                <div>please subscribe</div>
                            </div>
                    </div>
                    <div className=" shadow-2xl  flex justify-center items-center">
                        <div>

                            <div className="pt-1">
                                <Input placeholder={"username"}/>
                            </div>
                            <div className="pt-1">
                                <Input placeholder={"password"}/>
                            </div>
                            <div className="pt-2 flex justify-center">
                                <Button variant="secondary" title={"Login"}/>
                            </div>
                            </div>
                                
                    </div>
        </div>
    </div>
}

const Input = ({placeholder}:{placeholder:string}) => {
    return <div >
        <input placeholder={placeholder} className="p-2 border-1 rounded-xl " ></input>
        
    </div>

}