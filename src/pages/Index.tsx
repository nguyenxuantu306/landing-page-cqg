import React from 'react'
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

import Blogs from '../pages/Blogs';

import MainHeader from '../layout/main/header/MainHeader';
import MainFooter from '../layout/main/footer/MainFooter';


export default function index() {
  return (
    <Grid container>
        <MainHeader />
        <Blogs />
        <MainFooter />
    </Grid>
  );
}
