import { Link, NavLink, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Link to="/">
          <h1 className="logo">Hedi Series</h1>
        </Link>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/categories">Catégories</NavLink>
          </li>
          <li>
            <NavLink to="/programs">Séries</NavLink>
          </li>
        </ul>
      </nav>

      <main className="text-box">
        <Outlet />
      </main>

      <footer>
        Développé par &nbsp;
        <p>Hedi Number 1</p>
      </footer>
    </>
  );
}

export default App;
