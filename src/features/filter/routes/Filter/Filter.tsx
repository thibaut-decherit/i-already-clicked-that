import {Layout} from "@/components/Layout";
import {NavbarLinkIcon} from "@/components/Navbar";
import {FilterNewEditForm} from "@/features/filter/components/FilterNewEditForm";
import {useFiltersStore} from "@/features/filter/stores/filters";
import _ from "lodash";
import {useParams} from "react-router-dom";

const Filter = () => {
  const {id} = useParams();

  if (typeof id !== 'string' || (id.match(/\d+/) === null && id !== 'new')) {
    throw Error('id type or content is not supported.');
  }

  let filter;

  const {filters} = useFiltersStore();
  if (id !== 'new') {
    filter = _.find(filters, (filter) => {
      return filter.id === id;
    });

    if (filter === undefined) {
      throw Error('Filter not found.');
    }
  }

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
