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
  Link,
} from "@mui/material";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import LanguageIcon from "@mui/icons-material/Language";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const StyleContent = styled(Grid)({
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



export default function Download() {
  return (
    <Grid container sx={{ flexDirection: "row-reverse" }}>
      <Grid item xs={12} md={6}>
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
        <Grid
          sx={{
            bgcolor: "#CCFFFF",
            padding: "12px 12px 12px 16px",
            alignItems: "center",
            borderRadius: "12px",
            width: 230,
          }}
        >
          <Link href="#" style={{ textDecoration: "none" }}>
            Truy cập CQG Desktop
            <OpenInNewIcon />
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
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
