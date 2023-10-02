import React from "react";
import {
  Container,
  MenuItem,
  IconButton,
  Menu,
  Typography,
  Tooltip,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import InputIcon from "@mui/icons-material/Input";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Box,
} from "@mui/material";

import Logo from "../../Logo";

const pages = ["Về Anfin", "Sản phẩm", "Đọc & Học", "Giao dịch Ngay"];
const settings = ["Về Anfin", "Sản phẩm", "Đọc & Học", "Giao dịch Ngay"];

export default function MenuMobile() {
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
        display: { xs: "flex", sm: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
      maxWidth={false}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "650px",
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>

        <Logo />

        <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
          <Tooltip title="Open setting">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <InputIcon />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </Container>
  );
}
