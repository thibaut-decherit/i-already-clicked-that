import {Navbar} from "@/components/Navbar";
import {setDocumentTitle} from "@/utils/documentTitle";
import PropTypes from "prop-types";
import type {ReactNode} from "react";

const Layout = (
  {
    children,
    title
  }: {
    children: ReactNode;
    title: string;
  }
) => {
  setDocumentTitle(title);

  return (
    <>
      <Navbar title={title}/>
      <div className="container mx-auto flex flex-col justify-center">
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export {
  Layout
};
