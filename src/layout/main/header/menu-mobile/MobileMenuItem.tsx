import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Divider,
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

import type { NavItemConfig } from "../appbar-menu.ts";
import { MobileSubMenu } from "./MobileSubMenu";

const CustomListItemText = styled(ListItemText)({
  marginTop: 0,
  marginBottom: 0,
});

export const MobileMenuItem = ({
  isOpen,
  menu,
  handleToggleMenu,
}: {
  isOpen: boolean;
  menu: NavItemConfig;
  handleToggleMenu: (title: string) => void;
}) => {
  const theme = useTheme();
  return (
    <>
      <ListItemButton
        sx={{ p: theme.spacing(2) }}
        key={menu.title}
        onClick={(_e) => handleToggleMenu(menu.title)}
      >
        <CustomListItemText>
          <Typography fontSize={16}>{menu.title}</Typography>
        </CustomListItemText>
        {menu.children && (
          <ListItemIcon sx={{ display: "contents" }}>
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
        )}
      </ListItemButton>
      <Divider />
      {menu.children && <MobileSubMenu isOpen={isOpen} config={menu} />}
    </>
  );
};
