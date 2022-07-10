import React, { useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import AppBarComponent from "./components/appBar/AppBarComponent";
import SideBarComponent from "./components/sidebar/SideBarComponent";

const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggle, setSideBarToggle] = useState(false);

  const handleDrawerToggle = React.useCallback(() => {
    setSideBarToggle(!sideBarToggle);
  }, [sideBarToggle]);

  const onThemeChange = React.useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }, [themeMode]);

  const theme = createTheme({
    direction: "ltr",
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        onThemeChange={onThemeChange}
        handleDrawerToggle={handleDrawerToggle}
        isDarkMode={themeMode === "dark"}
        isDrawerOpen={sideBarToggle}
      />
      <SideBarComponent
        isOpen={sideBarToggle}
        handleDrawerToggle={handleDrawerToggle}
      />
    </ThemeProvider>
  );
};

export default App;
