import { NavLink, Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Root() {
  return (<>
    <header>
      <h2><Link to="/">W42</Link></h2>
      <ul>
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/groups">Groups</NavLink>
        </li>
      </ul>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <em>Made with React & react-router</em>
    </footer>
  </>);
}
