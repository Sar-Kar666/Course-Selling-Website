

import { FlipWords } from "./ui/flip-words";

 const wordList = ['Screw the Network', 'Fork It', 'Big Daddy Of Coding', 'Let Him COOK'];

export function HeroText(){
return <div><FlipWords
          words={wordList}
          duration={1000}
          className="font-extrabold text-sm text-white sm:text-xl  "
        /> 

        
       
        </div>
}