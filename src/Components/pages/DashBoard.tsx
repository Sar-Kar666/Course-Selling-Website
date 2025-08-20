
import '../../App.css'

import { Courses } from '../Courses'

import { AuroraBackground } from '../ui/AuroraBackground'
import { HeroText } from '../HeroText'
import { ExpandableCardDemo } from '../ui/ExpandableCardDemo'
import { DirectionCards } from '../DirectionCards'
import { TypewriterEffect } from '../ui/TypewriterEffect'




export function DashBoard() {

 
  return <div className='bg-gray-200 h-full top-0 left-0'>
    

    <div className=' pr-5 pl-5 sm:pr-40 sm:pl-40'>
      <div className='pt-6  '>
      
        <AuroraBackground children={<HeroText/>}  className='rounded-md h-80 w-full  sm:min-w-100 sm:h-150'/>
      </div>
      <div className='flex justify-center pt-30 pb-10'>
        <div className=''>
       <TypewriterEffect  className="text-2xl text-blue-600"
        cursorClassName="bg-black w-[2px] h-6 animate-blink"  words={[
    { text: "Next.js", className:" text-red-500" },
    { text: "Tailwind", className: "text-white font-bold" },
    { text: "TypeScript", className: "text-white font-bold" },
  ]}/>
        </div>
      </div>
      <div className='pt-10'>
        <DirectionCards/>
      </div>
      <div className='pt-10'>
         <ExpandableCardDemo/>
      </div>
     
      <div>
     <Courses/>
      </div>
      
    </div>
 
  </div>
  
}



