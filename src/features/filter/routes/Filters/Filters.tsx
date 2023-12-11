import {Layout} from "@/components/Layout";
import {NavbarLinkIcon} from "@/components/Navbar";
import {useFiltersStore} from "@/features/filter/stores/filters";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

const Filters = () => {
  const {filters} = useFiltersStore();

  const generateListItems = () => {
    return filters.map((filter) => {
      return (
        <ListItem disablePadding divider={true} key={filter.id}>
          <ListItemButton>
            <ListItemIcon>
              <span className="fa fa-globe"/>
            </ListItemIcon>
            <ListItemText>{filter.name}</ListItemText>
          </ListItemButton>
        </ListItem>
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
