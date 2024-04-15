import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FilterList from "@mui/icons-material/FilterList";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HeaderProps } from "./HeaderProps";
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check';

export default function HeaderFeatureList(props: HeaderProps) {

  const { openMenu, checkedList, onOpenMenu, onCloseMenu, onSelectItemMenu } = props;
  const menuItems = ["md", "ml", "ms", "mw", "me", "mi", "mb", "mlg"];
  const handleItemClick = (item: string) => {
    onSelectItemMenu(item);
  };

  return (
    <div>
      <AppBar position="static" style={{ width: "100%" }}>
        <Toolbar variant="dense" sx={{ backgroundColor: "#FF7F50" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onOpenMenu}
            sx={{ mr: 2 }}
          >
            <FilterList />
          </IconButton>
          <Menu
            id="basic-menu"
            open={openMenu}
            onClose={onCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item} onClick={() => handleItemClick(item)}>
                <Typography variant="inherit">{item}</Typography>
                {checkedList.includes(item) && (
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                )}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" component="div">
            Features
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
