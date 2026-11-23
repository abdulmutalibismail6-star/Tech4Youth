import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <NavLink to="/" className="logo" style={{ textDecoration: "none" }}>
        Tech <span className="logo-accent">4</span> Youth
      </NavLink>

      <nav className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/Courses"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Courses
        </NavLink>
        <NavLink
          to="/Login"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Login
        </NavLink>
        <NavLink
          to="/Register"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Register
        </NavLink>
      </nav>
    </header>
  );
}