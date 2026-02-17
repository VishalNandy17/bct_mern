import Home from './component/Home'
import About from './component/About'
import Contact from './component/contact'
import Services from './component/services'

function Vishal() {
  let name = "Vishal"
  return (
    <div>
      <h1>Hello React from {name}</h1>
      <Home />
      <About />
      <Contact />
      <Services />
    </div>
  )
}

export default Vishal