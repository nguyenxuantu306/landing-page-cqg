import React from "react";
import { Box, Container, styled, Grid } from "@mui/material";

import DownloadCqg from "./content/download-cqg";
import CqgDesktop from "./content/cqg-desktop";

export default function Blog() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        
      }}
    >
      <Container>
        <Grid 
        position="absolute"

        sx={{ left: '100%', backgroundColor: "red", display: "block"}}
        ></Grid>
        <DownloadCqg />
        <Grid />
        <CqgDesktop />
      </Container>
    </Box>
  );
}
