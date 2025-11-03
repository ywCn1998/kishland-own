// components/CenteredGrid.tsx
"use client";

import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";

type CenteredGridProps = {
  imgUrl: string;
  imgAlt?: string;
  children: React.ReactNode;
  imgGridSIze?: number | object;
  childrenGridSIze?: number | object;
  flexDirection?: string;
  height?: number | string | object;
  imgHeight?: string |number
};

export default function ImageAndText({
  imgUrl,
  imgAlt = "image",
  children,
  imgGridSIze = 4,
  childrenGridSIze = 8,
  flexDirection = "row",
  height = 500,imgHeight = 500
}: CenteredGridProps) {
  return (
    <Grid
      container
      sx={{ height, position: "relative", flexDirection : {xs : "column-reverse" , lg : flexDirection} }}
      alignItems="center"
      justifyContent="center"
    >
      {/* Left side */}
      <Grid
        size={childrenGridSIze}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {children}
      </Grid>

      {/* Right side */}
      <Grid size={imgGridSIze} sx={{ height: imgHeight, position: "relative" }}>
        <Image
          src={imgUrl}
          alt={imgAlt}
          fill
          style={{ objectFit: "contain" }}
          className="reveal"
        />
      </Grid>
    </Grid>
  );
}
