import { Link, useLocation } from "react-router-dom";

export interface NavbarElementProps {
  title: string;
  path: string;
}

const NavbarElement: React.FC<NavbarElementProps> = (props) => {
  const location = useLocation();
  return (
    <Link
      to={props.path}
      className={
        location.pathname === props.path
          ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      }
    >
      {props.title}
    </Link>
  );
};

export default NavbarElement;
