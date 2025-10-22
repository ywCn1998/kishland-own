// components/ActivityTabs.tsx
"use client";

import * as React from "react";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  TextField,
  Button,
  useTheme,
  MenuItem,
} from "@mui/material";
import ContentCutIcon from "@mui/icons-material/ContentCut"; // تفریحات ✂️
import HotelIcon from "@mui/icons-material/Hotel"; // هتل‌ها و اقامتگاه‌ها
import TravelExploreIcon from "@mui/icons-material/TravelExplore"; // تورها
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import ApartmentIcon from "@mui/icons-material/Apartment";
import RHFDatePicker from "@/components/shared/form/RHFDatePicker";
import useSearch from "./_hook/useSearch";
import FormProvider from "@/providers/FormProvider";
import RHFSelect from "@/components/shared/form/RHFSelect";

const ORANGE = "var(--primary-500, #FF8C0B)";

export default function SearchTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        p: 2,
        position: "relative",
        direction: "rtl", // ensure RTL layout for the tabs row
      }}
      className="reveal"
    >
      {/* Tabs header */}
      <Tabs
        value={value}
        onChange={(_, v) => setValue(v)}
        variant="scrollable"
        allowScrollButtonsMobile
        sx={{
          "& .MuiTabs-flexContainer": {
            justifyContent: "flex-end", // tabs aligned to the right
            gap: 2,
            pb: 2,
          },
          // hide default indicator – we'll style selected tab ourselves
          // pb: 1.5,
          mb: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Tab
          icon={<BusinessCenterIcon className="ml-1!" fontSize="small" />}
          iconPosition="end"
          label="تورها"
          sx={tabStyle}
        />

        <Tab
          icon={<ApartmentIcon className="ml-1!" fontSize="small" />}
          iconPosition="end"
          label="هتل‌ها و اقامتگاه‌ها"
          sx={tabStyle}
        />
        <Tab
          icon={<SportsRugbyIcon className="ml-1!" fontSize="small" />}
          iconPosition="end"
          label="تفریحات"
          sx={tabStyle}
        />
      </Tabs>

      {/* Panels – simple example grid spacing for inputs */}
      <Box sx={{ mt: 1 }}>
        {value === 0 && <InputsGrid key="fun" />}
        {value === 1 && <InputsGrid key="hotels" />}
        {value === 2 && <InputsGrid key="tours" />}
      </Box>
    </Box>
  );
}

/** Shared tab style to mimic screenshot (orange underline & text on active) */
const tabStyle = {
  minHeight: 40,
  px: 2,
  py: 0.5,
  color: "#000E08",
  fontWeight: 400,
  fontSize: 16,
  borderRadius: 2,
  alignSelf: "flex-end",
  position: "relative",
  "& .MuiTab-iconWrapper": { ml: 0.5 },
  "&.Mui-selected": {
    color: ORANGE,
    "&::after": {
      content: '""',
      position: "absolute",
      insetInlineEnd: 0, // right in RTL
      bottom: -10,
      height: 3,
      width: "80%",
      backgroundColor: ORANGE,
      borderRadius: 999,
      transform: "translateX(10%)", // small offset like the screenshot
    },
  },
  "&:hover": { backgroundColor: "transparent" },
  "&:focus": { backgroundColor: "transparent" },
  "&:active": { backgroundColor: "transparent" },
};

/** Example grid with comfy spacing under the tabs */
function InputsGrid() {
  const { methods, OnSubmit } = useSearch();

  return (
    <FormProvider methods={methods}>
      <Grid container spacing={3} sx={{ direction: "ltr" }}>
        <Grid size="grow" sx={{borderRight: "1px solid"}} className="border-slate-300!">
          {/* <RHFSelect
            startIcon={<BusinessCenterIcon sx={{ color: "primary.main" }} />}
            label="تاریخ ورود"
            name="startDate"
            isSelect={false}
          >
            <MenuItem value="مشهد">04 فروردین 1404</MenuItem>
          </RHFSelect> */}
          <RHFDatePicker name="date" label="تاریخ ورود" startIcon={<BusinessCenterIcon sx={{ color: "primary.main" }} />}/>
        </Grid>
        <Grid size="grow" sx={{borderRight: "1px solid"}} className="border-slate-300!">
          <RHFSelect
            startIcon={<BusinessCenterIcon sx={{ color: "primary.main" }} />}
            label="دسته بندی"
            name="category"
            // isSelect={false}
          >
            <MenuItem value="کشتی های تفریحی">کشتی های تفریحی </MenuItem>
          </RHFSelect>
        </Grid>
        <Grid size="grow">
          <RHFSelect
            startIcon={<BusinessCenterIcon sx={{ color: "primary.main" }} />}
            label="نوع تفریح"
            name="type"
            isSelect={false}
          >
            <MenuItem value="امیرکبیر">کشتی تفریح امیرکبیر</MenuItem>
          </RHFSelect>
        </Grid>
        <Grid
          size={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: ORANGE,
              borderRadius: 1,
              px: 3,
              py: 1.2,
              color: "white",
            }}
          >
            بزن بریم!
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
