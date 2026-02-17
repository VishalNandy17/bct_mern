// import Home from './component/Home'
import About from './component/About'
import Contact from './component/contact'
import Services from './component/services'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './component/Home'


function Vishal() {
  return (
    <BrowserRouter>
    <Link to="/home">go to the home page</Link>
    <Link to="/about">go to the about page</Link>
    <Link to="/services">go to the services page</Link>
    <Link to="/contact">go to the contact page</Link>
    
    {/* <div>
      
      <h1>Hello React from {name}</h1>
      <Home />
      <About />
      <Contact />
      <Services />
      
    </div> */}
    <Routes>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Vishal