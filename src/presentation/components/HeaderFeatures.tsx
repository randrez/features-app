import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FilterList from "@mui/icons-material/FilterList";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HeaderProps } from "./HeaderProps";
import ListItemIcon from "@mui/material/ListItemIcon";
import Check from "@mui/icons-material/Check";
import '../../styles/feature.css'

export default function HeaderFeatures(props: HeaderProps) {
  const { checkedList, onSelectItemMenu } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => { 
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const menuItems = ["md", "ml", "ms", "mw", "me", "mi", "mb", "mlg"];

  const handleItemClick = (item: string) => {
    onSelectItemMenu(item);
    setOpenMenu(false)
  };

  return (
    <AppBar position="static" className="app_bar">
      <Toolbar variant="dense" className="toolbar">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenMenu}
          sx={{ mr: 2 }}
        >
          <FilterList />
        </IconButton>
        <Menu
          id="basic-menu"
          open={openMenu}
          onClose={handleCloseMenu}
          anchorEl={anchorEl}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
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
  );
}
