
import '../../App.css'

import { Courses } from '../Courses'

import { AuroraBackground } from '../ui/AuroraBackground'
import { HeroText } from '../HeroText'




export function DashBoard() {

 
  return <div className='bg-gray-200 h-full top-0 left-0'>
    

    <div className=' pr-5 pl-5 sm:pr-40 sm:pl-40'>
      <div className='pt-6  '>
      
        <AuroraBackground children={<HeroText/>}  className='rounded-md h-80 w-full  sm:min-w-100 sm:h-150'/>
      </div>

      
     
     
      <div>
     <Courses/>
      </div>
      
    </div>
 
  </div>
  
}



