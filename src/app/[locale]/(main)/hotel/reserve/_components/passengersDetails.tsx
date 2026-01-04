"use client";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Divider,
  Button,
  IconButton,
  Tab,
  MenuItem,
  Tabs,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AddIcon from "@mui/icons-material/Add";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import FormProvider from "@/providers/FormProvider";
import useSubmitPassenger from "./hooks/useSubmitPassengers";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { CheckBox, Label } from "@mui/icons-material";
import RHFCheckbox from "@/components/shared/form/RHFCheckBox";
import MainTabs from "@/components/shared/mainTabs";

const tabItems = [{ label: "بدون میهمان خارجی" }, { label: "با میهمان خارجی" }];

export default function PassengersDetails() {
  const { OnSubmit, methods } = useSubmitPassenger();

  return (
    <Stack
      sx={{
        border: "1px solid #e2e8f0",
        borderRadius: { xs: "12px", lg: "16px" },
        backgroundColor: "white",
        overflow: "hidden",
        p: 2,
      }}
    >
      <Accordion sx={{ border: "none" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            className="!text-lg lg:!text-xl"
            fontWeight={{ xs: 550, lg: 500 }}
          >
            مشخصات مسافران
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Stack>
            <FormProvider
              methods={methods}
              onSubmit={OnSubmit}
              className="flex! flex-col! gap-6!"
            >
              <Stack >
                <Stack className="flex! justify-between! flex-row! items-center! w-full! py-3! ">
                  <Stack className="flex! gap-2! flex-row! items-center">
                    <Typography className="text-xl! font-medium!">
                      رزرو کننده اصلی
                    </Typography>
                    <Typography className="text-base! text-slate-400!">
                      سرپرست
                    </Typography>
                  </Stack>
                  <Stack className="flex! gap-2! flex-row! items-center">
                    <Button
                      variant="text"
                      className="w-fit! p-0!"
                      sx={{ color: "secondary.main" }}
                      endIcon={<AddCircleOutlineOutlinedIcon />}
                    >
                      افزودن از لیست
                    </Button>
                    <IconButton>
                      <DeleteOutlineOutlinedIcon color="warning" />
                    </IconButton>
                  </Stack>
                </Stack>
                <Divider />
                <Stack className="flex! flex-row! gap-4! mt-6!">
                  <RHFTextInput
                    startIcon={<PersonIcon />}
                    name="firstName"
                    placeholder="نام به فارسی"
                  />
                  <RHFTextInput
                    startIcon={<PersonIcon />}
                    name="lastName"
                    placeholder="نام خانوادگی به فارسی"
                  />
                  
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
                  <Stack className="flex! gap-2! flex-row! items-center">
                    <Typography className="text-xl! font-medium!">
                      اتاق 1 :
                    </Typography>
                    <Typography className="text-base! text-slate-400!">
                      اتاق یک تخته (اقامت با صبحانه)
                    </Typography>
                  </Stack>
                  <Stack className="flex! gap-2! flex-row! items-center">
                    <Button
                      variant="text"
                      className="w-fit! p-0!"
                      sx={{ color: "secondary.main" }}
                      endIcon={<AddCircleOutlineOutlinedIcon />}
                    >
                      افزودن از لیست
                    </Button>
                    <IconButton>
                      <DeleteOutlineOutlinedIcon color="warning" />
                    </IconButton>
                  </Stack>
                </Stack>
                <Divider />
                <div className="mt-3">
                  <RHFCheckbox
                    name="sameName1"
                    label={
                      <span className="text-slate-400 text-xs!">
                        نام رزروکننده با سرپرست یکی است
                      </span>
                    }
                    size="small"
                  />
                </div>
                <Stack>
                  <MainTabs data={tabItems} border={false} />
                </Stack>
                <Stack className="flex! flex-row! gap-4! mt-6!">
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
                </Stack>
              </Stack>
              <Stack>
                <Stack className="flex! justify-between! flex-row! items-center! w-full! py-3!">
                  <Stack className="flex! gap-2! flex-row! items-center">
                    <Typography className="text-xl! font-medium!">
                      اتاق 2 :
                    </Typography>
                    <Typography className="text-base! text-slate-400!">
                      اتاق یک تخته (اقامت با صبحانه)
                    </Typography>
                  </Stack>
                  <Stack className="flex! gap-2! flex-row! items-center">
                    <Button
                      variant="text"
                      className="w-fit! p-0!"
                      sx={{ color: "secondary.main" }}
                      endIcon={<AddCircleOutlineOutlinedIcon />}
                    >
                      افزودن از لیست
                    </Button>
                    <IconButton>
                      <DeleteOutlineOutlinedIcon color="warning" />
                    </IconButton>
                  </Stack>
                </Stack>
                <Divider />
                <div className="mt-3">
                  <RHFCheckbox
                    name="sameName1"
                    label={
                      <span className="text-slate-400 text-xs!">
                        نام رزروکننده با سرپرست یکی است
                      </span>
                    }
                    size="small"
                  />
                </div>
                <Stack>
                  <MainTabs data={tabItems} border={false} />
                </Stack>
                <Stack className="flex! flex-row! gap-4! mt-6!">
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
                </Stack>
              </Stack>
            </FormProvider>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
