"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Stack, Grid, Box, Typography } from "@mui/material";
import PassengersDetails from "./passengersDetails";
import ResponsivePassengerDetails from "./responsivePassemgerDetails";
import PriceCardHotel from "./priceCardHotel";
import HotelDetailsCart from "./HotelDetailsCart";
import TextNumber from "@/components/shared/textNumber";
import HowToPay from "@/components/shared/cart/howToPay/howToPay";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import PagesIcon from "@mui/icons-material/Pages";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LateHotel from "./lateHotel";
import { useAtom } from "jotai";
import { hasFooterResponsive } from "@/store/atomHeader";
import Discount from "@/components/shared/cart/discount";
import PassengerDetails from "@/components/shared/cart/passengerDetails";
import TourDetailsReserve from "@/components/shared/cart/tourDetailsReserve";
import TicketDetailsReserve from "@/components/shared/cart/ticketDetailsReserve";
import HotelReserveStatus from "@/components/shared/sections/reserve/hotelReserveStatus";
import ReservePageBottom from "@/components/shared/bottomNavigation/reservePageBottom";
import NormalListCard from "@/components/shared/cards/hotel/normalListCard";

interface IStep {
  title: string;
  description: string;
  iconPast: ReactNode;
  iconActive: ReactNode;
  iconFuture: ReactNode;
}

export default function ReserveStepper() {
  const [activeStep, setActiveStep] = useState<number>(2);


  // Hotel specific steps
  const hotelSteps = [
    {
      title: "انتخاب هتل",
      description: "جزئیات اتاق‌ها",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
      title: "اطلاعات مسافران",
      description: "مشخصات سرپرست و همراهان",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
      title: "بازبینی اطلاعات",
      description: "بازبینی نهایی",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
      title: "پرداخت آنلاین",
      description: "روش پرداخت",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
      title: "صدور بلیط",
      description: "اتمام رزرو",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
  ];

  return (
    <>
      {/* Mobile Stepper Navigation */}
      <Stack
       alignItems="center"
       sx={{
         p: { lg: 3, xs: 0 },
         alignItems: "center",
         borderRadius: { xs: 0, lg: 2 },
         bgcolor: "#fff",
         border: { xs: "none", lg: "1px solid #EAEAEA" },
         borderBottom: { xs: "1px solid #EAEAEA" },
         width: { lg: "100%", xs: "100dvw" },
         overflow: "hidden",
         mb: 4,
         mt: { xs: 0, lg: 0 },
         display: {
           xs: "flex",
           lg: "none",
         },
       }}
       dir="rtl"
       spacing={3}
       className="xs-fullwidth "
      >
        <Stack
         direction="row"
         alignItems="center"
         spacing={2}
         sx={{
           width: "100%",
           overflowX: { xs: "auto", lg: "visible" },
           scrollbarWidth: "none",
           "&::-webkit-scrollbar": { display: "none" },
           px: { xs: 2, lg: 0 },
           py: { xs: 1, lg: 0 },
         }}
        >
          {hotelSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <Stack
                alignItems="center"
                spacing={1}
                sx={{
                  flexShrink: 0,
                  flexDirection: { xs: "row", lg: "column" },
                  cursor: "pointer",
                  gap: { xs: 2, lg: 1 },
                }}
                onClick={() => setActiveStep(index)}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap={0.8}
                  sx={{ whiteSpace: "nowrap" }}
                >
                  <Box>
                    {index < activeStep
                      ? step.iconPast
                      : index === activeStep
                      ? step.iconActive
                      : step.iconFuture}
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: index === activeStep ? 500 : 500,
                      color:
                        index < activeStep
                          ? "#000E08"
                          : index === activeStep
                          ? "#FF8A00"
                          : "text.disabled",
                    }}
                    className="text-xs! lg:text-sm!"
                  >
                    {step.title}
                  </Typography>
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    color: "#7E8AAB",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    display: { xs: "none", lg: "block" },
                  }}
                >
                  {step.description}
                </Typography>
              </Stack>

              {index < hotelSteps.length - 1 && (
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", lg: "block" },
                      flex: 1,
                      borderTop: `2px dashed ${
                        index < activeStep ? "#FF8A00" : "#E6E6E6"
                      }`,
                      alignSelf: "center",
                    }}
                  />

                  <ArrowBackIcon
                    sx={{
                      display: { xs: "block", lg: "none" },
                      fontSize: "0.9rem",
                      color: index < activeStep ? "#FF8A00" : "#E6E6E6",
                    }}
                  />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Stack>

      {/* Desktop View - All steps visible */}
      <Stack className="mb-16! !hidden lg:!block">
        <Grid
          spacing={2.5}
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { lg: "row", xs: "column" },
          }}
        >
          <Grid
            size={{ lg: 9, xs: 12 }}
            display={"flex"}
            flexDirection={"column"}
            gap={2.5}
          >
            <>
              <TextNumber
                text={"مشخصات سرپرست و همراهان"}
                number={1}
                className="!"
              />
              <PassengersDetails />
            </>

            {/* step 2 */}
            <TextNumber text={"پرداخت"} number={2} className="mt-5!" />
            <HowToPay discount={true} />

            {/* step 3 */}
            <TextNumber
              text={"نگاهی دوباره به اصلاعات هتل"}
              number={3}
              className="mt-5!"
            />
            <HotelDetailsCart />
          </Grid>
          <Grid size={{ lg: 3, xs: 12 }} className="!hidden lg:!block">
            <Stack
              sx={{
                position: "sticky",
                top: 10,
                zIndex: 100,
                alignSelf: "flex-start",
              }}
            >
              <PriceCardHotel />
              <LateHotel />
            </Stack>
          </Grid>
        </Grid>
        <Stack></Stack>
      </Stack>

      {/* Mobile View - Show only active step */}
      <Stack className="md:hidden!">
        {activeStep === 1 && (
          <Stack sx={{ mt: 0, gap: 2.5, px: 2 }}>
            <ResponsivePassengerDetails />
            <LateHotel />
          </Stack>
        )}
        {activeStep === 2 && (
          <Stack sx={{ mt: 0, gap: 2.5, px: 2 }}>
            <HowToPay />
            <Discount/>
            <PassengerDetails/>
            <HotelDetailsCart/>
          </Stack>
        )}
        {activeStep === 4 && (
          <Stack sx={{ mt: 0, gap: 2.5}}>
            <HotelReserveStatus isSuccess={true} code={1234}/>
          </Stack>
        )}
        {activeStep === 3 && (
          <Stack sx={{ mt: 0, gap: 2.5, px: 2 }}>
            {/* <HowToPay />
            <Discount/> */}
          </Stack>
        )}
        {/* {activeStep === 4 && (
          <Stack sx={{ mt: 0, gap: 2.5, px: 2 }}>
            <ReserveStatus isSuccess={true} code={1234}/>
          </Stack>
        )} */}
      </Stack>
      <ReservePageBottom step={activeStep} setStep={setActiveStep} totalPrice="333"/>
    </>
  );
}

