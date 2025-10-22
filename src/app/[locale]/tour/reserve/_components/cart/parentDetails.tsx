"use client"
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import FormProvider from "@/providers/FormProvider";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

export default function ParentDetails() {
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <Stack
        component="header"
       className="lg:border-1 border-slate-200 rounded-[16px] p-4 bg-white! reveal flex flex-col lg:gap-3 "
      >
        <Typography variant="body2" fontWeight={500}>مشخصات سرپرست</Typography>
        <FormProvider methods={methods} >

          <Grid sx={{display : "flex" , gap : {xs: 1.5 , lg : 3} , flexDirection : {xs : "column" , lg: "row"}}}>
            <RHFTextInput name="phone" placeholder="شماره تماس" startIcon={<PersonOutlinedIcon/>}/>
            <RHFTextInput name="name" placeholder="نام به فارسی" startIcon={<PersonOutlinedIcon/>}/>
            <RHFTextInput name="familyName" placeholder="نام خانوادگی به فارسی" startIcon={<PersonOutlinedIcon/>}/>
          </Grid>
        </FormProvider>
      </Stack>
    </>
  );
}
