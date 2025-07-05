import { Button } from "./Button"

interface ButtonTextProps{
    text: String;
}
    
export function FormGeneric({text}:ButtonTextProps) {
    return <div className=" flex justify-center items-center h-screen w-screen bg-violet-300 ">

        
        <div className="h-100 border-2 rounded-2xl w-200 grid grid-cols-2  bg-slate-300">
                    <div className="border-r  flex justify-center items-center">
                        
                            <div className=" flex justify-center">
                                <div>
                                <div>Hello guys</div>
                                <div>please subscribe</div>
                                <div className="p-2">
                                    <Button variant="secondary" title={"Sign Up"}/>
                                       </div>
                                    </div>
                            </div>
                    </div>
                    <div className="   flex justify-center items-center">
                        <div>

                            <div className="pt-1">
                                <Input placeholder={"username"}/>
                            </div> 
                            <div className="pt-1">
                                <Input placeholder={"password"}/>
                            </div>
                            <div className="pt-2 flex justify-center">
                                <Button variant="secondary" title={text}/>
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