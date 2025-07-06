import { Cred } from "../Cred";
import { LampContainer } from "../ui/LampContainer";



export function Signup() {
    return <div >
        <div>

        

        <LampContainer children={<Cred text={"Sign Up"} description={"Already a User?"} redirect={"Sign in"} />}/>
        </div>
    </div>
}

