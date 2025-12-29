
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";
import { Container, Stack } from "@mui/material";
import React from "react";
import YouMayLoveSection from "@/components/shared/sections/recommendations/youMayLoveSection";
import {
  ExtraFooterInformation,
  OfferBanner,
} from "@/components/shared/ui";
import ReserveStepper from "./_components/reserveStepper";
import HideFooterClient from "@/components/shared/footer/hideFooterClient";
import TotalResponsive from "@/components/shared/cart/totalResponsive";


export default function Home() {

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="mb-10! "
    >
      <HideFooterClient/>
      <Container
        maxWidth="xl"
        sx={{
          marginBottom: {xs : 0 , lg : 5},
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
          <ReserveStepper />
        </Stack>
        
        <Stack className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA] lg:rounded-3xl! reveal hidden! md:block!">
          <Container maxWidth="xl">
            <OfferBanner
              responsiveCaption="بهترین ها را در کیش میسازیم برای شما"
              caption=" یه سر به اینا هم بزن بقیه دوست داشتن ..."
              title={" شاید اینا رو دوست داشتی "}
              buttonText={"مشاهده تمام تفریحات"}
              className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA]"
            />
          </Container>
          <Stack sx={{ p: 4, pt: 0 }}>
            <YouMayLoveSection />
          </Stack>
        </Stack>
        <Stack sx={{ mt: 2 }}>
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
