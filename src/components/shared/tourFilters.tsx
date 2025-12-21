"use client";
import * as React from "react";
import {
  Slider,
  Box,
  Rating,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Stack,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DeleteOutline } from "@mui/icons-material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CollapseSelect from "@/app/[locale]/(main)/entertainment/list/_components/filterBox/_components/CollapseSelect";


const enterns = [
  { title: "کشتی های تفریحی", id: 0, count: 13 },
  { title: "جنگ های شبانه", id: 1, count: 20 },
  { title: "تفریحات آبی", id: 2, count: 2 },
  { title: "پارس سافاری", id: 3, count: 80 },
  { title: "پارک ها", id: 4, count: 9 },
  { title: "رستوران های با موزیک", id: 5, count: 23 },
];

// 🔶 Custom styled switch
const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 74,
  height: 40,
  padding: 0,
  display: "flex",
  borderRadius: 100,
  alignItems: "center",
  flexDirection: "row",
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(32px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#F79009", // orange when active
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
    width: 37,
    height: 37,
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor: "#E1E6F0", // gray when inactive
  },
}));

export default function TourFilters() {
  return (
    <Stack>
      <Stack className="flex flex-row! items-center justify-between">
        <Button startIcon={<DeleteOutline color="error" />} variant="outlined" color="error" className="w-full!">
        حذف فیلتر ها
        </Button>
      </Stack>

      <Divider variant="fullWidth" className="mt-5! mb-2!" />

      <CollapseSelect title="نوع وسیله نقلیه" id="accordion1" options={enterns}/>

      <CollapseSelect title="نوع ایرلاین" id="accordion2" options={enterns} />

      <CollapseSelect title="کلاس پرواز" id="accordion3" options={enterns}  />

    </Stack>
  );
}

const ORANGE = "#F79009"; // track + ring
const GRAY = "#B8C0D9";
const PEACH_BG = "#FFF3E0";

const StyledRating = styled(Rating)(({ theme }) => ({
  direction: "rtl", // if your page is RTL you can omit this; kept for clarity
  gap: 8,
  "& .MuiRating-icon": {
    position: "relative",
    width: 28,
    height: 28,
    fontSize: 28,
  },
  // Filled / selected
  "& .MuiRating-iconFilled": {
    color: ORANGE,
    // subtle soft background circle (like the screenshot)
    backgroundColor: PEACH_BG,
    borderRadius: "9999px",
    boxShadow: `0 0 0 2px ${ORANGE}`,
  },
  // Hover color (optional)
  "& .MuiRating-iconHover": {
    color: ORANGE,
  },
  // Empty with a diagonal slash
  "& .MuiRating-iconEmpty": {
    color: GRAY,
    opacity: 1,
  },
  "& .MuiRating-iconEmpty::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    margin: "auto",
    width: "70%",
    height: 2,
    backgroundColor: GRAY,
    transform: "rotate(-25deg)",
    borderRadius: 2,
    opacity: 0.8,
    pointerEvents: "none",
  },
}));