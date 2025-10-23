import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const city = [
  {
    name: "هتل کوروش کبیر",
  },
  {
    name: "هتل ویدا کیش ",
  },
  {
    name: "هتل آبادگران کیش",
  },
  {
    name: "هتل پالاس کیش",
  },
  {
    name: "هتل داریوش کیش",
  },
  {
    name: "هتل کوروش کبیر",
  },
  {
    name: "هتل ویدا کیش ",
  },
  {
    name: "هتل آبادگران کیش",
  },
  {
    name: "هتل پالاس کیش",
  },
  {
    name: "هتل داریوش کیش",
  },
  {
    name: "هتل کوروش کبیر",
  },
  {
    name: "هتل ویدا کیش ",
  },
  {
    name: "هتل آبادگران کیش",
  },
  {
    name: "هتل پالاس کیش",
  },
  {
    name: "هتل داریوش کیش",
  },
];
export default function FooterHotels() {
  return (
    <>
      <Grid
        container
        className="flex flex-row flex-wrap w-full items-center mt-10 reveal-down"
        spacing={3}
      >
        {city.map((c, index) => (
          <Grid
            key={c.name + index}
            size={2.4}
            className="
    flex flex-row items-center justify-around border-1 border-slate-200 rounded-2xl py-5 px-4 text-center cursor-pointer
    transition-all duration-300 ease-in-out active:scale-95 hover:shadow-md hover:border-blue-300
  "
          >
            <Typography className="!text-lg"> {c.name} </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
