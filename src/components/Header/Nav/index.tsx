import { Link } from "react-router-dom";
import { navConfig } from "./navConfig";
import "./index.scss";

export default function Nav() {
  return (
    <nav role="navigation">
      {navConfig.map((navItem) => (
        <Link key={navItem.path} to={navItem.path}>
          {navItem.label}
        </Link>
      ))}
    </nav>
  );
}
