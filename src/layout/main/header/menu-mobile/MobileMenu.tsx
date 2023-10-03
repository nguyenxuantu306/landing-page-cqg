import { React, useState } from "react";
import {
  Box,
  Drawer,
  Tooltip,
  Stack,
  List,
  useTheme,
  styled,
  IconButton,
  Button,
} from "@mui/material";

import { Close, Menu } from "@mui/icons-material";

import { MobileMenuItem } from "./MobileMenuItem";
import { navConfigNew } from "../appbar-menu";

export const MAIN_DESKTOP_HEADER_HEIGHT = 64;

const IconButtonHamburger = styled(IconButton)({
  padding: 0,
});

const ButtonRegister = styled(Button)({
  background: "#E1F4FE",
  borderRadius: "8px",
  color: "#0AA5FF",
  padding: "12px 50px",
  textTransform: "inherit",
  width: "100%",
  marginRight: "6px",
  textAlign: "center",
  "&:focus, &:active, &:hover": {
    background: "#E1F4FE",
    color: "#0AA5FF",
  },
});

const ButtonLogin = styled(Button)({
  background: "#0AA5FF",
  borderRadius: "8px",
  color: "#fff",
  padding: "12px 50px",
  textTransform: "inherit",
  width: "100%",
  marginLeft: "6px",
  textAlign: "center",
  "&:focus, &:active, &:hover": {
    background: "#0AA5FF",
    color: "#fff",
  },
});

export const MobileMenu = () => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  

  const [isOpenMenu, setIsOpenMenu] = useState<Record<string, boolean>>(() => {
    const isOpen: Record<string, boolean> = {};
    navConfigNew.forEach((val) => {
      isOpen[val.title] = false;
    });
    return isOpen;
  });

  const handleToggleMenu = (title: string) => {
    const newIsOpenMenu: Record<string, boolean> = {};
    Object.keys(isOpenMenu).forEach((val) => {
      newIsOpenMenu[val] = val === title ? !isOpenMenu[val] : isOpenMenu[val];
    });
    setIsOpenMenu(newIsOpenMenu);
  };

  const eventTrackingActionRegister = () => {
    EventLog("AFweb_header_signup", user.user?.userFS.uid, browserName);
  };

  const eventTrackingActionLogin = () => {
    EventLog("AFweb_header_login", user.user?.userFS.uid, browserName);
  };

  return (
    <>
      <Box>
        <IconButtonHamburger
          onClick={handleToggleDrawer}
          aria-label="hamburger-menu"
        >
          {isDrawerOpen ? <Close /> : <Menu />}
        </IconButtonHamburger>
      </Box>
      <Drawer
        open={isDrawerOpen}
        anchor={"top"}
        sx={{ zIndex: theme.zIndex.appbar - 1 }}
      >
        <Tooltip
          disableGutters
          sx={{
            height: MAIN_DESKTOP_HEADER_HEIGHT,
            minHeight: MAIN_DESKTOP_HEADER_HEIGHT,
          }}
        />
        <Stack
          direction={"row"}
          sx={{ p: theme.spacing(1, 2) }}
          justifyContent="space-between"
          alignItems="center"
        >
          <ButtonRegister href="#" onClick={eventTrackingActionRegister}>
            Đăng ký
          </ButtonRegister>
          <ButtonLogin href="#" onClick={eventTrackingActionLogin}>
            Đăng ký
          </ButtonLogin>
        </Stack>
        <List component="nav" sx={{ width: "100%", py: 0 }}>
          {navConfigNew.map(
            (config, index) =>
              index !== navConfigNew.length - 1 && (
                <MobileMenuItem
                  key={config.title}
                  isOpen={isOpenMenu[config.title]}
                  menu={config}
                  handleToggleMenu={handleToggleMenu}
                />
              )
          )}
        </List>

        <IconButtonHamburger
          onClick={handleCloseDrawer}
          aria-label="close-menu"
        >
          <Close />
        </IconButtonHamburger>
      </Drawer>
    </>
  );
};
