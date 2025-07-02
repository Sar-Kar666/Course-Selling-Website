import { Button } from "./Components/Button";
import { FlipWords } from "./Components/ui/flip-words";

 const wordList = ['Learn How to be the God', 'Fork It', 'Big Daddy Of Programming', 'Learn To Be A Solana Pro'];

export function HeroText(){
return <div><FlipWords
          words={wordList}
          duration={1000}
          className="font-extrabold text-5xl !text-white"
        /> 
        <div className="flex justify-center pt-20 " >
        <Button variant="primary" title={"hello"}/>
         </div>
        </div>
}