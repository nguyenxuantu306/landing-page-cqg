import React from "react";
import Image from "next/legacy/image";
import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
  Link,
} from "@mui/material";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import LanguageIcon from "@mui/icons-material/Language";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Layout = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingLeft: "100px",
    paddingRight: "100px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  }
}));

const StyleContent = styled(Box)(({ theme }) => ({
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
}));

const StyleBtn = styled(Box)({
  backgroundColor: "rgb(239 246 255)",
  padding: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "12px",
  width: 230,
  transition: "all 200ms ease-in",
  "&:hover, &:focus, &:active": {
    backgroundColor: "rgb(30,144,255)",
  },
  "a:hover": {
    color: "#fff",
  },
});

export default function Download() {
  return (
    <Grid
      container
      columnSpacing={2}
      sx={{ flexDirection: "row-reverse" }}
    >
      <Grid item xs={12} md={6}>
        <Layout>
          <StyleContent>
            <h1>CQG Desktop</h1>
            <p>
              Phần mềm CQG Desktop là giải pháp hiệu quả nhất cho nhà đầu tư có
              thể tiến hành đặt lệnh trực tiếp trên nền tảng Web. Khách hàng có
              thể đăng nhập, theo dõi tài khoản nhanh chóng, thuận tiện ở bất kỳ
              nơi đâu, bất kỳ thiết bị nào có hỗ trợ khả năng trình duyệt web.
            </p>
          </StyleContent>
          <Grid sx={{ display: "flex" }}>
            <Grid sx={{ p: 3 }}>
              <PersonalVideoIcon
                sx={{
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  p: 2,
                  borderRadius: "16px",
                }}
              />
            </Grid>
            <Grid>
              <h5>Tương thích</h5>
              <p>Hệ điều hành Windows và Apple</p>
            </Grid>
          </Grid>
          <Grid sx={{ display: "flex" }}>
            <Grid sx={{ p: 3 }}>
              <LanguageIcon
                sx={{
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  p: 2,
                  borderRadius: "16px",
                }}
              />
            </Grid>
            <Grid>
              <h5>Trình duyệt</h5>
              <p>Google Chrom, Apple Safari, Microsoft Edge..</p>
            </Grid>
          </Grid>
          <StyleBtn>
            <Link
              href="https://m.cqg.com/cqg/desktop/logon"
              sx={{  display: 'flex' }}
              underline="none"
            >
              Truy cập CQG Desktop
              <OpenInNewIcon sx={{ paddingLeft: 1 }} />
            </Link>
          </StyleBtn>
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
          src="/landing-page/cqg-desktop.png"
          alt="CQG Mobile"
          width={490}
          height={290}
        />
      </Grid>
    </Grid>
  );
}
