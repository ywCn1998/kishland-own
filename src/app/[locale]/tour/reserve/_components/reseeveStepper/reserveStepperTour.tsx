"use client";

import React, { ReactNode, useState } from "react";
import { Stack, Grid, Box, Typography } from "@mui/material";
import Step1 from "./step1";
import PriceCard from "@/components/shared/cards/cart/PriceCard";
import Step3 from "./step3";
import TextNumber from "@/components/shared/textNumber";
import HowToPay from "@/app/[locale]/entertainment/reserve/_components/cart/howToPay/howToPay";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import PagesIcon from "@mui/icons-material/Pages";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Discount from "@/app/[locale]/entertainment/reserve/_components/cart/discount";
import CustomAccordion from "@/components/shared/collapse/collapse";
import { SelectedTourCard } from "@/components/shared/cards/tour/selectedTourCard";
import PassengerDetails from "../cart/passengerDetails";
import TourDetails from "../../status/_components/tourDetails";
import TourDetailsReserve from "../cart/tourDetailsReserve";
import ReserveStatus from "../../status/_components/ReserveStatus";
import TicketDetailsReserve from "../cart/ticketDetailsReserve";

interface IStep {
  title: string;
  description: string;
  iconPast: ReactNode;
  iconActive: ReactNode;
  iconFuture: ReactNode;
}

export default function ReserveStepper({ steps }: { steps: IStep[] }) {
  const [activeStep, setActiveStep] = useState<number>(1);

  // Tour specific steps
  const mobilesSteps = [];
  const tourSteps = [
    {
      title: "مشخصات مسافران",
      description: "اطلاعات مسافران",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
      title: "پرداخت",
      description: "روش پرداخت",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
      title: "نگاهی دوباره به وضعیت تور",
      description: "بازبینی نهایی",
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
          p: { lg: 0, xs: 0 },
          alignItems: "center",
          borderRadius: { xs: 0, lg: 2 },
          bgcolor: "#fff",
          border: { xs: "none", lg: "none" },
          borderBottom: { xs: "1px solid #EAEAEA", lg: "none" },
          width: { lg: "100%", xs: "100dvw" },
          overflow: "hidden",
          mb: { xs: 4, lg: 0 },
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
          {tourSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <Stack
                alignItems="center"
                spacing={1}
                sx={{
                  flexShrink: 0,
                  flexDirection: { xs: "row", lg: "column" },
                  cursor: "pointer",
                }}
                onClick={() => setActiveStep(index)}
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
                    fontWeight: index === activeStep ? 500 : 400,
                    color:
                      index < activeStep
                        ? "#000E08"
                        : index === activeStep
                        ? "#FF8A00"
                        : "text.disabled",
                    whiteSpace: "nowrap",
                  }}
                  className="text-xs! lg:text-sm!"
                >
                  {step.title}
                </Typography>

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

              {index < tourSteps.length - 1 && (
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
              <TextNumber number={1} text="مشخصات مسافران" className="!" />
              <Step1 />
            </>

            {/* step 2 */}
            <TextNumber number={2} text="پرداخت" className="mt-5!" />
            <HowToPay discount={true} />

            {/* step 3 */}
            <TextNumber
              number={3}
              text="نگاهی دوباره به وضعیت تور"
              className="mt-5!"
            />
            <Step3 />
          </Grid>
          <Grid size={{ lg: 3, xs: 12 }}>
            <PriceCard isReserveTour={true} />
          </Grid>
        </Grid>
        <Stack></Stack>
      </Stack>

      {/* Mobile View - Show only active step */}
      <Stack className="md:hidden!">
        {activeStep === 0 && (
          <Stack sx={{ mt: 0, gap: 2.5, px: 2 }}>
            <Step1 />
          </Stack>
        )}
        {activeStep === 1 && (
          <Stack sx={{ mt: 0, gap: 2.5, px: 2 }}>
            <HowToPay />
            <Discount />
            <PassengerDetails/>
            <TourDetailsReserve/>
            <TicketDetailsReserve/>
          </Stack>
        )}
        {activeStep === 2 && (
            <ReserveStatus isSuccess={true} code={1234}/>
        )}
      </Stack>
    </>
  );
}
