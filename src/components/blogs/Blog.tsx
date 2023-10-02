import React from "react";
import { Box, Container, styled } from "@mui/material";

import DownloadCqg from "./content/download-cqg";
import CqgDesktop from "./content/cqg-desktop";

export default function Blog() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "rgb(249 250 251)",
      }}
    >
      <Container>
        <DownloadCqg />
        <CqgDesktop />
      </Container>
    </Box>
  );
}
