"use client";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import FormProvider from "@/providers/FormProvider";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

export default function ParentDetails() {
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <Stack
        component="header"
        className="lg:border-1 border-slate-200 rounded-[16px] lg:!p-4 p-2! bg-white! reveal flex flex-col gap-3! lg:gap-4! "
      >
        <Typography fontWeight={500} className="!text-lg lg:!text-xl">
          مشخصات سرپرست
        </Typography>
        <FormProvider methods={methods}>
          <Grid
            sx={{
              display: "flex",
              gap: { xs: 2, lg: 3 },
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <RHFTextInput
              name="phone"
              placeholder="شماره تماس"
              startIcon={<PersonOutlinedIcon />}
            />
            <RHFTextInput
              name="name"
              placeholder="نام به فارسی"
              startIcon={<PersonOutlinedIcon />}
            />
            <Grid className="!block lg:!hidden">
              <RHFTextInput
                name="birthDate"
                placeholder="تاریخ تولد "
                startIcon={<PersonOutlinedIcon />}
              />
            </Grid>
            <RHFTextInput
              name="familyName"
              placeholder="نام خانوادگی به فارسی"
              startIcon={<PersonOutlinedIcon />}
            />
          </Grid>
        </FormProvider>
      </Stack>
    </>
  );
}

