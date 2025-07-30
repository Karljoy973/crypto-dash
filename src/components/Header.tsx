import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <nav className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default Header;
