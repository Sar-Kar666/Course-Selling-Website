import { DashBoard } from "./Components/pages/DashBoard"
import { Signup } from "./Components/pages/Signup"
import { Signin } from "./Components/pages/Signin"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {

 
  return<BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/" element={<DashBoard/>}/>
  </Routes>

  </BrowserRouter>
 
}


export default App
