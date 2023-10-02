
import React from "react";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

import Blog from "../components/blogs/Blog";

export default function Blogs() {
  return (
    <Grid
      container
      sx={{
        fontFamily:
          "Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        }}>
      <Blog />
    </Grid>
  );
}
