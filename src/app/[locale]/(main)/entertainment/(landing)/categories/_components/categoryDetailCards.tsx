import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const details = [
  {
    title: "time",
    des: "30 دقیقه ",
    img: "/images/entertainment/landing/category1.png",
  },
  {
    title: "capacity",
    des: "ظرفیت 8 نفر",
    img: "/images/entertainment/landing/category2.png",
  },
  {
    title: "photography",
    des: "خدمات عکاسی",
    img: "/images/entertainment/landing/category3.png",
  },
  {
    title: "gender",
    des: "بانوان/آقایان",
    img: "/images/entertainment/landing/category4.png",
  },
  {
    title: "transfer",
    des: "رفت و برگشت",
    img: "/images/entertainment/landing/category5.png",
  },
  {
    title: "music",
    des: "پخش موسیقی",
    img: "/images/entertainment/landing/category6.png",
  },
];
export default function CategoryDetailCards() {
  return (
    <>
      <Grid className="flex! flex-row! w-full! " container spacing={3}>
        {details.map((detail, index) => (
          <Grid key={index + detail.title} className="border-slate-200! py-5! px-3! flex! items-center! flex-col! gap-3! rounded-2xl border-1" size={2}>
            <img src={detail.img} alt={detail.title} />
            <Typography className="text-lg! font-[650]!">{detail.des}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
