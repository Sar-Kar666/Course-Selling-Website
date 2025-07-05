import { Button } from "./Button";
interface ButtonTextProps{
    text: String;
    description: String;
    redirect: String;
}




export function Cred({text,description,redirect}:ButtonTextProps){
    return <div>
        <div className="   flex justify-center items-center  ">
                                <div>
        
                                    <div className="pt-1 ">
                                        <Input placeholder={"username"}/>
                                    </div> 
                                    <div className="pt-1">
                                        <Input placeholder={"password"}/>
                                    </div>
                                    <div className="pt-6 flex justify-center">
                                        <Button variant="secondary" title={text}/>
                                    </div>
                                    <div className="text-white flex justify-center pt-3">
                                     <div className="pr-2">{ description}</div>   
                                       <div className=" underline"> {redirect}
                                      </div>
                                      
                                    </div>
                                    </div>
                                        
                            </div>
    </div>
}
const Input = ({placeholder}:{placeholder:string}) => {
    return <div >
        <input placeholder={placeholder} className="p-2 border-1 rounded-xl w-100 bg-amber-100" ></input>
        
    </div>

}