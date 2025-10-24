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
import {
  CategorySlider,
  ExtraFooterInformation,
} from "@/components/shared/_components";
import PaginationComponent from "@/components/shared/Pagination";
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";
import FilterBox from "../../entertainment/list/_components/filterBox";
import { BlitType } from "../../entertainment/list/_components/blitType";
import { AirCard } from "../../entertainment/list/_components/blitType/aircard";
import HotelBannerSearchTicketSection from "@/components/shared/_components/banner/hotelBannerSearchTicket";

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
     
        <Stack className="mt-20!">
          <CategorySlider />
        </Stack>

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
        <ExtraFooterInformation companies={false} honerOfColobrate={false} />
      </Container>
    </>
  );
}
