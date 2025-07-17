import { DashBoard } from "./Components/pages/DashBoard"
import { Signin } from "./Components/pages/Signin"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { AllCourses } from "./Components/pages/AllCourses"
import { Navbar } from "./Components/Navbar"
import { About } from "./Components/pages/About"
import { Contact } from "./Components/pages/Contact"
import { CourseDetails } from "./Components/pages/CourseDetails"


function App() {

 
  return<BrowserRouter>
  <div className="bg-gray-100 h-full top-0 left-0  sticky z-50 ">
    <Navbar />
  </div>
   
  <Routes>

    <Route path="/signup" element={<Signin/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/" element={<DashBoard/>}/>
    <Route path="/courses" element={<AllCourses/>}/>
    <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
      <Route path="/course/details" element={<CourseDetails/>}/>
  </Routes>

  </BrowserRouter>
 
}


export default App
