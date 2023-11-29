import {Layout} from "@/components/Layout";
import {NavbarLinkIcon} from "@/components/Navbar";

const Filters = () => {
  return (
    <Layout
      navbarRight={<NavbarLinkIcon ariaLabel="Add filter" iconClass="fa-plus" to="/filter/new"/>}
      title="Filters"
    >
      <span>TODO</span>
    </Layout>
  );
}

export {
  Filters
};
