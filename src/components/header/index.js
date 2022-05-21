import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
        <div className="logo">Logo do Blog</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};
export default Header;
