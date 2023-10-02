import React from 'react'
import { Box  } from "@mui/material";
import Image from "next/legacy/image"


export default function Logo() {
  return (
    <Box>
        <a href="#">
        <Image 
            src="/logo/logo.png"
            alt="Anfin Logo"
            width={134}
            height={32}
            layout="intrinsic"
            priority
        />
        </a>
    </Box>
  )
}
