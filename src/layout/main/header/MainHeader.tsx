import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import MenuMobile from "./menu-mobile/MenuMobile";
import MenuDesktop from "./menu-desktop/MenuDesktop";

function ResponsiveAppBar() {
  

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#1976d2'}}>
      <Container maxWidth="1200px" minHeight="64px" fontSize="14px">
        <Toolbar disableGutters>
          <MenuDesktop />
          <MenuMobile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
