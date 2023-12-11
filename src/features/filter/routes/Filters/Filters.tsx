import {Layout} from "@/components/Layout";
import {NavbarLinkIcon} from "@/components/Navbar";
import {useFiltersStore} from "@/features/filter/stores/filters";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import _ from "lodash";

const Filters = () => {
  const {filters} = useFiltersStore();
  const sortedFilters = _.sortBy(filters, (filter) => {
    return filter.name;
  });

  const generateListItems = () => {
    return sortedFilters.map((filter) => {
      return (
        <Link key={filter.id} to={`/filter/${filter.id}`}>
          <ListItem disablePadding divider={true}>
            <ListItemButton>
              <ListItemIcon>
                <span className="fa fa-globe"/>
              </ListItemIcon>
              <ListItemText>{filter.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      );
    });
  };

  return (
    <Layout
      navbarRight={<NavbarLinkIcon ariaLabel="Add filter" iconClass="fa-plus" to="/filter/new"/>}
      title="Filters"
    >
      <List>
        {generateListItems()}
      </List>
    </Layout>
  );
}

export {
  Filters
};
