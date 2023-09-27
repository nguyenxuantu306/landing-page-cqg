import React from "react";
import { Box, Container}  from "@mui/material";

import DownloadCqg from "./content/download-cqg"
import CqgDesktop from "./content/cqg-desktop";
export default function Blog() {
    return (
        <Box sx={{ position: "relative", width: "100%", marginBottom: "60px"}}>
            <Container >
                <DownloadCqg sx={{ marginBottom: "60px" }}/>
                <CqgDesktop />
            </Container>
        </Box>
    );
};