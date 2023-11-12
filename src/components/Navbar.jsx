import React from "react";
import { Link } from "react-router-dom"; // Asumiendo que estás utilizando React Router
import "../assets/Navbar.css"; // Ajusta la ruta según tu estructura de archivos

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="navbar-title">BugCloseup</h1>
			<div className="navbar-links">
				<Link to="/" className="navbar-link">
					Home
				</Link>
				<Link to="/favoritos" className="navbar-link">
					Favoritos
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
