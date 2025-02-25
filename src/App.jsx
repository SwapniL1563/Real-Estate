import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Properties from "./pages/Properties"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
function App() {
  return (
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/properties" element={<Properties/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
     </Router>
  )
}

export default App
