"use client";

import React, { useState } from "react";
import { Box, Stack, Typography, Button, Grid } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import PagesIcon from "@mui/icons-material/Pages";
import EmptyCartSection from "@/components/shared/cart/emptyCartSection";
import Step1 from "./step1";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Step2 from "./step2";

export default function ReserveStepper() {
  const steps = [
    {
      title: "انتخاب تفریح",
      description: "توضیح این مرحله",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
      title: "سبد خرید",
      description: "مشاهده تفریحات",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
      title: "بازبینی خرید",
      description: "توضیح این مرحله",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
      title: "پرداخت آنلاین",
      description: "درگاه پرداخت کلیه کارت‌های شتاب",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
      title: "دریافت بلیط",
      description: "خوش بگذره :)",
      iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
      iconActive: (
        <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
      ),
      iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
  ];

  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <>
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
            xs: activeStep === 0 ? "none" : "flex",
            lg: "flex",
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
          {steps.map((step, index) => (
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

              {index < steps.length - 1 && (
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

      <Stack className="!hidden lg:block!">
        {activeStep === 0 ? (
          <EmptyCartSection
            variant="entertainment"
            onNext={() =>
              setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
          />
        ) : activeStep === 1 ? (
          <Step1
            onNext={() =>
              setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
          />
        ) : (
          activeStep === 2 && (
            <Step2
              onNext={() =>
                setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
              }
            />
          )
        )}
      </Stack>
      <Stack className=" lg:hidden!">
         {activeStep === 0 ? (
          <EmptyCartSection
            variant="entertainment"
            onNext={() =>
              setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
          />
        ) : activeStep === 1 ? (
          <Step1
            onNext={() =>
              setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
          />
        ) : (
          activeStep === 2 && (
            <Step2
              onNext={() =>
                setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
              }
            />
          )
        )}
      </Stack>
    </>
  );
}
