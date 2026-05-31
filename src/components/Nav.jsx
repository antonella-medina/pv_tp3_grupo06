import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/perfil">Perfil</Link></li>
      <li><Link to="/proyectos">Proyectos</Link></li>
    </ul>
  </nav>
);

export default Nav;
