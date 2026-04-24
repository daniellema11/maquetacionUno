import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<header className="site-header">
			<div className="container nav-wrap">
				<div className="brand">ZENITH BONSAI</div>
				<nav className="nav-links">
					<NavLink className="nav-link" to="/pages/philosophy">
						Filosofía
					</NavLink>
					<NavLink className="nav-link" to="/pages/gallery">Galería</NavLink>
					<NavLink className="nav-link" to="/pages/booking">Reservas</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default NavBar
