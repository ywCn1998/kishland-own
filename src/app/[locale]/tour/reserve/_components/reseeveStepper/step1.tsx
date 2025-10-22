"use client"
import React from "react";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import FormProvider from "@/providers/FormProvider";
import useSubmitPerson from "../../_hook/useSubmitPersons";
import PersonIcon from '@mui/icons-material/Person';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AddIcon from '@mui/icons-material/Add';
import TextNumber from "@/components/shared/textNumber";


export default function Step1() {
  const { OnSubmit, methods } = useSubmitPerson()
  return (
    <>

      <Stack className="border-1! border-slate-200! p-4! rounded-2xl!">
        <FormProvider methods={methods} onSubmit={OnSubmit} className="flex! flex-col! gap-6!">
          <Typography className="text-xl! mb-4!" fontWeight={500}>رزرو کننده اصلی</Typography>
          <Stack className="flex! flex-row! gap-4!">
            <RHFTextInput startIcon={<PersonIcon />} name="firstName" placeholder="نام به فارسی" />
            <RHFTextInput startIcon={<PersonIcon />} name="lasName" placeholder="نام خانوادگی به فارسی" />
            <RHFTextInput startIcon={<PhoneInTalkIcon />} name="phone" placeholder="شماره تماس" />
          </Stack>
          <Divider />
          <div className="flex! justify-between! flex! flex-row! items-center! w-full!">
            <Typography className="text-xl!" fontWeight={500}>گردشگره اول</Typography>
            <Button variant="text" className="w-fit! p-0! " sx={{ color: "secondary.main" }} endIcon={<AddIcon />}>افزودن از لیست</Button>
          </div>
          <Stack className="flex! flex-row! gap-4!">
            <RHFTextInput startIcon={<PersonIcon />} name="firstName" placeholder="نام به فارسی" />
            <RHFTextInput startIcon={<PersonIcon />} name="lasName" placeholder="نام خانوادگی به فارسی" />
            <RHFTextInput startIcon={<PhoneInTalkIcon />} name="phone" placeholder="شماره تماس" />
          </Stack>
        </FormProvider>


      </Stack>
    </>
  );
}
