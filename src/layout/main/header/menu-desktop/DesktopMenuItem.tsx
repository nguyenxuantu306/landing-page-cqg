import React, { useRef } from "react";
import {
  List,
  ListItem,
  Popover,
  Stack,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import router from "next/router";

import type { NavItemConfig } from "../appbar-menu";

const CustomLink = styled(Typography)(({ theme }) => ({
  color: "#050506",
  fontWeight: "600",
  "&:hover": {
    color: "#0075E7",
  },
  cursor: "pointer",
  padding: theme.spacing(1, 1),
  display: "flex",
}));

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
  const theme = useTheme();
  const anchorEl = useRef<HTMLAnchorElement | null>(null);

  const handleToggleMenu = () => {
    isOpenMenu ? handleCloseMenu() : handleOpenMenu();
  };

  const handleOpenMenu = () => {
    onOpenMenu(menu.title);
  };

  const handleCloseMenu = () => {
    onCloseMenu(menu.title);
  };

  const onClickLinkMenu = (path: string) => {
    router.push(path);
  };

  if (
    !menu.children &&
    menu.title !== "Đăng nhập" &&
    menu.title !== "Mở tài khoản mới"
  ) {
    return (
      <CustomLink
        onClick={() => {
          menu.title === "Thị trường" && logEventMenu("web_view_market_site");
          onClickLinkMenu(menu.path);
        }}
        sx={{ fontSize: 14 }}
      >
        {menu.title}
      </CustomLink>
    );
  }

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
              <ListItem sx={{ py: 0, fontSize: "14px" }}>{item.title}</ListItem>
            </CustomLink>
          ))}
        </List>
      </Popover>
    </>
  );
};
