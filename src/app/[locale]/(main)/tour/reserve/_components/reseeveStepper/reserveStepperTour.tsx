"use client";

import React, { ReactNode, useState, useRef, useEffect } from "react";
import { Stack, Grid, Box, Typography } from "@mui/material";
import Step1 from "./step1";
import PriceCard from "@/components/shared/cards/cart/PriceCard";
import Step3 from "./step3";
import TextNumber from "@/components/shared/textNumber";
import HowToPay from "@/components/shared/cart/howToPay/howToPay";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import PagesIcon from "@mui/icons-material/Pages";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Discount from "@/components/shared/cart/discount";
import CustomAccordion from "@/components/shared/collapse/collapse";
import { SelectedTourCard } from "@/components/shared/cards/tour/selectedTourCard";
import PassengerDetails from "../cart/passengerDetails";
import TourDetails from "../../status/_components/tourDetails";
import TourDetailsReserve from "../cart/tourDetailsReserve";
import ReserveStatus from "@/components/shared/sections/reserve/ReserveStatus";
import TicketDetailsReserve from "../cart/ticketDetailsReserve";
import ReservePageBottom from "@/components/shared/bottomNavigation/reservePageBottom";

interface IStep {
  title: string;
  description: string;
  iconPast: ReactNode;
  iconActive: ReactNode;
  iconFuture: ReactNode;
}

export default function ReserveStepper({ steps }: { steps: IStep[] }) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const stickyElementRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const [stickyStyle, setStickyStyle] = useState<{
    position: "fixed" | "absolute" | "relative";
    top?: number;
    left?: number;
    width?: number;
  }>({ position: "relative" });

  useEffect(() => {
    const topOffset = 20;

    const handleScroll = () => {
      if (!stickyContainerRef.current || !stickyElementRef.current || !leftColumnRef.current) return;
      
      const containerRect = stickyContainerRef.current.getBoundingClientRect();
      const leftColumnRect = leftColumnRef.current.getBoundingClientRect();
      const elementHeight = stickyElementRef.current.offsetHeight;
      
      // Use left column bottom as the boundary
      const leftColumnBottom = leftColumnRect.bottom;
      
      // When container top reaches the offset, make it fixed
      const shouldBeFixed = containerRect.top <= topOffset;
      
      // When left column bottom reaches the bottom of the sticky element, stop it
      const shouldBeAbsolute = leftColumnBottom <= topOffset + elementHeight;
      
      if (shouldBeFixed && !shouldBeAbsolute) {
        setStickyStyle({
          position: "fixed",
          top: topOffset,
          left: containerRect.left,
          width: containerRect.width,
        });
      } else if (shouldBeAbsolute) {
        // Position it at the bottom of the left column
        const containerTop = stickyContainerRef.current.getBoundingClientRect().top;
        const absoluteTop = leftColumnRef.current.offsetHeight - elementHeight;
        setStickyStyle({
          position: "absolute",
          top: absoluteTop > 0 ? absoluteTop : 0,
          width: containerRect.width,
        });
      } else {
        setStickyStyle({ position: "relative" });
      }
    };

    // Initial call
    const timeoutId = setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
                      borderTop: `2px dashed ${index < activeStep ? "#FF8A00" : "#E6E6E6"
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
      <Stack className="mb-16! hidden! lg:!block">
        <Stack
          direction="row"
          spacing={2.5}
          sx={{
            display: { lg: "flex", xs: "none" },
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Box
            ref={leftColumnRef}
            sx={{
              display: { lg: "flex", xs: "none" },
              flexDirection: "column",
              gap: 2.5,
              flex: "0 0 75%",
              width: "75%",
              maxWidth: "75%",
            }}
          >
            <>
              <TextNumber number={1} text="مشخصات مسافران" className="!" />
              <Step1 />
            </>

            <TextNumber number={2} text="پرداخت" className="mt-5!" />
            <HowToPay discount />

            <TextNumber number={3} text="نگاهی دوباره به وضعیت تور" className="mt-5!" />
            <Step3 />
          </Box>

          <Box
            ref={stickyContainerRef}
            sx={{
              display: { xs: "none", lg: "block" },
              flex: "0 0 25%",
              width: "25%",
              maxWidth: "25%",
              position: "relative",
              alignSelf: "stretch", // Match left column height
            }}
          >
            <Box
              ref={stickyElementRef}
              sx={{
                position: stickyStyle.position,
                top: stickyStyle.top !== undefined ? stickyStyle.top : "auto",
                right: stickyStyle.left !== undefined ? stickyStyle.left : "auto",
                width: stickyStyle.width !== undefined ? stickyStyle.width : "100%",
                zIndex: stickyStyle.position === "fixed" ? 100 : 0,
                transition: "none",
              }}
            >
              <PriceCard isReserveTour />
            </Box>
          </Box>
        </Stack>
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
            <PassengerDetails />
            <TourDetailsReserve />
            <TicketDetailsReserve />
          </Stack>
        )}
        {activeStep === 2 && (
          <ReserveStatus isSuccess={true} code={1234} />
        )}
      </Stack>
      <ReservePageBottom step={activeStep} setStep={setActiveStep} totalPrice="333" />
    </>
  );
}
