"use client";

import { Box, Button, Divider, Grid, Stack, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import TextIcon from "@/components/shared/textIcon";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import TicketInfoCart from "./tickeInfo";

type PriceCardProps = {
  onNext?: () => void;
  isReserveTour: boolean
};

export default function PriceCard({ onNext, isReserveTour }: PriceCardProps) {
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
      >
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: "10px",
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
          sx={{ paddingY: { lg: 3, xs: 0 }, display: "flex", flexDirection: "column", gap: 3 }}
        >
          <div className="flex justify-between">
            <Typography variant="caption2" color="textDisabled">
              تعداد بلیط ها
            </Typography>
            <Typography variant="caption2"> 5 عدد</Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="caption2" color="textDisabled">
              کل مبلغ
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
        <Box sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "space-between", py: 4 }}>
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
          {isReserveTour && (
            <div className="half-circle-divider-white">
              <span className="half-circle left bg-white!"></span>
              <hr />
              <span className="half-circle right bg-white!"></span>
            </div>
          )}
          <Button variant="contained" sx={{ borderRadius: 1 }} onClick={onNext}>
            <Typography color="white">{isReserveTour ? "ثبت و ادامه" : "تایید و ادامه"}</Typography>
          </Button>
          {
            isReserveTour && (

              <>
                <Divider variant="fullWidth" sx={{ borderColor: "#dfeeff" }} />

                <TicketInfoCart from="مشهد (MHD)" to="تهران (THR)" flyTime="17:25" arriveTime="18:55" isGo={true} dayTime="دوشنبه 18 فروردین 1404" />
                <TicketInfoCart from="مشهد (MHD)" to="تهران (THR)" flyTime="17:25" arriveTime="18:55" isGo={false} dayTime="دوشنبه 18 فروردین 1404" />
                <Divider
                  className="mt-2"
                  sx={{ display: { lg: "block", xs: "none" } }}
                />
              </>
            )
          }
          {
            !isReserveTour && (
              <Button variant="outlined" sx={{ borderRadius: 1 }}>
                <Typography color="textPrimary"> افزودن تفریح جدید</Typography>
              </Button>
            )
          }
        </Grid>

        {!isReserveTour && (
          <>
            <div className="half-circle-divider-white mt-4">
              <span className="half-circle left bg-white!"></span>
              <hr />
              <span className="half-circle right bg-white!"></span>
            </div>

          </>
        )}
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
        <Box sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "space-between", mt: 2 }}>
          <Typography variant="caption2" color="textDisabled">
            جمع کل
          </Typography>
          <Typography variant="subtitle1">22,000,000 ت</Typography>
        </Box>
      </Stack>
    </>
  );
}


