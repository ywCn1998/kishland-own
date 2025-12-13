"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const Banks = [
  { image: "/images/entertainment/reserve/pasargad.png", name: "pasargad" },
  { image: "/images/entertainment/reserve/saman.png", name: "saman" },
  { image: "/images/entertainment/reserve/melat.png", name: "melat" },
];

export default function PayOnline() {
  const [selectedBank, setSelectedBank] = useState<string>("pasargad");

  return (
    <Stack>
      <Stack
        component="header"
        className="reveal"
        sx={{
          border: "1px solid #FB7201",
          p: { xs: 1, lg: 2 },
          bgcolor: "#FFF9EC",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 1,
        }}
      >
        <Grid display="flex">
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "start",
            }}
          >
            <Typography variant="subtitle2" fontWeight={500}>
              <LanguageOutlinedIcon sx={{fontSize : {xs : "medium" , lg : "large"}}}/> پرداخت آنلاین
            </Typography>
            <Typography
              variant="body1"
              color="text.disabled"
              sx={{ fontSize: { xs: "8px", lg: "16px" } }}
            >
              پرداخت آنلاین از طریق درگاه پرداخت
            </Typography>
          </Grid>
        </Grid>

        <Grid display="flex" gap={{ xs: 1, lg: 3 }}>
          {Banks.map((bank, index) => {
            const isSelected = selectedBank === bank.name;
            return (
              <Stack
                key={index}
                onClick={() => setSelectedBank(bank.name)}
                sx={{
                  border: "solid 1px",
                  borderColor: "#FB7201",
                  height: { xs: "32px", lg: "49px" },
                  px: { xs: 1, lg: 2 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 1,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  bgcolor: isSelected ? "#FB7201" : "white",
                }}
              >
                <Box
                  component="img"
                  src={bank.image}
                  alt={bank.name}
                  sx={{
                    height: { xs: 16, lg: 29 },
                    width: { xs: 16, lg: "auto" },
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Stack>
            );
          })}
        </Grid>
      </Stack>
    </Stack>
  );
}
