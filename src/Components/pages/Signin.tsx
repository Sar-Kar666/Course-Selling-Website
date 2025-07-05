import { Cred } from "../Cred";
import { LampContainer } from "../ui/LampContainer";



export function Signin() {
    return <div>
        <LampContainer children={<Cred text={"Signin"}  description={"Not a User?"} redirect={"Sign Up"} />}/>
       
    </div>
}
