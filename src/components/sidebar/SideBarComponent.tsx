import React, { useState } from "react";
import { Drawer, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface SideBarComponentProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const LogoStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));
const DRAWER_WIDTH = 240;

const SideBarComponent: React.FC<SideBarComponentProps> = ({
  
  isOpen,
  handleDrawerToggle,
}): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MUIDrawer=paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <LogoStyled>
            <Typography variant="subtitle2" component="div" align="left">
              Repo Logo
            </Typography>
          </LogoStyled>
          <IconButton onClick={handleDrawerToggle}>
            {/* {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />} */}
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
      </Drawer>
    </>
  );
};

export default SideBarComponent;
