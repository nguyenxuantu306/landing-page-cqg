import React from "react";

import { Stack, Button, Grid, Popover, Typography } from "@mui/material";
import Image from "next/legacy/image";

export default function MenuLoginRegister() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Stack spacing={2} direction="row" height="40px">
      <Button
        variant="container"
        sx={{
          color: "#0aa5ff",
          "&:hover, &:focus, &:active": {
            color: "#224696",
            backgroundColor: "#fff",
          },
        }}
      >
        Đăng Ký
      </Button>
      <Button
        variant="container"
        sx={{
          color: "#fff",
          backgroundColor: "#0aa5ff",
          borderRadius: "8px",
          padding: "10px 16px",
          "&:hover, &:focus, &:active": {
            backgroundColor: "#224696",
          },
        }}
      >
        Đăng Nhập
      </Button>
      <Grid
        sx={{
          padding: 1,
          alignItems: "center",
          backgroundColor: "#e9e9ed",
          borderRadius: "8px",
        }}
      >

        {/* QR */}
        <div>
          <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Image alt="Anfin QR" src="/qr.svg" width={24} height={24}></Image>
          </Typography>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorPosition={{ top: 80, left: 0 }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
            PaperProps={{
          sx: {
            m: "auto",
            borderRadius: "8px",
            pointerEvents: "auto",
            boxShadow: "2px 2px 6px 2px rgba(89, 100, 121, 0.1);",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
            width: "200px",
            alignItems: "center",
          },
        }}
          >
            <Image
          src="/logo/QRCode.svg"
          alt="QRCode Anfin"
          width={90}
          height={90}
        />
            <Typography
          sx={{ color: "#011045", fontSize: "20px", fontWeight: 700 }}
        >
          Tải app miễn phí
        </Typography>
        <Typography
          sx={{
            color: "#606576",
            fontSize: "13px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Dùng camera điện thoại quét mã QR code để tải app
        </Typography>
          </Popover>
        </div>
      </Grid>
    </Stack>
  );
}
