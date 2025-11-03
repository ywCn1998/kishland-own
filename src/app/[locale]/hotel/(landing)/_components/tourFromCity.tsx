import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
const city = [
  {
    name: "مشهد",
  },
  {
    name: "تهران",
  },
  {
    name: "اصفهان",
  },
  {
    name: "شیراز",
  },
  {
    name: "یزد",
  },
  {
    name: "بیرجند",
  },
  {
    name: "گرمانشاه",
  },
  {
    name: "مازندران",
  },
  {
    name: "تبریز",
  },
];
export default function TourFromCity() {
  return (
    <>
      <Grid
        container
        className="flex flex-row flex-wrap w-full reveal-down"
        spacing={3}
      >
        {city.map((c, index) => (
          <Grid
            key={c.name + index}
            size={4}
            className="
              flex flex-row items-center justify-between border-1 border-slate-200 rounded-2xl py-6 px-4
              cursor-pointer transition-all duration-300 ease-in-out
              hover:shadow-md hover:border-blue-300 active:scale-95
            "
          >
            <Link href={"/fa/tour/list"} className="flex! flex-row! justify-between! items-center! w-full!">
              <Typography className="!text-lg">
                {" "}
                تور کیش از {c.name}{" "}
              </Typography>
              <ArrowBackIosIcon fontSize="small" />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
