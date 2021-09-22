import { Link } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <header className="fixed h-screen bg-white shadow">
      <Link className="block p-5 text-xs mt-5" to="/">
        Home
      </Link>
      <Link className="block p-5 text-xs" to="/cities">
        Cities
      </Link>
    </header>
  );
}

export default Header;
