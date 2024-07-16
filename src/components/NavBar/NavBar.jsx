// npm modules
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <div>
          <h2>Welcome</h2>
          <h2><NavLink to="/">Landing</NavLink></h2>
          <h2><NavLink to="/sneakers">Sneakers</NavLink></h2>
          <h2><NavLink to="/sneakers/new">Add Sneaker</NavLink></h2>
        </div>
    </nav>
  )
}

export default NavBar
