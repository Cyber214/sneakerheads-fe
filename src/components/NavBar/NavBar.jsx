import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <div>
          <h2 className="nav-title">Welcome</h2>
          <h2 className="nav-link">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Landing
            </NavLink>
          </h2>
          <h2 className="nav-link">
            <NavLink to="/sneakers" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Sneakers
            </NavLink>
          </h2>
          <h2 className="nav-link">
            <NavLink to="/sneakers/new" className={({ isActive }) => (isActive ? 'active' : '')}>
              Create
            </NavLink>
          </h2>
        </div>
    </nav>
  )
}

export default NavBar
