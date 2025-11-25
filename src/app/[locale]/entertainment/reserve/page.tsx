import {
  ExtraFooterInformation,
  OfferBanner,
} from "@/components/shared/_components";
import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";

import YouMayLoveSection from "./_components/youMayLoveSection";
import ReserveStepper from "./_components/reseeveStepper/reserveStepper";
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" , }}
      className="mb-10!"
    >
      <Container
        maxWidth="xl"
        sx={{
          marginBottom: 5,
          display: "flex",
          flexDirection: "column",
          gap: "80px",
        }}
      >
        <Stack
          display={{xs : "none" , lg : "flex"}}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
        <BreadCrumbFa/>
        
        </Stack>
        <Stack className="md:mt-[-58px]! mt-0! ">
          <ReserveStepper />
        </Stack>
        <Stack className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA] lg:rounded-3xl! reveal xs-fullwidth !hidden lg:!flex" >
          <Container maxWidth="xl" >
            <OfferBanner
              responsiveCaption="بهترین ها را در کیش میسازیم برای شما"
              caption=" یه سر به اینا هم بزن بقیه دوست داشتن ..."
              title={" شاید اینا رو دوست داشتی "}
              buttonText={"مشاهده تمام تفریحات"}
              className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA]"
            />
          </Container>
          <Stack sx={{ p: 4, pt: 0  }}  >
            <YouMayLoveSection />
          </Stack>
        </Stack>
        <Stack sx={{ mt: -10 }} className="!hidden lg:!flex">
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
