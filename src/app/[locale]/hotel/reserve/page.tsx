import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";
import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import PassengersDetails from "./_components/passengersDetails";
import HowToPay from "../../entertainment/reserve/_components/cart/howToPay/howToPay";
import HotelDetailsCart from "./_components/HotelDetailsCart";
import YouMayLoveSection from "../../entertainment/reserve/_components/youMayLoveSection";
import {
  ExtraFooterInformation,
  OfferBanner,
} from "@/components/shared/_components";
import LateHotel from "./_components/lateHotel";
import PriceCardHotel from "./_components/priceCardHotel";
import TextNumber from "@/components/shared/textNumber";

export default function Home() {
  return (
    <div>
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
        <Grid
          spacing={2.5}
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: "-7",
            flexDirection: { lg: "row", xs: "column" },
          }}
        >
          <Grid
            size={{ lg: 9, xs: 12 }}
            display={"flex"}
            flexDirection={"column"}
            gap={2.5}
          >
            <Stack className="flex-col! gap-4! reveal">
              <TextNumber text={"مشخصات سرپرست و همراهان"} number={1} />
              <PassengersDetails />
            </Stack>
            <Stack className="flex-col! gap-4! reveal">
              <TextNumber text={"پرداخت"} number={2} />
              <HowToPay discount={true} />
            </Stack>
               <Stack className="flex-col! gap-4! reveal">
              <TextNumber text={"نگاهی دوباره به اصلاعات هتل"} number={3} />
            <HotelDetailsCart />
            </Stack>

          </Grid>
          <Grid size={{ lg: 3, xs: 12 }} className="!hidden lg:!block">
            <PriceCardHotel />
            <LateHotel />
          </Grid>
        </Grid>

        <Stack className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA] lg:rounded-3xl! reveal xs-fullwidth !hidden lg:!flex mt-4!">
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
        <ExtraFooterInformation companies={false} honerOfColobrate={false} />
      </Container>
    </div>
  );
}
