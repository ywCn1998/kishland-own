"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ReusableSwiperProps {
  children: React.ReactNode;
  pagination: boolean;
  slidePerViewXs?: number | string;
  slideperviewMd?: number;
  slidePerviewLg?: number;
  width?: string | number;
  height?: string | number;
  spaceBetween?: number;
  navigation?: boolean;
  dots?: boolean;
  autoplay?: boolean; //
}

export default function ReusableSwiper({
  children,
  pagination,
  slidePerViewXs = 1.5,
  slideperviewMd = 3,
  slidePerviewLg = 4,
  width = "100%",
  height = "100%",
  spaceBetween = 20,
  navigation = false,
  dots = true,
  autoplay = false,
}: ReusableSwiperProps) {
  if (!pagination) {
    return (
      <Box
        sx={{
          //   overflow: "hidden",
          //   display: "grid",
          width: width,
          gridTemplateColumns: {
            xs: `repeat(${slidePerViewXs}, 1fr)`,
            sm: `repeat(${slideperviewMd}, 1fr)`,
            md: `repeat(${slidePerviewLg}, 1fr)`,
          },
          gap: 2,
        }}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box sx={{ width: width, position: "relative", height: height }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        style={{ height: height }}
        // ✅ only add breakpoints if slidesPerView is not 'auto'
        {...(slidePerViewXs !== "auto"
          ? {
            breakpoints: {
              0: {
                slidesPerView: Number(slidePerViewXs),
              },
              768: {
                slidesPerView: slideperviewMd,
              },
              1024: {
                slidesPerView: slidePerviewLg,
              },
            },
          }
          : {})}

        slidesPerView={slidePerViewXs === "auto" ? "auto" : Number(slidePerViewXs)}



        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : false
        }
        // اتصال دکمه‌های سفارشی به Swiper
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={dots ? { clickable: true } : false}
        className="my-reusable-swiper"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide
            key={"swiperProducts" + index}
            style={{ height: "auto", width: 'fit-content' }}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* دکمه‌های سفارشی Next/Prev */}
      {navigation && (
        <>
          <IconButton
            className="swiper-button-prev-custom"
            sx={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "white",
              "&:hover": { bgcolor: "grey.200" },
              border: "1px solid rgba(0, 0, 0, 0.23)",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <IconButton
            className="swiper-button-next-custom"
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "white",
              "&:hover": { bgcolor: "grey.200" },
              border: "1px solid rgba(0, 0, 0, 0.23)",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </>
      )}
      <style jsx global>{`
        .my-reusable-swiper .swiper-pagination {
          margin-top: 30px; /* 👈 space between slides and dots */
          position: relative; /* keep it below, not overlapping */
        }
        .my-reusable-swiper .swiper-pagination-bullet-active {
          background: #ff8c0b; /* active dot color */
        }
        .my-reusable-swiper .swiper-slide {
          height: auto;
          box-sizing: border-box;
        }
        .my-reusable-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
        }
      `}</style>
    </Box>
  );
}
