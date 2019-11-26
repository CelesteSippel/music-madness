import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <section>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </section>
        <section>
          <Link to="/Pearl-Jam" className="nav-link">
            Pearl Jam
          </Link>
        </section>
        <section>
          <Link to="/Red-Hot-Chili-Peppers" className="nav-link">
            Red Hot Chili Peppers
          </Link>
        </section>
        <section>
          <Link to="/Everclear" className="nav-link">
            Everclear
          </Link>
        </section>
      </nav>
    </div>
  )
}

export default NavBar
