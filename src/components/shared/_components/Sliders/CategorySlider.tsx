"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CategoryCard from "../../cards/categoryCard";
import { Stack } from "@mui/material";
import ReusableSwiper from "@/components/shared/reusableSwiper";

const entertainment = [
  {
    src: "/images/intertainment1.png",
    isActive: true,
  },
  {
    src: "/images/intertainment2.png",
    isActive: true,
  },
  {
    src: "/images/intertainment3.png",
    isActive: false,
  },
  {
    src: "/images/intertainment4.png",
    isActive: false,
  },
  {
    src: "/images/intertainment5.png",
    isActive: true,
  },
  {
    src: "/images/intertainment6.png",
    isActive: false,
  },
  {
    src: "/images/intertainment7.png",
    isActive: true,
  },
  {
    src: "/images/intertainment8.png",
    isActive: true,
  },
  {
    src: "/images/intertainment3.png",
    isActive: false,
  },
  {
    src: "/images/intertainment3.png",
    isActive: false,
  },
  {
    src: "/images/intertainment3.png",
    isActive: false,
  },
];

export default function CategorySlider() {
  return (
    <Stack
      component="header"
      alignItems={"center"}
      className="lg:border-1  border-slate-200 lg:rounded-2xl lg:p-3 mb-10! bg-white! reveal xs-fullwidth"
    >

      <ReusableSwiper slidePerviewLg={9} slidePerViewXs={4} spaceBetween={20} pagination={true} dots={false} autoplay={true}>
        {entertainment.map((item, i) => (
          <CategoryCard {...item} />
        ))}
      </ReusableSwiper>
    </Stack>
  );
}
