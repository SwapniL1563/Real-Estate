import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Properties from "./pages/Properties"
import Navbar from "./components/Navbar"
function App() {
  return (
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/properties" element={<Properties/>} />
      </Routes>
     </Router>
  )
}

export default App
