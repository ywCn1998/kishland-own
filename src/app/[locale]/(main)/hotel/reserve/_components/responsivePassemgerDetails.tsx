"use client";
import React from "react";
import {
  Typography,
  Stack,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import FormProvider from "@/providers/FormProvider";
import useSubmitPassenger from "./hooks/useSubmitPassengers";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RHFCheckbox from "@/components/shared/form/RHFCheckBox";
import MainTabs from "@/components/shared/mainTabs";

const tabItems = [{ label: "بدون میهمان خارجی" }, { label: "با میهمان خارجی" }];

export default function ResponsivePassengerDetails() {
  const { OnSubmit, methods } = useSubmitPassenger();

  return (
    <Stack>
      <FormProvider
        methods={methods}
        onSubmit={OnSubmit}
        className="flex! flex-col! gap-6!"
      >
        <Stack className="reveal">
          <Stack className="flex! justify-between! flex-row! items-center! w-full! py-3! ">
            <Stack className="flex! gap-2! flex-row! items-center">
              <Typography className="md:text-xl! text-lg! font-semibold! text-nowrap!">
                رزرو کننده اصلی
              </Typography>
              <Typography className="md:text-base! text-xs! text-slate-400!">
                سرپرست
              </Typography>
            </Stack>
            <Stack className="flex! md:gap-2! gap-1! flex-row! items-center">
              <Button
                variant="text"
                className="w-fit! p-0! text-xs! md:text-base!"
                sx={{ color: "secondary.main" }}
                endIcon={<AddCircleOutlineOutlinedIcon className="md:text-xl! text-lg!" />}
              >
                افزودن از لیست
              </Button>
              <IconButton>
                <DeleteOutlineOutlinedIcon color="warning" />
              </IconButton>
            </Stack>
          </Stack>
          <Divider />
          <Stack className="flex! md:flex-row! flex-col! gap-4! mt-6!">
            <RHFTextInput
              startIcon={<PersonIcon />}
              name="firstName"
              placeholder="نام و نام خانوادگی به فارسی"
            />
            {/* <RHFTextInput
              startIcon={<PersonIcon />}
              name="lastName"
              placeholder="نام خانوادگی به فارسی"
            /> */}
            <RHFTextInput
              startIcon={<PhoneInTalkIcon />}
              name="phone"
              placeholder="شماره تماس"
            />
          </Stack>
        </Stack>

        <Divider />

        {/* گردشگر اول */}
        <Stack className="reveal">
          <Stack className="flex! justify-between! flex-row! items-center! w-full! py-3!">
            <Stack className="flex! gap-2! md:flex-row! flex-col! items-start!">
              <Typography className="md:text-xl! text-lg! font-semibold! text-nowrap!">
                اتاق 1 :
              </Typography>
              <Typography className="md:text-base! text-xs! text-slate-400!">
                اتاق یک تخته (اقامت با صبحانه)
              </Typography>
            </Stack>
            <Stack className="flex! md:gap-2! gap-1! flex-row! items-center">
              <Button
                variant="text"
                className="w-fit! p-0! text-xs! md:text-base!"
                sx={{ color: "secondary.main" }}
                endIcon={<AddCircleOutlineOutlinedIcon className="md:text-xl! text-lg!" />}
              >
                افزودن از لیست
              </Button>
              <IconButton>
                <DeleteOutlineOutlinedIcon color="warning" />
              </IconButton>
            </Stack>
          </Stack>
          <Divider />
          {/* <div className="mt-3">
            <RHFCheckbox
              name="sameName1"
              label={
                <span className="text-slate-400 text-xs!">
                  نام رزروکننده با سرپرست یکی است
                </span>
              }
              size="small"
            />
          </div> */}
          <Stack className="mt-8!"> 
          <MainTabs data={tabItems} border={false} />
          </Stack>
          <Stack className="flex! md:flex-row! flex-col! gap-4! mt-6!">
            <RHFTextInput
              startIcon={<PersonIcon />}
              name="firstName"
              placeholder="نام به فارسی"
            />
            <RHFTextInput
              startIcon={<PersonIcon />}
              name="nationCode"
              placeholder=" کد ملی"
            />
             <RHFTextInput
              startIcon={<PhoneInTalkIcon />}
              name="phone"
              placeholder="شماره تماس"
            />
          </Stack>
        </Stack>
        <Stack className="reveal">
          <Stack className="flex! justify-between! flex-row! items-center! w-full! py-3!">
          <Stack className="flex! gap-2! md:flex-row! flex-col! items-start!">
          <Typography className="md:text-xl! text-lg! font-semibold!">
                اتاق 2 :
              </Typography>
              <Typography className="md:text-base! text-xs! text-slate-400!">
                اتاق یک تخته (اقامت با صبحانه)
              </Typography>
            </Stack>
            <Stack className="flex! md:gap-2! gap-1! flex-row! items-center">
              <Button
                variant="text"
                className="w-fit! p-0! text-xs! md:text-base!"
                sx={{ color: "secondary.main" }}
                endIcon={<AddCircleOutlineOutlinedIcon className="md:text-xl! text-lg!" />}
              >
                افزودن از لیست
              </Button>
              <IconButton>
                <DeleteOutlineOutlinedIcon color="warning" />
              </IconButton>
            </Stack>
          </Stack>
          <Divider />
            {/* <div className="mt-3">
              <RHFCheckbox
                name="sameName1"
                label={
                  <span className="text-slate-400 text-xs!">
                    نام رزروکننده با سرپرست یکی است
                  </span>
                }
                size="small"
              />
            </div> */}
          <Stack className="mt-8!"> 
            <MainTabs data={tabItems} border={false} />
          </Stack>
          <Stack className="flex! md:flex-row! flex-col! gap-4! mt-6!">
            <RHFTextInput
              startIcon={<PersonIcon />}
              name="firstName"
              placeholder="نام به فارسی"
            />
            <RHFTextInput
              startIcon={<PersonIcon />}
              name="nationCode"
              placeholder=" کد ملی"
            />
             <RHFTextInput
              startIcon={<PhoneInTalkIcon />}
              name="phone"
              placeholder="شماره تماس"
            />
          </Stack>
        </Stack>
        <Button variant="outlined" color="inherit" className="mt-2! mb-4!">
          + افزودن اتاق 
        </Button>
      </FormProvider>
    </Stack>
  );
}
