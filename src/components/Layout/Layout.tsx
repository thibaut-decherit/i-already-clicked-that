import {Navbar} from "@/components/Navbar";
import {setDocumentTitle} from "@/utils/documentTitle";
import PropTypes from "prop-types";
import type {ReactNode} from "react";

const Layout = (
  {
    children,
    navbarLeft,
    navbarRight,
    title
  }: {
    children: ReactNode;
    navbarLeft?: ReactNode;
    navbarRight?: ReactNode;
    title: string;
  }
) => {
  setDocumentTitle(title);

  return (
    <>
      <Navbar left={navbarLeft} right={navbarRight} title={title}/>
      <div className="container mx-auto my-10 flex flex-col justify-center">
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  navbarLeft: PropTypes.object,
  navbarRight: PropTypes.object,
  title: PropTypes.string.isRequired
};

export {
  Layout
};
