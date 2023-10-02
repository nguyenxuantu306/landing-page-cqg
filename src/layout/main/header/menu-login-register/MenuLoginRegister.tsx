import React from 'react'

import { Stack, Button, Grid } from '@mui/material'
import Image from "next/legacy/image"

export default function MenuLoginRegister() {
  return (
    <Stack spacing={2} direction="row" height="40px">
        <Button variant="container"
                sx={{
                    color: '#0aa5ff',
                    "&:hover, &:focus, &:active":{
                        color: '#224696',
                        backgroundColor: '#fff'
                    }
                }}
        >
            Đăng Ký
            </Button>
        <Button variant="container" 
                sx={{
                    color: '#fff',
                    backgroundColor: '#0aa5ff',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    "&:hover, &:focus, &:active":{
                        backgroundColor: '#224696'
                    }
                }}
                >
            Đăng Nhập
            </Button>
            <Grid sx={{ padding: 1, alignItems: 'center', backgroundColor: '#e9e9ed', borderRadius: '8px'}}>
                <Image
                    alt="Anfin QR"
                    src="/qr.svg"
                    width={24}
                    height={24}
                >
                </Image>
            </Grid>
    </Stack>
  )
}
