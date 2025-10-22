"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { PlusOneOutlined } from "@mui/icons-material";
import TotalResponsive from "../totalResponsive";

const entertainments = [
  {
    image: "/images/entertainment/reserve/telecabin.png",
    title: "سانس 10:30 الی 11:00",
    description: "تله کابین میکامال کیش",
    realPrice: "400,000",
    discountedPrice: "350,000",
  },
  {
    image: "/images/entertainment/reserve/nightshow.png",
    title: "صندلی اکونومی (اقتصادی)",
    description: "شوی شبانه کیش (اتحاد جنگ ها )",
    realPrice: "650,000",
    discountedPrice: "585,000 ",
  },
];
export default function CartCards() {
  const [counts, setCounts] = useState<number[]>(
    Array(entertainments.length).fill(1)
  );

  const handlePlus = (index: number) => {
    setCounts((prev) => {
      const newCounts = [...prev];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const handleMinus = (index: number) => {
    setCounts((prev) => {
      const newCounts = [...prev];
      if (newCounts[index] > 1) newCounts[index] -= 1;
      return newCounts;
    });
  };
  return (
    <>
      <Stack display={"flex"} gap={3}>
        {entertainments?.map((e, index) => (
          <Stack
            component="header"
            className=" reveal"
            sx={{
              border: "1px solid",
              borderColor: "#e2e8f0",
              borderRadius: { xs: "12px", lg: "16px" },
              p: { xs: 1.5, lg: 3 },
              bgcolor: "white !important",
              display: "flex",
              gap: 2,
              flexDirection: { lg: "row !important", xs: "col !important" },
              justifyContent: "space-between",
              alignItems: { lg: "center", xs: "start" },
            }}
            key={index}
          >
            <Grid display={"flex"} gap={{ lg: 2, xs: 1 }}>
              <Box
                component="img"
                src={e?.image}
                alt="enterimg"
                sx={{
                  width: { lg: "94px", xs: "72px" },
                  height: { lg: "94px", xs: "72px" },
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <Grid
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
              >
                <Typography
                  variant="body2"
                  fontWeight={650}
                  sx={{ textWrap: "nowrap" }}
                >
                  {e?.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontSize={{ xs: "12px", lg: "18px" }}
                  sx={{ color: { xs: "#626E94", lg: "#000E08" } }}
                >
                  {e?.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid display={"flex"} gap={1.5} alignItems={"center"}>
              <Typography
                color="primary"
                sx={{
                  textDecoration: "line-through",
                  fontSize: { xs: "10px", lg: "16px" },
                }}
              >
                {(
                  counts[index] * Number(e.realPrice.replace(/,/g, ""))
                ).toLocaleString()}{" "}
              </Typography>
              <Grid display={"flex"} alignItems={"center"}>
                <Typography
                  color="textDisabled"
                  sx={{
                    fontSize: { xs: "12px", lg: "16px", textWrap: "nowrap" },
                  }}
                >
                  {counts[index]} نفر /
                </Typography>
                <Typography
                  variant="body1"
                  color="secondary"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "12px", lg: "16px" },
                    textWrap: "nowrap",
                  }}
                >
                  {(
                    counts[index] * Number(e.discountedPrice.replace(/,/g, ""))
                  ).toLocaleString()}{" "}
                  تومان
                </Typography>
              </Grid>
              <Grid
                display={{ xs: "none", lg: "flex" }}
                alignItems={"center"}
                gap={4}
              >
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => handlePlus(index)}
                  sx={{
                    bgcolor: "#F5F7FA",
                    minWidth: 40,
                    minHeight: 40,
                    height: 32,
                    padding: "4px 8px",
                    fontWeight: 500,
                    borderRadius: 1,
                    border: "solid 1px #E1E6F0",
                    textTransform: "none",
                  }}
                >
                  <AddOutlinedIcon />
                </Button>
                <Typography variant="body2" fontWeight={500}>
                  {counts[index]}
                </Typography>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    bgcolor: "#F5F7FA",
                    minWidth: 40,
                    minHeight: 40,
                    height: 32,
                    padding: "4px 8px",
                    fontWeight: 500,
                    borderRadius: 1,
                    border: "solid 1px #E1E6F0",
                    textTransform: "none",
                  }}
                  onClick={() => handleMinus(index)}
                  disabled={counts[index] === 1}
                >
                  <RemoveOutlinedIcon />
                </Button>
              </Grid>
              <Stack
                sx={{
                  display: { xs: "flex", lg: "none" },
                  flexDirection: "row",
                  bgcolor: "#F5F7FA",
                  gap: 2,
                  p: 1,
                  borderRadius: 1,
                  alignItems: "center",
                }}
              >
                <Grid onClick={() => handlePlus(index)}>
                  <AddOutlinedIcon fontSize="small" />
                </Grid>
                <Grid>
                  <Typography variant="body2" fontWeight={500}>
                    {counts[index]}
                  </Typography>
                </Grid>
                <Grid onClick={() => handleMinus(index)}>
                  <RemoveOutlinedIcon fontSize="small" />
                </Grid>
              </Stack>
            </Grid>
          </Stack>
        ))}
      </Stack>
    </>
  );
}
