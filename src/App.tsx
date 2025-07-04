import { DashBoard } from "./Components/pages/DashBoard"
import { Signin } from "./Components/pages/Signin"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {

 
  return<BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signin/>}/>
    <Route path="/dashboard" element={<DashBoard/>}/>
  </Routes>

  </BrowserRouter>
 
}


export default App
