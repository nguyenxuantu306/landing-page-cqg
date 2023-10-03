import React from "react";
import {
  Container,
  MenuItem,
  IconButton,
  Menu,
  Typography,
  Tooltip,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../../Logo";
import { MobileMenu } from "./MobileMenu";

export default function MobileHeader() {
  return (
    <Container
      sx={{
        display: { xs: "flex", sm: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "space-between",
  
      }}
      maxWidth={false}
    >
        <MobileMenu />
        <Logo />
        <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
          <IconButton sx={{ p: 0 }}>
            <LoginIcon />
          </IconButton>
      </Box>
    </Container>
  );
}
