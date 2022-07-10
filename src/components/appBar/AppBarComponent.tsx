import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Switch as ThemeSwitch,
} from "@mui/material";
import MenUIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useTheme } from "@emotion/react";

interface AppBarComponentProps {
  handleDrawerToggle: () => void;
  onThemeChange: () => void;
  isDarkMode: boolean;
  isDrawerOpen: boolean;
}
const AppBarComponent: React.FC<AppBarComponentProps> = ({
  handleDrawerToggle,
  onThemeChange,
  isDarkMode,
  isDrawerOpen,
}): JSX.Element => {
  const theme = useTheme();
  return (
    <div>
      <AppBar position="static" variant="elevation" className="appbar-wrapper">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}
          >
            <MenUIcon />
          </IconButton>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            Traiding App
          </Typography>
          {isDarkMode ? <DarkModeIcon /> : null}
          <ThemeSwitch size="small" onChange={onThemeChange} color="default" />
          {!isDarkMode ? <DarkModeIcon /> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarComponent;
