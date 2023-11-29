import {Typography} from "@mui/material";
import PropTypes from "prop-types";
import type {ReactNode} from "react";

export type NavbarProps = {
  left?: ReactNode,
  right?: ReactNode,
  title: string
};

const Navbar = ({left, right, title}: NavbarProps) => {
  return (
    <header className="bg-gray-700 static">
      <nav className="grid grid-cols-3">
        <div className="flex flex-col justify-self-start">
          {left}
        </div>
        <Typography className="py-3 text-white justify-self-center" component="h1" variant="h6">{title}</Typography>
        <div className="flex flex-col justify-self-end">
          {right}
        </div>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  left: PropTypes.object,
  right: PropTypes.object,
  title: PropTypes.string.isRequired
};

export {
  Navbar
};
