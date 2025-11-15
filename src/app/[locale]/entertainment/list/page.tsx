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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";
import FilterContainer from "./_components/filterBox/_components/filterContainer";
import { useAtom } from "jotai";
import {
  headerDateAtom,
  headerLeftItemAtom,
  headerTitleAtom,
} from "@/store/atomHeader";
import MainBanner from "@/components/shared/_components/banner/mainBanner";

export default function Home() {
  const [, setHeaderTitle] = useAtom(headerTitleAtom);
  const [, setDate] = useAtom(headerDateAtom);
  const [, setLefItem] = useAtom(headerLeftItemAtom);

  useEffect(() => {
    setHeaderTitle("کشتی تفریحی امیر کبیر ");
    setDate("4 فروردین 1404 ");
    setLefItem(<ListAlt />);
  }, []);

  const [OpenMdl, setOpenMdl] = useState(false);

  const router = useRouter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="mb-10!"
    >
      <Container maxWidth="xl" sx={{ marginBottom: 5 }} disableGutters>
        <Stack className="hidden! md:block!">
          <BreadCrumbFa />
        </Stack>
        <Stack className="md:hidden! flex! ">
          <SubCategorySwiper />
        </Stack>
        <Stack className="md:p-6! p-0! md:mt-0! mt-4!">
          <CategorySlider />
        </Stack>
        <Grid container className="hidden! md:flex!">
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
        <Stack className="hidden! md:flex!">
          <SubCategorySwiper />
        </Stack>

        <Stack className="mt-20 md:flex! flex-row! items-center justify-between hidden!">
          <Typography>انتخاب هتل </Typography>

          <Typography variant="subtitle1">25 تفریح موجود</Typography>
        </Stack>

        <Grid container className="md:mt-4  mt-[-40] " spacing={2}>
          <Grid
            size={{ md: 3 }}
            className="md:block! flex! flex-row! gap-2! md:p-0! p-5!"
          >
            <Grid className="md:hidden!">
              <BlitType />
            </Grid>
            <Grid className="md:border-1 border-slate-200  rounded-xl md:p-4">
              <FilterContainer />
            </Grid>
          </Grid>

          <Grid size={{ md: 9 }} className="md:mt-0 mt-[-40]">
            <Grid size={{ md: 12 }} spacing={3} container>
              <Grid size={{ md: 10.5 }} className="hidden! md:block!">
                <BlitType />
              </Grid>
              <Grid
                size={{ md: 1.5 }}
                className="border-1 border-slate-200 rounded-2xl   h-16 hidden! md:block! "
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

            <Grid size={12} container spacing={2} className="p-6! md:p-0!">
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
              <MainBanner hasBannerInDesktop={false} href="/fa/entertainment/list"/>
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
              <Stack>
                <img
                  src={"/images/entertainment/list/buytwo.png"}
                  className="w-100! md:hidden!"
                />
              </Stack>
              <Grid
                size={{ md: 12 }}
                container
                spacing={3}
                className="bg-[#F0F7FF]! p-6! rounded-3xl hidden! md:flex!"
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
                  className="w-full! rounded-2xl hidden! md:block!"
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
