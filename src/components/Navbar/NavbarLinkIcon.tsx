import {NavbarButton} from "@/components/Navbar/NavbarButton";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const NavbarLinkIcon = (
  {
    ariaLabel,
    iconClass,
    to
  }: {
    ariaLabel: string,
    iconClass: string,
    to: string
  }
) => {
  return (
    <Link aria-label={ariaLabel} className="h-full" title={ariaLabel} to={to}>
      <NavbarButton ariaLabel={ariaLabel}>
        <span className={`${iconClass} text-xl font-extrabold`}/>
      </NavbarButton>
    </Link>
  );
}

NavbarLinkIcon.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export {
  NavbarLinkIcon
};
