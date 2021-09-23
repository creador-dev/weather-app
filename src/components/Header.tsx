import { NavLink } from "react-router-dom";
import GlobeIcon from "../icons/GlobeIcon";
import HomeIcon from "../icons/HomeIcon";

function Header(): JSX.Element {
  return (
    <header className="fixed top-0 bottom-0 bg-white shadow">
      <NavLink
        className="block p-5 text-xs hover:bg-yellow-100 mt-8 border-b"
        activeClassName="active"
        exact
        to="/"
      >
        <HomeIcon />
      </NavLink>
      <NavLink
        className="block p-5 text-xs hover:bg-yellow-100 border-b"
        activeClassName="active"
        to="/cities"
      >
        <GlobeIcon />
      </NavLink>
    </header>
  );
}

export default Header;
