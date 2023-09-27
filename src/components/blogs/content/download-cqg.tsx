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
  marginBottom: 100,
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

export default function Download() {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={12} align="center">
        <StyleTitle>
          <h1>TẢI VỀ</h1>
          <p>Tải về phần mềm CQG phiên bản mới nhất cho mọi thiết bị</p>
        </StyleTitle>
      </Grid>

      <Grid item xs={12} md={6}>
        <StyleContent>
          <h1>CQG Mobile</h1>
          <p>
            Nhà đầu tư có thể tiến hành theo dõi giá cả hàng hóa, tạo danh sách
            hàng hóa cần theo dõi khi cần. Đồng thời, nhà đầu tư có thể tiến
            hành đặt lệnh ngay trên chính thiết bị di động, ở bất kỳ nơi đâu.
          </p>
        </StyleContent>

        <Grid sx={{ display: "flex" }}>
          <Grid item xs={12} md={6}>
            <Grid>
              <a href="#">
                <Image
                  src="/landing-page/store-apple.png"
                  alt="Apple Store"
                  width={200}
                  height={60}
                />
              </a>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <a href="#">
              <Image
                src="/landing-page/store-google.png"
                alt="Google Store"
                width={200}
                height={60}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
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
