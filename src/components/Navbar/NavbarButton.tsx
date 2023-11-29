import {Button} from "@mui/material";
import PropTypes from "prop-types";
import type {ReactNode} from "react";

const NavbarButton = (
  {
    ariaLabel,
    children
  }: {
    ariaLabel?: string,
    children: ReactNode,
  }
) => {
  return (
    <Button
      aria-label={ariaLabel}
      color="gray-700"
      style={{borderRadius: 0, boxShadow: 'none', height: '100%'}}
      variant="contained"
    >
      {children}
    </Button>
  );
}

NavbarButton.propTypes = {
  arialLabel: PropTypes.string,
  children: PropTypes.object.isRequired
};

export {
  NavbarButton
};
