
import './App.css'
import { Button } from './Components/Button'
import { Courses } from './Components/Courses'
import { HeroSection } from './Components/HeroSection'
import { Navbar } from './Components/Navbar'
import { Text } from './Components/Text'
import { CourseIcon } from './icons/CourseIcon'
import { CourseIconFourth } from './icons/CourseIconFourth'
import { CourseIconSecond } from './icons/CourseIconSecond'
import { CourseIconThird } from './icons/CourseIconThird'

function App() {


  return <div className='bg-gray-200 '>

  <Navbar />
    
    
    <div className=' pl-100 pr-100 '>
      <HeroSection />
      <Text />
      <div className='flex justify-evenly'>
        <Courses image={<CourseIcon />} title={"Solana Bootcamp"} price={1299} details={"by SOLANA"} />
        <Courses image={<CourseIconSecond />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />

      </div>
      <div className='flex justify-evenly'>
        <Courses image={<CourseIconThird />} title={"Solana Bootcamp"} price={1299} details={"by SOLANA"} />
        <Courses image={<CourseIconFourth />} title={"Solana Bootcamp"} price={1299} details={"by SOLANA"} />

      </div>
      <div className='flex justify-evenly'>
        <Courses image={<CourseIconThird />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
      </div>
      <div className='pt-10 pb-10 flex justify-center '>
        <Button variant={"primary"} title={"Load More..."}/>
      </div>
    </div>
  </div>
}

export default App
