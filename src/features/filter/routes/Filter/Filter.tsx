import {Layout} from "@/components/Layout";
import {NavbarLinkIcon} from "@/components/Navbar";
import type {Inputs} from "@/features/filter/components/FilterNewEditForm";
import {FilterNewEditForm} from "@/features/filter/components/FilterNewEditForm";
import {useFiltersStore} from "@/features/filter/stores/filters";
import type {Filter as FilterType} from "@/features/filter/types";
import {SubmitHandler} from "react-hook-form";
import type {Location} from "react-router-dom";
import {useLocation, useNavigate} from "react-router-dom";

const Filter = () => {
  const locationState: Location<Partial<{ filter: FilterType }>> = useLocation();
  const filter = locationState.state?.filter;

  const pageTitle = filter
    ? `Edit filter ${filter.name}`
    : 'Add a new filter';

  const {addFilter, updateFilter} = useFiltersStore();
  const navigate = useNavigate();
  const handleSubmit: SubmitHandler<Inputs> = data => {
    if (filter) {
      updateFilter(filter.id, data)
    } else {
      addFilter(data);
    }

    navigate('/');
  }

  return (
    <Layout
      navbarLeft={<NavbarLinkIcon ariaLabel="Back to filters list" iconClass="fa-solid fa-arrow-left" to={'/'}/>}
      title={pageTitle}
    >
      <FilterNewEditForm filter={filter} onSubmit={handleSubmit}/>
    </Layout>
  );
}

export {
  Filter
};
