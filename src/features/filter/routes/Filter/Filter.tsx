import {Layout} from "@/components/Layout";
import {NavbarLinkIcon} from "@/components/Navbar";
import {FilterNewForm} from "@/features/filter/components/FilterNewForm";
import {useParams} from "react-router-dom";

const Filter = () => {
  const {id} = useParams();

  if (typeof id !== 'string' || (id.match(/\d+/) === null && id !== 'new')) {
    throw Error('id type or content is not supported.');
  }

  const pageTitle = id.match(/\d+/) !== null
    ? `Edit filter`
    : 'Add a new filter';

  return (
    <Layout
      navbarLeft={<NavbarLinkIcon ariaLabel="Back to filters list" iconClass="fa-solid fa-arrow-left" to={'/'}/>}
      title={pageTitle}
    >
      <FilterNewForm/>
    </Layout>
  );
}

export {
  Filter
};
