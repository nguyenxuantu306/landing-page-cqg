import { Stack, Grid } from "@mui/material";
import { useState } from "react";

import Logo from "../../Logo"
import MenuLoginRegister from "../menu-login-register/MenuLoginRegister"
import { navConfigNew } from "../appbar-menu.ts";

import { DesktopMenuItem } from "./DesktopMenuItem";

export default function DesktopMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState<Record<string, boolean>>(() => {
    const isOpen: Record<string, boolean> = {};
    navConfigNew.forEach((val) => {
      isOpen[val.title] = false;
    });
    return isOpen;
  });

  const onCloseMenu = (title: string) => {
    const newIsOpenMenu: Record<string, boolean> = {
      ...isOpenMenu,
      [title]: false,
    };
    setIsOpenMenu(newIsOpenMenu);
  };

  const onOpenMenu = (title: string) => {
    const newIsOpenMenu: Record<string, boolean> = {};
    Object.keys(isOpenMenu).forEach((val) => {
      newIsOpenMenu[val] = val === title;
    });
    setIsOpenMenu(newIsOpenMenu);
  };

  return (
    <Stack direction={"row"} spacing={2} alignItems="center">
      {navConfigNew.map((config) => (
        <DesktopMenuItem
          key={config.title}
          menu={config}
          isOpenMenu={isOpenMenu[config.title]}
          onOpenMenu={onOpenMenu}
          onCloseMenu={onCloseMenu}
        />
      ))}
    </Stack>
    
  );
};
