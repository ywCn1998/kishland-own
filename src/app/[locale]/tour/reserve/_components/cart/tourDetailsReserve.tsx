import CustomAccordion from "@/components/shared/collapse/collapse";
import { Button, Divider, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import SportsTennisOutlinedIcon from "@mui/icons-material/SportsTennisOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextIcon from "@/components/shared/textIcon";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import ReusableSwiper from "@/components/shared/reusableSwiper";
import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import Image from "next/image";
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';

const tourDetail = {
  image: "/images/tourdetails.png",
  icons: [
    <AirplaneTicketOutlinedIcon />,
    <WifiOutlinedIcon />,
    <DirectionsBoatOutlinedIcon />,
    <LocalCafeOutlinedIcon />,
    <SportsTennisOutlinedIcon />,
  ],
  suggested: 34,
  rating: 4.9,
  title: "تور ۴ روز هتل کوروش",
  des: "تور کیش از تهران با اقامت ۴ شب در هتل ۵ ستاره کوروش، همراه با بلیط رفت و برگشت هوایی و امکانات رفاهی لوکس.",
  price: "8,500,000 ",
};

export default function TourDetailsReserve() {
  return (
    <Stack className="border-1! border-slate-200! rounded-2xl! px-4 pt-5">
      <CustomAccordion
        title={" مشخصات تور"}
        titleClass="text-xl!"
        defaultExpanded={true}
      >
        <Stack className="w-full! h-[160px]! relative! rounded-xl">
          <Image alt="ship" src="/images/ship-view.png" fill />
        </Stack>
        <Stack
          className="flex! flex-row! justify-center! items-center! gap-7!"
          mt={2}
        >
          <WifiOutlinedIcon sx={{ fontSize: 22, color: "text.secondary" }} />
          <LuggageOutlinedIcon sx={{ fontSize: 22, color: "text.secondary" }} />
          <AirplaneTicketOutlinedIcon
            sx={{ fontSize: 22, color: "text.secondary" }}
          />
          <LocalCafeOutlinedIcon
            sx={{ fontSize: 22, color: "text.secondary" }}
          />
          <LocalCafeOutlinedIcon
            sx={{ fontSize: 22, color: "text.secondary" }}
          />
        </Stack>

        <Stack className="flex! flex-row! justify-start! items-center!" mt={2}>
          <TextIcon
            startIcon={<FavoriteOutlinedIcon className="text-lg!" />}
            className="text-sm!"
            text="34 گردشگر پیشنهادمی کنند"
            sx={{ color: "success.main" }}
          />
          <Divider
            orientation="vertical"
            className="h-7! bg-slate-200! mx-4!"
          />
          <TextIcon
            sx={{ color: "primary.100" }}
            startIcon={<StarOutlineOutlinedIcon />}
            text="4.9"
            className="ml-6!"
          />
        </Stack>

        <Stack className="flex! flex-col! gap-3!" mt={2}>
          <Typography className="font-semibold! text-xl!" mb={1}>
            تور ۴ روز هتل کوروش
          </Typography>
          <Typography color="text.secondary" className="text-xs! leading-6!">
            تور کیش از تهران با اقامت ۴ شب در هتل ۵ ستاره کوروش، همراه با بلیط
            رفت و برگشت هوایی و امکانات رفاهی لوکس.
          </Typography>
        </Stack>
        <ReusableSwiper
          dots={false}
          slidePerviewLg={9}
          slidePerViewXs={2.5}
          spaceBetween={10}
          pagination={true}
        >
          {/* <Button
            variant="outlined"
            className="rounded-xl! text-xs! text-slate-400! py-3! px-3! text-nowrap!"
            startIcon={<BedroomParentOutlinedIcon />}
          >
            ترانسفر فرودگاهی (رایگان)
          </Button> */}
          <Button
            variant="outlined"
            className="rounded-xl! text-xs! text-slate-400! py-3! px-3! text-nowrap!"
          >
            شام و صبحانه
          </Button>
          <Button
            variant="outlined"
            className="rounded-xl! text-xs! text-slate-400! py-3! px-3! text-nowrap!"
            startIcon={<WifiOutlinedIcon />}
          >
            اینترنت رایگان
          </Button>
        </ReusableSwiper>

        <Stack className="">
          <Stack
            className="flex! flex-row! justify-between! items-center"
            my={2}
          >
            <Typography fontSize={10} color="text.secondary">
              {" "}
              قیمت هر نفر برای ۳ شب و ۲ روز
            </Typography>
            <Typography
              color="secondary.main"
              className="text-xl!"
              fontWeight={700}
            >
              850000 تومان
            </Typography>
          </Stack>
        </Stack>
      </CustomAccordion>
    </Stack>
  );
}
