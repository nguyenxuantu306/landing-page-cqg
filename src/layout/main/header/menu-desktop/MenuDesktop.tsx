import React from "react"
import { AppBar, Container, Toolbar, Button, Box } from "@mui/material";

import Logo from "../../Logo"
import MenuLoginRegister from "../menu-login-register/MenuLoginRegister";

const pages = ["Về Anfin", "Sản phẩm", "Đọc & Học", "Giao dịch Ngay"];
const settings = ["Về Anfin", "Sản phẩm", "Đọc & Học", "Giao dịch Ngay"];


export default function MenuDesktop() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };
  return (
      <Container 
      sx={{
        display: {xs: "none", sm: "none", md: "flex"},
        alignItems: "center",
        justifyContent: "space-between",
      }}
      maxWidth="lg">
          <Logo/>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex"}, justifyContent: "center"  }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "flex" , marginLeft: '16px' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <MenuLoginRegister />
          </Container>
  )
}
