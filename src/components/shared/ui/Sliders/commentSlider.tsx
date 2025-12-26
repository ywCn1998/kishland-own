"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CommentCard from "../../cards/commentCard";
import { Box, Stack, Typography } from "@mui/material";
import styles from "@/components/shared/EmblaCarousel/products/embla.module.css";
import ReusableSwiper from "@/components/shared/reusableSwiper";
import GoldenText from "../GoldenText";

// 3. -------- کامپوننت کاروسل محصولات --------
export default function CommentSlider({ }) {
  // تنظیمات Embla Carousel برای حالت راست‌چین
  // const [emblaRef] = useEmblaCarousel({ direction: 'rtl', loop: false, align: 'start' });

  return (
    <>
      <Stack
        className="flex! flex-col! justify-center! items-center! ps-4!"
        mt={10}
        spacing={2}
      >
        <Typography className="text-slate-400! z-10! text-sm! md:text-lg! reveal-down">
          نظر کاربران درباره ما
        </Typography>
        <Typography className="text-2xl! md:text-5xl! font-bold! reveal-down">
          <GoldenText text={
            <>
              <span className="text-black!">ببین </span> بقیه <span className="text-black!">چی میگن؟!</span>
            </>
          }
            bgColor="orange" textColor="secondary" bgWidth="120%" bgColorSx={{ left: -50, bottom: -10 }} />
        </Typography>
      </Stack>
      <Box
        sx={{
          width: "100%",
          mx: "auto",
          py: 4,
          display: "flex",
          flexDirection: "row",
          borderRadius: 2,
          marginTop: { xs: 1, md: 5 },
        }}
        className="reveal-down"
      >


        <ReusableSwiper
          dots={true}
          slidePerviewLg={4}
          spaceBetween={30}
          pagination={true}
        >
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Stack className="pt-3!">
                <CommentCard />
              </Stack>
            ))}
        </ReusableSwiper>
      </Box>
    </>
  );
}
