
import { Link, NavLink } from 'react-router'
import './header.css'

function Header() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profiles">Profiles</NavLink>
            <NavLink to="/notifications">Notifications</NavLink>
            <NavLink to="/messages">Messages</NavLink>
        </nav>

    )
}

export default Header