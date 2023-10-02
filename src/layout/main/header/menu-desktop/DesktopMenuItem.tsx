import React, { useRef } from "react";
import { Stack, Typography, Popover, List, CustomLink,  ListItem} from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";

import type { NavItemConfig } from "../appbar-menu";

export const DesktopMenuItem = ({
  menu,
  isOpenMenu,
  onOpenMenu,
  onCloseMenu,
}: {
  menu: NavItemConfig;
  isOpenMenu: boolean;
  onOpenMenu: (title: string) => void;
  onCloseMenu: (title: string) => void;
}) => {
  const anchorEl = useRef(null);

  const handleToggleMenu = () => {
    isOpenMenu ? handleCloseMenu() : handleOpenMenu();
  };

  const handleOpenMenu = () => {
    onOpenMenu(menu.title);
  };

  const handleCloseMenu = () => {
    onCloseMenu(menu.title);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        ref={anchorEl}
        onClick={handleToggleMenu}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        sx={{ p: 1, cursor: "pointer" }}
      >
        <Typography
          component={"div"}
          fontSize={14}
          fontWeight={600}
          color={isOpenMenu ? "#0075E7" : "#050506"}
        >
          {menu.title}
        </Typography>
        {isOpenMenu ? (
          <ArrowDropUp fontSize="small" sx={{ color: "#0075E7" }} />
        ) : (
          <ArrowDropDown fontSize="small" sx={{ color: "#606576" }} />
        )}
      </Stack>

      <Popover
        disableRestoreFocus
        disableScrollLock
        open={isOpenMenu}
        onClose={handleCloseMenu}
        anchorEl={anchorEl.current}
        anchorPosition={{ top: 80, left: 0 }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ pointerEvents: "none" }}
        PaperProps={{
          sx: {
            p: theme.spacing(1),
            m: "auto",
            borderRadius: 2,
            pointerEvents: "auto",
            mt: "20px",
          },
          onMouseEnter: handleOpenMenu,
          onMouseLeave: handleCloseMenu,
        }}
      >
        <List disablePadding>
          {menu.children.map((item) => (
            <CustomLink
              key={item.title}
              onClick={() => onClickLinkMenu(item.path)}
            >
              <ListItem sx={{ py: 0, fontSize: "14px" }}>
                {item.title}
              </ListItem>
            </CustomLink>
          ))}
        </List>
      </Popover>
    </>
  );
};
