import React from "react";
import Image from "next/legacy/image";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";

const Layout = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingLeft: "100px",
    paddingRight: "100px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  }
}));

const StyleTitle = styled(Box)({
  h1: {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    fontWeight: "bold",
  },
  p: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    color: "rgb(107 114 128)",
  },
});

const StyleContent = styled(Box)({
  h1: {
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    fontWeight: "bold",
  },
  p: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    color: "rgb(107 114 128)",
  },
});

const BoxImageStyle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  webkitTransition: "all 200ms ease-in",
  webkitTransform: "scale(1)",
  msTransition: "all 200ms ease-in",
  msTransform: "scale(1)",
  mozTransition: "all 200ms ease-in",
  mozTransform: "scale(1)",
  transition: "all 200ms ease-in",
  transform: "scale(1)",
  "&:hover, &:focus, &:active": {
    zIndex: 2,
    webkitTransition: "all 200ms ease-in",
    webkitTransform: "scale(1.1)",
    msTransition: "all 200ms ease-in",
    msTransform: "scale(1.1)",
    mozTransition: "all 200ms ease-in",
    mozTransform: "scale(1.1)",
    transition: "all 200ms ease-in",
    transform: "scale(1.1)",
  },
}));

export default function Download() {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={12} align="center">
        <Layout>
          <StyleTitle>
            <h1>TẢI VỀ</h1>
            <p>Tải về phần mềm CQG phiên bản mới nhất cho mọi thiết bị</p>
          </StyleTitle>
        </Layout>
      </Grid>
      <Grid item xs={12} md={6} sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Layout>
          <StyleContent>
            <h1>CQG Mobile</h1>
            <p>
              Nhà đầu tư có thể tiến hành theo dõi giá cả hàng hóa, tạo danh
              sách hàng hóa cần theo dõi khi cần. Đồng thời, nhà đầu tư có thể
              tiến hành đặt lệnh ngay trên chính thiết bị di động, ở bất kỳ nơi
              đâu.
            </p>
          </StyleContent>
          <Grid sx={{ display: "flex" }}>
            <Grid item xs={12} md={6}>
              <Grid>
                <BoxImageStyle>
                  <a href="#">
                    <Image
                      src="/landing-page/store-Apple.png"
                      alt="Apple Store"
                      width={200}
                      height={60}
                    />
                  </a>
                </BoxImageStyle>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <BoxImageStyle>
                <a href="#">
                  <Image
                    src="/landing-page/store-google.png"
                    alt="Google Store"
                    width={200}
                    height={60}
                  />
                </a>
              </BoxImageStyle>
            </Grid>
          </Grid>
        </Layout>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        <Image
          src="/landing-page/cqg-mobile.png"
          alt="CQG Mobile"
          width={490}
          height={570}
        />
      </Grid>
    </Grid>
  );
}
