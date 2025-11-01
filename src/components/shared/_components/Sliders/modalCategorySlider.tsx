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

export default function ModalCategorySlider() {
  return (
    <Stack
      component="header"
      alignItems={"center"}
      className="border-1  border-slate-200 rounded-2xl p-3 mb-10! bg-white! reveal "
    >

      <ReusableSwiper slidePerviewLg={9} slidePerViewXs={9} spaceBetween={5} pagination={true} dots={false} autoplay={true}>
        {entertainment.map((item, i) => (
          <CategoryCard {...item} />
        ))}
      </ReusableSwiper>
    </Stack>
  );
}
