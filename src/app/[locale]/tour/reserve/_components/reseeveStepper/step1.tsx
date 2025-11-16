"use client";
import React from "react";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import FormProvider from "@/providers/FormProvider";
import useSubmitPerson from "../../_hook/useSubmitPersons";
import PersonIcon from "@mui/icons-material/Person";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AddIcon from "@mui/icons-material/Add";
import TextNumber from "@/components/shared/textNumber";
import RHFSelect from "@/components/shared/form/RHFSelect";
import RHFSwitch from "@/components/shared/form/RHFSwitch";

export default function Step1() {
  const { OnSubmit, methods } = useSubmitPerson();
  return (
    <>
      <Stack className="md:border-1! border-slate-200! md:p-4! p-0! rounded-2xl! mb-8!">
        <FormProvider
          methods={methods}
          onSubmit={OnSubmit}
          className="flex! flex-col! gap-6!"
        >
          <div className=" justify-between! flex! flex-row! items-center!  w-full!">
            <Typography className="text-xl! md:mb-4! mb-0!" fontWeight={500}>
              رزرو کننده اصلی
            </Typography>
            <Stack className="md:hidden!">
              <RHFSwitch name="mainPerson" />
            </Stack>
          </div>
          <Divider className="md:hidden! block!" />
          <Stack className="flex! md:flex-row! flex-col! gap-4!">
            <RHFTextInput
              startIcon={<PersonIcon />}
              name="firstName"
              placeholder="نام به فارسی"
            />
            <RHFTextInput
              startIcon={<PersonIcon />}
              name="lasName"
              placeholder="نام خانوادگی به فارسی"
            />
            <RHFTextInput
              startIcon={<PhoneInTalkIcon />}
              name="phone"
              placeholder="شماره تماس"
            />
          </Stack>
          <Divider className="hidden! md:block!" />
          <div className=" justify-between! flex! flex-row! items-center! w-full! mt-4! md:mt-0!">
            <Typography className="text-xl!" fontWeight={500}>
              گردشگر اول
            </Typography>
            <Button
              variant="text"
              className="w-fit! p-0! "
              sx={{ color: "secondary.main" }}
              endIcon={<AddIcon />}
            >
              افزودن از لیست
            </Button>
          </div>
          <Divider className="md:hidden! block!" />
          <Stack className="flex! md:flex-row! flex-col! gap-4!">
            <RHFTextInput
              startIcon={<PersonIcon />}
              name="firstName"
              placeholder="نام به فارسی"
            />
            <RHFTextInput
              startIcon={<PersonIcon />}
              name="lasName"
              placeholder="نام خانوادگی به فارسی"
            />
            <RHFTextInput
              startIcon={<PhoneInTalkIcon />}
              name="phone"
              placeholder="شماره تماس"
            />
          </Stack>
        </FormProvider>
      </Stack>
    </>
  );
}
