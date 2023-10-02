import { Container } from "@mui/material";

import Logo from "../../Logo";

import { MenuDesktop } from "./DesktopMenu";

export default function DesktopHeader() {
  return (
    <Container
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
      maxWidth="lg"
    >
      <Logo />
      <MenuDesktop />
    </Container>
  );
};