import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/legacy/image";

import Logo from "../Logo";
import { FooterContentColumn, footerShortcuts } from "./footer-shortcut.ts";

const FooterShortcutColumnTitle = styled(Typography)({
  fontSize: 20,
  fontWeight: 700,
  color: "#08367A",
});

const GridItemFooter = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "32px",
  },
}));

const SubMenu = styled(Link)({
  color: "#606576",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: 500,
});

const ContentCopyRight = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

const ListSocial = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: "10px",
  },
  a: {
    margin: "0px 12px",
  },
}));
const ContentFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#F2F7FF",
  width: "100%",
  padding: "64px 0px",
  [theme.breakpoints.down("sm")]: {
    padding: "32px 0px 20px",
  },
  "& .item-footer": {
    [theme.breakpoints.down("lg")]: {
      paddingRight: "20px",
    },
    [theme.breakpoints.down("md")]: {
      paddingRight: "0px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "0px",
    },
  },
}));
export default function MainFooter() {
  const theme = useTheme();
  return (
    <ContentFooter
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
          paddingLeft: "0",
        },
      })}
    >
      <Container maxWidth="lg" sx={{ fontFamily: "Inter", fontWeight: 400 }}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ pb: theme.spacing(1) }}
        >
          <Grid
            className="item-footer"
            item
            xs={12}
            md={3}
            sx={{ mb: 3, p: 1 }}
          >
            <Stack spacing={1}>
              <Logo sx={{ mx: { sm: "inherit", md: "inherit" } }} />
              <Stack direction={"row"} spacing={1}>
                <Typography sx={{ color: "#606576" }}>
                  Tòa nhà Circo, 222 Đường Điện Biên Phủ, Phường Võ Thị Sáu,
                  Quận 3, TP Hồ Chí Minh
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <span>Hotline:</span>
                <Link
                  sx={{
                    color: "#606576",
                    textDecoration: "none",
                    fontWeight: "700",
                  }}
                  href={"tel:1900633099"}
                >
                  1900 633 099
                </Link>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <span>Email:</span>
                <Link
                  sx={{
                    color: "#606576",
                    textDecoration: "none",
                    fontWeight: "700",
                  }}
                  href={"mailto:hello@anfin.vn"}
                >
                  hello@anfin.vn
                </Link>
              </Stack>
            </Stack>
          </Grid>
          {footerShortcuts.map((item) => (
            <FooterShortcutColumn key={item.title} column={item} />
          ))}
        </Grid>
        <Divider sx={{ my: theme.spacing(2) }} />
        <ContentCopyRight>
          <Typography
            component="p"
            textAlign={"center"}
            sx={{ color: "#5f6d7e", fontSize: "16px" }}
          >
            Bản quyền © 2023 ANFIN
          </Typography>
          <ListSocial>
            <Link
              href="#"
              target="_blank"
              onClick={() => {
                EventLog(
                  "AFweb_footer_facebook_button",
                  user?.userFS.uid,
                  browserName
                );
              }}
            >
              <Image
                src="/logo/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="#"
              target="_blank"
              onClick={() => {
                EventLog(
                  "AFweb_footer_linkedin_button",
                  user?.userFS.uid,
                  browserName
                );
              }}
            >
              <Image src="/logo/in.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link
              href="#"
              target="_blank"
              onClick={() => {
                EventLog(
                  "AFweb_footer_tiktok_button",
                  user?.userFS.uid,
                  browserName
                );
              }}
            >
              <Image
                src="/logo/tiktok.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="#"
              target="_blank"
              onClick={() => {
                EventLog(
                  "AFweb_footer_instagram_button",
                  user?.userFS.uid,
                  browserName
                );
              }}
            >
              <Image
                src="/logo/instagram.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
          </ListSocial>
        </ContentCopyRight>
      </Container>
    </ContentFooter>
  );
}

const FooterShortcutColumn = ({ column }: { column: FooterContentColumn }) => {
  return (
    <GridItemFooter item xs={12} md={column.grid}>
      <Stack spacing={2}>
        <FooterShortcutColumnTitle>{column.title}</FooterShortcutColumnTitle>
        {column &&
          column?.shortcuts.map((item) => (
            <SubMenu
              key={item.item}
              href={item.path}
              target={item.target ? "_blank" : ""}
            >
              {item.item}
            </SubMenu>
          ))}
      </Stack>
    </GridItemFooter>
  );
};
