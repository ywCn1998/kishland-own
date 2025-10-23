"use client";

import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import TotalResponsive from "@/app/[locale]/entertainment/reserve/_components/cart/totalResponsive";
import SingleBedIcon from '@mui/icons-material/SingleBed';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextIcon from "@/components/shared/textIcon";
import Link from "next/link";


type PriceCardProps = {
  onNext?: () => void;
};

export default function PriceCardHotel({ onNext }: PriceCardProps) {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  return (
    <>
      <Stack
        sx={{
          bgcolor: "#F0F7FF",
          borderRadius: 2,
          p: 2,
          width: "auto",
        }}
        className="reveal-down"
      >
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: { lg: "10px", xs: "16px" },
            display: { lg: "flex", xs: "none" },
            flexDirection: "row!",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1.5,
          }}
        >
          <Typography variant="body1">زمان باقی مانده</Typography>
          <Typography sx={{ fontWeight: 700 }}>
            {" "}
            {seconds} : {minutes}{" "}
          </Typography>
        </Box>
        <Stack
          sx={{
            paddingY: { lg: 3, xs: 1 },
            display: "flex",
            flexDirection: "column",
            gap: { lg: 3, xs: 4 },
          }}
        >
          <div className="flex justify-between">
            <Typography variant="caption2" color="textDisabled">
              قیمت برای 1 شب اقامت{" "}
            </Typography>
            <Typography variant="caption2">27,000,000 تومان</Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="caption2" color="textDisabled">
              {" "}
              تخفیف
            </Typography>
            <Typography variant="caption2" color="error">
              5,000,000 ت
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="caption2" color="textDisabled">
              {" "}
              سود شما از خرید
            </Typography>
            <Typography
              variant="caption2"
              sx={{ fontWeight: 650, color: "#13D397" }}
            >
              5,600,000 ت
            </Typography>
          </div>
        </Stack>

        <Divider
          className="mt-2"
          sx={{ display: { lg: "block", xs: "none" } }}
        />
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "space-between",
            py: 4,
          }}
        >
          <Typography variant="caption2" color="textDisabled">
            جمع کل
          </Typography>
          <Typography variant="subtitle1">22,000,000 ت</Typography>
        </Box>
        <Grid
          sx={{
            display: { xs: "none", lg: "flex" },
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Button variant="contained" sx={{ borderRadius: 1 }} onClick={onNext}>
            <Typography color="white"> رزرو هتل</Typography>
          </Button>
          <Button variant="outlined" sx={{ borderRadius: 1 }}>
            <Typography color="textPrimary">+ افزودن اتاق</Typography>
          </Button>
        </Grid>

        <div className="half-circle-divider-white mt-4">
          <span className="half-circle left"></span>
          <hr />
          <span className="half-circle right"></span>
        </div>

        <Stack mt={3} gap={4}>
          <Stack>
            <TextIcon
              text={
                <Typography className=" text-black!">
                  <span className="text-[#626E94]! text-sm!">اتاق 1: </span>{" "}
                  اتاق یک تخته (اقامت با صبحانه)
                </Typography>
              }
            />
            <Stack className="flex! flex-row! w-full! gap-2!" mt={1}>
              <Stack className="flex! flex-col! gap-3! bg-white! rounded-xl! p-2! border-1! border-slate-200! w-full!">
                <SingleBedIcon className="text-3xl!" />
                <Typography color="text.secondary" className="text-sm!">
                  پنجشنبه 1402/09/08
                </Typography>
                <Typography className="text-base! text-black!" fontWeight={500}>
                  123.000.000 تومان
                </Typography>
              </Stack>

              <Stack className="flex! flex-col! gap-3! bg-white! rounded-xl! p-2! border-1! border-slate-200! w-full!">
                <SingleBedIcon className="text-3xl!" />
                <Typography color="text.secondary" className="text-sm!">
                  پنجشنبه 1402/09/08
                </Typography>
                <Typography className="text-base! text-black!" fontWeight={500}>
                  123.000.000 تومان
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack>
            <TextIcon
              text={
                <Typography className=" text-black!">
                  <span className="text-[#626E94]! text-sm!">اتاق 2: </span>{" "}
                  اتاق یک تخته (اقامت با صبحانه)
                </Typography>
              }
            />
            <Stack className="flex! flex-row! w-full! gap-2!" mt={1}>
              <Stack className="flex! flex-col! gap-3! bg-white! rounded-xl! p-2! border-1! border-slate-200! w-full!">
                <SingleBedIcon className="text-3xl!" />
                <Typography color="text.secondary" className="text-sm!">
                  پنجشنبه 1402/09/08
                </Typography>
                <Typography className="text-base! text-black!" fontWeight={500}>
                  123.000.000 تومان
                </Typography>
              </Stack>

              <Stack className="flex! flex-col! gap-3! bg-white! rounded-xl! p-2! border-1! border-slate-200! w-full!">
                <SingleBedIcon className="text-3xl!" />
                <Typography color="text.secondary" className="text-sm!">
                  پنجشنبه 1402/09/08
                </Typography>
                <Typography className="text-base! text-black!" fontWeight={500}>
                  123.000.000 تومان
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Divider
            variant="fullWidth"
            orientation="horizontal"
            className="mt-[-15px]!"
          />
        </Stack>

        <Box
          sx={{
            display: { lg: "flex", xs: "none" },
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            cursor: "pointer",
          }}
        >
          <Typography variant="caption2" color="secondary">
            قوانین استرداد بلیط
          </Typography>
          <ArrowBackIosNewOutlinedIcon color="secondary" fontSize="small" />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Typography variant="caption2" color="textDisabled">
            جمع کل
          </Typography>
          <Typography variant="subtitle1">22,000,000 ت</Typography>
        </Box>
        <TotalResponsive total={"22,000,000"} />
      </Stack>
    </>
  );
}
