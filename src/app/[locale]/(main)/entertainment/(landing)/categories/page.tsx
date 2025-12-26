"use client";

import {
  KeyboardBackspaceOutlined,
  Menu,
  WindowOutlined,
} from "@mui/icons-material";
import {
  Accordion,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CategorySwiper from "../../list/_components/category";
import {
  CategorySlider,
  ExtraFooterInformation,
} from "@/components/shared/ui";
import FilterBox from "../../list/_components/filterBox";
import { BlitType } from "../../list/_components/blitType";
import { AirCard } from "../../list/_components/blitType/aircard";
import LearnMoreSafari from "./_components/learnMoreSafari";
import PhoneIcon from "@mui/icons-material/Phone";
import CategoryDetailCards from "./_components/categoryDetailCards";
import PaginationComponent from "@/components/shared/Pagination";
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";

export default function Category() {
  const [OpenMdl, setOpenMdl] = useState(false);
  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: 5 }}>
        <Stack
          className="mb-10"
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <BreadCrumbFa />
    
        </Stack>
        <CategorySwiper fullWidth={true} />
        <Stack className="mt-20!">
          <CategorySlider />
        </Stack>

        <Grid container spacing={10} className="mt-20!">
          <Grid size={6} className="flex! flex-col! gap-6! reveal ">
            <Typography variant="title">
              تجربه‌ای هیجان‌انگیز از سافاری در دل جزیره{" "}
            </Typography>
            <Typography
              variant="sub_title"
              className=" text-slate-400 leading-14 reveal"
            >
              با ماشین‌های آفرود قدرتمند، تپه‌های شنی و مسیرهای ماجراجویانه را
              در کیش فتح کنید و لحظاتی پر از هیجان و آدرنالین را تجربه کنید.
            </Typography>
            <Grid className="w-full! flex! gap-6! reveal">
              <Button
                variant="outlined"
                size="large"
                className="w-[50%] rounded-2xl! py-5! text-background!"
                startIcon={<PhoneIcon />}
              >
                <Typography className=" text-lg!"> دریافت مشاوره</Typography>
              </Button>
              <Button
                variant="contained"
                size="large"
                className="w-[50%] rounded-2xl! "
              >
                <Typography className="text-white! text-lg!">
                  لیست پکیج ها
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid size={6}>
            <img
              src={"/images/entertainment/landing/safarii.png"}
              className="h-[555px]! w-full! animate-slide-in-left ! "
              // className="w-24! h-[128px]! absolute! right-[-20px] top-[60px] z-40"
              alt="fd"
            />
          </Grid>
        </Grid>
        <Grid container className="mt-16" spacing={2}>
          <Grid size={{ md: 3 }}>
            <Stack className="border-1 border-slate-200  rounded-xl p-4">
              <FilterBox />
            </Stack>
          </Grid>

          <Grid size={{ md: 9 }}>
            <Grid size={{ md: 12 }} spacing={3} container>
              <Grid size={{ md: 12 }}>
                <BlitType />
              </Grid>
            </Grid>

            <Grid size={{ md: 12 }} container spacing={2}>
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
              <img
                src={"/images/entertainment/landing/tourwithfamily.png"}
                className="w-full! rounded-2xl "
              />

              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />

              <img
                src={"/images/entertainment/landing/tourwithfamily.png"}
                className="w-full! rounded-2xl "
              />

              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
              <AirCard onClick={setOpenMdl} />
            </Grid>
            <PaginationComponent
              totalItems={40}
              pageSize={20}
              currentPage={2}
              onPageChange={() => {}}
            />
          </Grid>
        </Grid>
        <Stack className="mt-16!">
          <LearnMoreSafari />
        </Stack>
        <ExtraFooterInformation companies={false} honerOfColobrate={false} />
      </Container>
    </>
  );
}
