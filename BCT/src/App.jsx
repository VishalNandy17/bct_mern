import About from './component/About'
import Contact from './component/contact'
import Services from './component/services'
import Developer from './component/Developer'
import MlDemo from './component/MlDemo'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './component/Home'

function Vishal() {
  return (
    <BrowserRouter>
      <div style={{ padding: '1rem' }}>
        <h1>Vishal&apos;s React & ML Site</h1>
        <nav
          style={{
            display: 'flex',
            gap: '1rem',
            margin: '1rem 0',
            flexWrap: 'wrap',
          }}
        >
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/developer">Developer</Link>
          <Link to="/ml">ML Demo</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/ml" element={<MlDemo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Vishal