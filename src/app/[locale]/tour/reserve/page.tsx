import {
  ExtraFooterInformation,
  OfferBanner,
} from "@/components/shared/_components";
import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import PagesIcon from "@mui/icons-material/Pages";

import YouMayLoveSection from "../../entertainment/reserve/_components/youMayLoveSection";
import ReserveStepper from "./_components/reseeveStepper/reserveStepperTour";
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";

const steps = [
  {
    title: "انتخاب تفریح",
    description: "توضیح این مرحله",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
  {
    title: "سبد خرید",
    description: "مشاهده تفریحات",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
  {
    title: "بازبینی خرید",
    description: "توضیح این مرحله",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
  {
    title: "پرداخت آنلاین",
    description: "درگاه پرداخت کلیه کارت‌های شتاب",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
  {
    title: "دریافت بلیط",
    description: "خوش بگذره :)",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
];

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", }}
      className="mb-10!"
    >
      <Container
        maxWidth="xl"
        sx={{
          marginBottom: 5,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <Stack
          display={{ xs: "none", lg: "flex" }}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            display={"flex"}
            flexDirection={"row"}
            className="w-full!"
          >
            <BreadCrumbFa />
          </Stack>

        </Stack>
        <Stack className="md:mt-[10px]! mt-0! ">
          <ReserveStepper steps={steps} />
        </Stack>
        <Stack className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA] lg:rounded-3xl! reveal hidden! md:block!" >
          <Container maxWidth="xl" >
            <OfferBanner
              responsiveCaption="بهترین ها را در کیش میسازیم برای شما"
              caption=" یه سر به اینا هم بزن بقیه دوست داشتن ..."
              title={" شاید اینا رو دوست داشتی "}
              buttonText={"مشاهده تمام تفریحات"}
              className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA]"
            />
          </Container>
          <Stack sx={{ p: 4, pt: 0 }} >
            <YouMayLoveSection />
          </Stack>
        </Stack>
        <Stack sx={{ mt : {xs : 2 , lg : -10} }}>
          <ExtraFooterInformation
            honerOfColobrate={false}
            moreToRead={true}
            companies={false}
          />
        </Stack>
      </Container>
    </div>
  );
}
