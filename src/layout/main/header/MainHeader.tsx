import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import MobileHeader from "./menu-mobile/MobileHeader";
import DesktopHeader from "./menu-desktop/DesktopHeader";

function ResponsiveAppBar() {
  

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#1976d2'}}>
      <Container maxWidth="1200px" minHeight="64px" fontSize="14px">
        <Toolbar disableGutters>
          <DesktopHeader />
          <MobileHeader />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
