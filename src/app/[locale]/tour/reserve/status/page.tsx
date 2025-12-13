"use client"
import {
  ExtraFooterInformation,
  OfferBanner,
} from "@/components/shared/ui";
import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

import ReserveStepper from "../_components/reseeveStepper/reserveStepperTour";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import PagesIcon from "@mui/icons-material/Pages";
import CustomAccordion from "@/components/shared/collapse/collapse";
import TourDetails from "./_components/tourDetails";
import TextIcon from "@/components/shared/textIcon";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ReserveStatus from "@/components/shared/sections/reserve/ReserveStatus";


const steps = [
  {
    title: "انتخاب تور",
    description: "توضیح این مرحله",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
  {
    title: "اطلاعات مسافران",
    description: "مشاهده تفریحات",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
  {
    title: "بازبینی اطلاعات",
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
    title: "صدور بلیط",
    description: "خوش بگذره :)",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
];


export default function Page({
  params,
  searchParams,
}: any) {
  return <ReserveStatus isSuccess={true} code={554574} />;
}
