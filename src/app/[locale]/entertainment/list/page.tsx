"use client";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

import SubCategorySwiper from "./_components/category";
import {
  Delete,
  DeleteOutline,
  KeyboardBackspaceOutlined,
  ListAlt,
  ListAltOutlined,
  Menu,
  WindowOutlined,
} from "@mui/icons-material";
import { TourCard } from "./_components/tourCard";
import { BlitType } from "./_components/blitType";
import { AirCard } from "./_components/blitType/aircard";
import {
  CategorySlider,
  ExtraFooterInformation,
} from "@/components/shared/_components";
import { PingoCard } from "./_components/pingoCard";
import FilterBox from "./_components/filterBox";
import EntertainmentDetailDialog from "./_components/detail";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// { params }: { params: { locale: string } }
export default function Home() {
  // const { locale } = params;
  // setRequestLocale(locale);
  // const t = useTranslations();

  const [OpenMdl, setOpenMdl] = useState(false);

  const router = useRouter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="mb-10!"
    >
      <Container maxWidth="xl" sx={{ marginBottom: 5 }}>
        <Stack
          className="mb-10"
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            display={"flex"}
            flexDirection={"row"}
            className="items-center gap-2 "
          >
            <Typography>صفحه اصلی /</Typography>
            <Typography>تفریحات /</Typography>
            <Typography>لیست تفریحات کیش</Typography>
          </Stack>

          <Stack
            display={"flex"}
            flexDirection={"row"}
            className="items-center"
          >
            <Typography onClick={() => router.back()}>برگشت</Typography>
            <KeyboardBackspaceOutlined />
          </Stack>
        </Stack>

        <CategorySlider />

        <Grid container>
          <Grid
            className="pl-[120px]"
            size={{ md: 8 }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="title">یه دنیا تفریح پرهیجان</Typography>
            <Typography variant="title">تفریحی رویایی در جزیره کیش</Typography>
            <Typography className="mt-8!" variant="sub_title">
              از تله کابین تا کشتی های تفریحی و پارک دلفین، اینجا برای هر
              سلیقه‌ای یه انتخاب خاص وجود داره!
            </Typography>
          </Grid>

          <Grid size={{ md: 4 }}>
            <img
              src={"/images/entertainment/list/persons.png"}
              // className="w-24! h-[128px]! absolute! right-[-20px] top-[60px] z-40"
              alt="fd"
            />
          </Grid>
        </Grid>

        <SubCategorySwiper />

        <Stack className="mt-20 flex flex-row! items-center justify-between">
          <Typography>انتخاب هتل </Typography>

          <Typography variant="subtitle1">25 تفریح موجود</Typography>
        </Stack>

        <Grid container className="mt-4" spacing={2}>
          <Grid size={{ md: 3 }}>
            <Stack className="border-1 border-slate-200  rounded-xl p-4">
              <FilterBox />
            </Stack>
          </Grid>

          <Grid size={{ md: 9 }}>
            <Grid size={{ md: 12 }} spacing={3} container>
              <Grid size={{ md: 10.5 }}>
                <BlitType />
              </Grid>

              <Grid
                size={{ md: 1.5 }}
                className="border-1 border-slate-200 rounded-2xl   h-16  "
              >
                <Stack className="flex flex-row! h-full justify-center">
                  <IconButton>
                    <Menu color="primary" sx={{ fontSize: 32 }} />
                  </IconButton>

                  <IconButton>
                    <WindowOutlined sx={{ fontSize: 32 }} />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>

            <Grid size={{ md: 12 }} container spacing={2}>
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />

              <Grid
                size={{ md: 12 }}
                container
                spacing={3}
                className="bg-[#F0F7FF]! p-6! rounded-3xl "
              >
                <PingoCard
                  img="/images/entertainment/list/pang3.png"
                  title="پکیج اکونومی"
                  description="سفری ساده و کاربردی با امکانات پایه و هزینه‌ای مقرون‌به‌صرفه"
                  last_price="3,050,000"
                  new_price="2,570,000"
                  count_preson={"1"}
                />
                <PingoCard
                  img="/images/entertainment/list/pang2.png"
                  title="پکیج اقتصادی"
                  description="انتخابی هوشمندانه برای سفرهای راحت با خدمات ضروری و قیمت مناسب"
                  last_price="3,050,000"
                  new_price="2,570,000"
                  count_preson={"1"}
                />

                <PingoCard
                  img="/images/entertainment/list/pang1.png"
                  title="پکیج VIP"
                  description="انتخابی هوشمندانه برای سفرهای راحت با خدمات ضروری و قیمت مناسب"
                  last_price="3,050,000"
                  new_price="2,570,000"
                  count_preson={"1"}
                />
              </Grid>

              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />

              <Link href={"/fa/hotel/list"}>
                <img
                  src={"/images/entertainment/list/banner.png"}
                  className="w-full! rounded-2xl "
                />
              </Link>

              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
            </Grid>
          </Grid>
        </Grid>

        <ExtraFooterInformation honerOfColobrate={false} moreToRead={true} />
      </Container>

      <EntertainmentDetailDialog open={OpenMdl} onClose={setOpenMdl} />
    </div>
  );
}
