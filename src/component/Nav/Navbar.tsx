import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = [
    { label: "Git image", path: "/" },
    { label: "Product card", path: "/product_card" },
    { label: "List comment", path: "/list_comment" },
  ];

  return (
    <nav className="navbar">
      {menuItems.map((item, index) => (
        <Link key={index} to={item.path} className="nav-item">
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
