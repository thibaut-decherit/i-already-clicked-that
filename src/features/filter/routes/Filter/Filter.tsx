import {Layout} from "@/components/Layout";
import {NavbarLinkIcon} from "@/components/Navbar";
import {FilterNewEditForm} from "@/features/filter/components/FilterNewEditForm";
import type {Filter as FilterType} from "@/features/filter/types";
import type {Location} from "react-router-dom";
import {useLocation} from "react-router-dom";

const Filter = () => {
  const locationState: Location<Partial<{ filter: FilterType }>> = useLocation();
  const filter = locationState.state?.filter;

  const pageTitle = filter
    ? `Edit filter ${filter.name}`
    : 'Add a new filter';

  return (
    <Layout
      navbarLeft={<NavbarLinkIcon ariaLabel="Back to filters list" iconClass="fa-solid fa-arrow-left" to={'/'}/>}
      title={pageTitle}
    >
      <FilterNewEditForm filter={filter}/>
    </Layout>
  );
}

export {
  Filter
};
