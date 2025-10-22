"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CategoryCard from "./categoryCard";
import { Stack } from "@mui/material";
import ReusableSwiper from "@/components/shared/reusableSwiper";

const entertainment = [
  {
    src: "/images/entertainment/list/ctg2.png",
    title: 'جنگ های شبانه',
    isActive: true,
  },
  {
    src: "/images/entertainment/list/ctg1.png",
    title: 'تفریحات آبی',
    isActive: false,
  },

  {
    src: "/images/entertainment/list/ctg3.png",
    title: 'پارس سافاری',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg4.png",
    title: 'پارک ها',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg5.png",
    title: 'رستوران‌های با موزیک',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg4.png",
    title: 'گشت‌های جزیره',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg4.png",
    title: 'جاذبه‌های تاریخی',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg4.png",
    title: 'ماساژ و ریلکس',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg5.png",
    title: 'رستوران‌های با موزیک',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg4.png",
    title: 'گشت‌های جزیره',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg4.png",
    title: 'جاذبه‌های تاریخی',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg4.png",
    title: 'ماساژ و ریلکس',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg4.png",
    title: 'گشت‌های جزیره',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg4.png",
    title: 'جاذبه‌های تاریخی',
    isActive: false,
  },
  {
    src: "/images/entertainment/list/ctg4.png",
    title: 'ماساژ و ریلکس',
    isActive: false,
  },
];


interface categorySwiper {
  fullWidth ?: boolean;
}
export default function CategorySwiper({fullWidth = false} : categorySwiper) {
  return (
    <Stack
      component="header"
      alignItems={"center"}
      className={` rounded-lg  mt-10! ${fullWidth ? "sm-fullwidth " :  "bg-white!"} reveal `}
    >
      <ReusableSwiper slidePerViewXs='auto' spaceBetween={20} pagination={true} dots={false} autoplay={false}>
        {entertainment.map((item, i) => (
          <CategoryCard {...item} key={'category' + i} />
        ))}
      </ReusableSwiper>
    </Stack>
  );
}
