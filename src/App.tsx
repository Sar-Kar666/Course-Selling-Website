
import './App.css'
import { Button } from './Components/Button'
import { Courses } from './Components/Courses'
import { Navbar } from './Components/Navbar'
import { Text } from './Components/Text'
import { AuroraBackground } from './Components/ui/AuroraBackground'
import { HeroText } from './HeroText'
import { CourseIcon } from './icons/CourseIcon'
import { CourseIconSecond } from './icons/CourseIconSecond'
import { CourseIconThird } from './icons/CourseIconThird'

function App() {

 
  return <div className='bg-gray-100'>
    

    <Navbar />
    
    <div className=' pl-40 pr-40 '>
      <div className='pt-6  '>
      
        <AuroraBackground children={<HeroText/>}  className='rounded-md h-150 '/>
      </div>
      
      <Text />
      <div className='grid   grid-cols-3 gap-10 pt-6'>
       
        <Courses image={<CourseIcon />} title={"Solana Bootcamp"} price={1299} details={"by SOLANA"} details={"habfhabfhaf"} />

        <Courses image={<CourseIconSecond />} title={"Solana "} price={1299} details={"by SOLANA"} />

         <Courses image={<CourseIconThird />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />

        <Courses image={<CourseIconThird />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />



      </div>
      
      <div className='flex justify-evenly'>
        
        
      </div>
      <div className='flex justify-evenly'>
      </div>
      <div className='pt-10 pb-10 flex justify-center '>
        <Button variant={"primary"} title={"Load More..."} />
      </div>

    </div>


  </div>
}


export default App
