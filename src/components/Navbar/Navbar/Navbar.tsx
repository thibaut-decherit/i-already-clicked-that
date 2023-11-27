import {Typography} from "@mui/material";
import PropTypes from "prop-types";

export type NavbarProps = {
  title: string
};

const Navbar = ({title}: NavbarProps) => {
  return (
    <header className="bg-gray-700 static">
      <nav className="flex justify-center">
        <Typography className="py-3 text-white" component="h1" variant="h6">{title}</Typography>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export {
  Navbar
};
