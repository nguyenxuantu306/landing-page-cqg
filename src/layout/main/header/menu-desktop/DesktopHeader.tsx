import { Container } from "@mui/material";

import Logo from "../../Logo";

import DesktopMenu from "./DesktopMenu";
import MenuLoginMenuRegister from "../menu-login-register/MenuLoginRegister";

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
      <DesktopMenu />
      <MenuLoginMenuRegister />
    </Container>
  );
}
